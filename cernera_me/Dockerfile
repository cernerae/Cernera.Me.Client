FROM node:13.5.0 as build

ARG REACT_APP_API
ARG REACT_APP_CAPTCHA_SITEKEY

ENV REACT_APP_API $REACT_APP_API
ENV REACT_APP_CAPTCHA_SITEKEY $REACT_APP_CAPTCHA_SITEKEY

RUN echo "REACT_APP_API: $REACT_APP_API"
RUN echo "REACT_APP_CAPTCHA_SITEKEY: $REACT_APP_CAPTCHA_SITEKEY"

# Create working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Create environment variables
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# For "npm ci"
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json

# For "npm ci react-scripts"
COPY package.json /usr/local/package.json
COPY package-lock.json /usr/local/package-lock.json

RUN npm ci

COPY . /usr/src/app

RUN npm run build --silent

# Cleanup
RUN rm -rf node_modules