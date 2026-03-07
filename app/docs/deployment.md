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

- `CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0", "-p", "3000"]`

`devcontainer.json` forwards port `3000` and auto-opens it in the browser.

## Start Working Inside Container

### Prerequisites

- Docker Engine + Docker Compose
- VS Code
- Dev Containers extension (`ms-vscode-remote.remote-containers`)
- Optional (SSH git remotes only): local `~/.ssh` key and `~/.gitconfig`

### Steps

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
git remote -v
```

Expected:

- user is `node`
- app responds on `localhost:3000`
- git remote commands work

## Troubleshooting

- App not reachable on `localhost:3000`:
  - Check container logs and terminal where `npm run dev` starts.
  - Rebuild container: `Dev Containers: Rebuild and Reopen in Container`.
- SSH git fails:
  - Ensure local `~/.ssh` and `~/.gitconfig` exist and are valid.
  - Confirm remote is SSH (`git@...`) if you intend to use SSH auth.
- Port not auto-opening:
  - Open VS Code Ports panel and manually open forwarded `3000`.

## Production Deployment Guide

Use `Dockerfile` for production builds. Do not use `Dockerfile.dev` in production.

### Option A: Deploy with Compose (current repo default)

This uses `compose.yml`, which already points to `Dockerfile`.

```bash
docker compose -f compose.yml build
docker compose -f compose.yml up -d
docker compose -f compose.yml ps
```

Stop:

```bash
docker compose -f compose.yml down
```

### Option B: Build once, push to registry, run on server

#### 1) Build and tag image

```bash
docker build -f Dockerfile -t marketplace-ui:latest .
```

#### 2) Tag for your registry

Example:

```bash
docker tag marketplace-ui:latest <registry>/<namespace>/marketplace-ui:<tag>
```

#### 3) Push image

```bash
docker push <registry>/<namespace>/marketplace-ui:<tag>
```

#### 4) Run on server

```bash
docker pull <registry>/<namespace>/marketplace-ui:<tag>
docker run -d \
  --name marketplace-ui \
  --restart unless-stopped \
  -p 3000:3000 \
  <registry>/<namespace>/marketplace-ui:<tag>
```

### Recommended production checks

- Verify health:

```bash
curl -I http://localhost:3000
```

- Check logs:

```bash
docker logs -f marketplace-ui
```
