/* Build the test.  Each test should have a 'require' inside src/test/javascript/index.js */
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var util = require('gulp-util');

gulp.task('tests', function() {

  // Be sure to change testem.json if the paths change.
  gulp.src('spec/index.js')
  .pipe(browserify({
    insertGlobals : true  }))
  .pipe(gulp.dest('./build/test/'));

  gulp.src('spec/resources/**')
  .pipe(gulp.dest('./build/test/resources/'));

});
