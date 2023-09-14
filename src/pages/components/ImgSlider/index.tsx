import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMGSliderCarrousel, IMGSliderWrapImg } from "../../../assets";
import { Link } from "react-router-dom";

type Movie = {
  backgroundImg: string;
  cardImg: string;
  subTitle: string;
  description: string;
  titleImg: string;
  id: number;
};
type ImgSliderProps = {
  movies: Movie[];
};
const ImgSlider: React.FC<ImgSliderProps> = ({ movies }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <IMGSliderCarrousel {...settings}>
      {movies.map((item: Movie) => (
        <IMGSliderWrapImg key={item.id}>
          <Link to={`/${item.id}`}>
            <img src={`${baseUrl}${item?.backgroundImg}`} alt={item.titleImg} />
          </Link>
        </IMGSliderWrapImg>
      ))}
    </IMGSliderCarrousel>
  );
};

export default ImgSlider;
