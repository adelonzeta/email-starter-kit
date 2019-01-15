const browser = require('browser-sync').create('Server')

function Serve(done) {
  browser.init({
    server: ['build', 'assets']
  })
  done()
}

module.exports = Serve