const ghpages = require('gh-pages')

function Publish(done) {
  ghpages.publish('build')
  done()
}

module.exports = Publish