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
  styles: ['src/styles/*.styl', 'src/styles/**/*'],
  js: ['src/js/*.js', wiredep().js] 
};


var dests = {
  css: 'src/static/',
  js: 'src/static/'
};


// Stylus
gulp.task('stylus', function () {
  gulp.src(paths.styles[0])
    .pipe(stylus({
      use: [
        postStylus(['rucksack-css', 'lost']),
        rupture()
      ],
      compress: true
    }))
    .pipe(gulp.dest(dests.css))
});

// User js
gulp.task('js:user', function() {
  return gulp.src(paths.js[0])
    .pipe(uglify())
    .pipe(concat({ path: 'user.min.js'}))
    .pipe(gulp.dest(dests.js))
});

// Vendor js
gulp.task('js:vendor', function() {
  return gulp.src(paths.js[1])
    .pipe(uglify())
    .pipe(concat({ path: 'vendor.min.js'}))
    .pipe(gulp.dest(dests.js))
});

// Hugo build
gulp.task('hugo', function (fetch) {
  return exec('hugo server --watch --port=8080', function (err, stdout) {
      console.log(stdout);
      fetch(err);
  });
});

// Watch
gulp.task('watch', function(){
  gulp.watch(paths.js[0], ['js:user']);
  gulp.watch(paths.js[1], ['js:vendor']);
  gulp.watch(paths.styles[1], ['stylus']);
});

// Define cli tasks
gulp.task('build', ['stylus', 'js:user', 'js:vendor', 'hugo']);
gulp.task('default', ['build', 'watch']);
