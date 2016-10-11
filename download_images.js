const fs = require("fs");
const request = require('request');


function downloadImageByURL(url, path, callback) {
  if (!fs.existsSync(`./avatars`)){
    fs.mkdirSync(`./avatars`)
  }
  request(url).pipe(fs.createWriteStream(`./avatars/${path}.png`))
}

module.exports = downloadImageByURL
