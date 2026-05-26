let produto =
JSON.parse(localStorage.getItem("produtoCarrinho"));



if(produto){

    document.getElementById("nomeProduto").innerHTML =
    produto.nome;

    document.getElementById("valorProduto").innerHTML =
    produto.preco;

}



let hoje = new Date();

let dia = hoje.getDate().toString().padStart(2, "0");

let mes = (hoje.getMonth() + 1)
.toString()
.padStart(2, "0");

let ano = hoje.getFullYear();

let dataCompleta =
dia + "/" + mes + "/" + ano;



document.getElementById("dataPagamento")
.innerHTML = dataCompleta;