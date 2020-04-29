const texto = 'O José Simão é muito engraçado... hehehehehehe'

// [ 'he', 'he', 'he', 'he', 'he', 'he' ]
console.log(texto.match(/(he)/g))

// [ 'hehehehehehe' ]
console.log(texto.match(/(he)+/g))


const texto2 = 'http://www.site.info https://www.site.info www.escola.ninja.br google.com.ag'

// [ 'http://www.site.info', 'www.escola.ninja', 'google.com' ]
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.{2})?/g))