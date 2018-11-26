

const inicio = () => {
  document.getElementById("homepage").style.display="block";
  document.getElementById("page-cipher").style.display="none";
  document.getElementById("answer-cipher").style.display="none";
  document.getElementById("page-decipher").style.display="none";
  document.getElementById("answer-decipher").style.display="none";
}
inicio();

// Pagina de cifrar
const nextPage = document.getElementById("cifrar");
const paginaCifrar = () => {
  document.getElementById("homepage").style.display="none";
  document.getElementById("page-cipher").style.display="block";
  document.getElementById("answer-cipher").style.display="none";
  document.getElementById("page-decipher").style.display="none";
  document.getElementById("answer-decipher").style.display="none";
}

nextPage.addEventListener("click",paginaCifrar);

//pagina de resultado de cifrar
const nextPageResult = document.getElementById("next");

const paginaResultado = () => {
  const number = parseInt(document.getElementById("cambios").value);
  const message = document.getElementById("texto").value;
  const resultCipher = cipher.encode(number,message);
  document.getElementById("result-message").innerHTML = resultCipher;
  document.getElementById("homepage").style.display="none";
  document.getElementById("page-cipher").style.display="none";
  document.getElementById("answer-cipher").style.display="block";
  document.getElementById("page-decipher").style.display="none";
  document.getElementById("answer-decipher").style.display="none";
}
nextPageResult.addEventListener("click", () => {
  paginaResultado()
});

// Funcion para volver al inicio
const volver = document.getElementById("next-end");
volver.addEventListener("click",inicio);

// Pagina de descifrar
  const nextPageSecond = document.getElementById("descifrar");
  const paginaDescifrarSegundo = () => {
    document.getElementById("homepage").style.display="none";
    document.getElementById("page-cipher").style.display="none";
    document.getElementById("answer-cipher").style.display="none";
    document.getElementById("page-decipher").style.display="block";
    document.getElementById("answer-decipher").style.display="none";
  }
  nextPageSecond.addEventListener("click",paginaDescifrarSegundo);

//Pagina de resultado de descifrar
  const nextPageResultSecond = document.getElementById("next-second");
  const paginaResultadoDescifrar = ()=> {
    const messageSecond = document.getElementById("texto-second").value;
    const numberSecond =  parseInt(document.getElementById("cambios-second").value);
    const resultDecipher = cipher.decode(numberSecond,messageSecond);
    document.getElementById("result-second").innerHTML = resultDecode;
    document.getElementById("homepage").style.display="none";
    document.getElementById("page-cipher").style.display="none";
    document.getElementById("answer-cipher").style.display="none";
    document.getElementById("page-decipher").style.display="none";
    document.getElementById("answer-decipher").style.display="block";
  }
  nextPageResultSecond.addEventListener("click", () => {
    paginaResultadoDescifrar()
  });

//Pagina de inicio
  const backHome = document.getElementById("next-end-second");
  const volverPaginaInicio = () => {
    document.getElementById("homepage").style.display="block";
    document.getElementById("page-cipher").style.display="none";
    document.getElementById("answer-cipher").style.display="none";
    document.getElementById("page-decipher").style.display="none";
    document.getElementById("answer-decipher").style.display="none";
  }
  backHome.addEventListener("click",volverPaginaInicio);

//funcion de limpiar texto de los inputs y textarea
const clearText = document.getElementById("prueba");
const limpiarTexto = () => {
   document.getElementById("cambios").value = "";
   document.getElementById("texto").value = "";
}
clearText.addEventListener("click",limpiarTexto);

 const clearText2 = document.getElementById("prueba2")
 const limpiarTexto2 = () => {
   document.getElementById("cambios-second").value = "";
   document.getElementById("texto-second").value = "";
 }
 clearText2.addEventListener("click",limpiarTexto2);
.............
