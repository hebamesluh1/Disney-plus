import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Wrap } from "./style";
import globalApi from "../../../service/globalApi";
import img1 from "../../../assets/img/slider-badging.jpg";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const ImgSlider = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    globalApi.getTrendingVideos.then((res) => {
      setLoading(false);
      setMovie(res.data.results);
    });
  };

  const handleImageLoad = () => {
    console.log("Image loaded");
  };

  const handleImageError = () => {
    setError(true);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Carousel {...settings}>
          {movie.map((item, index) => (
            <Wrap key={index}>
              {error ? (
                <img
                  src={img1}
                  alt="Error"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              ) : (
                <img
                  src={`${IMAGE_BASE_URL}${item?.backdrop_path}`}
                  alt=""
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              )}
            </Wrap>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default ImgSlider;
