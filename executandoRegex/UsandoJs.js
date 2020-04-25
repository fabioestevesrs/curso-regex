const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'
const regexNove = RegExp('9')

console.log('Métodos da RegExp...')

// true
console.log(regexNove.test(texto))

// [ '9', index: 18, input: '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f' ]
console.log(regexNove.exec(texto))

const regexLetras = /[a-f]/g
console.log('Métodos da string...')

// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(texto.match(regexLetras))

// Retorna o índice do primeiro elemento encontrado: 20
console.log(texto.search(regexLetras))

// 0,1,2,3,4,5,6,7,8,9,Achei,Achei,Achei,Achei,Achei,Achei
console.log(texto.replace(regexLetras, 'Achei'))

// [ '0,1,2,3,4,5,6,7,8,9,', ',', ',', ',', ',', ',', '' ]
console.log(texto.split(regexLetras))