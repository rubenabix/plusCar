'use strict';

var gulp = require('gulp');
var hub = require('gulp-hub');
hub(['tasks/*.js']);

gulp.task('build', gulp.series('cleanHtmlFiles', 'inject', 'compileJade'));

gulp.task('default', gulp.series('build'));
