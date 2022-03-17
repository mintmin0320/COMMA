import React, { useEffect } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import Search from '../../components/home/Search';

const Home = () => {

  return (
    <Container>
      <Header />
      <Search />
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  height: 100%;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

export default Home;
