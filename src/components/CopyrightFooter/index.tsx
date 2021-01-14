import React, { useState, useEffect } from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { Container } from './styles';

const CopyrightFooter: React.FC = () => {
  const [date, setDate] = useState(null);

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);
  return (
    <Container>
      Copyright
      <AiOutlineCopyrightCircle />
      {date}
      <a href="https://healthbit.com.br">Healthbit</a>
    </Container>
  );
};

export default CopyrightFooter;
