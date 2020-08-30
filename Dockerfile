FROM node:12
LABEL maintainer="dmitriiz@hotmail.com"
ADD *.js ./
EXPOSE 3000
CMD index.js