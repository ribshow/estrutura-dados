// Solicite a temperatura de 7 dias e tire a média.

temperatura = [];
somatoria = [];
var soma = 0;

// Recebendo a temperatura de cada dia e guardando no array temperatura
for(var i=0; i<7; i++){
    var temp = parseFloat(prompt('Informe a temperatura dos últimos 7 dias:'));
    temperatura.push(temp);
}
// Exibindo a temperatura de cada dia separadamente
for(var i=0; i<7; i++){
    console.log(`Temperatura dia ${i+1}: ${temperatura[i]}°`);
}
// Colocando o array como parâmetro garanto que todos os valores
// dentro dele serão somados
for(var i=0; i<temperatura.length; i++){
    soma += temperatura[i];
    somatoria.push(soma);
}
// Escolho a última posição do array somatoria pois é onde ocorreu
// a última soma
var media = somatoria[6]/7;
console.log("======");
console.log(`Temperatura média: ${media.toFixed(1)} graus.`);
