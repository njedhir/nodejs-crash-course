const express = require('express')

const app = express()
app.use(express.raw())
  .use(express.json())

const menuHariIni = {
  nama: 'GADO-GADO',
  topping: 'TELOR REBUS',
  additional: 'KRUPUK'
}

const daftarKaryawan = [
  {
    name: 'Nazar',
    age: 18
  },
  {
    name: 'Taslim',
    age: 22
  },
  {
    name: 'Fahrul',
    age: 16
  },
  {
    name: 'Andre',
    age: 32
  },
]

app.get('/', (req, res) => {
  res.send('Selamat Datang di ExpressJS')
})

app.get('/kuliner', (req, res) => {
  res.send(menuHariIni)
})
// CREATE
app.post('/karyawan', (req, res) => {
  const newKaryawan = req.body
  daftarKaryawan.push(newKaryawan)
  res.send({
    message: 'Data inserted successfully',
    data: newKaryawan
  })
})

// READ ALL
app.get('/karyawan', (req, res) => {
  res.send(daftarKaryawan)
})

// READ BY Name and AGE
app.get('/karyawan/name/:name/:age', (req, res) => {
  console.log('By Name and Age')
  const name = req.params.name
  const age = req.params.age
  const rslt = daftarKaryawan.find(karyawan => karyawan.name === name && karyawan.age == age)
  if (rslt) {
    res.send(rslt)
  } else {
    res.status(404).send({ message: 'Record not found' })
  }
})

// UPDATE KARYAWAN
app.put('/karyawan', (req, res) => {
  const { name, age, newName, newAge } = req.body
  
  if ( !name || !age || !newName || !newAge) return res.status(400).send({ message: 'Data incomplete' })


  const karyawan = daftarKaryawan.find(kary => kary.name === name && kary.age === age)
  if (karyawan) {
    karyawan.name = newName
    karyawan.age = newAge

    res.send({ message: 'Data has been updated successfully'})
  } else {
    res.status(404).send({ message: 'Karyawan not found'})
  }
})

// DELETE KARYAWAN
app.delete('/karyawan', (req, res) => {
  const { name, age } = req.body
  
  if ( !name || !age ) return res.status(400).send({ message: 'Data incomplete' })


  const karyawanIndex = daftarKaryawan.findIndex(kary => kary.name === name && kary.age === age)
  if (karyawanIndex >= 0) {
    daftarKaryawan.splice(karyawanIndex, 1)

    res.send({ message: 'Data has been deleted successfully'})
  } else {
    res.status(404).send({ message: 'Karyawan not found'})
  }
})

// READ BY NAME
app.get('/karyawan/name/:name', (req, res) => {
  console.log('By Name')
  const name = req.params.name
  const rslt = daftarKaryawan.find(karyawan => karyawan.name === name)
  if (rslt) {
    res.send(rslt)
  } else {
    res.status(404).send({ message: 'Record not found' })
  }
})

app.get('/jumlah/:param1/:param2', (req, res) => {
  let { param1, param2 } = req.params

  param1 = parseInt(param1)
  param2 = parseInt(param2)
  const hasil = param1 + param2
  res.send(hasil.toString())
})

app.get('/jumlah2', (req, res) => {
  const { angka1, angka2 } = req.body
  res.send({ jumlah: angka1 + angka2 })
})


app.listen(30001, () => {
  console.log('Express server is listening on port 30001')
})