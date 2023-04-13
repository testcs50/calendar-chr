import React from 'react';
import {Container} from './styled';

interface IHeaderProps {
  children?: React.ReactNode;
}

const Header:React.FC<IHeaderProps> = (props) => {
  return (
    <>
  <Container>Новейшая <br />история ЧР
  <p className='header_line'></p>
  </Container>
    </>
  );
}

export default Header;
