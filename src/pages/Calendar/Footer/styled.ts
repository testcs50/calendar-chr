import styled, { css } from 'styled-components';
import { device } from '../../../assets/styles';

interface ContProps {
  isDisable: boolean;
}
interface IconInterface {
  forward: boolean;
}

export const Container = styled.div` 
  position:relative;
  .swiper {
    margin-top: 57px;
    min-height:120px;
    .slide {
      text-align: start;
      max-width: 320px; 
      margin-right: 80px;
      margin-left: 40px;
      @media ${device.laptop} {
        width:: 50px;
        margin-right: 0;
        margin-left: 0;
      }
    }
  }
  .swiper {
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
  }
  @media ${device.laptop} {
    position: initial;
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }
`

export const SwiperBtn = styled.div<ContProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid rgba(66, 86, 122, 0.5);
  cursor: pointer;
  opacity: 0.5;
  margin-right: 2px;
  ${props => props.isDisable && css`
  opacity: 0.2;
  pointer-events: none;
  `}
  &:hover{
    background: #fff;
    opacity: 1;
    border-color: rgba(66, 86, 122, 0.5);
  }
`
