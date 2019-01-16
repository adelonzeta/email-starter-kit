const gulp     = require('gulp')
const imagemin = require('gulp-imagemin')

function Assets() {
  return gulp.src('assets/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/assets'))
}

module.exports = Assets