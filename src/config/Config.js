const path = require('path')
const fs = require('fs')

class Config {
  constructor() {
    this.path_config = path.join(__dirname, "files")
  }

  readConfig = (fileName) => {
    const buffer = fs.readFileSync(`${this.path_config}/${fileName}.json`)
    return JSON.parse(Buffer.from(buffer).toString())
  }

}

module.exports = new Config