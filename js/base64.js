const selecione = document.querySelector(".select");
const incremento = document.querySelector(".methods");
const btn = document.querySelector("button");
const radiobtn = document.querySelector(".radio-button");
const codificar = document.querySelector("#codificar");
const decodificar = document.querySelector("#decodificar");

// Base64
function base64() {
  let mensagem = document.querySelector("#mensagem").value;

  if (codificar.checked) {
    let codificado = btoa(mensagem);
    return codificado;
  } else if (decodificar.checked) {
    let decodificado = atob(mensagem);
    return decodificado;
  }
}

// Botão
radiobtn.addEventListener("click", function () {
  if (codificar.checked) {
    btn.innerHTML = "Codificar Mensagem";
  } else if (decodificar.checked) {
    btn.innerHTML = "Decodificar Mensagem";
  }
});

btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (selecione.value === "base64") {
    resultado.innerText = base64();
  } else if (selecione.value === "cifra") {
    resultado.innerText = cifraCesar();
  }
});