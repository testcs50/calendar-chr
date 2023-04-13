import React from 'react';
import {Container, Icon} from './styled';

interface IPagingBtnProps {
  forward: boolean;
  onClick: () => void;
  isDisable: boolean;
}

const PagingBtn:React.FC<IPagingBtnProps> = ({isDisable, forward, onClick}) => {
  return (
    <>
    <Container isDisable={isDisable} onClick={onClick}>
      <Icon forward={forward}/>
    </Container>
    </>
  );
};

export default PagingBtn;
