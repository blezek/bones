var gulp = require ('gulp');


gulp.task ( 'css', function() {
  gulp.src('app/css/**')
  .pipe ( gulp.dest( './build/css') );
});
