// \n
const texto = 'Bom\ndia'
const texto2 = 'Bom\tdia'

// [ 'B', 'o', 'm', 'd', 'i', 'a' ]
console.log(texto.match(/./gi))

// [ 'B', 'o', 'm', '\t', 'd', 'i', 'a' ]
console.log(texto2.match(/./gi))

// [ 'Bom', 'dia' ]
console.log(texto.match(/.../gi))

// null
console.log(texto.match(/..../gi)) // o ponto não engloba o \n

// dotall - algumas linguagens tem uma flag /exp/s, mas JS não!