FROM node:14.15.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN yarn install

EXPOSE 6006

CMD ["yarn", "run", "storybook"]