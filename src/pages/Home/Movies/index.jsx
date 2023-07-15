import React from 'react'
import { Content, Wrap } from './style'

import img from '../../../assets/img/viewers-pixar.png';

const Movies = () => {
    return (
        <div>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <img src={img} alt="" />
                </Wrap>
                <Wrap>
                    <img src={img} alt="" />
                </Wrap>
                <Wrap>
                    <img src={img} alt="" />
                </Wrap>
                <Wrap>
                    <img src={img} alt="" />
                </Wrap>
                <Wrap>
                    <img src={img} alt="" />
                </Wrap>
                <Wrap>
                    <img src={img} alt="" />
                </Wrap>
                <Wrap>
                    <img src={img} alt="" />
                </Wrap>
                <Wrap>
                    <img src={img} alt="" />
                </Wrap>
            </Content>
        </div>
    )
}

export default Movies