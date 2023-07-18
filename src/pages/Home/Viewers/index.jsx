import React from 'react'
import { Container, Wrap } from './style'

//images
import v1 from '../../../assets/img/viewers-disney.png';
import v2 from '../../../assets/img/viewers-pixar.png';
import v3 from '../../../assets/img/viewers-marvel.png';
import v4 from '../../../assets/img/viewers-national.png';
import v5 from '../../../assets/img/viewers-starwars.png';


//videos
import video1 from '../../../assets/video/1564674844-disney_2.mp4';
import video2 from '../../../assets/video/1564676714-pixar.mp4';
import video3 from '../../../assets/video/1564676115-marvel.mp4';
import video4 from '../../../assets/video/1564676296-national-geographic.mp4';
import video5 from '../../../assets/video/1608229455-star-wars.mp4';

const Viewers = () => {
    const productionHouseList = [
        {
            id: 1,
            image: v1,
            video: video1
        },
        {
            id: 2,
            image: v2,
            video: video2
        },
        {
            id: 3,
            image: v3,
            video: video3
        },
        {
            id: 4,
            image: v4,
            video: video4
        },
        {
            id: 5,
            image: v5,
            video: video5
        },

    ]
    return (
        <Container>
            {productionHouseList.map((item) => (<Wrap key={item.id}>
                <img src={item.image} alt='viewers' />
                <video src={item.video} autoPlay loop playsInline muted />
            </Wrap>))}
        </Container>
    )
}

export default Viewers