FROM node:18.12.1-buster-slim AS builder

ENV MONGO_ADDR btc_db

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build
RUN npm prune


EXPOSE 3000
CMD [ "node", ".output/server/index.mjs" ]