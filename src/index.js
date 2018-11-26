const inicio = () => {
  document.getElementById("homepage").style.display="block";
  document.getElementById("page-cipher").style.display="none";
  document.getElementById("answer-cipher").style.display="none";
  document.getElementById("page-decipher").style.display="none";
  document.getElementById("answer-decipher").style.display="none";
}
inicio();

const nextPage = document.getElementById("cifrar");
const paginaCifrar = () => {
  document.getElementById("homepage").style.display="none";
  document.getElementById("page-cipher").style.display="block";
  document.getElementById("answer-cipher").style.display="none";
  document.getElementById("page-decipher").style.display="none";
  document.getElementById("answer-decipher").style.display="none";
}

nextPage.addEventListener("click",paginaCifrar);

const volver = document.getElementById("next-end");
volver.addEventListener("click",inicio);

 const nextPageResult = document.getElementById("next");
 const paginaResultado = () => {
   document.getElementById("homepage").style.display="none";
   document.getElementById("page-cipher").style.display="none";
   document.getElementById("answer-cipher").style.display="block";
   document.getElementById("page-decipher").style.display="none";
   document.getElementById("answer-decipher").style.display="none";
 }
 nextPageResult.addEventListener("click",paginaResultado);

  const nextPageSecond = document.getElementById("descifrar");
  const paginaDescifrarSegundo = () => {
    document.getElementById("homepage").style.display="none";
    document.getElementById("page-cipher").style.display="none";
    document.getElementById("answer-cipher").style.display="none";
    document.getElementById("page-decipher").style.display="block";
    document.getElementById("answer-decipher").style.display="none";
  }
  nextPageSecond.addEventListener("click",paginaDescifrarSegundo);

  const nextPageResultSecond = document.getElementById("next-second");
  const paginaResultadoDescifrar = ()=> {
    document.getElementById("homepage").style.display="none";
    document.getElementById("page-cipher").style.display="none";
    document.getElementById("answer-cipher").style.display="none";
    document.getElementById("page-decipher").style.display="none";
    document.getElementById("answer-decipher").style.display="block";
  }
  nextPageResultSecond.addEventListener("click",paginaResultadoDescifrar);

  const backHome = document.getElementById("next-end-second");
  const volverPaginaInicio = () => {
    document.getElementById("homepage").style.display="block";
    document.getElementById("page-cipher").style.display="none";
    document.getElementById("answer-cipher").style.display="none";
    document.getElementById("page-decipher").style.display="none";
    document.getElementById("answer-decipher").style.display="none";
  }
  backHome.addEventListener("click",volverPaginaInicio);

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
