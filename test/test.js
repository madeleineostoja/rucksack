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

  it('sets short-property', function(done) {
    test('shortproperty', {}, done);
  });

  it('sets base-shape', function(done) {
    test('baseshape', {}, done);
  });

  // Addons
  it('applies fallbacks', function(done) {
    test('laggard', { fallbacks: true }, done);
  });

  it('autoprefixes', function(done) {
    test('autoprefixer', { autoprefixer: true }, done);
  });

  // CLI tool
  it('processes css on the command line', function(done) {
    cliTest('position', '', done);
  });

  it('handles options on the command line', function(done) {
    cliTest('cliopts', '--autoprefixer', done);
  });


});
