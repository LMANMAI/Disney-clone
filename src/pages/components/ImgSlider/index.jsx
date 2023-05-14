import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMGSliderCarrousel, IMGSliderWrapImg } from "../../../assets";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <IMGSliderCarrousel {...settings}>
      <IMGSliderWrapImg>
        <a href="">
          <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </IMGSliderWrapImg>
      <IMGSliderWrapImg>
        <a href="">
          <img src="/images/slider-badging.jpg" alt="" />
        </a>
      </IMGSliderWrapImg>
      <IMGSliderWrapImg>
        <a href="">
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </IMGSliderWrapImg>
      <IMGSliderWrapImg>
        <a href="">
          <img src="/images/slider-scales.jpg" alt="" />
        </a>
      </IMGSliderWrapImg>
    </IMGSliderCarrousel>
  );
};

export default ImgSlider;
