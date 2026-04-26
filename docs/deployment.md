# Deployment And Dev Container Setup

## Overview

This project uses two separate container paths:

- Production path:
  - `compose.yml` + `Dockerfile`
  - Builds a production image (`marketplace-ui`) from the multi-stage Dockerfile.
- Development path:
  - `.devcontainer/devcontainer.json` + `.devcontainer/docker-compose.yml` + `Dockerfile.dev`
  - Runs the app in a VS Code Dev Container with source code mounted for live editing.

The split is intentional so production stays clean and stable, while developer tooling stays in dev-only files.

## Why This Setup Exists

### 1) Keep production compose generic and safe

`compose.yml` is production-oriented:

- Uses `Dockerfile` (not `Dockerfile.dev`)
- No host credential mounts
- No source bind mounts

This reduces accidental leakage of local machine details into prod-like workflows.

### 2) Keep dev-only behavior isolated

`.devcontainer/docker-compose.yml` adds dev-only behavior:

- Uses `Dockerfile.dev`
- Runs as non-root user (`node`)
- Mounts source (`.:/usr/app`) and a dedicated `node_modules` volume
- Mounts local git identity/SSH files for SSH-based git remotes:
  - `${HOME}/.ssh:/home/node/.ssh:ro`
  - `${HOME}/.gitconfig:/home/node/.gitconfig:ro`

### 3) Make local DX predictable

`Dockerfile.dev` pins Yarn via Corepack and starts dev server by default:

- `CMD ["yarn", "dev", "--", "-H", "0.0.0.0", "-p", "3000"]`

`devcontainer.json` forwards port `3000` and auto-opens it in the browser.

## Running Locally

### Option A: Direct (simplest)

Requires Node.js installed locally.

```bash
yarn install
yarn dev
```

Open `http://localhost:3000`. The dev server hot-reloads on file changes.

### Option B: VS Code Dev Container

Runs the app in a Docker container with source mounted. Requires Docker Engine, VS Code, and the Dev Containers extension (`ms-vscode-remote.remote-containers`).

#### Prerequisites

- Docker Engine + Docker Compose
- VS Code
- Dev Containers extension (`ms-vscode-remote.remote-containers`)
- Optional (SSH git remotes only): local `~/.ssh` key and `~/.gitconfig`

#### Steps

1. Clone and open the repository in VS Code.
2. Run: `Dev Containers: Reopen in Container`.
3. Wait for initial image build and container start.
4. Open `http://localhost:3000` (or use forwarded port `3000` from VS Code Ports tab).
5. Start coding inside `/usr/app` (this is the mounted project directory inside container).

### Verify Environment

Inside container terminal:

```bash
whoami
node -v
npm -v
yarn -v
git remote -v
```

Expected:

- user is `node`
- app responds on `localhost:3000`
- git remote commands work

## Troubleshooting

- App not reachable on `localhost:3000`:
  - Check container logs and terminal where `yarn dev` starts.
  - Rebuild container: `Dev Containers: Rebuild and Reopen in Container`.
- SSH git fails:
  - Ensure local `~/.ssh` and `~/.gitconfig` exist and are valid.
  - Confirm remote is SSH (`git@...`) if you intend to use SSH auth.
- Port not auto-opening:
  - Open VS Code Ports panel and manually open forwarded `3000`.

## Production Deployment

The production environment runs on a single VPS using k3s (Kubernetes). Deployments are fully automated via GitHub Actions and Flux — no manual steps are needed for normal releases.

### How It Works

1. Push to `master` triggers the [publish-image workflow](../.github/workflows/publish-image.yml)
2. GitHub Actions builds `Dockerfile` and pushes two tags to GHCR:
   - `ghcr.io/en1i/marketplace-ui:latest`
   - `ghcr.io/en1i/marketplace-ui:sha-<commit>`
3. Flux detects the new image digest, updates the image pin in `k8s/client-deployment.yaml`, and commits the change
4. k3s applies the updated deployment and rolls out the new pod
5. The UI is served at `https://alphagranny.com` via Traefik Gateway API

### Verify a Deployment

After pushing to `master`, SSH into the VPS and check that the rollout completed:

```bash
kubectl rollout status deployment/client-deployment
kubectl get pods -l component=ui
kubectl logs -l component=ui --tail=50
```

> These commands require `kubectl` and run on the production VPS, not locally.

### Force a Re-deploy Without a Code Change

Trigger the workflow manually from the GitHub Actions tab (`workflow_dispatch`), or re-tag and push the image:

```bash
docker pull ghcr.io/en1i/marketplace-ui:latest
docker push ghcr.io/en1i/marketplace-ui:latest
```

### Production URL

- `https://alphagranny.com` — HTTP redirects to HTTPS automatically

For full infrastructure details (k3s setup, Traefik routing, SSL, database) see the root [`docs/`](../../docs/) folder.
