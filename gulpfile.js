

// process.chdir(process.env.CRANIUM);

var gulp = require('gulp');
var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

gulp.task('default-old', function() {
    gulp.src('app/**')
  .pipe ( gulp.dest( './build/') );
    console.log ( "ran gulp in " + process.cwd() );
});

// Change to our initial CWD before returning to let gulp do it's processing.
process.chdir(process.env.INIT_CWD);
