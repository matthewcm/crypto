FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

ARG CLIENT_PORT

ENV CLIENT_PORT=${CLIENT_PORT}


CMD npm run dev --workspace=client -- --host --port ${CLIENT_PORT}
