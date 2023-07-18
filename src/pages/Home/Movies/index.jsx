import React from 'react'
import { Title, Content } from './style'
import MovieList from './MovieList'
import { genere } from '../../../mock/data'

const Movies = () => {

    return (

        <>
            {genere.map((item, index) => index <= 4 &&
                (
                    <Content key={item.id}>
                        <Title>{item.name}</Title>
                        <MovieList genreId={item.id} />
                    </Content>
                )
            )}
        </>
    )
}

export default Movies