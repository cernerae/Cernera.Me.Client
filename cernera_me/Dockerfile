FROM node:13.5.0 as build

# Create working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Create environment variables
ENV PATH /usr/src/app/node_modules/.bin:$PATH
ENV NODE_PATH src/:public/

# Clean
RUN npm cache clean -f

# For "npm ci"
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json

# For "npm ci react-scripts"
COPY package.json /usr/local/package.json
COPY package-lock.json /usr/local/package-lock.json

RUN npm ci

COPY . /usr/src/app

RUN npm run build --silent