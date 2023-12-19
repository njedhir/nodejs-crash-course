const moment = require('moment')
moment.locale('id')

const eobt = '2023-12-19T23:44:00'
const eet = 150

const eibt = moment(eobt).add(eet, 'minutes').format()
console.log(eibt)
