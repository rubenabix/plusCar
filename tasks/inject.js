'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('./config.js');
var util = require('./util.js');
var path = require('path');
var inject = require('gulp-inject');

var wiredep = require('wiredep');

var injectBowerLibs = {
  name: 'injectBowerLibs',
  relative: true,
  //ignorePath: '../../../../../',
  transform: function (filePath, i, length, sourceFile, targetFile) {
    if (targetFile && targetFile.path) {
      var ext = extName(targetFile.path);
      if (ext === 'jade') {
        console.log('injectBowerLibs');
        console.log(filePath);
        return 'script(src=\'' + filePath + '\', inline="")';
      }
    }
  }
};

var injectAppCode = {
  name: 'injectAppCode',
  relative: true,
  ignorePath: '../',
  transform: function (filePath, i, length, sourceFile, targetFile) {
    if (targetFile && targetFile.path) {
      var ext = extName(targetFile.path);
      if (ext === 'jade') {
        console.log('injectAppCode');
        console.log(filePath);
        return 'script(src=\'' + filePath + '\', inline="")';
      }
    }
  }
};

var injectBowerCSS = {
  name: 'injectBowerCSS',
  relative: true,
  // ignorePath: '../',
  transform: function (filePath, i, length, sourceFile, targetFile) {
    if (targetFile && targetFile.path) {
      var ext = extName(targetFile.path);
      if (ext === 'jade') {
        console.log('injectBowerCSS');
        console.log(filePath);
        return 'link(rel="stylesheet", href="' + filePath + '", inline="")';
      }
    }
  }
};

var injectAppCSS = {
  name: 'injectAppCSS',
  relative: true,
  ignorePath: '../',
  transform: function (filePath, i, length, sourceFile, targetFile) {
    if (targetFile && targetFile.path) {
      var ext = extName(targetFile.path);
      if (ext === 'jade') {
        console.log('injectAppCSS');
        console.log(filePath);
        return 'link(rel="stylesheet", href="' + filePath + '", inline="")';
      }
    }
  }
};

function bowerLibs(done) {

  var bower = wiredep(config.wiredep)['js'] || '';

  util.debug('bowerLibs');
  console.log(bower);

  done();
}

function injectFilesToIndex() {

  var bowerList = wiredep(config.wiredep)['js'] || [];

  var bower = gulp.src(bowerList);
  var appCode = gulp.src(config.appCode);

  return gulp.src(config.scriptsDestination)
    .pipe($.inject(
      bower, // .pipe($.angularFilesort())
      injectBowerLibs))
    .pipe($.inject(
      appCode.pipe($.angularFilesort()),
      injectAppCode))
    .pipe(gulp.dest(config.scriptsDestinationFolder));
}

function injectBowerCSSToIndex(done) {

  var bowerList = wiredep({})['css'] || undefined;

  if (bowerList) {
    var bower = gulp.src(bowerList);

    console.log(bowerList);

    return gulp.src(config.cssDestination)
      .pipe($.inject(
        bower,
        injectBowerCSS))
      .pipe(gulp.dest(config.cssDestinationFolder));
  }
  else {
    done();
  }

}

function injectAppCSSToIndex(done) {

  var cssList = config.appCSS;

  if (cssList) {
    var appCSS = gulp.src(cssList);

    console.log(cssList);

    return gulp.src(config.cssDestination)
      .pipe($.inject(
        appCSS,
        injectAppCSS))
      .pipe(gulp.dest(config.cssDestinationFolder));
  }
  else {
    done();
  }

}

function extName(file) {
  file = file.split('?')[0];
  return path.extname(file).slice(1);
}

gulp.task('bowerLibs', bowerLibs);
gulp.task('injectFilesToIndex', injectFilesToIndex);
gulp.task('injectBowerCSSToIndex', injectBowerCSSToIndex);
gulp.task('injectAppCSSToIndex', injectAppCSSToIndex);

gulp.task('inject', gulp.series(injectFilesToIndex, injectBowerCSSToIndex, injectAppCSSToIndex));

module.exports = gulp;
