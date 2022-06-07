import React, { useEffect } from 'react';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import RentalPage from '../../components/rental/ RentalPage';

import styled from 'styled-components';


const Rental = () => {

  return(
    <Container>
        <HeaderBox>
          <Header/>
      </HeaderBox>
      <RentalPageBox>
      <MenuBox>
        <MenuBar/>
      </MenuBox>
      <RentalPage/>
      </RentalPageBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 1000px;
  
`;

const MenuBox = styled.div`
  width: 80%;
  height: 80px;
`;

const HeaderBox = styled.div`
  width: 20%;
  
`;

const RentalPageBox = styled.div`
  display: block;
  width: 80%;
`;
export default Rental;
