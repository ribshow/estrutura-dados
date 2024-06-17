// AS FILAS (QUEUES) SÃO ESTRUTURAS DE DADOS DO TIPO FIFO
// FIRST IN, FIRST OUT - PRIMEIRO QUE ENTRA, PRIMEIRO QUE SAI

/*
    São utilizadas em sistemas que:
-> Necessitam controlar a ordem de chegada ou pedidos;
-> Impressão de itens;
-> Troca de mensagens.
*/

export default class Fila{
    constructor(){
        // Cria o array que irá armazenar nossa fila
        this.itens = [];
    }

    adicionar(elemento){
        // Adiciona o elemento ao final da fila
        // É equivalente a a this.itens.push(elemento)
        this.itens[this.itens.length] = elemento
    }

    // Visualiza o primeiro elemento da fila sem remover
    ver(){// Geralmente é visto como pegar
        return this.itens[0]
    }
    
    // Remove o primeiro elemento da fila e o retorna
    remover(){
        return this.itens.shift()
    }
    
    // Verifica se o array está vazio
    esta_vazia(){
        // Deve retornar TRUE se não tiver elementos no array
        // Compara o tamanho do array com 0
        return this.itens.length == 0
    }

    // Verifica o tamanho da fila
    tamanho(){
        return this.itens.length
    }
    
    // Limpando o array
    limpar(){
        this.itens = []
    }

    // Função obrigatório de toda classe
    toString(){
        // Transforma o array em um texto único, geralmente só
        //sobrecarregamos quando queremos personalizar o retorno
        //return this.itens.toString()

        let texto = ""
        texto += ` ==== ELEMENTOS NA FILA ====\n`
        for(var i = 0; i<this.itens.length; i++){
            texto += `[ ${i+1}° ] => ${this.itens[i]}\n`
        }
        texto += ` ==== ============ ====\n`
        return texto 

    }
}