# 1. Deps Stage
FROM node:24-slim AS deps
WORKDIR /usr/app
RUN corepack enable && corepack prepare yarn@1.22.22 --activate
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# 2. Builder Stage
FROM node:24-slim AS builder
WORKDIR /usr/app
RUN corepack enable && corepack prepare yarn@1.22.22 --activate
COPY --from=deps /usr/app/node_modules ./node_modules
COPY . .
RUN yarn build

# 3. Runner Stage contains only what is needed to run the app in production.
FROM node:24-slim AS runner
WORKDIR /usr/app
ENV NODE_ENV=production

# Copy only the standalone output (Tiny!)
COPY --from=builder /usr/app/public ./public
COPY --from=builder /usr/app/.next/standalone ./
COPY --from=builder /usr/app/.next/static ./.next/static
USER node
EXPOSE 3000

# When using 'standalone', you run the server.js file directly with Node
CMD ["node", "server.js"]
