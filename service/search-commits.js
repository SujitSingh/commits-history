const axios = require('axios');

class SearchCommitsService {
  gitAPIRoot = 'https://api.github.com';
  commitsAPIPath = '/search/commits';

  getMatchingCommitsOnQuery(queryStr) {
    const query = `?q=${queryStr}`;
    return axios.get(this.gitAPIRoot + this.commitsAPIPath + query, {
      headers: {
        Accept: 'application/vnd.github.cloak-preview+json'
      }
    }).then(resp => resp ? resp.data : null);
  }
}

module.exports = new SearchCommitsService();