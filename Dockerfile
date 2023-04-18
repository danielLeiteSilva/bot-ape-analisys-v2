FROM buildkite/puppeteer

WORKDIR /usr/src/app

COPY package*.json ./

ENV PUPPETEER_SKIP_DOWNLOAD=false

RUN npm install -g n
RUN  n latest
RUN node --version
RUN npm install
RUN npm install puppeteer
RUN node node_modules/puppeteer/install.js

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]