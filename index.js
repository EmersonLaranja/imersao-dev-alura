//Assuntos da aula

function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor); //deveria ter o nome real

  var valorEmReal = valorEmDolarNumerico * 5; //deveria ter o nome dolar
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal;

  elementoValorConvertido.innerHTML = valorConvertido;
}
// -------------------------- DESAFIOS -----------------------------

//1) Adicionar um botão converter para alguma moeda (duplicando botão no HTML com outra função)

//2) conversor de Km para anos-luz

//3) conversor de temperatura (1 para cada botão)
//4) linha debaixo do conversor com valor em bitcoin (adicionar um h2 e outro id no HTML)
