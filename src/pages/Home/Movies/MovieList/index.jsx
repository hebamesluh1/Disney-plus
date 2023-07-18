import React, { useEffect, useState } from 'react';
import globalApi from '../../../../service/globalApi';
import MovieCard from '../MovieCard';

import { Container } from '../style'

// swiper 
import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const MovieList = ({ genreId }) => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMovieGeneralId();
  }, []);

  const getMovieGeneralId = () => {
    globalApi.getMovieByGenreId(genreId)
      .then(res => {
        setLoading(false)
        setMovieList(res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Container
      spaceBetween={10}
      slidesPerView={6}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      {loading ? "loading ..." : <>
        {movieList.map((movie, index) => (
          <SwiperSlide>
            <MovieCard movie={movie} key={index} />
          </SwiperSlide>
        ))}
      </>}

    </Container>
  );
};

export default MovieList;
