FROM node:16.18.1

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json ./yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]