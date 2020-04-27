const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// quantidades SÃO gulosos (greedy)...

// [ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]
console.log(texto.match(/<div>.+<\/div>/g))

// [ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]
console.log(texto.match(/<div>.*<\/div>/g))

// [ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]
console.log(texto.match(/<div>.{0,100}<\/div>/g))


// quantificadores NÃO gulosos (lazy)...

// [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]
console.log(texto.match(/<div>.+?<\/div>/g))

// [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]
console.log(texto.match(/<div>.*?<\/div>/g))

// [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]
console.log(texto.match(/<div>.{0,100}?<\/div>/g))