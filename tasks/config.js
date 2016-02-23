'use strict';

var config = {
  codeToCheck: [
    './src/client/public/app/**/*.js'
  ],
  scriptsDestination: './src/client/public/templates/main/scripts.jade',
  cssDestination: './src/client/public/templates/main/head.jade',
  scriptsDestinationFolder: './src/client/public/templates/main/',
  cssDestinationFolder: './src/client/public/templates/main/',
  appCode: ['./src/client/public/**/*.js'],
  appCSS: ['./src/client/public/**/*.css'],
  allJadeApp: './src/client/**/*.jade',
  allHtmlApp: './src/client/**/*.html',
  allHtmlAppDestination: './src/client/',
  wiredep: {
    overrides: {
    }
  }
};

module.exports = config;
