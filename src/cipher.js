
const cipherMessage = document.getElementById("texto2");
const btnMessage = document.getElementById("next");

const cifrar = () => {
  const offSet = parseInt(document.getElementById("cambios").value);
  const textElement = document.getElementById("texto").value;
  let cipher = "";
  for (let i = 0; i < textElement.length; i++) {
    displace = (textElement.toUppperCase().charCodeAt(i) - 65 + offSet) % 26 + 65;
    messageCipher = String.fromChartCode(displace);
    cipher += messageCipher;
  }
  return cipher,
}

btnMessage.addEventListener("click" , () => {
  cipherMessag.innerHtml = cifrar();
})
