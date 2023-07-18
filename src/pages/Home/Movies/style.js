import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Content = styled.div`
  padding: 20px;
`;

export const Container = styled(Swiper)`
  display: flex;
  overflow: none;
`;

export const Wrap = styled.div`
  width: 200px;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb (0 0 0 / 80%) 0px 40px 58px -16px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
