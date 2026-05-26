// ==========================
// CONTINUAR PAGAMENTO
// ==========================

function continuarPagamento(){

    let nome =
    document.getElementById("nome").value;

    let cep =
    document.getElementById("cep").value;

    let telefone =
    document.getElementById("telefone").value;

    let endereco =
    document.getElementById("endereco").value;



    if(nome === "" ||
       cep === "" ||
       telefone === "" ||
       endereco === ""){

        alert("Preencha todos os campos");

        return;
    }



    // PEGAR PAGAMENTO ESCOLHIDO

    let pagamento =
    localStorage.getItem("formaPagamento");



    // CARTAO

    if(pagamento === "cartao"){

        window.location.href = "cartao.html";

    }



    // PIX

    if(pagamento === "pix"){

        window.location.href = "pix.html";

    }

}