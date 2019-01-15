const del = require('del')

function Prepare(done) {
  del('build/**/*')
  done()
}

module.exports = Prepare