const texto = `Lista teleFfônica:
    - (11) 98765-1212
    -98765-4321
    - (11)3344-1212
    - 3355-8899
`
console.log(texto.match(/\(\d{2,3}\)\s?\d{4,5}-\d{4}|\d{4,5}-\d{4}/g))
console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g))