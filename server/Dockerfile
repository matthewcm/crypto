FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ARG SERVER_PORT

ENV SERVER_PORT 3000

CMD ["npm", "run", "start:server", "--host", "--workspace=server"]