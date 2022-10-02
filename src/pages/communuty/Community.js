import React from 'react';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import CommunityPage from '../../components/community/CommunityPage';
import ScrollIndiactor from '../../components/ScrollIndicator';
import ResponsiveBtn from '../../components/ResponsiveBtn';
import TopButton from '../../components/TopButton';
import styled from 'styled-components';

const Community = () => {
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
        <CommunityBox> 
          <CommunityPage/>
        </CommunityBox>
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

  .container-box {
    display: flex;
  }
`;

const MenuBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
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

const CommunityBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;


export default Community;