FROM shipyardrun/terminal-server AS terminal-server

FROM node:buster-slim AS node

COPY --from=terminal-server /usr/bin/terminal-server /usr/bin/terminal-server

WORKDIR /shipyard

EXPOSE 3000 35729
COPY ./ /shipyard

RUN yarn install

ENTRYPOINT [ "yarn", "start"]