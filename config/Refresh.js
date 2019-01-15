const panini = require('panini')

function Refresh(done) {
  panini.refresh()
  done()
}

module.exports = Refresh