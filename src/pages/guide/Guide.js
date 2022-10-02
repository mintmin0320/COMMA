import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import GuidePage from '../../components/guide/GuidePage';
import ScrollIndiactor from '../../components/ScrollIndicator';
import TopButton from '../../components/TopButton';

const FeedbackPage = () => {
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
        <GuidePageBox>
          <GuidePage/>
        </GuidePageBox>
      </div>
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

  @media screen and (max-width: 430px) {
    display: none;
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

const GuidePageBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export default FeedbackPage;