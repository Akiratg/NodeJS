// todo add "tarea"
// todo done "eliminar de list ade tareas"
// todo ls "para enlistar todas las tareas pendientes"
// todo alv "elliminiar todoooo"

// necesitamos 
  // - un archivo para guardar los todos (.json)
  // - una funcion para cada comando
  // - usar ProcessingInstruction.argv para leer los comandos
  // - usar fs para leer y escribir el archivo

  const fs = require('fs');

  

  const dbFile = 'db.json';

  function init() {
    // crear el archivo de base de datos
    const fileExists = fs.existsSync(dbFile)

    if (!fileExists) {
      fs.writeFileSync(dbFile, JSON.stringify({todos: []}))
    }
  }

  function getTodos() {
    const content = fs.readFileSync(dbFile, 'utf8');
    return JSON.parse(content).todos;
  }


  function updateTodos(todos) {
    const newTodos = { todos: todos };
    const newTodosAsString = JSON.stringify(newTodos);
    fs.writeFileSync(dbFile, newTodosAsString)
  }

  function add (task) {
    //leer el archivo
    // agregar el archivo
    const todos = getTodos();
    todos.push(task)
    updateTodos(todos)
  }

  function done (taskIndex) {
    //leer el archivo
    //eliminar la tarea del archivo

    const todos = getTodos();
    todos.splice(taskIndex, 1);
    updateTodos(todos);

  }

  function ls() {
    // leer el archivo
    const todos = getTodos();

    if (!todos.length) {
      console.log("[EMPTY]");
      process.exit();
    }
    todos.forEach((element, idx) => {
      console.log(idx, "-", element)
    })
    }

  function alv() {
    // actualizar el archivo
    updateTodos([]);
  }

  function main() {
    const command = process.argv[2];
    const arg = process.argv[3];

    init()

    if (command === 'ls') {
      ls ()
    } else if (command === 'add') {
      if (!arg) {
        console.error('Missing task');
        process.exit(1)
      } else if (command === 'done') {
        if (!arg) {
          console.error('Missing task index')
          process.exit(1);
        }
        const idx = parseInt (arg) 
        if (isNaN(idx)) {
          console.error('Invalid index')
          process.exit(1);
          
        }
        const todos = getTodos()
        if (idx < 0 || idx >= todos.lenght ) {
          console.error('Invalid index');
          process.exit(1);
        }

        done(idx);
        ls(
          console.log('Task completeded, champ!')
        )
      }

      add(arg);
      ls();
      console.log('Task added')
    } else if (command === 'alv') {
      alv();
      console.log('algo lindo vendra! hehe')
    } else {
      console.error('Invalid command: ', command)
      process.exit(1);
    }
  }

  main();

  