var jade = require('gulp-jade');

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('./config.js');
var util = require('./util.js');

function compileJade() {
  return gulp.src(config.allJadeApp)
    .pipe($.jade({}))
    .pipe(gulp.dest(config.allHtmlAppDestination));
}

function cleanHtmlFiles(done){
  util.cleanFiles([].concat(
    config.allHtmlApp
  ));
  done();
}

gulp.task('compileJade', compileJade);
gulp.task('cleanHtmlFiles', cleanHtmlFiles);

module.exports = gulp;
