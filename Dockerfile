FROM node:14.17.6 as builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json ./

RUN yarn install

COPY . .

FROM builder

EXPOSE 3000

CMD ["yarn", "start"]