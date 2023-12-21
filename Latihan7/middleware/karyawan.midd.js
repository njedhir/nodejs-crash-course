const validToken = 'ABCD'
const { db } = require('../util/db')
const Karyawan = db.karyawan

const checkToken = (token) => {
  // decrypt token
  // find user based on token in DB
  // check privileges
  // if OK, return true
  // if NOT OK, return false
  return false
}

const isAdmin = (req, res, next) => {
  if (req.headers.token && checkToken(req.headers.token)) {
    return next()
  }

  res.status(403).send({ message: 'Not enough privileges' })
}

const checkCreateKaryawan = (req, res, next) => {
  const dt = req.body
  if (dt.email && dt.nama && dt.tempatLahir && dt.tanggalLahir && dt.gaji) return next()

  res.status(400).send({ message: 'Data incomplete' })
}

const allowToCreateUser = [ isAdmin, checkCreateKaryawan]

module.exports = { isAdmin, checkCreateKaryawan, allowToCreateUser }