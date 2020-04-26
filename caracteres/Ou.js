const texto = 'Você precisa responder sim, não ou não sei!'

// [ 'sim', 'não', 'não', 'sei' ]
console.log(texto.match(/sim|não|sei/g))

// [ 'sim', 'não', 'não sei' ]
console.log(texto.match(/sim|não sei|não/g))