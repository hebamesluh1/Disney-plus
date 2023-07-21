import React, { useEffect } from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { Wrap } from '../style';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (
        <Wrap>
            <Link to={`/details/${movie.id}`}>
                <img src={IMAGE_BASE_URL + movie.poster_path} alt="" />
            </Link>
        </Wrap>
    )
}

export default MovieCard