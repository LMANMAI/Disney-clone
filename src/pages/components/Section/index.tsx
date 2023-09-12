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

type MovieData = {
  title?: string;
  name?: string;
  backgroundImg: string;
  cardImg: string;
  subTitle: string;
  description: string;
  titleImg: string;
  id: number; // O el tipo de dato correcto para el ID
};

const Section = ({
  tittle,
  arrayMovie,
}: {
  tittle: string;
  arrayMovie: MovieData[] | null; // Cambiar a un array de MovieData
}) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  //Scroll
  const scrollRight = () => {
    const fila = document.getElementById(`contenedor_carrousel_${tittle}`);
    if (fila) {
      fila.scrollLeft += fila.offsetWidth;
    }
  };
  const scrollLeft = () => {
    const fila = document.getElementById(`contenedor_carrousel_${tittle}`);
    if (fila) {
      fila.scrollLeft -= fila.offsetWidth;
    }
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
                <Link
                  to={`/detail/${onemovie.id}`}
                  onClick={() => console.log(onemovie)}
                >
                  <img
                    loading="lazy"
                    src={`${baseUrl}${onemovie.backgroundImg}`}
                    alt={onemovie.title || onemovie.name}
                  />
                  <div className="overlay">
                    <div className="text">
                      {onemovie.title || onemovie.name}
                    </div>
                  </div>
                </Link>
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
