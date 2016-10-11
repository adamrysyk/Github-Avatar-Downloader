const request = require('request');
const fs = require("fs");
require('dotenv').config();
var githubRequest = require("./github_request.js");
var getRepoContributors = require("./get_repo_contributors.js");
var downloadImageByURL = require("./download_images.js");


if (!fs.existsSync(`./.env`)) {
  throw "You are missing a .env file, without it password won't be hidden"
}

function numOfArguments() {
  //added an if/else statement to check if the right amount of arguements are being passed
  //through node.js, if they are, it will call the function, if not, it will return a throw
  //message saying that the right number of arguments need to be called
  if (process.argv.length !== 4 ) {
    throw  "We need a repository owner and repository name to generate the images."
  }
  getRepoContributors(process.argv[2], process.argv[3], downloadImageByURL);
}

numOfArguments()








