const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

// null
// problema do dotall (não resolve o \n)
console.log(texto.match(/^r.*r$/gi))

// \s pega o que é espaço
// \S pega tudo que não é espaço
// [ 'Romário era um excelente jogador\n, mas hoje é um político questionador' ]
console.log(texto.match(/^r[\s\S]*r$/gi))