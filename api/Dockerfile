FROM node:18

WORKDIR /app

COPY . /app

RUN npm install

RUN npx prisma generate

EXPOSE 3001

CMD npx nodemon
