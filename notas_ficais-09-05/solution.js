var numNfs = 1;
var listNF = [];
function cadastro(){
    console.log("Vamos cadastrar! Informe os dados da NF:")
    // CRIANDO OBJETO NF 
    var nf = {
        num: numNfs,
        date: prompt("Informe a Data de Emissão da NF:"),
        name: prompt("Informe o Nome do Cliente:"),
        cpf: prompt("Informe o CPF do Cliente:"),
        address: prompt("Informe o Endereço do Cliente:"),
        option: prompt("Informe: 1-Retirada ou 2-Entrega"),
        listProducts: [],
        value_t: 0
        }
            // criando um array para receber os produtos a serem cadastrados
        var listProducts = []
        
        do{
            // criando um objeto para receber produtos 
            var product = {
                name: prompt("Digite o nome do Produto:"),
                value_unit: parseFloat(prompt("Digite o preço do Produto:")),
                quantity: parseFloat(prompt("Digite a quantidade de Produtos:")),
                discount: parseFloat(prompt("Digite o valor do desconto do Produto, se não houver digite 0:"))
                }
        
                nf.listProducts[nf.listProducts.length] = product
        
                nf.value_t += (product.value_unit * product.quantity) - product.discount
        
        
                var addProduct = parseInt(prompt("Deseja adicionar um novo produto?"))
        }while(addProduct == 1)
        listNF[listNF.length] = nf
        console.log(`Nota Fiscal [ ${numNfs} ] no valor de: [ R$${nf.value_t},00 ] cadastrada com sucesso!`)
        numNfs++

}

function exibir_produto(){
    // === EXIBINDO OS PRODUTOS ===
    console.log("Informe o número da NF que deseja imprimir:")
    // Recebendo o número da nota que a pessoa deseja exibir
    var viewNF = parseInt(
        prompt("Informe o número da NF que deseja imprimir:")
    )
    // Usando um for para percorrer as notas fiscais
    var exists = false
    for(let i=0;i<listNF.length;i++){
        // Usando if para comparar numero da nota com a posição da nota no array
        if(listNF[i].num == viewNF){
            console.log("\n\n === NOTA FISCAL ===")
            console.log("Nota Fiscal:", listNF[i].num)
            console.log("Data de emissão:", listNF[i].date)
            console.log("Cliente:", listNF[i].name)
            console.log("CPF:", listNF[i].cpf)
            console.log("Endereço:", listNF[i].address)
            console.log("Forma de entrega:", listNF[i].option)
            console.table(listNF[i].listProducts)
            console.log("TOTAL DA NF ======>:", listNF[i].value_t)

            exists = true
        }
        if(exists == false){
            console.error("NF não encontrada!")
        }
    }

}

function exibir_todas(){
    for(let i=0; i<listNF.length; i++){
        console.log(`Nota: ${listNF[i].num}`)
        console.log(`Cliente: ${listNF[i].name}`)
        console.log(`CPF: ${listNF[i].cpf}`)
        console.log(`Endereço: ${listNF[i].address}`)
        console.log(`Opção(1-Entrega/2-Retirada)${listNF[i].option}`)
        console.log(`Valor Total: ${listNF[i].value_t}`)
    }
}

function remover_nota(){
    let remove = parseInt(prompt(`Qual nota deseja remover? ${listNF}`))
    listNF.filter(function (remove) {
        return listNF !== remove
    })
    console.log(`Nota ${remove} removida!`)
}

do{
    console.log("=== MENU DO SISTEMA ===")
    console.log("Escolha uma opção:")
    console.log("\n 1 - Cadastrar uma Nota Fiscal")
    console.log(" 2 - Imprimir uma Nota Fiscal")
    console.log(" 3 - Imprimir uma relação de Notas Fiscais")
    console.log(" 4 - Excluir uma nota")
    console.log(" 5 - Sair do Sistema")

    var respost = parseInt(prompt("Digite uma das opções do menu: 1-CAD/2-ShowOnly/3-ShowAll/4-Remove/5-Exit"))

    if(respost == 1){
        cadastro()
    }else if(respost == 2){
        exibir_produto()
    }else if(respost == 3){
        exibir_todas()
    }else if(respost == 4){
        remover_nota()
    }else if(respost == 5){
        console.log("Obrigado por usar nosso sistema, até mais!")
    }
}while(respost != 5)