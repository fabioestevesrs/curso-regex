const texto = '1,2,3,4,5,6,7,8,9,a.b c!d?e[f'

// para definir uma classe (ou conjunto) de caracteres usa []
const regexPares = /[02468]/g

// [ '2', '4', '6', '8' ]
console.log(texto.match(regexPares))

const texto2 = 'João não vai passear na moto.'
const regexComESemAcento = /n[aã]/g

// [ 'nã', 'na' ]
console.log(texto2.match(regexComESemAcento))