// con esto se llama al modulo de fs.
const fs = require('node:fs');


// // con esto se puede leer el contenido de un archivo.
const content = fs.readFileSync('hola.txt', 'utf-8'); 
console.log('content: ', content);