/* eslint-disable */

'use strict';

const postcss = require('postcss');
const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');
const spawn = require('child_process').spawn;
const rucksack = require('../');

function test(fixture, opts, done) {
  let input = fixture + '.css',
      expected = fixture + '.expected.css';

  input = fs.readFileSync(path.join(__dirname, 'fixtures', input), 'utf8');
  expected = fs.readFileSync(path.join(__dirname, 'fixtures', expected), 'utf8');

  postcss([ rucksack(opts) ])
    .process(input)
    .then(result => {
      expect(result.css).to.eql(expected);
      expect(result.warnings()).to.be.empty;
      done();
    }).catch(error => {
      done(error);
    });
};

function cli(cmd, callback) {
  process.chdir(__dirname);

  let ps,
      out = '',
      err = '';

  ps = spawn(process.execPath, [
    path.resolve(__dirname, '../bin/cmd.js')
  ].concat(cmd));

  ps.stdout.on('data', buffer => out += buffer);
  ps.stderr.on('data', buffer => err += buffer);
  ps.on('exit', function(code) {
    callback.call(this, err, out, code);
  });
};

function cliTest(fixture, args, done) {
  let input = fixture + '.css',
      expected = fixture + '.expected.css';

  input = path.join(__dirname, 'fixtures', input);
  expected = path.join(__dirname, 'fixtures', expected);

  cli([input, args], (err, out, code) => {
    expect(out).to.eql(fs.readFileSync(expected, 'utf8'));
    expect(err).to.be.empty;
    expect(code).to.eql(0);
    done();
  });
};

describe('Rucksack', () => {

  describe('core features', () => {
    it('sets aliases', done => test('alias', {}, done));
    it('applies clear:fix', done => test('clearfix', {}, done));
    it('applies easings', done => test('easings', {}, done));
    it('sets font-path', done => test('fontpath', {}, done));
    it('expands rgba(hex,a)', done => test('hexrgba', {}, done));
    it('expands position shorthands', done => test('position', {}, done));
    it('applies quanity queries', done => test('quantity', {}, done));
    it('does responsive type', done => test('responsive-type', {}, done));
    it('adds new input pseudo-elements', done => test('input', {}, done));
  });

  describe('addons', () => {
    it('applies fallbacks', done => test('laggard', { fallbacks: true }, done));
    it('autoprefixes', done => test('autoprefixer', { autoprefixer: true }, done));
  })

  describe('cli', () => {
    it('processes css on the command line', done => cliTest('position', '', done));
  });

});
