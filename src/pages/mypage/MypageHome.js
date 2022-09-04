import React, { useEffect } from 'react';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import MyPageInfo from '../../components/mypage/MyPageInfo';
import ScrollIndiactor from '../../components/ScrollIndicator';
import styled from 'styled-components';
import TopButton from '../../components/TopButton';

const MypageHome = () => {

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
        <MypageBox>
          <MyPageInfo/>
        </MypageBox>
      </div>  
      <TopButton/>
    </Container>
  );
}

const Container = styled.div`  
  background: #F5F5F5;
  height: 100vh;
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
  width: 25%;
  display: flex;
  justify-content: flex-end;
`;

const MypageBox = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
`;

export default MypageHome;