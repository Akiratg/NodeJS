const prompt = require("prompt-sync")();
const nombres = [];
let continuar = true;

while (continuar) {
  const nombre = prompt("Ingresa un nombre: ");
  nombres.push(nombre);
  const respuesta = prompt("Quieres ingresar otro nombre ?");

  if (respuesta.trim() !== "si") {
    continuar = false;
  }
}

const nombresUnicos = [...new Set(nombres)]
const hayRepetidos = nombresUnicos.length !== nombres.length


console.log("Numero de nombres ingresados: ", nombres.length)
console.log("Hay valores repetidos: ", hayRepetidos);

