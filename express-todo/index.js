const express = require('express');

const server = express();

// habilita nuestro server ppara poder recibir peticiones en formato JSON
server.use(express.json())

const todos = [];


// listar los todos
server.get('/todos', (request, response) => {
  response.json({
    message: "all todos",
    todos: todos
  }

  )
})

// agregar un todo
server.post('/todos', (request, response) => {
 const newTodo = request.body.todo;

 if (!newTodo) {
  response.status(400);
  response.json({
    message: "todo is required",
  });

  return;
 }

 todos.push(newTodo)

 response.json({
  message: 'new todo added',
  todos: todos,
 })
});

// eliminar un todo
server.delete('/todos/:idx',(request, response) => {
  const indexToDelete = request.params.idx;
  const indexAsInteger = parseInt(indexToDelete);

  if (isNaN(indexAsInteger)) {
    response.status(400)
    response.json({
      message: 'invalid index, must be a number'
    })
    return
  }

  if (indexAsInteger < 0 || indexAsInteger >= todos.lenght) {
    response.status(400);
    response.json({
      message: 'invalid index, out of bound',
    });
    return
  }

  todos.splice(indexAsInteger, 1);

  response.json({
    message:"todo deleted succesfully",
    todos: todos,
  })

})

server.listen(8080, () => {
  console.log('server running on port 8080')
})