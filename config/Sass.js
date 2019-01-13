const gulp       = require('gulp')
const sass       = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')

function Sass() {
  return gulp.src('styles/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['node_modules/foundation-emails/scss'],
      outputStyle: 'expanded'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css'))
}

module.exports = Sass