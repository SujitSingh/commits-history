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
          this.initializeChangeWatcher();
        });
      }
      // file exists, initialize write stream
      this.initializeWriteStream();
      this.initializeChangeWatcher();
    });
  }
  
  initializeWriteStream() {
    // create write stream
    this.writeStream = fs.createWriteStream(this.entryFilePath, {
      flags: 'a',
      encoding: 'utf8'
    });
  }

  initializeChangeWatcher() {
    // file changes watcher
    fs.watchFile(this.entryFilePath, { persistent: true }, (curr, prev) => {
      // find new content length
      let start = prev.size,
          end = curr.size;
      let contentLen = end - start;

      const buffer = Buffer.alloc(contentLen);
      fs.open(this.entryFilePath, 'r', (error, fd) => {
        // read content in file within range
        fs.read(fd, buffer, 0, contentLen, start, (error, bytes, buff) => {
          if (error) {
            return;
          }
          // add logs regarding new entry
          const newContent = buff.toString().trim();
          console.table([{ 'Date-Time': new Date().toUTCString(), 'New Content': newContent }]);
        });
      });
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