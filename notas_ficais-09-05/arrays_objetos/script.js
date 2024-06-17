let nota_fiscal = {
    num: 0,
    data: "",
    nome: "",
    cpf: "",
    end: "",
    tipo: 0,
    produtos:[{
        nome: "",
        v_unit: 0,
        quant: 0,
        desc: 0
    }],
    v_total: 0
};
// ARRAY PARA GUARDAR AS NOTAS FISCAIS
notas = []
// PRODUTOS PADRÃO
nota_fiscal.produtos = [{nome:'Vassoura',v_unit:15.9,quant:7,desc:0.2},
                       {nome:'Sabonete',v_unit:4.39,quant:3,desc:0.5},
                       {nome:'Coxão Mole',v_unit:29.99,quant:10,desc:0.1}]

console.log(nota_fiscal)
// CADASTRO DA NOTA FISCAL
    function cadastro(){
        // Nota num inicia como 0
        let notaNum = 0
        do{
            // DECLARANDO NOVAMENTE O CONSTRUTOR DE NOTA FISCAL
            // PARA QUE SEJA CRIADA UMA NOVA NOTA FISCAL E NÃO QUE
            // A ANTERIOR SEJA SOBESCRITA
            let new_nota_fiscal = {
                num: notaNum+1,// No construtor soma-se 1 para a primeira nota fiscal não ser 0
                data: "",
                nome: "",
                cpf: "",
                end: "",
                tipo: 0,
                produtos:[{
                    nome: "",
                    v_unit: 0,
                    quant: 0,
                    desc: 0
                }],
                v_total: 0
            };
            let data = new Date()
            // pegando apenas o dia, convertendo para string e definindo um tamanho minimo
            let dia = data.getDate().toString().padStart(2,'0')
            let mes = (data.getMonth()+1).toString().padStart(2,'0')
            let ano = data.getFullYear().toString().padStart(2,'0')
            let hora = data.getHours().toString().padStart(2,'0')
            let minutos = data.getMinutes().toString().padStart(2,'0')
            let segundos = data.getSeconds().toString().padStart(2,'0')
            new_nota_fiscal.data = `${dia}/${mes}/${ano} - ${hora}:${minutos}:${segundos}`
            new_nota_fiscal.nome = prompt('Cliente:')
            new_nota_fiscal.cpf = prompt('CPF:')
            new_nota_fiscal.end = prompt('Endereço:')
            new_nota_fiscal.tipo = parseInt(prompt('Tipo: 1 - Retirada / 2 - Entrega'))

            escolher()
            // ITERANDO O ARRAY NOTAS PARA RECEBER AS NOTAS FISCAIS INDIVIDUALMENTE
            for(let i=new_nota_fiscal.num-1;i<new_nota_fiscal.num;i++){
                notas[i] = new_nota_fiscal
            }
            
            //exibir()

            repeat = parseInt(prompt('Deseja comprar novamente? 1-Sim / 2-Não'))
            // ao final da iteração somamos 1 a notaNum, ela começou valendo 0
            // agora valerá 1 e assim consecutivamente para todas notas cadastradas
            notaNum++
        }while(repeat == 1)
    }
// ESCOLHA DOS PRODUTOS QUE ENTRARÃO NA NOTA FISCAL
    function escolher(){
        for(let i=0; i<nota_fiscal.produtos.length; i++){
            let escolhe = []
        escolhe[i] = prompt(
            `Produtos Disponíveis: 
            ${nota_fiscal.produtos[i].nome} 
            0-Comprar / 1-Não Comprar`)
        }
    }

    function exibirUma(){
        let opt = parseInt(prompt(`Notas Disponíveis: ${notas.length}
        Digite o número da Nota que deseja ver:`))
        for(let i = opt-1;i<opt;i++){
            notas[i].v_total = (nota_fiscal.produtos[0].v_unit+nota_fiscal.produtos[1].v_unit+nota_fiscal.produtos[2].v_unit);
            var conteudo = `
                Nota Fiscal: ${notas[i].num}<br/> 
                Data: ${notas[i].data}<br/>
                Cliente: ${notas[i].nome}<br/>
                CPF: ${notas[i].cpf}<br/>
                Endereço: ${notas[i].end}<br/>
                Tipo do pedido(1-Retirada/2-Entrega): ${notas[i].tipo}<br/>
                ========================================================<br/>
                Produtos: ${nota_fiscal.produtos[0].nome} - ${nota_fiscal.produtos[0].v_unit}<br/>
                        ${nota_fiscal.produtos[1].nome} - ${nota_fiscal.produtos[1].v_unit}<br/>
                        ${nota_fiscal.produtos[2].nome} - ${nota_fiscal.produtos[2].v_unit}<br/>
                Valor Total: ${notas[i].v_total}
                `
        }  
        document.querySelector('.p-center').innerHTML = conteudo
    }
   
    function exibirN(){
        let conteudo = ''
        notas.forEach(nota => {
            conteudo += `
                Nota Fiscal: ${nota.num}<br/> 
                Data: ${nota.data}<br/>
                Cliente: ${nota.nome}<br/>
                CPF: ${nota.cpf}<br/>
                Endereço: ${nota.end}<br/>
                Tipo do pedido(1-Retirada/2-Entrega): ${nota.tipo}<br/>
                ========================================================<br/>
                `
        });

        document.querySelector('.p-center').innerHTML = conteudo
}

    
    const cadEl = document.querySelector('.cad')
    cadEl.addEventListener('click', () => {
        cadastro()
    })
    const exibEl = document.querySelector('.exibe')
    exibEl.addEventListener('click', ()=> {
        exibirUma()
    })

    const exibnEl = document.querySelector('.exibeN')
    exibnEl.addEventListener('click', ()=>{
        exibirN()
    })
console.log(notas)
console.log(nota_fiscal)


