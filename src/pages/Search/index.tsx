import React, { useState, useEffect } from "react";
import { Wrapper, Section } from "./styles";
import { Link } from "react-router-dom";
import { WatchlistContainer } from "../Watchlist/styles";

interface Movie {
  id: number;
  backdrop_path: string | null;
  poster_path: string | null;
  original_title: string;
  title: string | null;
  name: string | null;
}

const Search = () => {
  const [search, setSearchValue] = useState("");
  const [movieList, setmovieList] = useState<Movie[]>([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  const handleSearchValue = (e: any) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    console.log("desde effect", search);
    const handleSearch = async () => {
      const requestSearch = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APITMB_KEY}&query=${search}`
      );
      const res = await requestSearch.json();
      setmovieList(res.results);
      console.log(res);
    };
    handleSearch();
  }, [search]);

  return (
    <Wrapper>
      <div className="app_bg"></div>
      <Section>
        <div role="search">
          <div>
            <form action="">
              <input
                type="text"
                name="search"
                id="search_input"
                value={search}
                onChange={(e) => handleSearchValue(e)}
                placeholder="Título, personaje o género"
              />
              <button className="button__reset">
                <svg
                  aria-hidden="true"
                  aria-label="close"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 36 36"
                  className="x-icon"
                >
                  <title>Close</title>
                  <path
                    d="M17.9 16.239l8.833-9.085c.255-.266.629-.404 1.01-.404.248 0 .491.056.706.175.641.338.817 1.121.301 1.649l-9.081 9.342 9.08 9.312c.517.53.343 1.311-.313 1.657-.546.287-1.276.2-1.7-.231l-8.835-9.062-8.838 9.064c-.421.428-1.152.516-1.699.229-.655-.346-.829-1.127-.312-1.657l9.08-9.312-9.08-9.341c-.516-.529-.34-1.312.313-1.657.202-.112.445-.168.693-.168.382 0 .755.138 1.007.4l8.836 9.089z"
                    className="x-icon-path"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
          <div style={{ paddingTop: "100px" }}>
            <div
              style={{
                marginTop: "50px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ maxWidth: "80vw" }}>
                {Array.isArray(movieList) && movieList.length > 0 ? (
                  <WatchlistContainer width={80}>
                    {movieList.map((item) => {
                      if (
                        !item.backdrop_path === null
                          ? item.backdrop_path
                          : item.poster_path
                      ) {
                        return (
                          <Link
                            to={`/${item.id}`}
                            className="watchlist__item"
                            key={item.id}
                          >
                            <img
                              src={
                                item.backdrop_path
                                  ? `${baseUrl}${item.backdrop_path}`
                                  : `${baseUrl}${item.poster_path}}`
                              }
                              alt={
                                (item.original_title ||
                                  item.title ||
                                  item.name) ??
                                "Imagen de la pelicula"
                              }
                            />
                            <div className="overlay">
                              <div className="text">
                                {item.title || item.name}
                              </div>
                            </div>
                          </Link>
                        );
                      }
                    })}
                  </WatchlistContainer>
                ) : (
                  <p>
                    {movieList.length <= 0 && search.length === 0
                      ? "Comienza buscando un titulo."
                      : `No se encontraron resultados para la busqueda de :${search}`}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Wrapper>
  );
};

export default Search;
