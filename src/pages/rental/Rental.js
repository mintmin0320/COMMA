import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import RentalPage from '../../components/rental/RentalPage';
import ScrollIndiactor from '../../components/ScrollIndicator';
import TopButton from '../../components/TopButton';
import ResponsiveBtn from '../../components/ResponsiveBtn';

const Rental = () => {
  return(
    <Container>
      <ScrollIndiactor/>
      <MenuBox>
        <MenuBar/>
      </MenuBox>
      <div className='container-box'>
        <HeaderBox>
          <Header/>
        </HeaderBox>
        <RentalPageBox>
          <RentalPage/>
        </RentalPageBox>
      </div>
      <RpsBtnBox>
        <ResponsiveBtn/>
      </RpsBtnBox>
      <TopButton/>
    </Container>
  );
}

const Container = styled.div`
  background: #F5F5F5;
  // height: 100vh;

  .container-box {
    display: flex;
  }
`;

const MenuBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
`;

const HeaderBox = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 430px) {
    display: none;
  }
`;

const RpsBtnBox = styled.div`
  display: none;

  @media screen and (max-width: 430px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
  }
`

const RentalPageBox = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  
  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;
export default Rental;
