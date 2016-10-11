var githubRequest = require("./github_request.js");


function getRepoContributors(repoOwner, repoName, callback) {
  githubRequest(`/repos/${repoOwner}/${repoName}/contributors`, (err, response, body) => {
    if (err) {
      throw err
    }
    var data = JSON.parse(body)
    //included an if statement with a throw message to be
    //returned if the repo owner or repo name don't exist

    if (data.message === 'Not Found') {
      throw `Sorry but the repo owner ${repoOwner} or repo name ${repoName} does not exist`
    }
    if (data.message === 'Bad credentials') {
      throw "Please enter a valid authentication token."
    }
    for (i = 0; i < data.length; i++) {
      var avatar = data[i].avatar_url
      var login = data[i].login
      callback(avatar, login)    }
  })
}

module.exports = getRepoContributors
