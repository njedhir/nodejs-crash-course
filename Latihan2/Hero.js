class Hero {
  constructor(dataAwal) {
    console.log('Object Hero berhasil dibuat')
    this.nama = dataAwal.nama
    this.hp = dataAwal.hpAwal
    this.attackPower = dataAwal.attackPowerAwal
    this.defense = dataAwal.defenseAwal
  }

  serang = (lawan) => {
    lawan.hp -= this.attackPower - lawan.defense
  }

  dapatPedang = () => {
    this.attackPower += 10
  }
}

module.exports = Hero