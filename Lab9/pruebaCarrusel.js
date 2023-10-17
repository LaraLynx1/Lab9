/* const listadoPeliculasPopulares = [];

const contenedorpopulares = document.getElementById("populares");

llenarListaPeliculas();
pintarCarrusel();

const carrusel = document.querySelector(".roll");
const filmes = Array.from(carrusel.children);
const btnIzquierdo = document.querySelector(".izquierdo");
const btnDerecho = document.querySelector(".derecho");
const contenedorRoll = document.querySelector(".contenedor-carrusel");

function llenarListaPeliculas() {
  dataPopulares.forEach((pelicula) => {
    if (pelicula.id < 8) {
      const objtoPelicula = new Pelicula(
        pelicula.id,
        pelicula.nombre,
        pelicula.imagen,
        pelicula.banner,
        pelicula.descripcion,
        pelicula.rating,
        pelicula.maturity,
        pelicula.category
      );
      listadoPeliculasPopulares.push(objtoPelicula);
    }
  });
}

function pintarCarrusel() {
  listadoPeliculasPopulares.forEach((pelicula) => {
    contenedorpopulares.innerHTML += pelicula.crearHtmlPoster(pelicula.id);
  });
}

function moverHastaFilme(carrusel, filmeActual, filmeDestino) {
  carrusel.style.transform = "translateX(-" + filmeDestino.style.left + ")";
  filmeActual.classList.remove("pelicula-actual");
  filmeDestino.classList.add("pelicula-actual");
}

function setFilmePosition(filme, index) {
  filme.style.left = 300 * index + "px";

  filme.addEventListener("click", (e) => {
    console.log(e.target.src);
  });
}

console.log(filmes);
// console.log(btnDerecho, btnIzquierdo);

const tamanoFilme = filmes[0].getBoundingClientRect().width;
const tamanoRoll = contenedorRoll.getBoundingClientRect().width;

const cantidadFilme = tamanoRoll / tamanoFilme;

console.log(tamanoFilme, tamanoRoll, cantidadFilme);

filmes[0].classList.add("pelicula-actual");

filmes.forEach(setFilmePosition);

btnDerecho.addEventListener("click", (e) => {
  const filmeActual = carrusel.querySelector(".pelicula-actual");
  const filmeDestino = filmeActual.nextElementSibling;

  const filmeDestinoIndex = filmes.findIndex((filme) => filme === filmeDestino);

  console.log(filmeDestinoIndex);

  if (filmeDestinoIndex + cantidadFilme > filmes.length + 1) return;

  moverHastaFilme(carrusel, filmeActual, filmeDestino);
});

btnIzquierdo.addEventListener("click", (e) => {
  const filmeActual = carrusel.querySelector(".pelicula-actual");
  const filmeDestino = filmeActual.previousElementSibling;

  if (!filmeDestino) return;

  const filmeDestinoIndex = filmes.findIndex((filme) => filme === filmeDestino);

  console.log(filmeDestinoIndex);

  moverHastaFilme(carrusel, filmeActual, filmeDestino);
}); */

const carruselViejo = new Carrusel(
  "roll",
  dataPopulares,
  "izquierdo",
  "derecho",
  "contenedor-carrusel"
);

const carruselNuvo = new Carrusel(
  "roll2",
  dataRecomndados,
  "izquierdo2",
  "derecho2",
  "contenedor-carrusel2"
);
