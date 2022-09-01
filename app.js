//Assuntos da aula a partir 50min46s
var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg?20190702191337",
  "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg",
];

// for (let i = 0; i < listaFilmes.length; i++) {
//   document.write("<img src=" + listaFilmes[i] + ">");
// }

// -------------------------- DESAFIOS -----------------------------
// 1)Fazer com forEach

// function exibeFilme(filme) {
//   document.write("<img src=" + filme + ">");
// }

// listaFilmes.forEach(exibeFilme);

//1.1) Função anônima
// listaFilmes.forEach((filme) => document.write("<img src=" + filme + ">"));

// 2)Fazer com while
// var indice = 0;
// while (indice < listaFilmes.length) {
//   document.write("<img src=" + listaFilmes[indice] + ">");
//   indice++;
// }

// 3)Condição para não termos filmes repetidos

//coloquei um filme repetido aqui
// var listaFilmes = [
//   "https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg?20190702191337",
//   "https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg?20190702191337",
//   "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
//   "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg",
// ];

/**
 * O vetor.indexOf(elemento) !== posicao verifica se o filme ao ser buscado na
 * listaFilmes é encontrado na mesma posição que está atualmente, caso se tenha algum
 *  elemento idêntico a ele na posição do indexOf será diferente e não será
 * retornado no filter.
 *
 * lembrando que o indexOf retorna a primeira aparição de determinado elemento
 */
// listaFilmes = listaFilmes.filter(function (filme, posicao) {
//   return listaFilmes.indexOf(filme) == posicao;
// });

// for (var i = 0; i < listaFilmes.length; i++) {
//   document.write("<img src=" + listaFilmes[i] + ">");
// }

// 4)Clica num botão e o filme é adicionado

function adicionaFilme() {
  var ElementoAdicionaFilme = document.getElementById("adiciona-filme-input"); //input
  var ElementoFilmes = document.getElementById("filmes-container"); //div onde ficarão os filmes
  var filmeAdicionado = ElementoAdicionaFilme.value; //link do filme

  var novaImagemFilme = document.createElement("img"); //criando a tag img
  novaImagemFilme.src = filmeAdicionado; //adicionando o src com o link do filme

  ElementoFilmes.appendChild(novaImagemFilme); //colocando a tag img dentro da div
}
