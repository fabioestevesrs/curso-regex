const texto = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'

// [ '<b>', '<strong>', '<div>' ]
console.log(texto.match(/<(\w+)>/g))

// [ '<b>Destaque</b>', '<strong>Forte</strong>', '<div>Conteudo</div>' ]
console.log(texto.match(/<(\w+)>.*<\/\1>/g))


const texto2 = 'Lentamente é mente muito lenta.'

// [ 'Lentamente' ]
console.log(texto2.match(/(lenta)(mente)/gi))

// [ 'Lentamente é mente muito lenta.' ]
console.log(texto2.match(/(lenta)(mente).*/gi))

// [ 'Lentamente é mente muito lenta' ]
console.log(texto2.match(/(lenta)(mente).*\2.*\1/gi))

// [ 'Lentamente é mente muito lenta.' ]
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi))

// ?: não captura o valor... não guarda o valor
// [ 'Lentamente é mente' ]
console.log(texto2.match(/(?:lenta)(mente).*\1/gi))

// [ 'Lentamente', 'lenta' ]
console.log(texto2.match(/(lenta)(mente)?/gi))

// mente é mente muito lenta.
console.log(texto2.replace(/(lenta)(mente)/gi, '$2'))

// AAAmenteBBB é mente muito lenta.
console.log(texto2.replace(/(lenta)(mente)/gi, 'AAA$2BBB'))


const texto3 = '2020-10-10'

// 10/10/2020
console.log(texto3.replace(/(\d{4})\-(\d{2})\-(\d{2})/gi, '$3/$2/$1'))


// teste quantidade de retrovisores
const texto4 = 'abcdefghijkll'

// [ 'abcdefghijkl' ]
console.log(texto4.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)/g))

// [ 'abcdefghijkll' ]
console.log(texto4.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))