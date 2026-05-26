function pesquisar(){

    let valor = document.querySelector(".pesquisa").value;

    console.log("Pesquisando:", valor);

}


let produto = JSON.parse(localStorage.getItem("produtoCarrinho"));

if(produto){

    document.getElementById("nomeProduto").innerHTML =
    produto.nome;

    document.getElementById("valorProduto").innerHTML =
    produto.preco;

    document.getElementById("valorTotal").innerHTML =
    produto.preco;

    document.getElementById("imagemProduto").src =
    produto.imagem;

}


function continuarPagamento(){

    let opcao =
    document.querySelector('input[name="pagamento"]:checked');



    if(!opcao){

        alert("Escolha uma forma de pagamento");

        return;
    }



    // SALVAR FORMA DE PAGAMENTO

    localStorage.setItem(
        "formaPagamento",
        opcao.value
    );



    // IR PARA INFORMACOES

    window.location.href = "informacoes.html";

}