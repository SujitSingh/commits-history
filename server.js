const argvArr = process.argv || [];
const searchCommitSvc = require('./service/search-commits.js');
const commitEntrySrc = require('./service/commits-entry.js');

function getQueryFromArgv(argvArr = []) {
  const searchQuery = argvArr.reduce((queryStr, arg) => {
    // find --query argument 
    if (arg.indexOf('--query') > -1) {
      const equalIndex = arg.indexOf('=');
      // add the value of --query argument
      queryStr = arg.substr(equalIndex + 1);
    }
    return queryStr;
  }, '');
  return searchQuery;
}

async function fetchCommitMatches(searchQuery) {
  try {
    const commits = await searchCommitSvc.getMatchingCommitsOnQuery(searchQuery);
    if (commits && commits.total_count) {
      // find message from any random items index
      const randomIndexInRange = Math.floor( Math.random() * commits.items.length ) + 0; 
      const message = commits.items[randomIndexInRange].commit.message;

      // add commits message in commits.txt
      commitEntrySrc.writeToFile(message);
    } else {
      // add no data entry warning log
      console.warn(`No commit found for `, searchQuery);
    }
  } catch(error) {
    console.warn(`No commit found for `, searchQuery);
  }
}

const commitQuery = getQueryFromArgv(argvArr);
if (commitQuery) {
  fetchCommitMatches(commitQuery);
}