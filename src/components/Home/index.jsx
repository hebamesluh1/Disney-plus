import React from 'react'
import { Container } from './style'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
const Home = () => {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
        </Container>
    )
}

export default Home