const gulp = require('gulp')
const purgecss = require('gulp-purgecss')

function Purge() {
  return gulp.src('build/css/styles.css')
    .pipe(purgecss({
      content: ['build/*.html']
    }))
    .pipe(gulp.dest('build/css'))
}

module.exports = Purge