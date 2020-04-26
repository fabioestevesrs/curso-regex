// . é um coringa, válido para uma posição
const texto = '1,2,3,4,5,6,7,8,9,0'

// [ '1,2' ]
console.log(texto.match(/1.2/g))

// null
console.log(texto.match(/1\.2/g))

// null
console.log(texto.match(/1..2/g))

// [ '1,2,' ]
console.log(texto.match(/1..,/g))


const notas = '8.3,7.1,8.8,10.0'

// [ '8.3', '8.8' ]
console.log(notas.match(/8../g))

// [ '8.3', '7.1', '8.8', '0.0' ]
console.log(notas.match(/.\../g))

// [ ',7.1', ',8.8', '10.0' ]
console.log(notas.match(/..\../g))

// [ '8.3', ',7.1', ',8.8', '10.0' ]
console.log(notas.match(/.\..|..\../g))


const texto2 = '1, 2,3,4,5,6,7,8,9,0'

// [ '1, 2' ]
console.log(texto2.match(/1..2/g))