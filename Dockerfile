FROM node:0.12-slim

RUN mkdir /app
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app

CMD [ "npm", "start" ]
