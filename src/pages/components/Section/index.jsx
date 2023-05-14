import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import {
  RowWraper,
  ContenedorPrincipal,
  ButtonCarrousel,
  ContenedorCarrousel,
  Carrousel,
  Pelicula,
} from "../../../assets";
import { Link } from "react-router-dom";

const Section = ({ tittle, arrayMovie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  //Scroll
  const scrollRight = () => {
    const fila = document.getElementById(`contenedor_carrousel_${tittle}`);
    fila.scrollLeft += fila.offsetWidth;
  };
  const scrollLeft = () => {
    const fila = document.getElementById(`contenedor_carrousel_${tittle}`);
    fila.scrollLeft -= fila.offsetWidth;
  };

  return (
    <RowWraper>
      <div className="contenedor_titulo_controles">
        <h3>{tittle}</h3>
      </div>
      <ContenedorPrincipal className="contenedor_principal">
        <ButtonCarrousel
          role="button"
          id="flecha_izquierda"
          className="flecha_izquierda"
          onClick={() => scrollLeft()}
        >
          <BiLeftArrow />
        </ButtonCarrousel>
        <ContenedorCarrousel
          className={`contenedor_carrousel ${tittle}`}
          id={`contenedor_carrousel_${tittle}`}
        >
          <Carrousel className="carrousel">
            {arrayMovie?.map((onemovie) => (
              <Pelicula className={`pelicula_${tittle}`} key={onemovie.id}>
                <a href="#">
                  <img
                    loading="lazy"
                    src={`${baseUrl}${onemovie.backgroundImg}`}
                    alt={onemovie.title}
                  />
                  <div className="overlay">
                    <div className="text">
                      {onemovie.title || onemovie.name}
                    </div>
                  </div>
                </a>
              </Pelicula>
            ))}
          </Carrousel>
        </ContenedorCarrousel>
        <ButtonCarrousel
          role="button"
          id="flecha_derecha"
          className="flecha_derecha"
          onClick={() => scrollRight()}
        >
          <BiRightArrow />
        </ButtonCarrousel>
      </ContenedorPrincipal>
    </RowWraper>
  );
};

export default Section;
