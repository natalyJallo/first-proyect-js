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

 const nextPageResult = document.getElementById("next");
 const paginaResultado = () => {
   document.getElementById("homepage").style.display="none";
   document.getElementById("page-cipher").style.display="none";
   document.getElementById("answer-cipher").style.display="block";
   document.getElementById("page-decipher").style.display="none";
   document.getElementById("answer-decipher").style.display="none";
 }
 nextPageResult.addEventListener("click",paginaResultado);

  const backHome = document.getElementById("next-end");
  backHome.addEventListener("click",inicio);

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
