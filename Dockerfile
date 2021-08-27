FROM node:14.6.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN yarn install --silent

EXPOSE 6006

CMD ["yarn", "run", "storybook"]