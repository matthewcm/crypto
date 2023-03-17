FROM node:19-alpine


WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN npm run dev -- --host