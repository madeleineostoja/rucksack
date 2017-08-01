#!/usr/bin/env node
/*eslint no-console: 0, no-undef: 0*/

'use strict';

const fs = require('fs');
const read = require('read-file-stdin');
const write = require('write-file-stdout');
const minimist = require('minimist');
const rucksack = require('../');

const OPTS = minimist(process.argv.slice(2), {
    boolean: [ 's', 'autoprefixer', 'fallbacks' ],
    alias: {
      h: 'help',
      s: 'sourcemap',
      v: 'version'
    }
  }),
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
    .on('close', () => process.exit(1));
}

read(FILE, function (err, buf) {
  if (err) {
    throw err;
  }
  rucksack.process(String(buf), { from: FILE, to: OUT }).then(function (result) {
    write(OUT, result.css);
    if (OPTS.map && OPTS.to) {
      fs.writeFile(OPTS.to + '.map', result.map.toString());
    }
  }).catch((err) => {
    console.error(err);
    process.exit(1);
  });
});