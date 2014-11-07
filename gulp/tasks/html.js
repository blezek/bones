var gulp = require ('gulp');


gulp.task ( 'html', ['css'], function() {
  gulp.src('./app/html/**')
  .pipe ( gulp.dest( './build/') );
});
