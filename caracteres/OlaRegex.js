const texto = 'Casa bonita é a casa amarela da esquina com a Rua ACASALAR.'
const regex = /casa/gi
const regex2 = /casa bonita/gi
const regex3 = /casa/g
const regex4 = /casa/

// [ 'Casa', 'casa', 'CASA' ]
console.log(texto.match(regex))

// [ 'Casa bonita' ]
console.log(texto.match(regex2))

// [ 'casa' ]
console.log(texto.match(regex3))

//[ 'casa', index: 16, input: 'Casa bonita é a casa amarela da esquina com a Rua ACASALAR.' ]
console.log(texto.match(regex4))

// [ 'a b', index: 3, input: 'Casa bonita é a casa amarela da esquina com a Rua ACASALAR.' ]
console.log(texto.match(/a b/))

// [ 'a c', index: 14, input: 'Casa bonita é a casa amarela da esquina com a Rua ACASALAR.' ]
console.log(texto.match(/a c/))