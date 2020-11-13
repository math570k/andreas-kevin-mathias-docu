FROM node:14.15.0-alpine

RUN mkdir -p /server
WORKDIR /server

COPY package.json /server
COPY package-lock.json /server
COPY . /server

RUN npm install

CMD ["npm", "run", "start:dev"]
