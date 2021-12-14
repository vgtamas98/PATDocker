FROM node:latest

RUN mkdir /app
COPY server.js /app
WORKDIR	/app

EXPOSE 500

CMD [ "node", "server.js" ]