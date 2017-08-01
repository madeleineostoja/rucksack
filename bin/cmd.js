#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const read = require('read-file-stdin');
const write = require('write-file-stdout');
const rucksack = require('../');
const minimist = require('minimist');

// Set shorthand aliases for options
const OPTS = minimist(process.argv.slice(2),
        {
          boolean: [
            'autoprefixer',
            'fallbacks'
          ],
          alias: {
            h: 'help',
            s: 'sourcemap',
            v: 'version'
          }
        }
      ),
    FILE = OPTS._[0],
    OUT = OPTS._[1];

// Fetch verion from package.json
if (OPTS.version) {
  return console.log(require('../package.json').version);
}

// Pipe out help doc from help.txt
if (FILE === 'help' || OPTS.help) {
  return fs.createReadStream(path.join(__dirname, '/help.txt'))
    .pipe(process.stdout)
    .on('close', () => {
      process.exit(1);
    });
}

read(FILE, (err, buf) => {
  if (err) {
    throw err;
  }

  if (FILE) {
    OPTS.from = FILE;
  }

  if (OUT) {
    OPTS.to = OUT;
  }
  write(OUT, rucksack.process(String(buf), OPTS));
});
