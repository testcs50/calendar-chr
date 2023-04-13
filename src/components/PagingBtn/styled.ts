import styled, { css } from 'styled-components';
import { ReactComponent as SVG } from '../../assets/icons/paging.svg';
interface ContProps {
  isDisable: boolean;
}
interface IconInterface {
  forward: boolean;
}

export const Container = styled.div<ContProps>`
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
  ${props => props.isDisable && css `
  opacity: 0.2;
  pointer-events: none;
  `}
  &:hover{
    background: #fff;
    opacity: 1;
    border-color: rgba(66, 86, 122, 0.5);
  }
`
export const Icon = styled(SVG)<IconInterface>`
  ${props => props.forward && css`
  transform: matrix(-1, 0, 0, 1, 0, 0);`}
`