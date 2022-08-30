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
function ConverterRealParaDolarCanadense() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorDolarCanadense = 3.96; //valor atual da moeda
  var valorEmDolar = valorEmRealNumerico * valorDolarCanadense; //valor
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em dolar Canadense é $ " + valorEmDolar;

  elementoValorConvertido.innerHTML = valorConvertido;
}

/*2) conversor de Km para anos-luz
 * Entrada: Distancia da estrela com relação à Terra em Km
 * Saída: Distância em anos-luz
 */
function ConverterKmParaAnosLuz() {
  var distanciaEmKm = parseFloat(document.getElementById("valor").value);
  var CONSTANTE = 1.057e-13;
  var distanciaEmAnosLuz = distanciaEmKm * CONSTANTE;
  console.log(distanciaEmAnosLuz);

  var resultado = document.getElementById("valorConvertido");
  var valorConvertido = "o resultado em Ano-Luz é " + distanciaEmAnosLuz;
  resultado.innerHTML = valorConvertido;
}

//3) conversor de temperatura celcius para outras
//Criei um novo input e +2 botões para não ficar embolado
function ConverterCelsiusParaFahrenheitEKelvin() {
  var valorEmCelsius = parseFloat(
    document.getElementById("valorTemperatura").value
  );

  var elementoValorFahrenheit = document.getElementById("valorFahrenheit");
  var elementoValorKelvin = document.getElementById("valorKelvin");

  var valorEmFahrenheit = valorEmCelsius * (9 / 5) + 32;
  var valorConvertido = "Temperatura em Fahrenheit: " + valorEmFahrenheit;
  elementoValorFahrenheit.innerHTML = valorConvertido;

  var valorEmKelvin = valorEmCelsius + 273.15;
  console.log(typeof valorEmCelsius);
  valorConvertido = "Temperatura em Kelvin: " + valorEmKelvin;
  elementoValorKelvin.innerHTML = valorConvertido;
}
function ConverterCelsiusParaKelvin() {}

//4) linha debaixo do conversor com valor em bitcoin (adicionar um h2 e outro id no HTML)
function ConverterRealParaDolarCanadense() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorDolarCanadense = 3.96; //valor atual da moeda
  var valorEmDolar = valorEmRealNumerico * valorDolarCanadense; //valor
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em dolar Canadense é $ " + valorEmDolar;

  elementoValorConvertido.innerHTML = valorConvertido;

  // transformando para bitcoin
  var elementoValorBitcoin = document.getElementById("valorBitcoin");
  console.log(elementoValorBitcoin);
  var conversaoBitcoin = 0.0000099;
  elementoValorBitcoin.innerHTML =
    "O valor em Bitcoin é " + valor * conversaoBitcoin;
}
