FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .    
# copy everything from root directory where Dockerfile is placed and paste to root dir where docker image is placed

EXPOSE 3000

CMD [ "npm", "start" ]