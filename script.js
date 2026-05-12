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

// ADICIONA MENSAGEM DINÂMICA

const mensagem = "Lembrete criado para ${data} às ${hora}";
resultado.innerHTML = mensagem;

// IMAGEM ENVIADA

const leitor = new FileReader();
leitor.onload = function(evento){

    preview.src = evento.target.result;
    preview.style.display = "block";
};

leitor.readAsDataURL(imagem);

// SISTEMA DE ALARME

iniciarAlarme(data,hora,descricao);

function iniciarAlarme(data,hora,descricao){

    setInterval(() => {

        const agora = new Date();
        const dataAtual = agora.toISOString().split("T")[0];
        const horaAtual = agora.toTimeString().slice(0,5);

        if(
            dataAtual === data &&
            horaAtual === hora
        ){
            alert("Hora de estudar!\n${descricao}");
        }

    },1000);
}

// MELHORIA DA IMAGEM

if(navigator.vibrate){

    navigator.vibrate([500,300,500]);
}

melhorarImagem();

function melhorarImagem(){

    preview.style.filter = "contrast(120%) brightness(110%) saturate(130%)";
}