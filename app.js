//Assuntos da aula a partir 50min46s
function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;

  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmeNaTela(filmeFavorito);
  } else {
    console.error("Endereço de filme inválido");
  }

  document.getElementById("filme").value = "";
}

function listarFilmeNaTela(filmeFavorito) {
  var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");

  elementoListaFilmes.innerHTML += elementoFilmeFavorito;
}
// -------------------------- DESAFIOS -----------------------------
// 1) Botão para remover filme da tela (passando o endereço do filme, algo nessa linha)
// 2) Colocar além da imagem do filme, o nome
// 3) Guardar os filmes numa lista (praticar a iteração para renderizar os filmes)
