FROM buildkite/puppeteer

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install puppeteer
COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]