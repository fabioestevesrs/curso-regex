const texto = `CPF dos aprovados:
    - 600.567.890-12
    - 765.998.345-23
`
// solução mais correta
console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g))

console.log(texto.match(/\d{3}.\d{3}.\d{3}-\d{2}/g))
console.log(texto.match(/\d{3}.+?-\d{2}/g))

// solução mais correta
console.log(texto.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/g))

console.log(texto.match(/[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/g))
console.log(texto.match(/[0-9]{3}.+?-\d{2}/g))
console.log(texto.match(/[0-9]{3}.+-\d{2}/g))