import React from 'react';
import PagingBtn from '../PagingBtn';
import { Container, Counter } from './styled';

interface IPagingProps {
  count: number;
  currentGap: number;
  setCurrentGap: any;
}

const Paging: React.FC<IPagingProps> = ({ count, currentGap, setCurrentGap }) => {
  return (
    <>
      <Container>
        <Counter>{`0${currentGap}`}/0{count}</Counter>
        <PagingBtn isDisable={currentGap === 1} onClick={() => setCurrentGap(currentGap - 1)} forward={false} />
        <PagingBtn isDisable={currentGap === count} onClick={() => setCurrentGap(currentGap + 1)} forward={true} />
      </Container>
    </>
  );
}

export default Paging;
