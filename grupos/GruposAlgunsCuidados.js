const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC'

// não é um grupo
// [ '(', 'a', ')', 'A', 'B', 'C' ]
console.log(texto.match(/[(abc)]/gi))

// [ 'a', 'A', 'B', 'C' ]
console.log(texto.match(/([abc])/gi))

// [ 'ABC' ]
console.log(texto.match(/(abc)/gi))