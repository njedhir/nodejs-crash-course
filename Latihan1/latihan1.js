// const untuk variable konstan
const jumlahSiswa = 20

// let untuk variable dinamis
let namaSiswa = 'Taslim'

// Type data
// String
let nama = 'Nazar'

// Number
let rate = 24.3

// Boolean
let isWriting = false

// undefined
let color = undefined

// BigInt


// Object
let nazar = {
  umur: 17,
  alamat: 'Neglasari',
  sudahMenikah: false,
  anak: [
    {
      nama: 'Aira',
      riwayatSekolah: [
        {
          type: 'SD',
          nama: 'SDN 1 Neglasari'
        },
        {
          type: 'SMP',
          nama: 'SMP 16 Tangerang'
        },
      ]
    },
  ]
}

// Dot notation
// console.log(nazar.alamat)

// Key Notation
// console.log(nazar['umur'])

// console.log(nazar.anak[0].riwayatSekolah[1].nama)

// Array
let students = ['Nazar', 'Andre', 'Fahrul']
let students2 = []

// console.log(students[1])

students.forEach(function(studentName) {
  // console.log(studentName)
})


// FUNCTION
function listStudent(students) {
  students.forEach(function(studentName) {
    console.log(studentName)
  })
}

const listStudent2 = function(students) {
  students.forEach(function(studentName) {
    console.log(studentName)
  })
}

const listStudent3 = (students) => {
  students.forEach(function(studentName) {
    console.log(studentName)
  })
}

const listStudent4 = students => {
  students.forEach(studentName => {
    console.log(studentName)
  })
}

listStudent4(students)