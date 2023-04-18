FROM buildkite/puppeteer

WORKDIR /usr/src/app

COPY package*.json ./

ENV PUPPETEER_SKIP_DOWNLOAD=true

RUN npm install
COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]