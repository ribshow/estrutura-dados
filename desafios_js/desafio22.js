// GERE 3 NÚMEROS ALEATÓRIOS ENTRE 1 E 100
// E APRESENTE DE FORMA DESCRESCENTE 

// Define sorteado como um conjunto, não aceitando elementos repetidos.
var sorteado = new Set();

// Loop vai rodar enquanto sorteado não possuir 3 números únicos.
while(sorteado.size<3){
    numero = parseInt(Math.random()*101);
    sorteado.add(numero);
}

// Transformo o conjunto sorteado em um array para ficar mais fácil de percorrer
var sorteados = Array.from(sorteado);

// Por ser 3 números, temos 6 combinações possíveis
// Portanto 6 condições if / else if
if(sorteados[0]>sorteados[1] && sorteados[1]>sorteados[2]){
    console.log(sorteados[0],sorteados[1],sorteados[2]);
}else if(sorteados[0]>sorteados[2] && sorteados[2]>sorteados[1]){
    console.log(sorteados[0],sorteados[2],sorteados[1]);
}else if(sorteados[1]>sorteados[0] && sorteados[0]>sorteados[2]){
    console.log(sorteados[1],sorteados[0],sorteados[2]);
}else if(sorteados[1]>sorteados[2] && sorteados[2]>sorteados[0]){
    console.log(sorteados[1],sorteados[2],sorteados[0]);
}else if(sorteados[2]>sorteados[1] && sorteados[1]>sorteados[0]){
    console.log(sorteados[2],sorteados[1],sorteados[0]);
}else if(sorteados[2]>sorteados[0] && sorteados[0]>sorteados[1]){
    console.log(sorteados[2],sorteados[0],sorteados[1]);
}


console.log(sorteado);