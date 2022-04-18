import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Header from '../../components/Header';
//import Profile from '../../components/home/Profile';

const Home = () => {
  const authStatus = useSelector((store) => store.auth.authStatus);
  console.log(authStatus);
  return (
    <Container>
      홈화면

    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default Home;
