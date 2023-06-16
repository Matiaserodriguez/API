FROM node:14 AS builder

WORKDIR /app

COPY . .

RUN npm install -g npm@latest
RUN npm install
RUN npm i --global typescript
RUN npx tsc

EXPOSE 3000
CMD ["sh", "-c", "npm install && tsc && npm run prod"]