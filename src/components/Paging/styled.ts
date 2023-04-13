import styled from 'styled-components';
import { device } from '../../assets/styles';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: -15px;
  @media (${device.laptop}) {
    margin-top: -60px;
    z-index: 99;
    }
  `
export const Counter = styled.div`
    cursor: pointer;
    position: absolute;
    top: -39px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #42567A;
`


