FROM shipyardrun/terminal-server AS terminal-server

FROM node:buster-slim AS node

WORKDIR /shipyard-build

COPY ./ /shipyard-build

RUN yarn install
RUN yarn cache clean

FROM node:buster-slim

WORKDIR /shipyard
#FROM gcr.io/distroless/nodejs

COPY --from=terminal-server /usr/bin/terminal-server /usr/bin/terminal-server
COPY --from=node /shipyard-build /shipyard

EXPOSE 3000 35729

ENTRYPOINT ["yarn", "start", "--host", "0.0.0.0"]