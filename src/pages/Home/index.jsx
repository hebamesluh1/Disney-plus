import React from 'react'
import { Container } from './style'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
const Home = () => {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home