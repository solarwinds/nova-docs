FROM node:gallium-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN echo "registry=http://artifactory.solarwinds.com:443/artifactory/api/npm/npm" > /root/.npmrc
RUN node -v && npm -v
RUN npm -g i pnpm@7.5.2
RUN pnpm i

EXPOSE 8080

USER root

CMD [ "npm", "run", "start" ]
