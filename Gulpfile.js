// Dependencies
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

// Default task
gulp.task('default', () =>
  nodemon({ script: './server', ext: 'js' })
);
