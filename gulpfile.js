const { parallel } = require('gulp')
const Panini = require('./config/Panini')
const Sass = require('./config/Sass')
const Inliner = require('./config/Inliner')

exports.default = parallel(Panini, Sass)
exports.inliner = Inliner // TODO: cleanup css, images files