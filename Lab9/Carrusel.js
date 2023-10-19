class Carrusel {
  listadoPeliculas = [];

  constructor(
    clsRoll,
    data,
    clsBtnIzquierdo,
    clsBtnDerecho,
    contenedorCarrusel,
    idLista
  ) {
    this.clsRoll = clsRoll;
    this.data = data;
    this.idLista = idLista;
    this.contenedorPeliculas = document.getElementById(this.clsRoll);

    this.llenarListaPeliculas();
    this.pintarCarrusel();

    this.carrusel = document.querySelector("." + clsRoll);
    this.filmes = Array.from(this.carrusel.children);

    console.log("Clase Carrusel", this.filmes);

    this.btnIzquierdo = document.querySelector("." + clsBtnIzquierdo);
    this.btnDerecho = document.querySelector("." + clsBtnDerecho);

    this.contenedorRoll = document.querySelector("." + contenedorCarrusel);

    this.tamanoFilme = this.filmes[0].getBoundingClientRect().width;
    this.tamanoRoll = this.contenedorRoll.getBoundingClientRect().width;
    this.cantidadFilme = this.tamanoRoll / this.tamanoFilme;

    this.filmes[0].classList.add("pelicula-actual");

    this.filmes.forEach(this.setFilmePosition);

    this.btnDerecho.addEventListener("click", (e) => {
      console.log("." + this.clsRoll + " .pelicula-actual");
      const filmeActual = this.carrusel.querySelector(
        "." + this.clsRoll + " .pelicula-actual"
      );
      const filmeDestino = filmeActual.nextElementSibling;

      console.log(filmeActual);

      const filmeDestinoIndex = this.filmes.findIndex(
        (filme) => filme === filmeDestino
      );

      console.log(filmeDestinoIndex);

      if (filmeDestinoIndex + this.cantidadFilme > this.filmes.length + 1)
        return;

      this.moverHastaFilme(filmeActual, filmeDestino);
    });

    this.btnIzquierdo.addEventListener("click", (e) => {
      const filmeActual = this.carrusel.querySelector(
        "." + this.clsRoll + " .pelicula-actual"
      );

      console.log(filmeActual);

      const filmeDestino = filmeActual.previousElementSibling;

      if (!filmeDestino) return;

      const filmeDestinoIndex = this.filmes.findIndex(
        (filme) => filme === filmeDestino
      );

      console.log(filmeDestinoIndex);

      this.moverHastaFilme(filmeActual, filmeDestino);
    });
  }

  llenarListaPeliculas() {
    this.data.forEach((pelicula) => {
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
      this.listadoPeliculas.push(objtoPelicula);
    });
  }

  pintarCarrusel() {
    this.listadoPeliculas.forEach((pelicula) => {
      this.contenedorPeliculas.innerHTML += pelicula.crearHtmlPoster(
        pelicula.id,
        this.idLista
      );
    });
  }

  moverHastaFilme(filmeActual, filmeDestino) {
    this.carrusel.style.transform =
      "translateX(-" + filmeDestino.style.left + ")";
    filmeActual.classList.remove("pelicula-actual");
    filmeDestino.classList.add("pelicula-actual");
  }

  setFilmePosition(filme, index) {
    filme.style.left = 300 * index + "px";

    /*  filme.addEventListener("click", (e) => {
      console.log(e.target.src);
    }); */
  }
}

const carruselViejo = new Carrusel(
  "roll",
  dataPopulares,
  "izquierdo",
  "derecho",
  "contenedor-carrusel",
  1
);

const carruselNuvo = new Carrusel(
  "roll2",
  dataRecomndados,
  "izquierdo2",
  "derecho2",
  "contenedor-carrusel2",
  2
);
