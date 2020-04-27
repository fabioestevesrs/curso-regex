const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

// para definir um quantificador usa {}

// [ '12', '0', '6', '9', '21', '23', '45', '46' ]
console.log(texto.match(/\d{1,2}/g))

// [ '12', '21', '23', '45', '46' ]
console.log(texto.match(/[0-9]{2}/g))

// [ '120', '6', '9', '21', '23', '45', '46' ]
console.log(texto.match(/\d{1,}/g))

// [ 'recebeu', 'apostan' ]
// milhões não retornou pois o 'ô' não está no grupo \w
console.log(texto.match(/\w{7}/g))

// [ 'recebeu', 'milhões', 'apostando' ]
console.log(texto.match(/[\wõ]{7,}/g))

// [ 'o receb', 'eu 120 ', 'milhões', ' aposta', 'ndo 6 9', ' 21 23 ' ]
console.log(texto.match(/[\wõ\s]{7}/g))


// no futuro
// [ '6', '9', '21', '23', '45', '46' ]
console.log(texto.match(/\b\d{1,2}\b/g))

// [ 'recebeu', 'milhões' ]
console.log(texto.match(/\b[\wõ]{7}\b/g))