FROM oven/bun:1 AS base
WORKDIR /usr/src/app

FROM base AS deps
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

FROM base AS development
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .

CMD ["bun", "run", "dev"]
