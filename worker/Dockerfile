FROM node:12-alpine

WORKDIR /worker
COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "index.js"]
