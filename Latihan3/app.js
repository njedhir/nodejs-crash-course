const logger = require('njedhir-logger')

const moduleName = 'TCPServer'
const functionName = 'onSocketError'
const eventName = 'Socket Error'
const msg = 'Your log message here'
const msg2 = 'Another log message'

logger.write(moduleName, functionName, eventName, msg, msg2)
