FROM node:12

ENV NPM_CONFIG_LOGLEVEL warn
# set environment

# set working directory
WORKDIR /app
# ARG env
# ENV NOTE_ENV $env
ENV PATH /app/node_modules/.bin:$PATH

# install app and dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 

# check every 30s to ensure this service returns HTTP 200
# HEALTHCHECK --interval=30s CMD node healthcheck.js

# copy in our source code last, as it changes the most
WORKDIR /app
COPY . /app

# run app
CMD [ -f "/bin/bash" ] && if [ ${NODE_ENV} = production ]; \
  then \
  npm start; \
  else \
  npm start; \
  fi
# npm install; npm start; \

