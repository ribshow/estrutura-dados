// importando o modulo
import Pilha from "/classes/Pilha.js";

console.log("\n==================== PILHAS ======================\n");

var pilha = new Pilha();

// Podemos adicionar qualquer tipo de elemento na Fila/Pilha
pilha.adicionar({nome: "Produto 1", valor: 10});
pilha.adicionar({nome: "Produto 2", valor: 1.99});
pilha.adicionar({nome: "Produto 3", valor: 5});
var produto4 = {nome: "Produto 4", valor: 8.5};
pilha.adicionar(produto4);

// Ver os itens na pilha
console.log("Quem são os itens na pilha:");
console.log(pilha.toString());

// Ver o primeiro (último) elemento na pilha
console.log("Próximo produto a sair: ", pilha.ver().nome);

// Remover um item da pilha, remove o último adicionado:
var produto = pilha.remover();
console.log(`O produto: ${produto.nome} estragou, perdi R$ ${produto.valor}`);

// Podemos criar quantas Pilhas/Filas precisarmos
var vendas = new Pilha();

console.log("Vendas atuais: ", vendas.tamanho());
// Tira um produto da pilha e adiciona na pilha de vendas
console.log("Leva 2 produtos para pilha de vendas");
vendas.adicionar(pilha.remover());
vendas.adicionar(pilha.remover());

console.log("Vendas depois do movimento: ", vendas.tamanho());
console.log("Pilha depois do movimento: ", pilha.tamanho());