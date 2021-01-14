import React from 'react';
import { Container } from './styles';

interface TootipProps {
  message: string;
  className?: string;
}

const Tooltip: React.FC<TootipProps> = ({ message, className, children }) => {
  return (
    <Container className={className}>
      <span>{message}</span>
      {children}
    </Container>
  );
};

export default Tooltip;
