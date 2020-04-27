const texto = `Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - biro.biro@gmail.com
    - lero-lero@gmail.com
    - mimimi_sim@gmail.com
    - AAbb@gmail.com
    - eu@empresa.info.br
`

// ok
// [ 'fulano@cod3r.com.br', 'xico@gmail.com', 'biro.biro@gmail.com', 'lero-lero@gmail.com', 'mimimi_sim@gmail.com', 'AAbb@gmail.com', 'eu@empresa.info.br' ]
console.log(texto.match(/[\w.-]+@\w+\.[\w.-]+/g))

// incompleta
// [ 'fulano@cod3r.com', 'xico@gmail.com', 'biro@gmail.com', 'lero-lero@gmail.com', 'sim@gmail.com', 'AAbb@gmail.com', 'eu@empresa.info' ]
console.log(texto.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}/g))

// incompleta
// [ 'fulano@cod3r.com', 'xico@gmail.com', 'biro@gmail.com', 'lero-lero@gmail.com', 'mimimi_sim@gmail.com', 'AAbb@gmail.com', 'eu@empresa.info' ]
console.log(texto.match(/\w+@\w+\.\w{2,4}/g))

// incompleta
// [ 'fulano@cod3r.com', 'xico@gmail.com', 'biro.biro@gmail.com', 'lero-lero@gmail.com', 'mimimi_sim@gmail.com', 'AAbb@gmail.com', 'eu@empresa.info' ]
console.log(texto.match(/[\w.-]+@\w+\.\w{2,4}/g))

// ok
// [ 'fulano@cod3r.com.br', 'xico@gmail.com', 'biro.biro@gmail.com', 'lero-lero@gmail.com', 'mimimi_sim@gmail.com', 'AAbb@gmail.com', 'eu@empresa.info.br' ]
console.log(texto.match(/[\w.-]+@\w+\.\w{2,4}\.?\w{0,2}/g))


// no futuro
// [ 'fulano@cod3r.com.br', 'xico@gmail.com', 'biro.biro@gmail.com', 'lero-lero@gmail.com', 'mimimi_sim@gmail.com', 'AAbb@gmail.com', 'eu@empresa.info.br' ]
console.log(texto.match(/[\w.-]+@\w+\.\w{2,4}(\.\w{2})?/g))