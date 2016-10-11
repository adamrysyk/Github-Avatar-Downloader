const request = require('request');
require('dotenv').config();


function githubRequest (endpoint, callback) {
  var requestData = {
    url: `https://api.github.com${endpoint}`,
    auth : {
      bearer: process.env.PASSWORD
    },
    headers : {
      'User-Agent' : "request"
    }
  }
request.get(requestData, callback)
}

module.exports = githubRequest