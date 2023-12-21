const { db } = require('../../util/db')
const Model = db.karyawan

const greeting = (req, res) => {
  res.send('Helo from karyawan routes')
}

// CREATE
const create = async (req, res) => {
  try {

    await Model.create({ data: req.body })
    res.send({ message: 'New user created successfully'})

  } catch (error) {

    res.status(500).send({ message: 'Failed to create user' })
    console.error(error.message)

  }
  

}

// READ
const findAll = async (req, res) => {
  if (req.body) {
    const params = {
      where: req.body
    }
    res.send(await Model.findMany(params))
  } else {
    res.send(await Model.findMany())
  }
}

// UPDATE

// DELETE

module.exports = {
  greeting, findAll, create
}