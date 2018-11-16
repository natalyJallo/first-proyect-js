/*function cifrar() {
  mensaje = prompt("escribe una letra");
  cifrarMensaje = mensaje.charCodeAt();
  mensajeResultado = (cifrarMensaje - 65 + 1)% 26 + 65;
  console.log(mensajeResultado);
}
cifrar();*/





function cifrar() {
      var clave = prompt("ingresa un numero");
      var textElement = prompt("ingresa un texto");
      if {
        clave = (26 - clave)% 26;
        textElement =
    function
      var result = "";
      for (var i = 0; i < textElement.length; i++) {
        var cipher = textElement.charCodeAt(i);
        if (65 <= cipher && cipher <= 90)
      result += String.fromCharCode((cipher - 65 + clave) % 26 + 65).charCodeAt(0);
        else if (97 <= cipher && cipher <= 122)
        result += String.fromCharCode((cipher - 97 + clave) % 26 + 97).charCodeAt(0);
        else
        result += texto.charAt(i);
    }
    return result;
  }
  cifrar();
