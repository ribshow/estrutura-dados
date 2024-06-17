// importa a classe para que ela possa ser utilizada/instanciada

import Fila from '/classes/Fila.js';

console.log("\n==================== FILAS ======================\n");

// cria uma instância da Classe para ser utilizada

var fila = new Fila();

// Verificar o tamanho da fila
console.log("Tamanho Atual:", fila.tamanho());

// Adicionar elementos na Fila
console.log("Adicionar 4 pessoas à fila");
for(var i=1; i<=4 ;i++){
   fila.adicionar(`Pessoa ${i}`);
}

console.log("\nTamanho após adicionar: ", fila.tamanho());
console.log(" Quem são as pessoas na fila? ");
console.log(fila.toString());

// Ver/Usar quem é na primeira pessoa da fila, sem a remover da fila
var pessoa = fila.ver();
console.log(`A primeiro pessoa da fila é: ${pessoa}`);

console.log("\nTamanho após ver: ",fila.tamanho());

//Remover uma pessoa da fila
// Esse processo retorna o primeiro item da fila
console.log("A primeira pessoa foi embora: ", fila.remover());
console.log(" Quem são as pessoas na fila depois de remover?");
console.log(fila.toString());

// Usando em uma situação:
var tamanho = fila.tamanho();
for(var i = 0; i<tamanho; i++){
   console.log(`A ${fila.remover()} comprou o ingresso e foi embora!`);
}
console.log("Tamanho da fila depois das compras: ",fila.tamanho());