//Assuntos da aula
var listaFilmes = ["Yesterday", "A chegada", "Escola de Rock"];
//elemento              1         2            3
//indice                0         1            2

listaFilmes.push("Harry Potter 2");
listaFilmes.push("Harry Potter 3");
listaFilmes.push("Harry Potter 4");
listaFilmes.push("Harry Potter 5");

// document.write("<p>" + listaFilmes[0] + "</p>");
// document.write("<p>" + listaFilmes[1] + "</p>");
// document.write("<p>" + listaFilmes[2] + "</p>");
// document.write("<p>" + listaFilmes[3] + "</p>");

//   valor inicial         condicao expressao      final
for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<p>" + listaFilmes[indice] + "</p>");
}
//Até 50min46s

// -------------------------- DESAFIOS -----------------------------
