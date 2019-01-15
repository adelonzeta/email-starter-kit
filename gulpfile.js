const { series, parallel } = require('gulp')
const Panini  = require('./config/Panini')
const Sass    = require('./config/Sass')
const Prepare = require('./config/Prepare')
const Serve   = require('./config/Serve')
const Watch   = require('./config/Watch')
const Inliner = require('./config/Inliner')

const compile = series(Prepare, parallel(Panini, Sass))
const dev = series(compile, Serve, Watch)

exports.default = dev
// exports.build = parallel(Panini, Sass)
// exports.deploy = series('build', ghpages)

// === default ===
// clear
// compile html
// compile stylesheet
// compile assets
// serve files
// watch changes

// === build ===
// compile html
// compile stylesheet
// optimize stylesheet
// extract media queries
// inline styles
// absolute image src
// delete css
// minify html
// minify images

// === deploy ===
// build
// deploy to ghpages




/**
 * Tax Credit Confirmation Number:
 * 026AD2376N
 * 
 * 
 */