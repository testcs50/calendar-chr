import styled, { css } from 'styled-components';
import { device } from '../../assets/styles';
interface CircleProps {
  rot: any
}

interface StatProps {
  i: any;
  total: any;
  active: boolean;
}

export const Circle = styled.div<CircleProps>`
    display: grid;
    grid-template-areas: "layer";
    place-items: center;
    border: 1px solid #00000038;
    background: transparent;
    border-radius: 50%;
    --radius: 268px;
    width: calc(2 * var(--radius));
    height: calc(2 * var(--radius));
    & .stat {
    --r-offset: -${(props: any) => props.rot}deg;
    }
    @media (${device.laptop}) {
      display:none;
     }
`
export const Stat = styled.div<StatProps>`
  background: #42567A;
  cursor: pointer;
  grid-area: layer;
  width: 3px;
  height: 3px;
  border: 1px solid #00000038;
  border-radius: 50%;
  display: grid;
  place-items: center;

  background: #;
  color: #000000;
  font-weight: bold;
  font-size: 0px;
${(props) => css`
  --i: ${props.i};
  --total: ${props.total};
  --d: calc(var(--i) / var(--total));
  --r-offset: 0turn;
  --r-amount: 1turn;
  --r: calc((var(--r-amount) * var(--d)) + var(--r-offset));
  --transform: rotate(var(--r)) translate(var(--radius))
    rotate(calc(-1 * var(--r)));
    transform: var(--transform);
    transition-duration: 1s;
`};
${props => props.active && css`
  font-size: 18px;
  background: #F4F5F9;
  width: 50px;
  height: 50px;
`}
&:hover {
  font-size: 12px;
  background: #F4F5F9;
  width: 50px;
  height: 50px;
}
`