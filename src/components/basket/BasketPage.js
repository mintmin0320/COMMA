import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
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
  const userId = useSelector((store) => store.auth.authStatus.userId);
  
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("장바구니 - COMMA"), 100);

  const [state, setState] = useState({
    userId: userId,
  });

  // const _handleGetData = (e) => {
  //   e.preventDefault();
  //   // _getData();
  //   // basketStatus.length = 0;
  // };

  // //서버에 장바구니 정보 요청
  // const _getList = async () => {
  //   const url = 'http://210.121.173.182/' + state.userId;
  //   console.log(url);
  //   const response = await axios.get(url);
  //   console.log(response);
  //   console.log(response.data);
  //   setState({
  //     ...state,
  //   });
  // };
  

  return(
    <Container>
      <Content>
        <div className='title-box'>
          <div className='title-left'>주문페이지</div>
          <div className='title-right'></div>
        </div>
        <div className='top-box'>
          고정글
        </div>
        <OrderBox>
          주문목록
        </OrderBox>
        <div className='text-box'>
          <div className='text-box-left'>
            <div className='text'><div className='text-font'>· 상품을 찾을 시 학생증이 필요합니다.</div></div>
            <div className='text'><div className='text-font'>· 상품은 다음날 찾으러 오셔야 합니다.</div></div>
          </div>
          <div className='text-box-right'/>
        </div>
        <OrderButton>
          <button
            className='login-button'
            // onClick={_signIn}
          >
            <div className='login-text'>주문</div>
          </button>
        </OrderButton>
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
    
  .title-box {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    font-size: xx-large;
    border-bottom: 1px solid #D8D8D8;  
  }

  .title-left {
    width: 16%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title-right {
    width: 84%;
  }

  .top-box {
    width: 96%;
    height: 40px;
    display: flex;
    // align-items: center;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
  }

  .text-box {
    width: 96%;
    display: flex;
  }

  .text-box-left {
    width: 60%;
  }

  .text-font {
    color: gray;
    font-size: 14px;
  }

  .text {
    width: 60%;
    height: 15px;
    margin-bottom: 10px;
  }

  .text-box-right {
    width: 40%;
  }
`;

const OrderBox = styled.div`
  width: 96%;
  height: 180px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  border-bottom: 1px solid #D8D8D8;
  border-right: 1px solid #D8D8D8;
  border-left: 1px solid #D8D8D8;
  overflow: auto;

`;

const OrderButton = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-button {
    width: 10%;
    height: 50px;
    background: #0064ff;
    border-radius: 10px 10px 10px 10px;
  }
  
  .login-text {
    font-size: 18px;
    color: white;
  }
`;

export default BasketPage;
