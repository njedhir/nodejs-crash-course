const express = require('express')
const c = require('./karyawan.controller')
const router = express.Router()

router.get('/', c.greeting)

module.exports = router