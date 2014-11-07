

var self = module.exports;
var child_process = require('child_process');
var path = require('path');
var chalk = require('chalk');
var logger = require('winston');
var testem = require('testem');

var bones = module.exports;

module.exports.home = path.dirname(require.main.filename);

module.exports.gulp = function runGulp( inArgs ) {

  var pkg = require ( path.join (bones.home, "node_modules", "gulp", 'package.json') );

logger.debug('Working directory: ' + process.cwd() );
var exe = path.join ( bones.home, "node_modules", "gulp", pkg.bin.gulp);


  var gulpSetup = ['--cwd', bones.home ];

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

};


module.exports.testem = function ( args ) {
  logger.debug("Our home is: " + bones.home);
  var opts = {
    file: path.resolve(bones.home,'testem.json' ),
    port: 16743
  };
  var t = new testem();
  args = args || "dev";
  if ( args === 'server') {
    return t.startServer(opts);
  }
  if ( args === 'ci' ) {
    return t.startCI(opts);
  }
  if ( args === 'dev' ) {
    return t.startDev(opts);
  }
};
