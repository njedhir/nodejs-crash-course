const net = require('net')
const logger = require('njedhir-logger')
const PORT = 30000
const clients = []
const server = new net.Server()

server.listen(PORT, () => {
  logger.write('TCP SERVER', 'Listen', 'Listening', false, `Server is listening on port ${PORT}`)
})

server.on('connection', socket => {
  logger.write('TCP SERVER', 'onConnection', 'Socket Connected', false, `A client has just connected`)
  clients.push(socket)
  socket.write('Dear client, Selamat bergabung!')
  socket.on('error', err => {
    if (socket.id) {
      logger.write('TCP SERVER', 'onError', 'Socket Error', true, `Client id: ${socket.id} error`)
    } else {
      logger.write('TCP SERVER', 'onError', 'Socket Error', true, `A client error`)
    }
  })
  socket.on('close', () => {
    const clientIndex = clients.findIndex(sock => sock.id == socket.id)
    clients.splice(clientIndex, 1)

    if (socket.id) return logger.write('TCP SERVER', 'onClose', 'Socket Error', true, `Client id: ${socket.id} disconnected`)
    
    logger.write('TCP SERVER', 'onClose', 'Socket Error', true, `A client disconnected`)
    
  })
  socket.on('data', onData)
})

function onData(data) {
  const parsedData = JSON.parse(data)
  if (parsedData.msgType == 'IDENT') {
    logger.write('TCP SERVER', 'onData', 'Data Received', false, `Identification Msg is received from id:`, parsedData.id)
    socket.id = parsedData.id
  } else {
    logger.write('TCP SERVER', 'onData', 'Data Received', false, `Message from client`, data.toString())
  }
}