require('dotenv').config()
const express = require('express')
const PORT = process.env.SERVICE_PORT || 30000

// Routes
const routes = require('./services')

const app = express()

app.use(express.json())

app.use(routes)

app.get('/', (req, res) => {
  res.send('Halo')
})

app.listen(PORT, () => console.log('Server is running on port', PORT))