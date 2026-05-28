function adicionarCarrinho(){



    let nome =
    document.querySelector(".cardproduto h2")
    .innerText;



    let precoTexto =
    document.querySelector(".textopreco")
    .innerText;



    let preco =
    Number(
        precoTexto
        .replace("R$", "")
        .replace(",", ".")
    );



    let imagem =
    document.querySelector(".imagemcard")
    .getAttribute("src");



    let produto = {

        nome: nome,

        preco: preco,

        imagem: imagem,

        quantidade: 1

    };



    localStorage.setItem(
        "produtoCarrinho",
        JSON.stringify(produto)
    );



    window.location.href =
    "carrinho.html";

}
let produtos = [

    {

        nome:
        "Ração Pedigree 10,1kg cachorro",

        imagem:
        "pedigree home.png",

        pagina:
        "produto.html"

    },

    {

        nome:
        "Ração Whiskas 10,1kg gato",

        imagem:
        "whiskas home.png",

        pagina:
        "produto.html"

    },

    {

        nome:
        "Brinquedo mordedor cachorro",

        imagem:
        "mordedor home.png",

        pagina:
        "produto.html"

    },

    {

        nome:
        "Comedouro PetTimer preto",

        imagem:
        "produtopreto.png",

        pagina:
        "produtopreto.html"

    }

];

function pesquisar(){



    let valor =
    document.querySelector(".pesquisa")
    .value.toLowerCase();



    let resultado =
    document.getElementById(
        "resultadoPesquisa"
    );



    resultado.innerHTML = "";



    if(valor == ""){

        resultado.style.display =
        "none";

        return;

    }



    let encontrados =
    produtos.filter((produto) =>

        produto.nome
        .toLowerCase()
        .includes(valor)

    );



    if(encontrados.length == 0){

        resultado.style.display =
        "none";

        return;

    }



    encontrados.forEach((produto) => {

        resultado.innerHTML += `

        <a href="${produto.pagina}"
        class="item-pesquisa">

            <img src="${produto.imagem}">

            <p>${produto.nome}</p>

        </a>

        `;

    });



    resultado.style.display =
    "block";

}
