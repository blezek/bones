

// process.chdir(process.env.CRANIUM);

var gulp = require('gulp');

gulp.task('default', function() {
    gulp.src('app/**')
  .pipe ( gulp.dest( './build/') );
    console.log ( "ran gulp in " + process.cwd() );
});
