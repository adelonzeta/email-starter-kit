const { watch, series } = require('gulp')
const Panini  = require('./Panini')
const Sass    = require('./Sass')
const Refresh = require('./Refresh')
const Reload  = require('./Reload')

const paniniFiles = '{data,helpers,layouts,pages,partials}/**/*'

function Watch() {
  watch('styles/**/*.scss', series(Sass, Reload))
  watch(paniniFiles, series(Refresh, Panini, Reload))
  watch('assets/**/*', Reload)
}

module.exports = Watch