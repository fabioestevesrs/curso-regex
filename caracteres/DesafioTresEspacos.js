const texto = 'a   b'

// [ 'a   b', index: 0, input: 'a   b' ]
console.log(texto.match(/a   b/))

// [ 'a   b', index: 0, input: 'a   b' ]
console.log(texto.match(/a\s\s\sb/))

// [ 'a   b', index: 0, input: 'a   b' ]
console.log(texto.match(/a...b/))


// no futuro...
// [ 'a   b', index: 0, input: 'a   b' ]
console.log(texto.match(/a\s+b/))

// [ 'a   b', index: 0, input: 'a   b' ]
console.log(texto.match(/a {3}b/))

// [ 'a   b', index: 0, input: 'a   b' ]
console.log(texto.match(/a\s{3}b/))