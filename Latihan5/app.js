const arr = `GCA1557 171419
FF WRRRZPZX
171423 WIIIZPZX
(ARR-LNI787-WARR-WIII1417)
`

const rslt = arr.matchAll(/(?<msgType>\w*)-(?<acid>\w*)(\/A)?(?<ssr>\d*|)-(?<adep>\w*)-(?<ades>\w{4})(?<ata>\d*)/g)
// console.log(...rslt)
// const rslt1 = [...rslt]
// console.log(rslt1)
// const flight = rslt1[0].groups
// console.log(flight)

const fpl = `GCA1607 131049
FF WRRRZPZX
131049 WIPPBTKX
(FPL-BTK6877-IS
-B738/M-SDFGHIRW/EB1
-WIPP0001
-N0450F270 PLB BORAS W12E BIDAK DCT BUNIK DKI
-WIII0055 WIPP
-PBN/A1C1C2D1D2 DOF/230414 REG/PKLDP SEL/RSFH OPR/BATIK AIR)
`