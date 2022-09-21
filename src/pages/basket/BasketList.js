import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import BasketPage from '../../components/basket/BasketPage';
import ScrollIndiactor from '../../components/ScrollIndicator';
import TopButton from '../../components/TopButton';
import ResponsiveBtn from '../../components/ResponsiveBtn';

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
      <RpsBtnBox>
        <ResponsiveBtn/>
      </RpsBtnBox>
      <TopButton/>
    </Container>
  );
}

const Container = styled.div`
  background: #F5F5F5;
  height: 100vh;

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

  @media screen and (max-width: 430px) {
    height: 60px;
  }
`;

const HeaderBox = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;

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

const BasketPageBox = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;

export default BasketList;
