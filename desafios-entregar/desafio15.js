// CALCULE A FATORIAL DE N.

var numero = parseInt(prompt('Digite um número inteiro: '));
var fatorial = 1;

// Pelo fatorial de 1 e 0 ser 1, começamos com j valendo 2 para
// simplificar o cálculo
for(var j=2; j<=numero; j++){
        fatorial *= j;
}
console.log('Fatorial: ',fatorial);