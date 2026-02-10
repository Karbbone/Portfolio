FROM oven/bun:1-alpine AS build

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

FROM oven/bun:1-alpine

WORKDIR /app

COPY --from=build /app/package.json ./
RUN bun install --frozen-lockfile --production

COPY --from=build /app/dist ./dist

EXPOSE 4321

CMD ["bun", "run", "./dist/server/entry.mjs", "--host", "0.0.0.0"]
