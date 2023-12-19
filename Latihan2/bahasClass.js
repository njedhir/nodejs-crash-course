const Hero = require('./Hero')

const taslim = new Hero({
  nama: 'Taslim',
  hpAwal: 100,
  defenseAwal: 3,
  attackPowerAwal: 15
})
const andre = new Hero(
  {
    nama: 'Andre',
    hpAwal: 120,
    defenseAwal: 2,
    attackPowerAwal: 20
  }
)

const students = ['Andre', 'Tasling', 'Nazar']
students.push('Fahrul')
console.log(students)

// console.log('Taslim menyerang Andre')
// taslim.serang(andre)
// console.log('Sisa HP Andre', andre.hp)

// console.log('Taslim dapat pedangan')
// taslim.dapatPedang()
// console.log('Taslim menyerang Andre lagi')
// taslim.serang(andre)
// console.log('Sisa HP Andre', andre.hp)