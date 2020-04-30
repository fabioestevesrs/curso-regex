const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

// [ 'R', 'r', 'r', 'r', 'r' ]
console.log(texto.match(/r/gi))

// ^ início da linha/string
// [ 'R' ]
console.log(texto.match(/^r/gi))

// $ fim da linha/string
// [ 'r' ]
console.log(texto.match(/r$/gi))

// null
// problema do dotall (não resolve o \n)
console.log(texto.match(/^r.*r$/gi))