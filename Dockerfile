FROM node:12

ADD package.json /app/

WORKDIR /app
RUN npm install

ADD . /app

# EXPOSE 80

CMD ["node", "app"]