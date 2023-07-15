import React from 'react'
import playIcon from '../../assets/img/play-icon-black.png'
import trailerIcon from '../../assets/img/play-icon-white.png'
import group from '../../assets/img/group-icon.png';
import { Description, Subtitle, GroupWatchButton, AddButton, TrailerButton, PlayButton, Controls, ImageTitle, Background, Container } from './style'

const Details = () => {
  return (
    <Container>
      <Background>
        <img src="https://th.bing.com/th/id/OIP.u0AZmNQr9-NUk-5dCvwaFgHaEK?pid=ImgDet&rs=1" alt="" />
      </Background>
      <ImageTitle>
        <img src="https://th.bing.com/th/id/R.ab82f13fb8ded77fe69ef04010b8b29f?rik=QA6fFXr7v1VJzg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fwalt_disney%2fwalt_disney_PNG3.png&ehk=nO%2fJkowZi6RLHFmaA0v9QbB4IF8oBpgt3yTBSzLImrQ%3d&risl=&pid=ImgRaw&r=0" alt="" />
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sit culpa corrupti cumque ducimus quas dolor debitis. Quibusdam, officia possimus minus architecto expedita omnis ut accusamus. Mollitia quidem ducimus illum!
      </Subtitle>
      <Description>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim laboriosam quo cupiditate id molestias! Excepturi deleniti voluptate id veritatis, est aliquid porro, quae quasi placeat minus architecto sint qui voluptatem?
      </Description>
    </Container>
  )
}

export default Details