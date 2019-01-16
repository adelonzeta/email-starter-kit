const { series, parallel } = require('gulp')
const Panini  = require('./config/Panini')
const Sass    = require('./config/Sass')
const Prepare = require('./config/Prepare')
const Serve   = require('./config/Serve')
const Watch   = require('./config/Watch')
const Purge   = require('./config/Purge')
const Inliner = require('./config/Inliner')
const Clean   = require('./config/Clean')
const Assets  = require('./config/Assets')

const compile = series(Prepare, parallel(Panini, Sass))
const serve   = series(compile, Serve, Watch)
const build   = series(compile, Purge, Inliner, Clean, Assets)

exports.default = serve
exports.build = build
// exports.deploy = series('build', ghpages)





// === deploy ===
// build
// deploy to ghpages






 