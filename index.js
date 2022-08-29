
  let dolares = prompt("Ingrese la cantidad de dolares");
  let cambio = prompt("Ingrese el tipo de cambio");
  let calculo = dolares * cambio;

  alert("Tus " + dolares + " dolares equivalen a " + calculo + " pesos ");

  document.write("<p> Dolares: $"+ dolares +"</p>" + "<p> Tipo de cambio: "+ cambio  +"</p>" + "<p> Resultado: " + calculo + " ARS</p>" )
