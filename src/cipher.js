const encryptEffect = document.getElementById("next");

const cifrar = () => {
      const textElement = document.getElementById("texto").value;
      const offset = document.getElementById("cambios").value;
      let cipher = "";
        for (var i = 0; i < textElement.length; i++) {
          let ubicacion = (textElement.toUpperCase().charCodeAt(i) - 65 + offset) % 26 + 65;
          let palabraCifrada = String.fromCharCode(ubicacion);
          let resultCipher = cipher += palabraCifrada;
          document.getElementById("result-message").innerHTML = resultCipher;
    }
  }
encryptEffect.addEventListener("click", cifrar);

const decipherEffect = document.getElementById("next-second");

const descifrar = () => {
  const textElementSecond = document.getElementById("texto-second").value;
  const offsetSecond = document.getElementById("cambios-second").value;
  let decipher = "";
    for (var j = 0; j < textElementSecond.length; j++) {
      let ubicacionDes = (textElementSecond.toUpperCase().charCodeAt(j) + 65 - offsetSecond) % 26 + 65;
      let palabraDescifrada = String.fromCharCode(ubicacionDes);
      let resultDecipher = decipher += palabraDescifrada;
      document.getElementById("result-second").innerHTML = resultDecipher;
  }
}

decipherEffect.addEventListener("click", descifrar);
