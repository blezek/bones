/* Run all the tests using the testem test runner. */

var gulp = require('gulp');
var testem = require('testem');
var path = require('path');
var wd = process.cwd();

gulp.task('test', ['tests'], function() {
  var opts = {
    file: path.join (wd,'testem.json'),
    port: 16743
  };
  var t = new testem();
  return t.startCI(opts);
});
