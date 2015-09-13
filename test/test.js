/*eslint no-unused-expressions: 0, block-scoped-var: 0, no-undef: 0*/
'use strict';

var postcss = require('postcss'),
    expect = require('chai').expect,
    fs = require('fs'),
    path = require('path'),
    spawn = require('child_process').spawn,
    rucksack = require('../');

var test = function(fixture, opts, done) {
  var input = fixture + '.css',
      expected = fixture + '.expected.css';

  input = fs.readFileSync(path.join(__dirname, 'fixtures', input), 'utf8');
  expected = fs.readFileSync(path.join(__dirname, 'fixtures', expected), 'utf8');

  postcss([ rucksack(opts) ])
    .process(input)
    .then(function (result) {
      expect(result.css).to.eql(expected);
      expect(result.warnings()).to.be.empty;
    done();
  }).catch(function (error) {
    done(error);
  });

};


var cli = function(cmd, callback) {
  process.chdir(__dirname);

  var ps,
      out = '',
      err = '';

  ps = spawn(process.execPath, [
      path.resolve(__dirname, '../bin/cmd.js')
  ].concat(cmd));

  ps.stdout.on('data', function(buffer) {
     out += buffer;
  });

  ps.stderr.on('data', function(buffer) {
    err += buffer;
  });

  ps.on('exit', function(code) {
    callback.call(this, err, out, code);
  });
};

var cliTest = function(fixture, args, done) {
  var input = fixture + '.css',
      expected = fixture + '.expected.css';

  input = path.join(__dirname, 'fixtures', input);
  expected = path.join(__dirname, 'fixtures', expected);

  cli([input, args], function(err, out, code) {
    expect(out).to.eql(fs.readFileSync(expected, 'utf8'));
    expect(err).to.be.empty;
    expect(code).to.eql(0);
    done();
  });
};

describe('Rucksack', function () {

  // Core plugins
  it('sets aliases', function(done) {
   test('alias', {}, done);
  });

  it('applies clear:fix', function(done) {
   test('clearfix', {}, done);
  });

  it('applies easings', function(done) {
   test('easings', {}, done);
  });

  it('sets font-path', function(done) {
   test('fontpath', {}, done);
  });

  it('expands rgba(hex,a)', function(done) {
   test('hexrgba', {}, done);
  });

  it('expands position shorthands', function(done) {
   test('position', {}, done);
  });

  it('applies quanity queries', function(done) {
   test('quantity', {}, done);
  });

  it('does responsive type', function(done) {
   test('responsive-type', {}, done);
  });

  it('adds new input pseudo-elements', function(done) {
    test('input', {}, done);
  });

  // Fallback plugins
  it('polyfills rgba', function(done) {
   test('rgba', { fallbacks: true }, done);
  });

  it('polyfills opacity', function(done) {
   test('opacity', { fallbacks: true }, done);
  });

  it('polyfills pseudo-elements', function(done) {
   test('pseudo', { fallbacks: true }, done);
  });

  it('polyfills vmin', function(done) {
   test('vmin', { fallbacks: true }, done);
  });

  // Addons
  it('autoprefixes', function(done) {
   test('autoprefixer', { autoprefixer: true }, done);
  });

  // CLI tool
  it('processes css on the command line', function(done) {
    cliTest('position', '', done);
  });

  it('handles options on the command line', function(done) {
    cliTest('cliopts', '--no-autoprefixer', done);
  });


});
