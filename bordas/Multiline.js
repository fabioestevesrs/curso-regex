const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada co Habib.
`
// [ '\n', '\n', '\n', '\n' ]
console.log(texto.match(/\n/g))

// null
console.log(texto.match(/^(\w).+\1$/gi))

// [ 'Leo é muito legal', 'Emanuel foi jogar em Sergipe', 'Bianca é casada co Habib.' ]
console.log(texto.match(/^(\w).+\1\.?$/gim))