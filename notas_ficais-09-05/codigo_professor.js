var numeroNFs = 1;
var bdNFs = [];

function cadastrarNotaFiscal() {
  var nf = {
    numero: numeroNFs,
    data: prompt("Informe a data de emissão da NF:"),
    nome: prompt("Informe o nome do Cliente:"),
    cpf: prompt("Informe o CPF do Cliente:"),
    endereco: prompt("Informe o endreço do Cliente:"),
    retirada: prompt("Informe se: Retirada ou Entrega!"),
    listaProdutos: [],
    total: 0,
  };

  do {
    var produto = {
      nome: prompt("Digite o nome do Produto:"),
      valor_unitario: parseFloat(prompt("Digite o Valor Unitário do Produto:")),
      quantidade: parseFloat(prompt("Digite a Quantidade do Produto:")),
      desconto: parseFloat(prompt("Digite o valor do Desconto do Produto:")),
    };

    nf.listaProdutos[nf.listaProdutos.length] = produto;

    nf.total += produto.valor_unitario * produto.quantidade - produto.desconto;

    var addProduto = parseInt(
      prompt("Deseja adicionar + produtos? 0 - NÂO, 1 - sim")
    );
  } while (addProduto);

  bdNFs[bdNFs.length] = nf;
  console.log(
    `Nota Fiscal [ ${numeroNFs} ] no total de R$ ${nf.total} cadastrada com sucesso!`
  );
  numeroNFs++;
}

function imprimirUmaNotaFiscal(numero) {
  var existe = false;
  for (var i = 0; i < bdNFs.length; i++) {
    if (bdNFs[i].numero == nfImpressao) {
      console.log("\n\n === DADOS DA NOTA FISCAL ===");
      console.log("Numero:", bdNFs[i].numero);
      console.log("Data de Emissão:", bdNFs[i].data);
      console.log("Cliente:", bdNFs[i].nome, "CPF:", bdNFs[i].cpf);
      console.log("Endereço:", bdNFs[i].endereco);
      console.log("Forma de entrega:", bdNFs[i].retirada);
      console.log("Produtos da Nota Fisca: ");
      console.table(bdNFs[i].listaProdutos);
      console.log("TOTAL DA NF =======> :", bdNFs[i].total);

      existe = true;
    }
  }

  if (existe == false) {
    console.error("NF não econtrada!");
  }
}

do {
  console.log(" === Menu do Sistema === ");
  console.log("Escolha uma opção: ");
  console.log("\n 1 - Cadastrar uma Nota Fiscal");
  console.log(" 2 - Imprimir uma Nota Fiscal");
  console.log(" 3 - Imprimir a relação de Notas Fiscais");
  console.log(" 4 - Sair do Sistema!");
  var resultado = parseInt(prompt("Digite uma das opções do menu:"));

  if (resultado == 1) {
    console.log("Vamos cadastrar! Informe os dados da NF:");

    cadastrarNotaFiscal();

  } else if (resultado == 2) {
    console.log("Informe o número da NF que deseja imprimir:");
    var nfImpressao = parseInt(
      prompt("Informe o número da NF que deseja imprimir:")
    );

    imprimirUmaNotaFiscal(nfImpressao);
    
  } else if (resultado == 3) {
    console.log("Aqui está a relação de NFs cadastradas!");
    console.table(bdNFs);
  } else if (resultado == 4) {
    console.log("Obrigado por utilizar nosso sistema! Tchau Tchau!");
  } else {
    console.error("Opção Inválida! Escolha uma opção válida do menu!");
  }
} while (resultado != 4);
