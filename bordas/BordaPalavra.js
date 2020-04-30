const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

// [ 'diatonico', 'diafragma' ]
console.log(texto1.match(/\bdia\w+/gi))

// [ 'dia', 'diatonico', 'diafragma' ]
console.log(texto1.match(/\bdia\w*/gi))

// [ 'media', 'wikipedia', 'bom_dia', 'melodia' ]
console.log(texto1.match(/\w+dia\b/gi))

// [ 'radial' ]
console.log(texto1.match(/\w+dia\w+/gi))

// [ 'dia', 'diatonico', 'diafragma', 'media', 'wikipedia', 'bom_dia', 'melodia', 'radial' ]
console.log(texto1.match(/\w*dia\w*/gi))

// [ 'dia' ]
console.log(texto1.match(/\bdia\b/gi))

// borda é oposto de 'não \w', que é [^A-Za-z0-9]... tempos problemas com acentos


const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'

// [ 'dia', 'dia', 'dia' ]
// dia / média / wikipédia / bom-dia
console.log(texto2.match(/\bdia\b/gi))

// [ 'dia', 'diatônico', 'diafragma,', 'média', 'wikipédia', 'bom-dia', 'melodia', 'radial' ]
// a vírgula entra
console.log(texto2.match(/(\S*)?dia(\S*)?/gi))

// [ 'dia', 'diatônico', 'diafragma', 'média', 'wikipédia', 'bom-dia', 'melodia', 'radial' ]
console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi))