import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CatContainer,
  SearchResultsWraper,
  SearchResultsImgContainer,
} from "./styles";
import { categoryData, Category } from "./data";

const Categories = () => {
  const [databycat, setDataByCategorie] = useState<any[]>([]);
  const { categ } = useParams<{ categ: Category }>();
  const categoryInfo = categ ? categoryData[categ] : undefined;
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      if (categoryInfo) {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APITMB_KEY}&query=${categoryInfo.url}`
          );
          const data = await response.json();
          setDataByCategorie(data.results);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [categoryInfo]);

  if (!categoryInfo) {
    return <div>Categoría no encontrada</div>;
  }

  const { nombre, src, brandcover } = categoryInfo;

  return (
    <CatContainer>
      <div className="container__topside">
        <img src={src} alt={nombre} className="img__bg" />
        <div className="divider"> </div>
      </div>

      <div className="brand">
        <img src={brandcover} alt="" />
      </div>
      <div className="back"></div>
      <div className="background"></div>
      <SearchResultsWraper>
        <ul>
          {databycat.map((item) => {
            if (
              !item.backdrop_path === null
                ? item.backdrop_path
                : item.poster_path
            ) {
              return (
                <Link key={item.id} to={`/${item.id}`}>
                  <li style={{ borderRadius: "5px" }}>
                    <SearchResultsImgContainer>
                      <img
                        src={`${baseUrl}${
                          item.backdrop_path || item.poster_path
                        }`}
                        alt={item.original_title}
                      />

                      <div className="overlay">
                        <div className="text">{item.title || item.name}</div>
                      </div>
                    </SearchResultsImgContainer>
                  </li>
                </Link>
              );
            }
          })}
        </ul>
      </SearchResultsWraper>
    </CatContainer>
  );
};

export default Categories;
