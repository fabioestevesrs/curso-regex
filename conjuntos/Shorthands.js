const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g`

// números [0-9]
// [ '1', '2', '3', '4', '5', '6' ]
console.log(texto.match(/\d/g))

// não números [^0-9]
// [ ',', ',', ',', ',', ',', ',', 'a', '.', 'b', ' ', 'c', '!', 'd', '?', 'e', ' ', ' ', ' ', ' ', '-', '\n', 'f', '_', 'g' ]
console.log(texto.match(/\D/g))

// caracteres [a-zA-Z0-9_]
// [ '1', '2', '3', '4', '5', '6', 'a', 'b', 'c', 'd', 'e', 'f', '_', 'g' ]
console.log(texto.match(/\w/g))

// não caracteres [^a-zA-Z0-9_]
// [ ',', ',', ',', ',', ',', ',', '.', ' ', '!', '?', ' ', ' ', ' ', ' ', '-', '\n' ]
console.log(texto.match(/\W/g))

// espaço [ \t\b\r\f]
// [ ' ', '\t', '\n' ]
console.log(texto.match(/\s/g))

// não espaços [^ \t\b\r\f]
// [ '1', ',', '2', ',', '3', ',', '4', ',', '5', ',', '6', ',', 'a', '.', 'b', 'c', '!', 'd', '?', 'e', '-', 'f', '_', 'g' ]
console.log(texto.match(/\S/g))