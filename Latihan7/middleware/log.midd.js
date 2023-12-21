const moment = require('moment')

const logRequest = (req, res, next) => {
  console.log(moment.utc().format())
  console.log('=============')
  console.log('HEADERS')
  console.log(req.headers)
  console.log('\n', 'BODY')
  console.log(req.body)
  console.log('-------------\n')
  next()
}

module.exports = { logRequest }