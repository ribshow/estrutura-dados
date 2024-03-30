// RECEBER 3 VALORES E FAZER A SOMA DOS DOIS MAIORES

var valor = [];

for(var i=0; i<3; i++){
    var valores = parseFloat(prompt('Digite um valor:'));
    valor.push(valores);
}
console.log("Números digitados: ",valor);

// Verificando com if e else if o menor valor
// e depois somando os dois maiores
if(valor[0]<valor[1] && valor[0]<valor[2]){
    var soma = valor[1]+valor[2];
    console.log(`Soma ${valor[1]}+${valor[2]}= `,soma);
}else if(valor[1]<valor[0] && valor[1]<valor[2]){
    var soma = valor[0]+valor[2];
    console.log(`Soma ${valor[0]}+${valor[2]}= `,soma);
}else if(valor[2]<valor[0] && valor[2]<valor[1]){
    var soma = valor[0]+valor[1];
    console.log(`Soma ${valor[0]}+${valor[1]}= `,soma);
}
