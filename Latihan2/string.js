const nama  = 'lorem ipsum dolor sit amet amet, consectetur adip'

// menambahkan angka 0 didepan string
const nilai = 98
// format terdiri 4 digit
const nilaiSesuaiFormat = nilai.toString().padStart(4, 0)
// console.log(nilaiSesuaiFormat)
// console.log('Nilai convert kembali menjadi int', Number(nilaiSesuaiFormat))

// ! panjang string
// console.log('panjang string', nama.length)

// ! split string
// console.log(nama.split(''))

// Setelah split menjadi array
// console.log(nama.split('').reverse().join(''))

// ! Mencari dalam string
// console.log(nama.indexOf('amet'))

// ! Me-replace
// Replace one
// console.log(nama.replace('amet', 'Andre'))

// Replace semua
// console.log(nama.replaceAll('amet', 'Andre'))

// Replace semua menggunakan regex
// console.log(nama.replace(/amet/g, 'Andre'))

// Ambil karakter dalam string
// console.log(nama.substring(22, 26))

// Ambil karakter dalam string (don't use this, deprecated)
// console.log(nama.substr(22, 5))

// Unreadable character
// console.log('Halo\nTaslim')
// console.log('Halo\tTaslim')
// console.log('Halo\r\nTaslim')
// console.log('Halo\bTaslim')