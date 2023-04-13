import styled from 'styled-components';
import { device } from '../../../assets/styles';

export const Container = styled.div`
    position:relative;
    font-weight: 700;
    font-size: 56px;
    line-height: 120%;
    color: #42567A;
    .header_line {
      position:absolute;
      width: 5px;
      height: 120px;
      left: -78px;
      top: -46px;
      background-image: linear-gradient(to bottom, #00ff00, #ffffff, #ff0000);
      @media (${device.laptop}) {
        display: none
      }
    }
    @media (${device.laptop}) {
      width: 100%;
        border: none;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 120%;
        color: #42567A;
      }
    
`;
