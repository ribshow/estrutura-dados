export default class Pilha{
    constructor(){
        this.itens = []
    }

    // Adiciona um elemento a pilha
    adicionar(elemento){
        this.itens[this.itens.length] = elemento 
    }

    // Exibe o primeiro elemento da Pilha
    ver(){
        return this.itens[this.itens.length-1]
    }

    // Remove o último elemento da pilha e o retorna
    remover(){
        return this.itens.pop()
    }

    // Verifica se a pilha está vazia 
    esta_vazia(){
        return this.itens.length == 0
    }

    // Verifica o tamanho da pilha
    tamanho(){
        return this.itens.length
    }

    // Limpa a pilha
    limpar(){
        this.itens = []

    // Personaliza o toString da pilha
    }
    toString(){
        let texto = ""
        texto += ` ==== ELEMENTOS NA PILHA ==== \n`
        for(let i = 1; i<=this.itens.length; i++)
        {
            texto+= `[ ${(this.itens.length)-i}° ] => ${this.itens[this.itens.length-i]}\n`
        }
        texto += ` ==== ============ ====\n`

        return texto
    }
}
