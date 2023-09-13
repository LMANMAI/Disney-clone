import React from "react";
import { useParams } from "react-router-dom";
import { CatContainer } from "./styles";
import { categoryData, Category } from "./data";

const Categories = () => {
  const { categ } = useParams<{ categ: Category }>();
  const categoryInfo = categ ? categoryData[categ] : undefined;
  if (!categoryInfo) {
    return <div>Categoría no encontrada</div>;
  }

  const { nombre, categoria, src, url, brandcover } = categoryInfo;
  return (
    <CatContainer>
      <div className="container__topside">
        <img src={src} alt={nombre} className="img__bg" />
        <div className="divider"> </div>
      </div>

      <img src={brandcover} alt="" className="brand" />
      <div>{categ}</div>
    </CatContainer>
  );
};

export default Categories;
