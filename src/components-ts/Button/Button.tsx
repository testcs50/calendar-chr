import React from 'react';
import { ButtonWrp } from './styled';

interface IButtonProps {
  fS?: number;
  pV?: number;
  pH?: number;
  btn_type?: string;
  text?: string;
  class?: string;

}

const Button: React.FC<IButtonProps> = ({ fS = 14, pV = 0, pH = 0, btn_type, text }) => {
  return (
    <ButtonWrp fS={fS} pV={pV} pH={pH} btn_type={btn_type}>
      {text}
    </ButtonWrp>
  );
}

export default Button;
