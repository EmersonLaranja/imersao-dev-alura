//Assuntos da aula

var carta1 = {
  nome: "Bulbassauro",
  imagem:
    "http://pm1.narvii.com/6223/11335ffde96efad386b23068bb8751d77e26c1ef_00.jpg",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6,
  },
};
var carta2 = {
  nome: "Darth Vader",
  imagem:
    "https://www.metroworldnews.com.br/resizer/UmEoC0wZFbjMr7ve09Bv-XXsiMw=/800x0/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/M3KM3Z7NBZFZBFA76SM45SGKPI.png",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2,
  },
};
var carta3 = {
  nome: "Shiryu de dragão",
  imagem:
    "https://static.wikia.nocookie.net/saintseya/images/9/9e/Shiryu_3_255.png/revision/latest/scale-to-width-down/350?cb=20151229134313&path-prefix=pt",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10,
  },
};

var cartas = [carta1, carta2, carta3];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);

  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
  }

  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}
function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado = "<p class='resultado-final'>Venceu!</p>";
  } else if (valorCartaMaquina > valorCartaJogador) {
    htmlResultado =
      "<p class='resultado-final'>Você perdeu! A carta da máquina é maior!</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou!</p>";
  }

  divResultado.innerHTML = htmlResultado;
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  const divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>";
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value=" +
      atributo +
      ">" +
      atributo.charAt(0).toLocaleUpperCase() +
      atributo.slice(1) +
      ": " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class='carta-subtitle'> ${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  const divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>";
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value=" +
      atributo +
      ">" +
      atributo.charAt(0).toLocaleUpperCase() +
      atributo.slice(1) +
      ": " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class='carta-subtitle'> ${cartaMaquina.nome}</p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

// -------------------------- DESAFIOS -----------------------------
// 1) Adicionar um baralho com outras cartas
// 2) Sistema para ganhar carta de outro jogador (ter 2 arrays: cartasJogador e cartasMaquinas) e quem chegar a zero, perde
// 3) A maquina selecionar o atributo
// 4) 1 função para exibir jogador ou maquina dependendo do parametro
// 5) Trocar a moldura dos cards, outros baralhos
