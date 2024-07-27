const prompt = require('prompt-sync')();

// function para recibir los nombres
  function getNames() {
    let names = [];
    let continuar = true;

    while(continuar) {
      const text = prompt("Ingresa un nombre: ");
      if (text === "") {
        continuar = false;
      } else {
        names.push(text);
      }
    }

    return names;
  }


//function para obtener el nombre mas largo

  function getLongestName(names){
    let longestName = names[0];

    for (let name of names) {
      if (name.length > longestName.length) {
        longestName = name;
      }
    }

    return longestName;
  }

//function para obtener el nombre mas corto
  
function getShortestName(names){
  let shortestName = names[0];

  for (let name of names) {
    if (name.length < shortestName.length) {
      shortestName = name;
    }
  }

  return shortestName;
}

// function valor repetido
  function hasRepeatedValue(names) {
    let uniqueNames = [];

    for (let name of names) {
      if (uniqueNames.includes(name)) return true;

      uniqueNames.push(name);
    }

    return false;
  }

  console.log("Bienvenido, este programa te ayudara a registrar una lista de nombres");
  console.log("ingresa un nombre o ningun valor para terminar la lista")

  const names = getNames();
  const longestName = getLongestName(names);
  const shortestName = getShortestName(names);
  const hasRepeated = hasRepeatedValue(names);
  const namesCount = names.length
  
  console.log(`Se ingresaron ${namesCount} nombres`);
  console.log(`El nombre mas largo es: ${longestName}`);
  console.log(`El nombre mas corto es: ${shortestName}`);
  console.log(`${hasRepeated ? "Tiene" : "No tiene"} valores repetidos`)
