import React, { useEffect } from 'react';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import BasketPage from '../../components/basket/BasketPage';

import styled from 'styled-components';


const BasketList = () => {

  return(
    <Container>
        <HeaderBox>
          <Header/>
      </HeaderBox>
      <BasketPageBox>
      <MenuBox>
        <MenuBar/>
      </MenuBox>
      <BasketPage/>
      </BasketPageBox>
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

const BasketPageBox = styled.div`
  display: block;
  width: 80%;
  
`;
export default BasketList;