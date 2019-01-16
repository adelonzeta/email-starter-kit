const del = require('del')

function Clean(done) {
  del('build/css/')
  done()
}

module.exports = Clean