FROM node:16-alpine as base

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .
