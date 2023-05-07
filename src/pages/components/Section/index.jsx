import React from "react";
import { SectionContainer, SectionContent, SectionWrap } from "../../../assets";
import { Link } from "react-router-dom";

const Section = ({ tittle, arrayMovie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <SectionContainer>
      <h4>{tittle}</h4>
      <SectionContent>
        {arrayMovie &&
          React.Children.toArray(
            arrayMovie.map((movie) => (
              <SectionWrap>
                {movie.id}
                <Link to={`/detail/${movie.id}`}>
                  <img
                    loading="lazy"
                    src={`${baseUrl}${movie.backgroundImg}`}
                    alt={movie.title}
                  />
                </Link>
              </SectionWrap>
            ))
          )}
      </SectionContent>
    </SectionContainer>
  );
};

export default Section;
