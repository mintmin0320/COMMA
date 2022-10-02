import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import FeedbackBoard from '../../components/feedback/FeedbackBoard';
import ScrollIndiactor from '../../components/ScrollIndicator';
import TopButton from '../../components/TopButton';
import ResponsiveBtn from '../../components/ResponsiveBtn';

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
        <FeedbackPageBox>
          <FeedbackBoard/>
        </FeedbackPageBox>
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

  @media screen and (max-width: 430px) {
    display: none;
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

const FeedbackPageBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export default FeedbackPage;