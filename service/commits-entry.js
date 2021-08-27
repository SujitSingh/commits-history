const fs = require('fs');
const path = require('path');

class LogCommitsEntry {
  fileName = 'commits.txt';
  entryFilePath = path.resolve(__dirname, `../${this.fileName}`);
  writeStream = null;

  initializeTargetFile() {
    fs.stat(this.entryFilePath, (error, stat) => {
      if (error) {
        // file doesn't exists, create file
        fs.writeFile(this.entryFilePath, '', { flags: 'w' }, (error, data) => {
          if (error) {
            console.error('File creation error ', error);
            return;
          }
          this.initializeWriteStream();
        });
      }
      // file exists, initialize write stream
      this.initializeWriteStream();
    });
  }
  
  initializeWriteStream() {
    // create write stream
    this.writeStream = fs.createWriteStream(this.entryFilePath, {
      flags: 'a',
      encoding: 'utf8'
    });
  }

  writeToFile(content) {
    try {
      // add content to file
      const done = this.writeStream.write(content + '\n\n');
    } catch(error) {
      console.log('File writing error ', error);
    }
  }
}

const commitEntry = new LogCommitsEntry();
commitEntry.initializeTargetFile();

module.exports = commitEntry;