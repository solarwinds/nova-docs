FROM node:boron

RUN echo "registry=http://dev-brn-art-02.swdev.local:8081/artifactory/api/npm/npm" > /root/.npmrc

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/
RUN npm install

EXPOSE 8080

USER root

CMD [ "npm", "start" ]
