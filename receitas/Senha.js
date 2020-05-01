const texto = `
123465
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande1234

#OpA1?
Foi123!
`

// [ '123465', 'QUASE123!', '#0pA1?', 'Foi123!' ]
console.log(texto.match(/^.{6,20}$/gm))

// [ 'QUASE123!', '#OpA1?', 'Foi123!' ]
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm))

// [ '#OpA1?', 'Foi123!' ]
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm))