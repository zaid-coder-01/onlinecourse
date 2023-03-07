FROM node
WORKDIR /server
COPY . .
RUN npm install
WORKDIR /server/src
EXPOSE 3001
CMD node index.js