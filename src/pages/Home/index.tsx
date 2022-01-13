import React from 'react';

import Inner from './components/Inner';
import { Container, Title } from './styles';

const Home = () => {
  return (
    <Container>
      <Title>Pagina Home</Title>
      <Inner />
    </Container>
  );
};

export default Home;
