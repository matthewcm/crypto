FROM node:19-alpine

WORKDIR /api

COPY package.json .

RUN npm install

COPY . .

ENV PORT=5000

EXPOSE 5000

CMD ["npm", "run", "start:server"]
