//Assuntos da aula a partir 50min46s
// function adicionarFilme() {
//   var filmeFavorito = document.getElementById("filme").value;

//   if (filmeFavorito.endsWith(".jpg")) {
//     listarFilmeNaTela(filmeFavorito);
//   } else {
//     console.error("Endereço de filme inválido");
//   }

//   document.getElementById("filme").value = "";
// }

// function listarFilmeNaTela(filmeFavorito) {
//   var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
//   var elementoListaFilmes = document.getElementById("listaFilmes");

//   elementoListaFilmes.innerHTML += elementoFilmeFavorito;
// }
// -------------------------- DESAFIOS -----------------------------
// 1) Botão para remover filme da tela (passando o endereço do filme, algo nessa linha)
function removerFilme() {
  var filmeFavorito = document.getElementById("filme").value; //link do filme favorito
  var elementoListaFilmes = document.getElementById("listaFilmes"); //div onde ficam todos os filmes dentro

  for (let i = 0; i < elementoListaFilmes.childElementCount; i++) {
    //percorrendo todos os filhos dessa div
    if (filmeFavorito == elementoListaFilmes.children[i].src) {
      //se o link do filme for igual ao link no atributo src do filho da div
      elementoListaFilmes.removeChild(elementoListaFilmes.children[i]); //removemos esse filho da div
    }
  }
  document.getElementById("filme").value = "";
}
// 2) Colocar além da imagem do filme, o nome
function adicionarFilme() {
  var nomeFilmeFavorito = document.getElementById("nome-filme").value;
  var linkFilmeFavorito = document.getElementById("filme").value;

  if (linkFilmeFavorito.endsWith(".jpg")) {
    listarFilmeNaTela(nomeFilmeFavorito, linkFilmeFavorito);
  } else {
    console.error("Endereço de filme inválido");
  }

  document.getElementById("filme").value = "";
  document.getElementById("nome-filme").value = "";
}

function listarFilmeNaTela(nome, link) {
  var elementoFilmeFavorito =
    "<div><img src=" + link + "><h3>" + nome + "</h3></div>";

  var elementoListaFilmes = document.getElementById("listaFilmes");

  elementoListaFilmes.innerHTML += elementoFilmeFavorito;
}
// 3) Guardar os filmes numa lista (praticar a iteração para renderizar os filmes)
// var listaFilmes = []; //variavel global

// function adicionarFilme() {
//   var filmeFavorito = document.getElementById("filme").value;

//   if (filmeFavorito.endsWith(".jpg")) {
//     listaFilmes.push(filmeFavorito); //adiciona o filme na lista
//     document.getElementById("listaFilmes").innerHTML = ""; //limpa todos os filmes da tela
//     listaTodosFilmes(); //exibe todos os filmes do array
//   } else {
//     console.error("Endereço de filme inválido");
//   }

//   document.getElementById("filme").value = ""; //limpa o input
// }

// function listaTodosFilmes() {
//   for (let i = 0; i < listaFilmes.length; i++) {
//     var elementoFilmeFavorito = "<img src=" + listaFilmes[i] + ">";
//     var elementoListaFilmes = document.getElementById("listaFilmes");

//     elementoListaFilmes.innerHTML += elementoFilmeFavorito;
//   }
// }
