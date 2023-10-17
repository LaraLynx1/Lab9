/* const pelicula1 = new Pelicula(
  10,
  "Cerebros fugados",
  "https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  "https://i0.wp.com/beneaththetangles.com/wp-content/uploads/2019/08/banner-howls-moving-castle.png?ssl=1",
  "Esta es una prueba",
  4,
  "PG13",
  "Pelicula"
);

const pelicula2 = new Pelicula(
  10,
  "Cerebros fugados",
  "https://m.media-amazon.com/images/I/816av3JOFCS.jpg",
  "https://i0.wp.com/beneaththetangles.com/wp-content/uploads/2019/08/banner-howls-moving-castle.png?ssl=1",
  "Esta es una prueba",
  4,
  "PG13",
  "Pelicula"
); */

// Creamos la lista vacia de peliculas
const listadoPeliculasRecomndadas = [];
const listadoPeliculasPopulares = [];

// function procesarPelicula(pelicula) {}

data.forEach((pelicula) => {
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
    listadoPeliculasRecomndadas.push(objtoPelicula);
  }
});

data.forEach((pelicula) => {
  if (pelicula.id >= 8) {
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

console.log("Lista de Peliculas", listadoPeliculasRecomndadas);
console.log("Lista de Peliculas", listadoPeliculasPopulares);

const contenedor = document.getElementById("prueba");
const contenedorpopulares = document.getElementById("populares");

listadoPeliculasRecomndadas.forEach((pelicula) => {
  contenedor.innerHTML += pelicula.crearHtmlPoster(pelicula.id);
});

listadoPeliculasPopulares.forEach((pelicula) => {
  contenedorpopulares.innerHTML += pelicula.crearHtmlPoster(pelicula.id);
});

function toogleBookmark(id) {
  const etiquetaFavorito = document.getElementById(id);
  console.log(id, etiquetaFavorito, etiquetaFavorito.classList);
  if (etiquetaFavorito.classList.contains("bx-bookmark")) {
    etiquetaFavorito.classList.remove("bx-bookmark");
    etiquetaFavorito.classList.add("bxs-bookmark-star");
  } else {
    etiquetaFavorito.classList.remove("bxs-bookmark-star");
    etiquetaFavorito.classList.add("bx-bookmark");
  }
}

function newBanner(id) {
  const datosPelicula = data.filter((pelicula) => pelicula.id == id);

  console.log(id, datosPelicula);
  console.log(datosPelicula[0].banner);
}

/* contenedor.innerHTML = pelicula1.crearHtmlPoster();
contenedor.innerHTML += pelicula2.crearHtmlPoster(); */
