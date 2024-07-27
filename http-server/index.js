const http = require('node:http');

const server = http.createServer((request, response) => {
  response.end ('Hello World!')
});

server.listen(8080, () => {
  console.log('server is listening on port 8080')
});
