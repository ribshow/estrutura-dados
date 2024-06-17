//import Fila from "./classes/Fila.js";
const Fila = require('./classes/Fila.js')

let fila = new Fila();

fila.adicionar("1°Elemento")
fila.adicionar("2°Elemento")
fila.adicionar("3°Elemento")
fila.adicionar("4°Elemento")

console.log(fila.ver())
