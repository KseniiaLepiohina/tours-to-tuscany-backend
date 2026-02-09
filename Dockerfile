# Етап 1: Build
FROM node:20-alpine AS build

WORKDIR /app

ENV NODE_OPTIONS="--max-old-space-size=2048"

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build