import React from 'react';
import Eclipse from '../../../components/Eclipse';
import Number from '../../../components/Number';
import { Container, LineHorizontal, LineVertical, MainHeader } from './styled';

interface IMainProps {
  children?: React.ReactNode;
  dates: Array<number>;
  totalCount: number;
  currentGap: number;
  setCurrentGap: any;
}
const Main: React.FC<IMainProps> = ({ totalCount, dates, currentGap, setCurrentGap }) => {
  return (
    <>
    {/* <img src='kad.jpg' width={100} height={65} /> */}
      <Container>
        <LineVertical />
        <LineHorizontal />
        <MainHeader>
          <Number style={{color: '#11ee22'}} number={dates[0]} />
          <Number style={{color: "#ff0000"}}number={dates[1]} />
        </MainHeader>
        <Eclipse totalCount={totalCount} currentGap={currentGap} setCurrentGap={setCurrentGap} />
      </Container>
    </>
  );
};

export default Main;
