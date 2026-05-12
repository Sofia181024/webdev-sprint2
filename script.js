// ESTRUTURA DO PROJETO

const imagemInput =
    document.getElementById("imagem");

const dataInput =
    document.getElementById("data");

const horaInput =
    document.getElementById("hora");

const descricaoInput =
    document.getElementById("descricao");

const btnSalvar =
    document.getElementById("btnSalvar");

const resultado =
    document.getElementById("resultado");

const preview =
    document.getElementById("preview");

// EVENTO DO BOTÃO

btnSalvar.addEventListener("click",salvarLembrete);

// FUNÇÃO PRINCIPAL

function salvarLembrete(){
    console.log('Sistema iniciado')
}

//CAPTURA DE DADOS

function salvarLembrete(){

    const imagem =
        imagemInput.files[0];

    const data =
        dataInput.value;

    const hora =
        horaInput.value;

    const descricao =
        descricaoInput.value;

}

// VALIDAÇÃO DE DADOS

if(
    !imagem ||
    !data ||
    !hora ||
    !descricao
){

    resultado.innerHTML = "Preencha todos os campos";
    return;
}