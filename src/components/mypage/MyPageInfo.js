import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
// 개발자
import {  logoutRequest } from '../../redux/actions/auth'
import _axios from '../../utils/axios';
import titleTab from '../../utils/TitleTab';
import TopButton from '../TopButton';
//css
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const MypageInfo = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("마이페이지 - COMMA"), 100);
  const dispatch = useDispatch();
  const userId = useSelector((store) => store.auth.authStatus.userId);
  const [state, setState] = useState({
    userPw: '',
    email: '',
    nickname:'',
    phone:'',
    changePw:'',
    changeName: '',
    orderList: [],
    checkPw: false,
    result:  false,        
    message: null,
  });
  
  // 입력값이 변할 때
  const _handleInputChange = (e) => {
    setState({ 
      ...state, 
      [e.target.name]: e.target.value 
    });
  }
    
  // // 회원정보 조회
  // useEffect(() => {
  //   const getData = async () => {
  //     const url = `http://210.121.173.182/user/${userId}`;
  //     console.log(userId);
  //     const response = await axios.get(url);
  //     console.log(response);
  //     setState({
  //       ...state,
  //       userId: response.data.user.user_id,
  //       nickname: response.data.user.user_nickname,
  //     })
  //   }
  //   getData()
  // },[]);

  // 비밀번호 확인
  const _handlePwCheck = (e) => {
    e.preventDefault();
    _postPw();
  };

  // 저장npm
  const _postPw = async () => {
    const url = '/user/password/check';
    const params = {
      id: userId,
      password: state.userPw,
    };
    console.log(state.userPw);
    const response = await _axios(url, params);
    console.log(response);
    if(response.result){
      setState({
        ...state,
        result: response.result,  
        message: response.message,
        checkPw:true,
        userPw: '',
      });
      toast('비밀번호 인증 성공');
    }else{
      setState({
        ...state,
        result: response.result,
        message: response.message,
      })    
      toast('비밀번호 인증 실패');
    }
  };

  //비밀번호 변경
  const _handleChangePw = (e) => {
    e.preventDefault();
    _postChangePw();
  };

  // 저장npm
  const _postChangePw = async () => {
    const url = '/user/find/password';
    const params = {
      id: userId,
      password: state.changePw,
    };
    const response = await _axios(url, params);
    console.log(response);
    if(response.result){
      setState({
        ...state,
        result: response.result,  
        message: response.message,
        checkPw: false,
        changePw:'',
      });
      toast('비밀번호 변경 성공');
    }else{
      setState({
        ...state,
        result: response.result,
        message: response.message,
      })    
      toast('비밀번호 변경 실패');
    }
  };

  const _handleWithdrawal = (e) => {
    e.preventDefault();
    _Withdrawal();
  };

  // 회원탈퇴
  const _Withdrawal = async () => {
    const url = "http://210.121.173.182/user";
    const response = await axios.delete(url, {
      data: {
        id: userId,
      }
    });
    console.log(response);
    if(response.status === 200){
      dispatch(logoutRequest());
      console.log('회원 탈퇴 성공');
    }else{
      console.log('회원탈퇴 실패');
    }
  };

  // useEffect(() => {
  //   const getOrderData = async () => {
  //     const url = `http://210.121.173.182/user/arduino`;
  //     const params = {
  //       id: userId,
  //     };
  //     const response = await axios.get(url, params);
  //     console.log(response);
  //     if(response.status === 200){
  //       // setState({
  //       //   ...state,
  //       //   orderList: response.data,
  //       // })
  //       console.log('회원 주문목록 조회성공');
  //     } else {
  //       console.log('회원 주문목록 조회실패');
  //     }
  //   }
  //   getOrderData()
  // },[]);

  const Card = () => {
    console.log(state.orderList);
    return (
      <OrederList>
        {state.orderList.map((item, index) => {
          return (
            <div className='order-data' key={index}>
              <div className='date-data'>신청날짜</div>
              <div className='list-data'>신청목록</div>
              <div className='approve-data'>승인</div>
            </div>
          )
        })}
      </OrederList>
    );
  };

  return(
    <Container>
      <Content>
        <div className='title1'>내정보</div>
        <MyInfo>
          <div className='info'>
            <div className='info-text'>
              <div className='info-id'>아이디</div>
              <div className='info-nick'>닉네임</div>
            </div>
            <div className='info-data'>
              <div className='id'>{state.userId}</div>
              <div className='nick'>{state.nickname}</div>
            </div>
          </div>
          <div className='info-correction'>
            <div className='pwd'>
              <TitleBox>
                현재 비밀번호
              </TitleBox>
              <input
                style={{fontSize: '24px'}}
                value={state.userPw}
                type='password'
                name='userPw'
                onChange={_handleInputChange}
                required={true}            
                maxLength={15}
                disabled={state.checkPw}
              />
              <button
                className='reset-button'
                type='button'
                onClick={_handlePwCheck}
              >
                확인
              </button>
            </div>
            <div className='change-pwd'>
              <TitleBox>
                변경 비밀번호
              </TitleBox>
              <input
                  style={{fontSize: '24px'}}
                  value={state.changePw}
                  type='password'
                  name='changePw'
                  onChange={_handleInputChange}
                  required={true}            
                  maxLength={15}
                />
              <button
                className='reset-button'
                // onClick={_handleReRequest}
              >
                변경
              </button>
            </div>
          </div>
        </MyInfo>
        <div className='title2'>신청목록</div>
        <div className='order-box'>
          <div className='order-text'>
            <div className='date'>신청날짜</div>
            <div className='list'>신청목록</div>
            <div className='approve'>승인</div>
          </div>
            {/* <Card/> */}
        </div>
        <Withdrawal>
          <button
            className='withdrawal-button'
            onClick={_handleWithdrawal}
          >
            <div className='login-text'>회원탈퇴</div>
          </button>
        </Withdrawal>
      </Content>
      <TopButton/>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  )
}

