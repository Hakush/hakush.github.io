# Dev Dockerfile for Angular Application
FROM node:22

WORKDIR /app

RUN npm install -g @angular/cli

COPY package*.json ./

RUN npm install

CMD ["npm", "start"]