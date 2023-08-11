FROM node:18-alpine

WORKDIR /app/client

COPY package*.json .
COPY . .

RUN npm install


ARG CLIENT_PORT

ENV CLIENT_PORT=${CLIENT_PORT}


CMD npm run dev -- --host --port ${CLIENT_PORT}
