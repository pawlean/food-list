# WIP ran out of time
FROM node:10-alpine
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 4002
CMD [ "npm", "start" ]
