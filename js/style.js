// Personalização do body
let fundoCSS = document.querySelector("body");;
fundoCSS.style.background = "#000000";
fundoCSS.style.fontFamily = "Anton";

// Persolização do header
let tituloCSS = document.querySelector(".titulo");
tituloCSS.style.width = "100%";
tituloCSS.style.textAlign = "center";
tituloCSS.style.fontSize = "1.5em";
tituloCSS.style.color = "#FFFFFF";
tituloCSS.style.marginBottom = "2em";

// Persolização da caixa de Entrada
let caixaEntradaCSS = document.querySelector(".caixaEntrada");
caixaEntradaCSS.style.textAlign = "center";

let caixadeEntradaTextCSS = document.querySelector("#mensagem");
caixadeEntradaTextCSS.style.width = "75%";
caixadeEntradaTextCSS.style.height = "3.5em";
caixadeEntradaTextCSS.style.fontFamily = "Anton";
caixadeEntradaTextCSS.style.fontSize = "1.5em";
caixadeEntradaTextCSS.style.backgroundColor = "#000000";
caixadeEntradaTextCSS.style.boxShadow = " 0em 0em 2em 1em #D3D3D3"
caixadeEntradaTextCSS.style.marginTop = "-1.5em";

// Eventos de click na caixa de entrada
caixadeEntradaTextCSS.addEventListener("click", entrar)
function entrar() {
    caixadeEntradaTextCSS.style.backgroundColor = "#000000";
    caixadeEntradaTextCSS.style.color = "#FFFFFF";
    caixadeEntradaTextCSS.style.boxShadow = "0em 0em 2em 1em #FF0000";
    caixadeEntradaTextCSS.style.marginTop = "-1.5em";
    caixadeEntradaTextCSS.style.marginBottom = "1em";
}

// Evento de movimento de mouse na caixa de entrada
caixadeEntradaTextCSS.addEventListener("mouseout", sair)
function sair() {
    caixadeEntradaTextCSS.style.backgroundColor = "#DCDCDC";
    caixadeEntradaTextCSS.style.color = "#FFFFFF";
    caixadeEntradaTextCSS.style.boxShadow = "0em 0em 2em 1em #D3D3D3";
    caixadeEntradaTextCSS.style.marginBottom = "0em";
    caixadeEntradaTextCSS.style.backgroundColor = "#000000";
}

// Personalização do select
let selectCSS = document.querySelector(".options");
selectCSS.style.textAlign = "center";
selectCSS.style.marginTop = "1.5em";

let selectTextCSS = document.querySelector("#select");
selectTextCSS.style.width = "50%"
selectTextCSS.style.fontFamily = "Anton";
selectTextCSS.style.backgroundColor = "#000000";
selectTextCSS.style.textAlign = "center";
selectTextCSS.style.color = "#FFFFFF";
selectTextCSS.style.fontSize = "1.5em"

// Em caso a página for atualizada reniciar todos os métodos de codificação
let base64andCifraCSS = document.querySelector(".methods");
base64andCifraCSS.style.display = "none";

// Persolização do range e chaves
let cifraCSS = document.querySelector("#range");
cifraCSS.style.color = "#FFFFFF";
cifraCSS.style.fontSize = "1.5em";
cifraCSS.style.textAlign = "center";
cifraCSS.style.marginTop = "1em";
cifraCSS.style.fontFamily = "Roboto"

let cesarCSS = document.querySelector("#chaves");
cesarCSS.style.textAlign = "center";

// Persolização do codificar e decodificar
let btnRadiosCSS = document.querySelector("#radios");
btnRadiosCSS.style.textAlign = "center";
btnRadiosCSS.style.color = "#FFFFFF";
btnRadiosCSS.style.fontFamily = "Roboto";
btnRadiosCSS.style.fontSize = "1.5em";
btnRadiosCSS.style.marginTop = "1em";

// Persolização da caixa de saída
let caixadeSaidaCSS = document.querySelector(".caixaSaida");
caixadeSaidaCSS.style.textAlign = "center";
caixadeSaidaCSS.style.color = "#FFFFFF";

let caixadeSaidaTextCSS = document.querySelector("#resultado");
caixadeSaidaTextCSS.style.width = "70%";
caixadeSaidaTextCSS.style.height = "3.5em";
caixadeSaidaTextCSS.style.color = "#FFFFFF";
caixadeSaidaTextCSS.style.fontFamily = "Anton";
caixadeSaidaTextCSS.style.fontSize = "1.5em";
caixadeSaidaTextCSS.style.backgroundColor = "#000000";
caixadeSaidaTextCSS.style.marginTop = "1.5em";
caixadeSaidaTextCSS.style.boxShadow = "0em 0em 0.5em 0.5em #D3D3D3";

// Personalização do button
let buttonCSS = document.querySelector(".btn");
buttonCSS.style.textAlign= "center"

let buttonActionCSS = document.querySelector("button");
buttonActionCSS.style.fontSize = "1.5em"
buttonActionCSS.style.fontFamily = "Anton";
buttonActionCSS.style.marginTop = "1em";

//Eventos de click na caixa de saída e no botão de codificar mensagem e decodificar mensagem
button.addEventListener("click", saida)
function saida() {
    caixadeEntradaTextCSS.style.boxShadow = "0em 0em 2em 1em #FFFF00";
    caixadeSaidaTextCSS.style.boxShadow = "0em 0em 0.5em 0.5em #FFFF00";
}
// Eventos de movimento de mouse na caixa de saida e no botão de codificar e decodificar
button.addEventListener("mouseout", saida2)
function saida2() {
    caixadeEntradaTextCSS.style.boxShadow = "0em 0em 0.5em 0.5em #D3D3D3";
    caixadeSaidaTextCSS.style.boxShadow = "0em 0em 0.5em 0.5em #D3D3D3";
}