  // Incremento da Cifra de César
  selecione.addEventListener("click", function () {
    if (selecione.value == "cifra") {
      incremento.style.display = "block";
    } else {
      incremento.style.display = "none";
    }
  });
  
// Cifra de César
function cifraCesar() {
    let msg = document.querySelector("#mensagem").value;
    let chave = parseInt(document.querySelector("#rangenumber").value);
    let saida = '';
  
    if (codificar.checked) {
      for (let i = 0; i < msg.length; i++) {
        if (msg[i] === msg[i].toUpperCase()) {
          saida += String.fromCharCode((msg.charCodeAt(i) + chave - 65) % 26 + 65); 
        } else {
          saida += String.fromCharCode((msg.charCodeAt(i) + chave - 97) % 26 + 97);
        }
      }
      return saida;
  
    } else if (decodificar.checked) {
      for (let i = 0; i < msg.length; i++) {
        if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
          saida += String.fromCharCode((msg.charCodeAt(i) - 97 -  chave + 26) % 26 + 97);
        } else if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
          saida += String.fromCharCode((msg.charCodeAt(i) - 65 - chave + 26) % 26 + 65);
        } else {
          saida += String.fromCharCode(msg.charCodeAt(i));
        }
      }
      return saida;
    }
  }