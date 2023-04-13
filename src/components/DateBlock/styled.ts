import styled from 'styled-components';
import { device } from '../../assets/styles';

export const Container = styled.div`
@media (${device.laptop}) {
  width: 200px;
  margin-left: 60px;
}
`

export const Year = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  font-style: normal;
  font-family: 'Bebas Neue';
  font-weight: 400;
  font-size: 25px;
  line-height: 120%;
  text-transform: uppercase;
  color: #3877EE;
`

export const Text = styled.div`
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #42567A;
  text-align: start;
`