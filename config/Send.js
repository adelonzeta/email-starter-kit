const sendGrid   = require('@sendgrid/mail')
const fs         = require('fs')
const configFile = 'config.json'
let CONFIG       = {mail: {}}
CONFIG.mail.API_KEY   = ''
CONFIG.mail.RECIPIENT = ''
CONFIG.mail.SENDER    = ''
CONFIG.mail.SUBJECT   = ''
let TXT  = ' '
let HTML = ' '

function Send(done) {
  if (fs.existsSync(configFile))
    CONFIG = JSON.parse(fs.readFileSync(configFile))
  if (fs.existsSync(CONFIG.mail.TEXT_VERSION))
    TXT  = fs.readFileSync(CONFIG.mail.TEXT_VERSION).toString()
  if (fs.existsSync(CONFIG.mail.HTML_FILE))
    HTML = fs.readFileSync(CONFIG.mail.HTML_FILE).toString()
  
  let message     = {}
  message.to      = CONFIG.mail.RECIPIENT
  message.from    = CONFIG.mail.SENDER
  message.subject = CONFIG.mail.SUBJECT
  message.text    = TXT
  message.html    = HTML
  sendGrid.setApiKey(CONFIG.mail.API_KEY)
  sendGrid.send(message)
    .catch(error => console.log(error.toString()))
  done()
}

module.exports = Send