

var self = module.exports;
var child_process = require('child_process');
var path = require('path');
var chalk = require('chalk');
var logger = require('winston');

module.exports.gulp = function runGulp( inArgs ) {

  var pkg = require ( path.join (process.cwd(),'node_modules/bones/node_modules/gulp/package.json') );

logger.debug('Working directory: ' + process.cwd() );
var exe = path.join ( process.cwd(), 'node_modules/bones/node_modules/gulp/', pkg.bin.gulp);


  var gulpSetup = ['--cwd', path.join ( process.cwd(), 'node_modules/bones') ];

  var args = gulpSetup.concat ( inArgs );
  var env = { CRANIUM: process.cwd() };
  // Try to run gulp
  logger.debug ("Running gulp: " + exe + " with args " + args);

  var child = child_process.spawn ( exe, args );
  child.stdout.on('data', function(data) {
    process.stdout.write(data);
  });
  child.stderr.on('data', function(data) {
    process.stderr.write(data);
  });
  child.on('close', function(code) {
    logger.debug("Gulp completed");
  });

}
