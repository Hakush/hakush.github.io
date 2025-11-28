# Dev Dockerfile for Angular Application
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

CMD ["npm", "start"]