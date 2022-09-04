import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import RentalPage from '../../components/rental/RentalPage';
import ScrollIndiactor from '../../components/ScrollIndicator';
import TopButton from '../../components/TopButton';

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
      <TopButton/>
    </Container>
  );
}

const Container = styled.div`
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
`;

const RentalPageBox = styled.div`
  width: 70%;
  display: flex;
  
`;
export default Rental;
