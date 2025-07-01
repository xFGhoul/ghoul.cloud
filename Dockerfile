FROM oven/bun:1 AS base
WORKDIR /usr/src/app

FROM base AS deps
COPY package.json bun.lockb ./
RUN bun install

FROM base AS development
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .

ENV ASTRO_TELEMETRY_DISABLED=1
EXPOSE 4321
CMD ["bun", "run", "dev", "--host"]
