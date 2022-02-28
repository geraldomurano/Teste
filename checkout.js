// Função que captura a quantidade X valor do pruduto e retorna na tela

    const valor = 69.90;
    let inputQuantidade = document.querySelector("#quantidade");
    let inputResultado = document.querySelector("#total");
    
    inputQuantidade.addEventListener("change", (e) => {
      inputResultado.value = e.target.value * valor;
    });

//Mascara para corrigir os dados inputados pelo usuario no formulario

    $("#cpf").mask("999.999.999-99");
    $("cc").mask("99999999999999999999"); 
    $("cvv").mask("999");

