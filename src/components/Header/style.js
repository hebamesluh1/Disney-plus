import styled from "styled-components";

export const Nav = styled.div`
  height: 78px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

export const Logo = styled.img`
  width: 80px;
`;
export const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  a {
    display: flex;
    color: #fff;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
      width: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position:relative;
      &:after {
        content: "";
        height: 2px;
        background: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        transition:0.3s;
        opacity:0;
        transform:scaleX(0);
      }
    }
    &:hover{
        span:after{
            transform:scaleX(1);
            opacity:1;
        }
    }
  }
`;
export const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;
