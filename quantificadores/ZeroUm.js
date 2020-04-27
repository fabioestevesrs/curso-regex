const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO'
const texto2 = 'There is a big fog in NYC'

// ? -> zero ou um (opcional)
const regex = /fogo?/gi

// [ 'fogo', 'FOGO' ]
console.log(texto1.match(regex))

// [ 'fog' ]
console.log(texto2.match(regex))