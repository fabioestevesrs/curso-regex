const texto = '1,2,3,a.b c!d?e[f'

// [ ',', ',', ',', 'a', '.', 'b', ' ', 'c', '!', 'd', '?', 'e', '[', 'f' ]
console.log(texto.match(/\D/g))

// dentro do conjunto, ^ significa negação
// [ ',', ',', ',', 'a', '.', 'b', ' ', 'c', '!', 'd', '?', 'e', '[', 'f' ]
console.log(texto.match(/[^0-9]/g))

// [ ',', ',', ',', 'a', '.', 'b', ' ', 'c', '!', 'd', '?', 'e', '[', 'f' ]
console.log(texto.match(/[^\d]/g))

// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(texto.match(/[^\d!\?\[\s,\.]/g))


const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

// temos 2 intervalos: !-/ e :-@
// [ '1', '2' ]
console.log(texto2.match(/[^!-/:-@\s]/g))