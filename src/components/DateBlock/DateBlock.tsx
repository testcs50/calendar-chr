import React from 'react';
import { Container, Year, Text } from './styled';

interface IDateBlockProps {
  children?: React.ReactNode;
  year: number;
  text: string;
}

const DateBlock: React.FC<IDateBlockProps> = ({ year, text }) => {
  return (
    <>
      <Container>
        <Year>{year}</Year>
        <Text>{text}</Text>
      </Container>
    </>
  );
}

export default DateBlock;
