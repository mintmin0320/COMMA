import React, { useEffect } from 'react';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import MyPageInfo from '../../components/mypage/MyPageInfo';

import styled from 'styled-components';


const MypageHome = () => {

  return(
    <Container>
        <HeaderBox>
          <Header/>
      </HeaderBox>
      <MypageBox>
      <MenuBox>
        <MenuBar/>
      </MenuBox>
        <MyPageInfo/>
      </MypageBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const MenuBox = styled.div`
  width: 80%;
  height: 80px;
  // position: sticky;
  // top: 0;
  // background: #8a4baf;
`;

const HeaderBox = styled.div`
  width: 20%;
  
`;

const MypageBox = styled.div`
  width: 80%;
`;

export default MypageHome;