const express = require('express')
const middKaryawan = require('../../middleware/karyawan.midd')
const middLog = require('../../middleware/log.midd')
const c = require('./karyawan.controller')
const router = express.Router()

router.get('/', middLog.logRequest, c.findAll)
router.post('/', middLog.logRequest, middKaryawan.isAdmin, middKaryawan.checkCreateKaryawan, c.create)

module.exports = router