FROM node:lts

WORKDIR /shipyard

EXPOSE 3000 35729
COPY ./ /shipyard

RUN yarn install

CMD ["yarn", "start"]