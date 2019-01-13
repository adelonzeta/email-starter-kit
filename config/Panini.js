const gulp   = require('gulp')
const panini = require('panini')
const inky   = require('inky')

function Panini() {
  return gulp.src('pages/**/*.html')
    .pipe(panini({
      root     : 'pages',
      layouts  : 'layouts',
      partials : 'partials',
      helpers  : 'helpers',
      data     : 'data'
    }))
    .pipe(inky())
    .pipe(gulp.dest('build'))
}

module.exports = Panini