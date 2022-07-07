import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// 개발자
import { basketAdd } from '../../redux/actions/backet';
import titleTab from '../../utils/TitleTab';
// import Alert from '../../components/common/modal/Alert';
//css
import styled from 'styled-components';
//input & button
import Button from '../common/Button';
// import Input from '../common/CommonInput';

//icon

const BasketPage = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("장바구니"), 100);
  

  return(
    <Container>
      <Content>
        <div className='title'>Order</div>
        <div className='top-box'>
            sda
        </div>
        <OrderBox>
          dsa

        </OrderBox>
        장바구니페이지
      </Content>
    </Container> 
  )       
}

const Container = styled.div`
    width: 100%;
    height: 750px;
    display: flex;
    justify-content: center;
`;

const CardBox = styled.div`
    width: 950px;
    height: 180px;
    margin: 0 0 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #D8D8D8;
`;

const Content = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    border: 1px solid #D8D8D8;
    

    .title {
      width: 100%;
      height: 10%;
      display: flex;
      align-items: center;
      font-size: xx-large;
      border-bottom: 1px solid #D8D8D8;
      
    }
    .top-box {
      width: 95%;
      height: 40px;
      
      display: flex;
      // align-items: center;
      border-right: 1px solid #D8D8D8;
      border-left: 1px solid #D8D8D8;
      border-bottom: 1px solid #D8D8D8;
    }
  
`;

const OrderBox = styled.div`
    width: 95%;
    height: 180px;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    border-bottom: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
    overflow: auto;


  .bottom-box {
    border-bottom: 1px solid #D8D8D8;
    
  }
`;

export default BasketPage;