// g - global
// i - ignore case

const texto = 'Carlos assinou o abaixo-assinado.'

// [ 'C', index: 0, input: 'Carlos assinou o abaixo-assinado.' ]
console.log(texto.match(/C|ab/))

// [ 'C', index: 0, input: 'Carlos assinou o abaixo-assinado.' ]
console.log(texto.match(/c|ab/i))

// [ 'ab', index: 17, input: 'Carlos assinou o abaixo-assinado.' ]
console.log(texto.match(/c|ab/))

// [ 'C', 'ab' ]
console.log(texto.match(/ab|c/gi))