const Container = styled.div`
  width: 85%;
  height: 100%; 
  display: flex;
  justify-content: center;
  background: white;
  margin-top: 20px;

  @media screen and (max-width: 430px) {
    width: 100%;
    height: 100vh;
    margin-top: 0px;
  }
`;

const Content = styled.div`
  width: 100%;
  // height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title1 {
    width: 96%;
    height: 5%;
    border-bottom: 2px solid black;
    display:flex;
    align-items: center;
    font-size: 25px;
    margin: 10px 0 0 0;
  }

  .title2 {
    width: 96%;
    height: 5%;
    border-bottom: 2px solid black;
    display:flex;
    align-items: center;
    font-size: 25px;
    margin: 5px 0 0 0;
  }

  .order-box {
    width: 96%;
    height: 200px;
    display:flex;
    flex-direction: column;  
    align-items: center;  
    border: 1px solid #D8D8D8;
    margin-top: 20px;
    background: red;
  }

  .order-text {
    width: 100%;
    height: 20%;
    display: flex;
    border-bottom: 1px solid #D8D8D8;
  }

  .date {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
    // border-left: 1px solid #D8D8D8;
    // border-top: 1px solid #D8D8D8;
  }

  .list {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
    // border-top: 1px solid #D8D8D8;
  }

  .approve {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // border-top: 1px solid #D8D8D8;
    // border-right: 1px solid #D8D8D8;
  }

`;

const MyInfo = styled.div`
  width: 98%;
  height: 180px;
  margin: 20px 0 0 0;
  display: flex;
  justify-content: space-around;
  // flex-direction: column; 
  // align-items: center;

  .info {
    width: 48%;
    height: 100%;
    display: flex;
    // border: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      width: 98%;
      font-size: 15px;
    }
  }

  .info-text {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;   
  }

  .info-id {
    width: 100%;
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #D8D8D8;
  }

  .info-nick {
    width: 100%;
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
  }

  .info-phone {
    width: 100%;
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #D8D8D8;
  }

  .info-data {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column; 
  }

  .id {
    width: 100%;
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
  }

  .nick {
    width: 100%;
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
  }

  .phone {
    width: 100%;
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .info-correction {
    width: 48%;
    height: 100%;
    display: flex;
    flex-direction: column; 
    
    @media screen and (max-width: 430px) {
      display: none;
    }
  }

  .pwd {
    border: 1px solid #D8D8D8;
    height: 33%;
    display: flex;
    justify-content: space-around;
    align-items: center; 

    input {
      font-size: 16px;
      background: #f5f5f5;
      width: 50%;
      border-radius: 10px 10px 10px 10px;
    }
  }

  .change-pwd {
    border-right: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
    height: 33%;
    display: flex;
    justify-content: space-around;
    align-items: center; 

    input {
      font-size: 16px;
      background: #f5f5f5;
      width: 50%;
      border-radius: 10px 10px 10px 10px;
    }
  }

  .reset-button {
    width: 10%;
    height: 50%;
    background: #0064ff;
    border-radius: 10px 10px 10px 10px;
    // margin-left: 15px;
    color: white;
  }
`;

const TitleBox = styled.div`
  width: 23%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrederList = styled.div`
  width: 96%;
  height: 240px;
  display: flex;
  border: 1px solid #D8D8D8;
  flex-direction: column; 
  align-items: center;
  // justify-content: center;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
    }

  .order-data {
    width: 100%;
    height: 80%;
    display: flex;
    border-bottom: 1px solid #D8D8D8;

  }
  
  .date-data {
    width: 25%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
  }

  .list-data {
    width: 50%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
  }

  .approve-data {
    width: 25%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #D8D8D8;
  }
`;

const Withdrawal = styled.div`
  width: 96%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0 0;

  .withdrawal-button {
    width: 20%;
    height: 50px;
    background: #0064ff;
    border-radius: 10px 10px 10px 10px;
    
    @media screen and (max-width: 430px) {
      width: 30%;
    }
  }

  .login-text {
    font-size: 18px;
    color: white;
  }
`;

export default MypageInfo;