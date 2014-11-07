#!/usr/bin/env node

var program = require ( 'commander');
var bones = require ( './lib/index.js');
var chalk = require('chalk');
var logger = require('winston');


function configLogging(level) {
  logger.remove(logger.transports.Console);
  logger.add(logger.transports.Console, { timestamp: true, colorize: true, level: level });
}

program
  .version('0.0.0')
  .option('-v, --verbose', 'Verbose output')
  .option('-l, --list', "List available commands");

program.on("--help", function() {
  logger.info('<action> [<action>] ...');
});


program
  .command('gulp <cmd...>')
  .description("run gulp")
  .action(function(cmd) {
    configLogging ( program.verbose ? "debug" : "info")
    logger.debug ( chalk.blue ( 'running gulp with args: ' + cmd) );
    bones.gulp ( cmd );
  });


program.parse(process.argv);
