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

  crearHtmlPoster(id) {
    return `
        <div class="tarjeta">
            <img onclick="newBanner(${id})"
              class="poster"
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

  toogleBookmark(bookmarkid) {
    console.log(bookmarkid);
  }
}
