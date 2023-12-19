const net = require('net')

const client = new net.Socket()

client.on('connect', () => {
  console.log('Connected to server')
})

client.on('data', (data) => {
  console.log('DATA FROM SERVER')
  console.log(data.toString())
  const ident = {
    msgType: 'IDENT',
    id: 'WAHYU'
  }
  const jsonIdent = JSON.stringify(ident)
  client.write(jsonIdent)
})

client.connect(30000)