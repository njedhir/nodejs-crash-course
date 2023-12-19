function greet(nama) {
  return `Hey there, ${nama}!`
}

function processGreet(nama, callback) {
  callback(nama)
}

processGreet('Wahyu', greet)