FROM node:14.15.0-alpine

RUN mkdir -p /client
WORKDIR /client

COPY package.json /client
COPY package-lock.json /client
COPY . /client

RUN npm install

CMD ["npm", "run", "start:dev"]
