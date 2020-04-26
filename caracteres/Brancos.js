const texto = `
ca	r
r	o s!
`
// [ 'ca', index: 1, input: '\nca\tr\nr\to s!\n' ]
console.log(texto.match(/ca/))

// [ 'ca\t', index: 1, input: '\nca\tr\nr\to s!\n' ]
console.log(texto.match(/ca\t/))

// [ 'ca\tr', index: 1, input: '\nca\tr\nr\to s!\n' ]
console.log(texto.match(/ca\tr/))

// [ 'ca\tr\n', index: 1, input: '\nca\tr\nr\to s!\n' ]
console.log(texto.match(/ca\tr\n/))

// [ 'ca\tr\nr', index: 1, input: '\nca\tr\nr\to s!\n' ]
console.log(texto.match(/ca\tr\nr/))

// [ 'ca\tr\nr\t', index: 1, input: '\nca\tr\nr\to s!\n' ]
console.log(texto.match(/ca\tr\nr\t/))

// [ 'ca\tr\nr\to', index: 1, input: '\nca\tr\nr\to s!\n' ]
console.log(texto.match(/ca\tr\nr\to/))

// [ 'ca\tr\nr\to s!', index: 1, input: '\nca\tr\nr\to s!\n' ]
console.log(texto.match(/ca\tr\nr\to\ss!/))

// [ 'ca\tr\nr\to s!', index: 1, input: '\nca\tr\nr\to s!\n' ]
console.log(texto.match(/ca\tr\nr\to s!/))