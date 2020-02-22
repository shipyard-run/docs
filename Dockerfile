FROM node:buster-slim AS node

WORKDIR /shipyard-build

COPY ./app /shipyard-build

RUN yarn install
RUN yarn cache clean

FROM envoyproxy/envoy:v1.13.0 as envoy

FROM node:buster-slim

# Set the default env vars
ENV TERMINAL_SERVER_IP=terminal.docs.shipyard
ENV TERMINAL_SERVER_PORT=27950

WORKDIR /shipyard
#FROM gcr.io/distroless/nodejs

COPY --from=envoy /usr/local/bin/envoy /bin/envoy

COPY --from=node /shipyard-build /shipyard

COPY ./entrypoint.sh /shipyard/entrypoint.sh
COPY ./envoy.yaml /shipyard/envoy.yaml
COPY ./envoy_processed.yaml /shipyard/envoy_processed.yaml

EXPOSE 35729 80

ENTRYPOINT ["./entrypoint.sh"]