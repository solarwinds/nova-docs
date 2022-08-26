FROM node:gallium-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN echo "registry=http://artifactory.solarwinds.com:443/artifactory/api/npm/npm" > /root/.npmrc
RUN node -v && npm -v
RUN yarn

EXPOSE 8080

USER root

CMD [ "npm", "run", "start" ]
