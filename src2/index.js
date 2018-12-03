const inicio = () => {
  document.getElementById("home").style.display="block";
  document.getElementById("page-cipher").style.display="none";
  document.getElementById("answer-cipher").style.display="none";
  document.getElementById("page-decipher").style.display="none";
  document.getElementById("answer-decipher").style.display="none";
}
inicio();

// Pagina de cirar
const nextPage = document.getElementById("cifrar");
nextPage.addEventListener("click", () => {
  document.getElementById("home").style.display="none";
  document.getElementById("page-cipher").style.display="block";
  document.getElementById("answer-cipher").style.display="none";
  document.getElementById("page-decipher").style.display="none";
  document.getElementById("answer-decipher").style.display="none";
});

// Pagina de resultado de cifrar
 const nextPageResult = document.getElementById("next");
 nextPageResult.addEventListener("click", () => {
   const number = parseInt(document.getElementById("cambios").value);
   const message = document.getElementById("texto").value;
   const resultCipher = window.cipher.encode(number,message);
   document.getElementById("result-message").innerHTML = resultCipher;
  document.getElementById("home").style.display="none";
   document.getElementById("page-cipher").style.display="none";
   document.getElementById("answer-cipher").style.display="block";
   document.getElementById("page-decipher").style.display="none";
   document.getElementById("answer-decipher").style.display="none";
 });

// Evento de volver a la pagina de inicio
 const volver = document.getElementById("next-end");
 volver.addEventListener("click",inicio);

// Pgina de descifrar
  const nextPageSecond = document.getElementById("descifrar");
  nextPageSecond.addEventListener("click", () => {
    document.getElementById("home").style.display="none";
    document.getElementById("page-cipher").style.display="none";
    document.getElementById("answer-cipher").style.display="none";
    document.getElementById("page-decipher").style.display="block";
    document.getElementById("answer-decipher").style.display="none";
  });

  // Pagina de resultado de descifrar
  const nextPageResultSecond = document.getElementById("next-second");
  nextPageResultSecond.addEventListener("click", () => {
    const numberSecond = parseInt(document.getElementById("cambios-second").value);
    const messageSecond = document.getElementById("texto-second").value;
    const resultDecipher = window.cipher.decode(numberSecond,messageSecond);
    document.getElementById("result-second").innerHTML = resultDecipher;
    document.getElementById("home").style.display="none";
    document.getElementById("page-cipher").style.display="none";
    document.getElementById("answer-cipher").style.display="none";
    document.getElementById("page-decipher").style.display="none";
    document.getElementById("answer-decipher").style.display="block";
  });
// Pagina de volver al inicio
  const backHome = document.getElementById("next-end-second");
  backHome.addEventListener("click", () => {
    document.getElementById("home").style.display="block";
    document.getElementById("page-cipher").style.display="none";
    document.getElementById("answer-cipher").style.display="none";
    document.getElementById("page-decipher").style.display="none";
    document.getElementById("answer-decipher").style.display="none";
  });

  // Limpiar texto cifrado
const clearText = document.getElementById("prueba");
clearText.addEventListener("click", () => {
   document.getElementById("cambios").value = "";
   document.getElementById("texto").value = "";
});

// limpiar texto de descifrado
 const clearText2 = document.getElementById("prueba2");
 clearText2.addEventListener("click", () => {
   document.getElementById("cambios-second").value = "";
   document.getElementById("texto-second").value = "";
 });
