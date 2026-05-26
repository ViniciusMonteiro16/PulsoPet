function abrirLogin(event){

    event.stopPropagation();

    let card = document.getElementById("cardLogin");

    if(card.style.display === "flex"){

        card.style.display = "none";

    }

    else{

        card.style.display = "flex";

    }

}


document.addEventListener("click", function(event){

    let card = document.getElementById("cardLogin");

    let userArea = document.querySelector(".user-area");

    if(!userArea.contains(event.target)){

        card.style.display = "none";

    }

});

let banners = [
    "banner.png",
    "banner2.png",
    "banner3.png"
];

let bannerAtual = 0;



function atualizarBanner(){

    let imagem = document.querySelector(".banner img");

    if(imagem){
        imagem.src = banners[bannerAtual];
    }

    atualizarBolinhas();

}

function atualizarBolinhas(){

    let bolinhas = document.querySelectorAll(".bolinhas div");

    bolinhas.forEach((bolinha) => {
        bolinha.classList.remove("ativa");
    });

    bolinhas[bannerAtual].classList.add("ativa");

}

function proximoBanner(){

    bannerAtual++;

    if(bannerAtual >= banners.length){
        bannerAtual = 0;
    }

    atualizarBanner();

}



function bannerAnterior(){

    bannerAtual--;

    if(bannerAtual < 0){
        bannerAtual = banners.length - 1;
    }

    atualizarBanner();

}



setInterval(function(){

    proximoBanner();

}, 4000);


function pesquisar(){

    let pesquisa = document.querySelector(".pesquisa").value;

    console.log(pesquisa);

}