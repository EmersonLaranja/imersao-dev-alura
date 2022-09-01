//Assuntos da aula
var numeroSecreto = parseInt(Math.random() * 11);
console.log(numeroSecreto);
var numeroDeTentativas = 3;
var contador = 0;
function Chutar() {
  var elementoResultado = document.getElementById("resultado");

  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "acertou";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else {
    elementoResultado.innerHTML =
      "Errou, o número secreto era " + numeroSecreto;
  }
}

// -------------------------- DESAFIOS -----------------------------
// 1) Colocar número de tentativas
// function Chutar() {
//   var elementoResultado = document.getElementById("resultado");
//   var elementoTentativa = document.getElementById("tentativa");
//   var chute = parseInt(document.getElementById("valor").value);

//   contador++;

//   elementoTentativa.innerHTML =
//     " você tem " + (numeroDeTentativas - contador) + " tentativas";

//   if (chute == numeroSecreto) {
//     elementoResultado.innerHTML = "Acertou";
//     contador = 0;
//     alert("Acertou"); //algo novo, gera um alerta na tela
//     window.location.reload(); //algo novo, recarrega a página, começando uma nova rodada
//   } else if (chute > 10 || chute < 0) {
//     elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
//   } else {
//     elementoResultado.innerHTML = "Errado!";
//   }

//   if (contador == numeroDeTentativas) {
//     alert("Suas chances acabaram, você perdeu"); //algo novo, gera um alerta na tela
//     window.location.reload(); //algo novo, recarrega a página, começando uma nova rodada
//   }
// }
// 2) Não mostrar o número secreto quando errar, exibir se é maior/menor (dar uma dica)
function Chutar() {
  // var elementoResultado = document.getElementById("resultado");
  // var chute = parseInt(document.getElementById("valor").value);
  // if (chute == numeroSecreto) {
  //   elementoResultado.innerHTML = "acertou";
  // } else if (chute > numeroSecreto) {
  //   elementoResultado.innerHTML =
  //     "Você deve digitar um número menor que " + chute;
  // } else {
  //   elementoResultado.innerHTML =
  //     "Você deve digitar um número maior que " + chute;
  // }
}
// 3) Diferença de == e ===
/**
==  é usado para comparação entre duas variáveis, independentemente do tipo de dados da variável. 

=== verifica se seus dois operandos são iguais, retornando um resultado booleano. 
Ao contrário do operador de igualdade , o operador de igualdade estrita sempre considera operandos 
de tipos diferentes como diferentes  

fonte: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
*/
