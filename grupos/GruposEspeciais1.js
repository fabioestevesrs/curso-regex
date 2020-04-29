const texto = 'João é calmo, mas no transito fica nervoso.'

// [ 'João', 'é', 'calmo', 'mas', 'no', 'transito', 'fica', 'nervoso' ]
console.log(texto.match(/[\wÀ-ú]+/gi))

// Positive lokahead
// Exemplo: buscar tudo que está imediatamente antes da vírgula
// [ 'calmo' ]
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi))

// Exemplo: buscar tudo que está imediatamente antes de ponto
// [ 'nervoso' ]
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))

// [ 'calmo' ]
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi))


// Negative lookahead
// Exemplo: buscar tudo que não está imediatamente antes de vírgula
// [ 'João', 'mas', 'no', 'transito', 'fica', 'nervoso' ]
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi))

// [ 'João ', 'é ', 'mas ', 'no ', 'transito ', 'fica ', 'nervoso.' ]
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))