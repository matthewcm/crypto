FROM node:18-alpine

WORKDIR /app/server

COPY package*.json .
COPY . .

RUN npm install

ARG SERVER_PORT

ENV SERVER_PORT 3000

CMD ["npm", "run", "start:server", "--host"]
