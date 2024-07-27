// con esto se llama al modulo de fs.
  const fs = require('node:fs');


// // con esto se crea un archivo y le mete el contenido que quieras
  fs.writeFileSync('hola.txt', 'Hola Koders!');

fs.readFileSync('<hola.txt>'); 