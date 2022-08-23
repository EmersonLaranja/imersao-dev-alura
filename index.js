//Assuntos da aula
var nome = "Emerson";

var notaDoPrimeiroBimestre = 9;
var notaDoSegundoBimestre = 7;
var notaDoTerceiroBimestre = 4;
var notaDoQuartoBimestre = 2;

var notaFinal =
  (notaDoPrimeiroBimestre +
    notaDoSegundoBimestre +
    notaDoTerceiroBimestre +
    notaDoQuartoBimestre) /
  4;

var notaFixada = notaFinal.toFixed(1);

console.log("Bem vindo " + nome);
console.log(notaFixada);

// -------------------------- DESAFIOS -----------------------------

// 1) Quebrar a soma e divisão e mostrar se a pessoa foi aprovada

var somaNotaFinal =
  notaDoPrimeiroBimestre +
  notaDoSegundoBimestre +
  notaDoTerceiroBimestre +
  notaDoQuartoBimestre;

var quantidadeBimestres = 4;

var notaFinal = somaNotaFinal / quantidadeBimestres;
var notaFixada = notaFinal.toFixed(1);

var media = 6;

if (notaFixada >= media) {
  console.log("Sua nota foi " + notaFixada + "! Aproveite sua aprovação!");
} else {
  console.log(
    "Sua nota foi " +
      notaFixada +
      "! Você ficou de prova final, mas não se desespere! Você ainda tem uma chance 🚀"
  );
}

// 2) Estilizar a página (trocar cor do fundo e a imagem)
// Fiz no próprio arquivo .css

// 3) Escrever na página ao invés de no console
alert("Podemos mandar um alerta também");

document.write("Ou podemos escrever assim");

var elementoH1 = document.createElement("h1");
elementoH1.textContent = "ou criamos o elemento do zero";
document.body.appendChild(elementoH1); //inserindo o elemento dentro do body (body "apadrinhando" o elementoH1 )

document.write("<h1>" + "ou criar o elemento com o document.write" + "</h1>");

// 4) Conversor de temperaturas/moeda

// Celsius para graus Fahrenheit
// var celsius = parseFloat(prompt("Temperatura em  graus Celsius: "));
// var fahrenheit = (9 * celsius) / 5 + 32;
// document.write("Temperatura em graus Fahrenheit = ", fahrenheit);

// Fahrenheit para graus Celsius
// var fahrenheit = parseFloat(prompt("Temperatura em graus Fahrenheit: "));
// var celsius = (5 * (fahrenheit - 32)) / 9;
// document.write("Temperatura em graus Celsius = ", celsius);

// 5)Imprimir a media com todas as operações direto no console.log

console.log(
  (
    (notaDoPrimeiroBimestre +
      notaDoSegundoBimestre +
      notaDoTerceiroBimestre +
      notaDoQuartoBimestre) /
    4
  ).toFixed(1)
);
