FROM node:16-alpine as builder

ENV NODE_ENV build

USER node
WORKDIR /home/node

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .
RUN npm run build \
  && npm prune --production

# ---

FROM node:1-alpine

ENV NODE_ENV production
ENV DATABASE_URL=${DATABASE_URL}
ENV APP_SECRET=${APP_SECRET}

USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/package*.json ./
COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/dist/ ./dist/

CMD ["node", "dist/main"]
