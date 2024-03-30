// CRIAR NOTAS FISCAIS 

notas = {};

notas.num = [];
notas.valor =[];

for(var i=0; i<5; i++){
    var notaNumero = parseInt(prompt(`Digite o número da nota: `));
    notas.num.push(notaNumero);
    var notaValor = parseFloat(prompt(`Digite o valor da nota ${notas.num[i]}: `));
    notas.valor.push(notaValor);
}

//Exiba todas as notas fiscais
for(var i=0; i<5; i++){
    console.log(`Nota ${notas.num[i]} Valor: R$${notas.valor[i]}`);
}

//Total da soma das notas fiscais
var soma = 0;

for(var i=0; i<notas.valor.length; i++){
    soma += notas.valor[i];
}
console.log("==========")
console.log(`Soma total: R$${soma.toFixed(2)}`);

//Média total das notas fiscais
var media = soma/5;
console.log("==========")
console.log(`Média: R$${media.toFixed(2)}`);

//Maior nota fiscal
console.log("Maior nota fiscal");
if(notas.valor[0]>notas.valor[1] && notas.valor[0]>notas.valor[2] &&
   notas.valor[0]>notas.valor[3] && notas.valor[0]>notas.valor[4]){
        console.log(`Nota ${notas.num[0]} Valor R$${notas.valor[0]}`);
    }else if(notas.valor[1]>notas.valor[0] && notas.valor[1]>notas.valor[2] &&
             notas.valor[1]>notas.valor[3] && notas.valor[1]>notas.valor[4]){
                console.log(`Nota ${notas.num[1]} Valor R$${notas.valor[1]}`);
        }else if(notas.valor[2]>notas.valor[0] && notas.valor[2]>notas.valor[1] &&
                 notas.valor[2]>notas.valor[3] && notas.valor[2]>notas.valor[4]){
                    console.log(`Nota ${notas.num[2]} Valor R$${notas.valor[2]}`);
                 }else if(notas.valor[3]>notas.valor[0] && notas.valor[3]>notas.valor[1] &&
                          notas.valor[3]>notas.valor[2] && notas.valor[3]>notas.valor[4]){
                            console.log(`Nota ${notas.num[3]} Valor R$${notas.valor[3]}`);
                          }else if(notas.valor[4]>notas.valor[0] && notas.valor[4]>notas.valor[1] &&
                                   notas.valor[4]>notas.valor[2] && notas.valor[4]>notas.valor[3]){
                                    console.log(`Nota ${notas.num[4]} Valor R$${notas.valor[4]}`);
                                   }

//Menor nota fiscal
console.log("Menor nota fiscal");
if(notas.valor[0]<notas.valor[1] && notas.valor[0]<notas.valor[2] &&
    notas.valor[0]<notas.valor[3] && notas.valor[0]<notas.valor[4]){
         console.log(`Nota ${notas.num[0]} Valor R$${notas.valor[0]}`);
     }else if(notas.valor[1]<notas.valor[0] && notas.valor[1]<notas.valor[2] &&
              notas.valor[1]<notas.valor[3] && notas.valor[1]<notas.valor[4]){
                 console.log(`Nota ${notas.num[1]} Valor R$${notas.valor[1]}`);
         }else if(notas.valor[2]<notas.valor[0] && notas.valor[2]<notas.valor[1] &&
                  notas.valor[2]<notas.valor[3] && notas.valor[2]<notas.valor[4]){
                     console.log(`Nota ${notas.num[2]} Valor R$${notas.valor[2]}`);
                  }else if(notas.valor[3]<notas.valor[0] && notas.valor[3]<notas.valor[1] &&
                           notas.valor[3]<notas.valor[2] && notas.valor[3]<notas.valor[4]){
                             console.log(`Nota ${notas.num[3]} Valor R$${notas.valor[3]}`);
                           }else if(notas.valor[4]<notas.valor[0] && notas.valor[4]<notas.valor[1] &&
                                    notas.valor[4]<notas.valor[2] && notas.valor[4]<notas.valor[3]){
                                     console.log(`Nota ${notas.num[4]} Valor R$${notas.valor[4]}`);
                                    }
