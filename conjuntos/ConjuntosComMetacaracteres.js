const texto = '.$+*?-'

// dentro de um conjunto, alguns caracteres são interpretados como literais e não como metacaracteres
// não precisa de escape dentro do conjunto
// [ '.', '$', '+', '*', '?' ]
console.log(texto.match(/[+.?*$]/g))

// [ '.$', '+*', '?-' ]
console.log(texto.match(/[+.?*$]./g))

// hífen considerado como intervalo
// isso é um intervalo (range)
// [ '.', '$', '+', '*', '?', '-' ]
console.log(texto.match(/[$-?]/g))

// isso não é um intervalo (range)
// [ '$', '?', '-' ]
console.log(texto.match(/[$\-?]/g))

// isso não é um intervalo (range)
// [ '?', '-' ]
console.log(texto.match(/[-?]/g))

// pode precisar de escape dentro do conjunto: - [ ] ^