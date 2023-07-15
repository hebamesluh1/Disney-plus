import React from 'react'
import { Container, Wrap } from './style'

//images
import v1 from '../../../assets/img/viewers-disney.png';
import v2 from '../../../assets/img/viewers-pixar.png';
import v3 from '../../../assets/img/viewers-marvel.png';
import v4 from '../../../assets/img/viewers-national.png';
import v5 from '../../../assets/img/viewers-starwars.png';

const Viewers = () => {
    return (
        <Container>
            <Wrap>
                <img src={v1} alt='viewers-1' />
            </Wrap>
            <Wrap>
                <img src={v2} alt='viewers-2' />
            </Wrap>
            <Wrap>
                <img src={v3} alt='viewers-3' />
            </Wrap>
            <Wrap>
                <img src={v4} alt='viewers-4' />
            </Wrap>
            <Wrap>
                <img src={v5} alt='viewers-5' />
            </Wrap>
        </Container>
    )
}

export default Viewers