FROM node:22-alpine AS build

ARG APP_NAME

WORKDIR /usr/src/app

# Install shared dependencies first
COPY shared/package.json shared/package-lock.json ./shared/
RUN cd shared && npm ci

# Install app dependencies
COPY ${APP_NAME}/package.json ${APP_NAME}/package-lock.json ./${APP_NAME}/
RUN cd ${APP_NAME} && npm ci

# Copy shared source and app source
COPY shared/ ./shared/
COPY ${APP_NAME}/ ./${APP_NAME}/

# Build the app
RUN cd ${APP_NAME} && npm run build
