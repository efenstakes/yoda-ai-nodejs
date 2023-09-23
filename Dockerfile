# base image
FROM node:18-alpine

WORKDIR /usr/holmesai

COPY package*.json ./

# install dependencies
RUN npm install

COPY . .

# build code
RUN npm run build

# copy environment vars


EXPOSE 9090

CMD [ "npm", "start" ]