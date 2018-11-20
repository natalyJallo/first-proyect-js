const encryptEffect = document.getElementById("next");

const cifrar = () => {
      const textElement = document.getElementById("texto").value;
      const offset = parseInt(document.getElementById("cambios").value);
      let cipher = "";
        for (var i = 0; i < textElement.length; i++) {
          const ubicacion = textElement.toUpperCase().charCodeAt(i);
          if (ubicacion === 32) {
            cipher += " ";
          } else {
            cipher = cipher + String.fromCharCode((ubicacion - 65 + offset) % 26 + 65);
          }
          let resultCipher = cipher;
          document.getElementById("result-message").innerHTML = resultCipher;
    }
  }
encryptEffect.addEventListener("click", cifrar);

const decipherEffect = document.getElementById("next-second");

const descifrar = () => {
  const textElementSecond = document.getElementById("texto-second").value;
  const offsetSecond = parseInt(document.getElementById("cambios-second").value);
  let decipher = "";
    for (var j = 0; j < textElementSecond.length; j++) {
      const ubicacionDes = textElementSecond.toUpperCase().charCodeAt(j);
      const offsetSecondNew = offsetSecond%26;
      if (ubicacionDes === 32) {
        decipher += " ";
      } else {
        decipher =  decipher + String.fromCharCode((ubicacionDes + 65 - offsetSecondNew) % 26 + 65);
      }
      let resultDecipher = decipher;
      document.getElementById("result-second").innerHTML = resultDecipher;
  }
}

decipherEffect.addEventListener("click", descifrar);
