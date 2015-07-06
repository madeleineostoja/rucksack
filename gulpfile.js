'use strict';

var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    mocha = require('gulp-mocha');

gulp.task('lint', function () {
  return gulp.src(['index.js', 'test/*.js', 'gulpfile.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('test', function () {
  return gulp.src('test/*.js', { read: false }).pipe(mocha({ reporter: 'nyan' }));
});

gulp.task('watch', function() {
  gulp.watch('**/*.js', ['check'] );
});

gulp.task('check', ['lint', 'test']);
gulp.task('default', ['check', 'watch']);
