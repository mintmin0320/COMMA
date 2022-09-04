import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import HomePage from '../../components/home/HomePage';
import TopButton from '../../components/TopButton';
import ScrollIndiactor from '../../components/ScrollIndicator';

const Home = () => {
  return (
    <Container>
      <ScrollIndiactor/>
      <MenuBox>
        <MenuBar/>
      </MenuBox>  
      <div className='container-box'>
        <HeaderBox>
          <Header/>
        </HeaderBox>
        <HomeBox>        
          {/* <HomePage/> */}
        </HomeBox>
      </div>
      <TopButton/>
    </Container>
  )
}

const Container = styled.div`
  .container-box {
    display: flex;
    width:100%;
  }
`;

const MenuBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
`;

const HeaderBox = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
`;

const HomeBox = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`;

export default Home;