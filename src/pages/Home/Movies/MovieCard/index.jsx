import React, { useEffect } from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { Wrap } from '../style';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();
    return (
        <Wrap onClick={navigate(`/details/${movie.id}`)}>
            <img src={IMAGE_BASE_URL + movie.poster_path} alt=""/>
       </Wrap>
    )
}

export default MovieCard