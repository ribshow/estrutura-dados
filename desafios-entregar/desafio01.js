// RECEBER UMA LETRA E VERIFICAR SE É VOGAL OU CONSOANTE

const vogal = ["a","e","i","o","u"];
const consoante = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];

var letra = prompt("Digite uma letra: ");

console.log("Letra digitada: ",letra);

for(var i=0; i<26; i++){
    if(vogal[i] === letra) {
        console.log("Você digitou uma vogal. ");
    }else if(consoante[i] === letra){
        console.log("Você digitou uma consoante. ");
    }
}