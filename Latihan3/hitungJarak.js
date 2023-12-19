const geolib = require('geolib')
const say = require('say')

const coordinate1 = {
  latitude: '-6.043663',
  longitude: '106.8332661'
}
const coordinate2 = {
  latitude: '-6.979409',
  longitude: '112.6914801'
}

const jarak = geolib.getDistance(coordinate1, coordinate2)
const jarakKm = geolib.convertDistance(jarak, 'km')

console.log('Jarak antara Jakarta dan Surabaya adalah', jarakKm, 'km')
const ucapan = `The distance between Jakarta and Surabaya is ${jarakKm} kilometers`

say.speak(ucapan)