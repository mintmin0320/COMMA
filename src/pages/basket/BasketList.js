import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import BasketPage from '../../components/basket/BasketPage';
import ScrollIndiactor from '../../components/ScrollIndicator';
import TopButton from '../../components/TopButton';

const BasketList = () => {
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
        <BasketPageBox>
          <BasketPage/>
        </BasketPageBox>
      </div>
      <TopButton/>
    </Container>
  );
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

const BasketPageBox = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`;

export default BasketList;
