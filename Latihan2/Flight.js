class Flight {
  constructor(acid, registrasi, tipe, adep, ades, eobt, eet) {
    this.acid = acid
    this.registrasi = registrasi
    this.tipe = tipe
    this.adep = adep
    this.ades = ades
    this.eobt = eobt
    this.eet = eet
    this.eibt = eobt + eet
  }

  dep(atd) {
    this.eibt = atd + this.eet
  }
}

module.exports = Flight