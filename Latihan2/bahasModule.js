const fs = require('fs')

// ! membaca file (synchronous)
// const txt = fs.readFileSync('./tes.txt')
// console.log(txt.toString())

// ! Catch error
// try {
//   const txt = fs.readFileSync('./te.txt')
//   console.log(txt.toString())
// } catch (error) {
//   // console.error(error)
//   console.error(error.message)
// }

// ! membaca file (asynchronous)
// fs.readFile('./tes.txt', (err, data) => {
//   console.log(data.toString())
// })
// fs.readFile('./te.txt', (err, data) => {
//   if (err) return console.error(err)
//   console.log(data.toString())
// })
// fs.readFile('./te.txt', (err, data) => {
//   if (err) {
//     console.error(err)
//     return 
//   }
//   console.log(data.toString())
// })
