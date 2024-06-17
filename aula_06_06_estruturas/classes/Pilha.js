// AS PILHAS (STACKS) SÃO ESTRUTURAS DE DADOS DO TIPO LIFO
// LAST-IN FIRST-OUT ÚLTIMO QUE ENTRA É O PRIMEIRO QUE SAI

/*
* São utilizadas em sistemas que:
* -> Funções recursivas em compiladores;
* -> Mecanismos de fazer/desfazer de editores;
* -> Navegação entre páginas;
*/

export default class Pilha{
    constructor(){
        this.itens = []
    }
    // adiciona um elemento a pilha 
    adicionar(elemento){
        this.itens[this.itens.length] = elemento 
    }
    
    // ver o último elemento da pilha
    ver(){
        return this.itens[this.itens.length-1]
    }

    // remove e retorna o último elemento da pilha 
    remover(){
        return this.itens.pop()
    }

    // verifica se a pilha está vazia
    esta_vazia(){
        return this.itens.length == 0
    }

    // retorna o tamanho da pilha
    tamanho(){
        return this.itens.length
    }

    // limpa todos os elementos da pilha
    limpar(){
        this.itens = []
    }
    toString(){
        var texto = "";
        texto += ` ==== ELEMENTOS NA PILHA ==== \n`
        for(let i = (this.itens.length-1); i > -1 ; i--)
        {
            texto+= `[ ${i+1}° ] => ${this.itens[i]}\n`
        }
        texto += ` ==== ============ ====\n`

        return texto
    }
}