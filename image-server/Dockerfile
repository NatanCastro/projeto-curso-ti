FROM node:lts-slim

WORKDIR /app

COPY . .

RUN npm run build

CMD [ "npm", "run", "start:prod" ]
