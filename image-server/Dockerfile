FROM node:lts-slim

WORKDIR /app

COPY . .

RUN apt-get update -y && apt-get install -y openssl

CMD [ "npm", "run", "start:dev" ]
