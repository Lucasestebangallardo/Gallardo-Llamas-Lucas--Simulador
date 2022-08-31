function dolar(){
let dolares, cambio, calculo;

dolares;
do{
   dolares = parseInt(prompt("Ingrese la cantidad de dolares:"));
}while(isNaN(dolares));

  alert ("Ingrese el tipo de cambio del dolar");
cambio = prompt("1- Dolar oficial 2- Dolar Blue");
if (cambio ==1) {
  calculo = dolares * 145 
  alert("El precio al dolar oficial actual es de " + calculo);
}else if(cambio ==2) {
  calculo = dolares *280
  alert("El precio al dolar oficial actual es de " + calculo);
}


document.write("<p> Dolares: $"+ dolares +"</p>" +"<p> Resultado: " + calculo + " ARS</p>" )
}

dolar();
