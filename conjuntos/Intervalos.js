const texto = '1,2,3,4,5,6,7,8,9,a.b c!d?e[f'

// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(texto.match(/[a-z]/g))

// [ 'b', 'c', 'd' ]
console.log(texto.match(/[b-d]/g))

// [ '2', '3', '4' ]
console.log(texto.match(/[2-4]/g))

// [ '1', '2', '3', 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(texto.match(/[A-Z1-3]/gi))

// [ '1', '2', '3' ]
console.log(texto.match(/[A-Z1-3]/g))