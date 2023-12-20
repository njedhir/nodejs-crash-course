const express = require('express')
const router = express.Router()

// Routes
const karyawanRoutes = require('./karyawan/karyawan.routes')
const gajiRoutes = require('./gaji/gaji.routes')

router.use('/karyawan', karyawanRoutes)
router.use('/gaji', gajiRoutes)

module.exports = router