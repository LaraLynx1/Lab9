class Pelicula {
  constructor(
    id,
    nombre,
    imagen,
    banner,
    descripcion,
    rating,
    maturity,
    category
  ) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.banner = banner;
    this.descripcion = descripcion;
    this.rating = rating;
    this.maturity = maturity;
    this.category = category;
  }

  crearHtmlPoster(idPelicula, idLista) {
    return `
          <div class="tarjeta">
              <img onclick="newBanner(${idPelicula}, ${idLista})" class="poster" 
              src="${this.imagen}"
              />
              ${this.pintarRating(this.rating, this.id)}
  
           </div>`;
  }

  decidirEstrella(valorRating) {
    let htmlEstrellas = "";
    for (let index = 1; index < 6; index++) {
      if (valorRating >= index) {
        htmlEstrellas += this.pintarEstrella("llena");
      } else {
        if (valorRating < index && valorRating > index - 1) {
          htmlEstrellas += this.pintarEstrella("media");
        } else {
          htmlEstrellas += this.pintarEstrella("vacia");
        }
      }
    }
    console.log(htmlEstrellas);
    return htmlEstrellas;
  }

  pintarRating(valorRating, id) {
    return ` 
        <div class="rating-box">
          <div class="estrellas">
            <p class="txtr">Ratings:</p>
            ${this.decidirEstrella(valorRating)}
          </div>
          <div class="favoritos">
            <i id="${id}" class="bx bx-bookmark bx-star-tamano" onclick="toogleBookmark(${id})" style="color: #ffffff"></i>
          </div>
        </div>
      `;
  }

  pintarEstrella(tipoRelleno) {
    if (tipoRelleno == "vacia") {
      return `<i class="bx bx-star bx-star-tamano"></i>`;
    }
    if (tipoRelleno == "media") {
      return `<i class="bx bxs-star-half bx-star-tamano"></i>`;
    }
    if (tipoRelleno == "llena") {
      return `<i class="bx bxs-star bx-star-tamano"></i>`;
    }
  }
}

function toogleBookmark(bookmarkid) {
  console.log(bookmarkid);
  const etiquetaFavorito = document.getElementById(bookmarkid);
  console.log(bookmarkid, etiquetaFavorito, etiquetaFavorito.classList);
  if (etiquetaFavorito.classList.contains("bx-bookmark")) {
    etiquetaFavorito.classList.remove("bx-bookmark");
    etiquetaFavorito.classList.add("bxs-bookmark-star");
  } else {
    etiquetaFavorito.classList.remove("bxs-bookmark-star");
    etiquetaFavorito.classList.add("bx-bookmark");
  }
}

function newBanner(id, idLista) {
  console.log("Valor del ID ", id);
  const imagenFondo = document.querySelector(".video");
  const tituloBanner = document.querySelector(".texto-margin-titulo");
  const descBanner = document.querySelector(".texto-margin");

  console.log(id);
  console.log(idLista);

  let peliculaBanner;

  if (idLista == 1) {
    //Populares
    peliculaBanner = dataPopulares.filter((pelicula) => {
      if (pelicula.id == id) {
        return true;
      } else {
        return false;
      }
    });
    console.log("Datos de busqueda", peliculaBanner.length);
  } else {
    //Recomendados
    peliculaBanner = dataRecomndados.filter((pelicula) => {
      if (pelicula.id == id) {
        return true;
      } else {
        return false;
      }
    });
    console.log("Datos de busqueda", peliculaBanner.length);
  }

  console.log(peliculaBanner);
  imagenFondo.style.backgroundImage = "url(" + peliculaBanner[0].banner + ")";
  tituloBanner.innerHTML =
    peliculaBanner[0].nombre + pintarRatingBanner(peliculaBanner[0].rating);
  descBanner.innerHTML = peliculaBanner[0].descripcion;
}

function pintarRatingBanner(valorRating) {
  return ` 
      <div class="rating-box-banner">
        <div class="estrellas">
          ${this.decidirEstrellaBannr(valorRating)}
        </div>
      </div>
    `;
}

function decidirEstrellaBannr(valorRating) {
  let htmlEstrellas = "";
  for (let index = 1; index < 6; index++) {
    if (valorRating >= index) {
      htmlEstrellas += this.pintarEstrellaBanner("llena");
    } else {
      if (valorRating < index && valorRating > index - 1) {
        htmlEstrellas += this.pintarEstrellaBanner("media");
      } else {
        htmlEstrellas += this.pintarEstrellaBanner("vacia");
      }
    }
  }
  console.log(htmlEstrellas);
  return htmlEstrellas;
}
function pintarEstrellaBanner(tipoRelleno) {
  if (tipoRelleno == "vacia") {
    return `<i class="bx bx-star bx-star-tamano"></i>`;
  }
  if (tipoRelleno == "media") {
    return `<i class="bx bxs-star-half bx-star-tamano"></i>`;
  }
  if (tipoRelleno == "llena") {
    return `<i class="bx bxs-star bx-star-tamano"></i>`;
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
