import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import playIcon from '../../assets/img/play-icon-black.png'
import trailerIcon from '../../assets/img/play-icon-white.png'
import group from '../../assets/img/group-icon.png';
import globalApi from '../../service/globalApi';
import { Description, Subtitle, GroupWatchButton, AddButton, TrailerButton, PlayButton, Controls, ImageTitle, Background, Container } from './style'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { genere } from '../../mock/data'
const Details = () => {
  const { id } = useParams();
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMovieGeneralId();
  }, []);

  const getMovieGeneralId = () => {
    globalApi.getMovieByGenreId(genere.id)
      .then(res => {
        setLoading(false)
        setMovieList(res.data.results);
        console.log(res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const myData = movieList.find((item) => item.id === Number(id));
  console.log(myData)
  return (
    <Container>
      <Background>
        <img src={IMAGE_BASE_URL + myData?.poster_path} alt="" />
      </Background>
      <ImageTitle>
        {myData?.original_title}
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src={playIcon} alt="" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src={trailerIcon} alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src={group} alt="" />
        </GroupWatchButton>
      </Controls>
      <Subtitle>
        {myData?.original_title}
      </Subtitle>
      <Description>
        {myData?.overview}
      </Description>
    </Container>
  )
}

export default Details