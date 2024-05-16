const fs = require('node:fs');

fs.mkdirSync('new-directory', function () {
  console.log('Directorio creado');
});