const express = require('express');
const server = express();
const port = 8080;

const koders = [
  {
    name: 'Omar',
    generation: 33,
  },
  {
    name: 'Hugo',
    generation: 33,
  },
  {
    name: 'Fer',
    generation: 33,
  },
  
]

// habilita nuestro server ppara poder recibir peticiones en formato JSON
server.use(express.json())

server.get('/', (request, response) => {
  console.log('GET root');
  response.writeHead(400, {
    "Content-Type": "text/plain",
    "Yo-soy": "Akira",
  });

  response.end('hola mundo');
});

server.post('/koders', (request, response)=> {
  console.log('body: ', request.body);
  const newKoderName = request.body.name;
  const newKoderGen = request.body.generation;

  const newKoder = {
    name: newKoderName,
    generation: newKoderGen,
  } 

  koders.push(newKoder);
  response.json(koders);
});

// responder lista de koders
server.get('/koders', (request, response) => {
  // response.writeHead(200, {
  //   'Content-Type': 'application/json'
  // })
  // response.end(JSON.stringify(koders));

  response.status(500);
  response.json(koders)
})

server.listen(port, () => {
  console.log('Server ready');
});