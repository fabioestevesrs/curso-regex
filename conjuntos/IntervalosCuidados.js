const texto = 'ABC [abc] a-c 1234'

// [ 'a', 'b', 'c', 'a', 'c' ]
console.log(texto.match(/[a-c]/g))

// não define um range
// [ 'a-c' ]
console.log(texto.match(/a-c/g))

// intervalos usam a ordem da tabela UNICODE
// [ 'A', 'B', 'C', '[', 'a', 'b', 'c', ']', 'a', 'c' ]
console.log(texto.match(/[A-z]/g))

// [ 'A', 'B', 'C', 'a', 'b', 'c', 'a', 'c' ]
console.log(texto.match(/[a-zA-Z]/g))

// tem que respeitar a ordem da tabela UNICODE
// SyntaxError: Invalid regular expression: /[a-Z]/: Range out of order in character class
// console.log(texto.match(/[a-Z]/g))

// SyntaxError: Invalid regular expression: /[4-1]/: Range out of order in character class
//console.log(texto.match(/[4-1]/g))