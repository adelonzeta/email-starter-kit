const gulp   = require('gulp')
const inlineCSS = require('gulp-inline-css')

function Inliner() {
  return gulp.src('build/**/*.html')
    .pipe(inlineCSS({
      preserveMediaQueries: true,
      applyWidthAttributes: true,
      applyTableAttributes: true
    }))
    .pipe(gulp.dest('build'))
}

module.exports = Inliner