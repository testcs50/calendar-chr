import styled, { css } from 'styled-components';
interface BtnProps {
  fS: number;
  pV: number;
  pH: number;
  btn_type: string;
}
export const ButtonWrp = styled.button<BtnProps>`
  ${(props) => css`
    font-size: ${props.fS}px;
    padding: ${props.pV}px ${props.pH}px;
    background: ${props.btn_type === "white" ? "white" : "blue"}
  `}
`