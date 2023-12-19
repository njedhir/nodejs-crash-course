const kasiBesar = nama => {
  nama = nama.toUpperCase()
  return tambahAkhiran(nama)
}
const tambahAkhiran = nama => (nama.concat(', Mr.'))

module.exports = {
  kasiBesar,
  tambahAkhiran
}