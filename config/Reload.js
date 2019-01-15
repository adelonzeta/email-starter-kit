const browser = require('browser-sync').get('Server')

function Reload(done) {
  browser.reload()
  done()
}

module.exports = Reload