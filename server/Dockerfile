FROM node:19-alpine

WORKDIR /api

COPY package*.json .

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "run", "start:server"]