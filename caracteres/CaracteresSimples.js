const texto = '1,2,3,4,5,6,a.b c!d?e'
const regexVirgula = /,/

// [ '1', '2', '3', '4', '5', '6', 'a.b c!d?e' ]
console.log(texto.split(regexVirgula))

// [ ',', index: 1, input: '1,2,3,4,5,6,a.b c!d?e' ]
console.log(texto.match(regexVirgula))

// [ ',', ',', ',', ',', ',', ',' ]
console.log(texto.match(/,/g))

// null
console.log(texto.match(/A/))

// null
console.log(texto.match(/A/g))

// [ 'a' ]
console.log(texto.match(/A/gi))

// [ 'a', index: 12, input: '1,2,3,4,5,6,a.b c!d?e' ]
console.log(texto.match(/A/i))

// [ '2' ]
console.log(texto.match(/2/g))

// [ 'b c!d', index: 14, input: '1,2,3,4,5,6,a.b c!d?e' ]
console.log(texto.match(/b c!d/))