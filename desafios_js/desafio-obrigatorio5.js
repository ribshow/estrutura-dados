// Usando for e while

var patinhos = parseInt(prompt("Quantos patinhos foram passear?"));
var patinhosIni = patinhos;

// Criei um objeto e divide a música por linhas
musica = {};
var menos = 1;
var menos2 = 0;

musica.linha1 = ["patinhos foram passear"];
musica.linha10 = ["patinho foi passear"];
musica.linha2 = ["Além das montanhas para brincar"];
musica.linha3 = ["A mamãe patinho gritou quack quack quack quack, mas só"];
musica.linha4 = ["patinhos voltaram de lá"];
musica.linha9 = ["patinho voltou de lá"];
musica.linha5 = ["A mamãe patinho foi procurar"];
musica.linha6 = ["Além das montanhas, na beira do mar"];
musica.linha7 = ["A mamãe gritou: quack quack quack quack"];
musica.linha8 = [`E todos os ${patinhosIni} patinhos voltaram de lá`];
musica.linha11 = ["A mamãe patinho gritou quack quack quack quack"];
musica.linha12 = ["Mas nenhum patinho voltou de lá"];

// Primeiro DO repete as linhas do 1 ao 3 enquanto
// o número de patinhos for maior ou = 2 
do{console.log(`${patinhos} ${musica.linha1}`);
console.log(`${musica.linha2}`);
console.log(`${musica.linha3}`);
patinhos--;
// IF verifica número atual de patinhos, se o número
// for maior ou = 2 repete a linha4
if(patinhos>=2){
    console.log(`${patinhos} ${musica.linha4}`);
// Porém se o número de patinhos for menor que 2
// repete a linha 9
}else if(patinhos<2){
    console.log(`${patinhos} ${musica.linha9}`);
}
}while(patinhos>menos);
// Segundo DO WHILE exibindo linha 10 ao invés da 1 
do{console.log(`${patinhos} ${musica.linha10}`);
console.log(`${musica.linha2}`);
if(patinhos == 1){
    console.log(`${musica.linha11}`);
}else if(patinhos == 0){
    console.log(`${musica.linha11}`);
patinhos--;
}
patinhos--;
if(patinhos>1){
    console.log(`${patinhos} ${musica.linha9}`);
}else if(patinhos == 0){
    console.log(`${musica.linha12}`);
}
}while(patinhos>menos2);

for(var i=5; i<6; i++){
    console.log(`${musica.linha5}`);
    console.log(`${musica.linha6}`);
    console.log(`${musica.linha7}`);
    console.log(`${musica.linha8}`);
}