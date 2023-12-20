// Bagaimana untuk memeriksa regex dengan parameter dinamis?

const str = 'Andre adalah seorang pujangga dari Parung'
const ygDicari = 'adalah'

function cari(str, ygDicari) {
  const regex = new RegExp(`${ygDicari} s\\w*ang`)
  const rslt = str.match(regex)
  return rslt
}

console.log(cari(str, ygDicari))