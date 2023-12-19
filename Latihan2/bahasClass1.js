const Flight = require('./Flight')

// Terima FPL
const flt1 = new Flight('GIA123', 'PKGGS', 'B738', 'WIII', 'WAAA', 14, 3)

console.log(flt1.acid, 'EOBT at', flt1.eobt,', new EIBT', flt1.eibt)

// Terima Dep Message
const atd = 15
flt1.dep(atd)

console.log(flt1.acid, 'departed at', atd,', new EIBT', flt1.eibt)