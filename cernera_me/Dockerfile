FROM node:22-alpine AS build

ARG VITE_API
ARG VITE_CAPTCHA_SITEKEY

ENV VITE_API=$VITE_API
ENV VITE_CAPTCHA_SITEKEY=$VITE_CAPTCHA_SITEKEY

WORKDIR /usr/src/app

COPY package.json package-lock.json .npmrc ./

RUN --mount=type=secret,id=fontawesome_token \
    FONTAWESOME_NPM_AUTH_TOKEN=$(cat /run/secrets/fontawesome_token) \
    npm ci --legacy-peer-deps

COPY . .

RUN npm run build