// RECEBA O NOME E O PREÇO DE 3 PRODUTOS
// E RECOMENDE O MAIS BARATO

produto = {};

produto.nome = [];
produto.preco = [];

// Recebo nome e preço dos produtos e envio para os arrays
for(var i=0; i<3; i++){
    var nome = prompt('Qual nome do produto?');
    produto.nome.push(nome);
    var preco = parseFloat(prompt('Qual preço do produto?'));
    produto.preco.push(preco);
}

// Uso if e else if para comparar os produtos e verificar
// qual é o mais barato para o cliente
if(produto.preco[0]<produto.preco[1] && produto.preco[0]<produto.preco[2]){
    console.log(`O produto ${produto.nome[0]} possuí o melhor preço, compre-o.`);
}else if(produto.preco[1]<produto.preco[0] && produto.preco[1]<produto.preco[2]){
    console.log(`O produto ${produto.nome[1]} possuí o melhor preço, compre-o.`);
}else if(produto.preco[2]<produto.preco[0] && produto.preco[2]<produto.preco[1]){
    console.log(`O produto ${produto.nome[2]} possuí o melhor preço, compre-o.`);
}