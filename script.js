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