//Assuntos da aula
var rafa = {
  nome: "Rafa",
  vitorias: 2,
  empates: 1,
  derrotas: 1,
  pontos: 0,
};
var paulo = {
  nome: "Paulo",
  vitorias: 1,
  empates: 1,
  derrotas: 2,
  pontos: 0,
};

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);

var jogadores = [rafa, paulo];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";

  for (let i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += " </tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

// -------------------------- DESAFIOS -----------------------------
// 1) Ao ter uma derrota, outros terem vitória (mesma ideia se tem empate)
// 2) Pensar em validações (talvez criar uma coluna nova pra falar se é válido, colocar trofeu para quem tem mais pontos)
// 3) Imagem do jogador
// 4) Botão para zerar tudo
// 5) Botão para adicionar novo jogador
