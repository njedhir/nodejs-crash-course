const express = require('express')
const c = require('./gaji.controller')
const router = express.Router()

router.get('/', c.greeting)

module.exports = router