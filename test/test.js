/*eslint no-unused-expressions: 0, block-scoped-var: 0, no-undef: 0*/
'use strict';

var postcss = require('postcss'),
    expect = require('chai').expect,
    fs = require('fs'),
    path = require('path'),
    plugin = require('../index.js');

var test = function (fixture, opts, done) {
  var input = fixture + '.css',
      expected = fixture + '.expected.css';

  opts.hasOwnProperty('normalize') ? opts : opts.normalize = false;
  opts.hasOwnProperty('autoprefixer') ? opts : opts.autoprefixer = false;
  opts.hasOwnProperty('fallbacks') ? opts : opts.fallbacks = false;

  input = fs.readFileSync(path.join(__dirname, 'fixtures', input), 'utf8');
  expected = fs.readFileSync(path.join(__dirname, 'fixtures', expected), 'utf8');

  postcss([ plugin(opts) ])
    .process(input)
    .then(function (result) {
      expect(result.css).to.eql(expected);
      expect(result.warnings()).to.be.empty;
    done();
  }).catch(function (error) {
    done(error);
  });

};


describe('Rucksack', function () {

  // Core plugins
  it('sets aliases', function (done) {
   test('alias', {}, done);
  });

  it('applies clear:fix', function (done) {
   test('clearfix', {}, done);
  });

  it('applies easings', function (done) {
   test('easings', {}, done);
  });

  it('sets font-path', function (done) {
   test('fontpath', {}, done);
  });

  it('expands rgba(hex,a)', function (done) {
   test('hexrgba', {}, done);
  });

  it('applies a modular scale', function (done) {
   test('modular-scale', {}, done);
  });

  it('expands position shorthands', function (done) {
   test('position', {}, done);
  });

  it('applies quanity queries', function (done) {
   test('quantity', {}, done);
  });

  // Fallback plugins
  it('polyfills rgba', function (done) {
   test('rgba', { fallbacks: true }, done);
  });

  it('polyfills -epub', function (done) {
   test('epub', { fallbacks: true }, done);
  });

  it('polyfills opacity', function (done) {
   test('opacity', { fallbacks: true }, done);
  });

  it('polyfills pseudo-elements', function (done) {
   test('pseudo', { fallbacks: true }, done);
  });

  it('polyfills vmin', function (done) {
   test('vmin', { fallbacks: true }, done);
  });

  // Addons
  it('applies normalize.css', function (done) {
   test('normalize', { normalize: true }, done);
  });

  it('autoprefixes', function (done) {
   test('autoprefixer', { autoprefixer: true }, done);
  });

  it('swaps default colors', function (done) {
   test('colors', {}, done);
  });

});
