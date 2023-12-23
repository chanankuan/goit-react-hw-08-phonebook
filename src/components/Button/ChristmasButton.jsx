import React from 'react';
import { Centerer, Button } from './ChristmasButton.styled';

const ChristmasButton = ({ children, onClick }) => {
  return (
    <Centerer>
      <Button onClick={onClick}>{children}</Button>
    </Centerer>
  );
};

export default ChristmasButton;
