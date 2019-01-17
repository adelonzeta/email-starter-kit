const sendGrid   = require('@sendgrid/mail')
const fs         = require('fs')
const configFile = 'config.json'
const htmlFile   = 'build/index.html'
const txtFile    = 'text/index.txt'
let CONFIG       = ''
let HTML         = ' '
let TXT          = ' '

function Send(done) {
  if (fs.existsSync(configFile))
    CONFIG = JSON.parse(fs.readFileSync(configFile))
  if (fs.existsSync(htmlFile))
    HTML = fs.readFileSync(htmlFile).toString()
  if (fs.existsSync(txtFile))
    TXT = fs.readFileSync(txtFile).toString()

  let message = CONFIG.mail.message
  message.text = TXT
  message.html = HTML
  sendGrid.setApiKey(CONFIG.mail.API_KEY)
  sendGrid.send(message)
    .then(() => console.log('Email Sent!'))
    .catch(error => console.log(error.toString()))
  done()
}

module.exports = Send