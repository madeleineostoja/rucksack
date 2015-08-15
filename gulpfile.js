'use strict';

// Core deps
var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    wiredep = require('wiredep'),
    exec = require('child_process').exec,
    livereload = require('gulp-livereload'),

    // Stylus plugins
    postStylus = require('poststylus'),
    rupture = require('rupture');

// Paths
var paths = {

  // Styles
  fetchStyles: 'src/styles/style.styl',
  watchStyles: 'src/styles/**/*.styl',

  // Js
  vendorJs: wiredep().js,
  userJs: 'src/js/*js',

  // Hugo
  markup: 'src/**/*.html',
  content: 'content/**/*.md'

};

// Add custom bower deps to vendor paths
paths.vendorJs.push(
  'bower_components/remodal/dist/remodal.js',
  'bower_components/smoothscroll/dist/smoothscroll.js'
);

var dests = {
  css: 'public/',
  js: 'public/js'
};


// Stylus
gulp.task('stylus', function () {
  gulp.src(paths.fetchStyles)
    .pipe(stylus({
      use: [
        postStylus(['lost', 'rucksack-css', 'postcss-normalize']),
        rupture()
      ],
      compress: true
    }))
    .pipe(gulp.dest(dests.css));
});

// User js
gulp.task('js:user', function() {
  return gulp.src(paths.userJs)
    .pipe(uglify())
    .pipe(concat({ path: 'user.min.js'}))
    .pipe(gulp.dest(dests.js));
});

// Vendor js
gulp.task('js:vendor', function() {
  return gulp.src(paths.vendorJs)
    .pipe(uglify())
    .pipe(concat({ path: 'vendor.min.js'}))
    .pipe(gulp.dest(dests.js));
});

// Hugo build
gulp.task('hugo', function (fetch) {
  return exec('hugo', function (err, stdout) {
      console.log(stdout);
      fetch(err);
  });
});

// Watch
gulp.task('watch', function(){
  gulp.watch(paths.userJs, ['js:user']);
  gulp.watch(paths.vendorJs, ['js:vendor']);
  gulp.watch(paths.watchStyles, ['stylus']);
  gulp.watch(paths.markup, ['hugo']);
  gulp.watch(paths.content, ['hugo']);
});

// Define cli tasks
gulp.task('build', ['stylus', 'js:user', 'js:vendor', 'hugo']);
gulp.task('default', ['build', 'watch']);
