FROM buildkite/puppeteer

WORKDIR /usr/src/app

COPY package*.json ./

ENV PUPPETEER_SKIP_DOWNLOAD=false
ENV PUPPETEER_CACHE_DIR=puppeteer-installation-root

RUN npm install
RUN npm install puppeteer
COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]