import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Carousel,Wrap } from "./style";

import img1 from "../../../assets/img/slider-badging.jpg";
import img2 from "../../../assets/img/slider-badag.jpg";
import img3 from "../../../assets/img/slider-scale.jpg";
import img4 from "../../../assets/img/slider-scales.jpg";

  const ImgSlider=()=> {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src={img2} alt="" />
      </Wrap>
      <Wrap>
        <img src={img1} alt="" />
      </Wrap>
      <Wrap>
        <img src={img3} alt="" />
      </Wrap>
      <Wrap>
        <img src={img4} alt="" />
      </Wrap>
    </Carousel>
  );
}
export default ImgSlider