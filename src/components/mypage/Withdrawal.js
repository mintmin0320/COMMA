import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
// 개발자
import { logoutRequest } from '../../redux/actions/auth'
import _axios from '../../utils/axios';
import titleTab from '../../utils/TitleTab';
//css
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const Withdrawal = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("마이페이지 - COMMA"), 100);
  const dispatch = useDispatch();
  const userId = useSelector((store) => store.auth.authStatus.userId);
  const [state, setState] = useState({
    userPw: '',
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

  // 비밀번호 확인
  const _handlePwCheck = () => {
    _postPw();
  };

  // 저장npm
  const _postPw = async () => {
    const url = '/user/password/check';
    const params = {
      id: userId,
      password: state.userPw,
    };
    const response = await _axios(url, params);
    console.log(response);
    if(response.status === 200){
      toast.success('비밀번호 인증 성공');
      setState({
        ...state,
        checkPw: true,
      });
    }else{
      toast.error('비밀번호 인증 실패');
    }
  };

  // 회원탈퇴
  const _handleWithdrawal = () => {
    _withdrawal();
  };

  const _withdrawal = async () => {
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

  return(
    <Container>
      <Content>
        <div className='info-correction'>
          <TitleBox>
            현재 비밀번호
          </TitleBox>
          <div className='input-box'>
            <input
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
        </div>
        <WithdrawalButton>
          <button
            className='withdrawal-button'
            onClick={_handleWithdrawal}
            disabled={!state.checkPw}
          >
            <div className='login-text'>회원탈퇴</div>
          </button>
        </WithdrawalButton>
      </Content>
      <ToastContainer
        position="top-center"
        autoClose={700}
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
  width: 100%;
  height: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #D8D8D8;
  margin-top: 20px;

  .info-correction {
    width: 100%;
    height: 25%;
    display: flex;
    border-bottom: 1px solid #D8D8D8;
      // background: red;
  }

  .input-box {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // background: pink;

    input {
      font-size: 20px;
      background: #f5f5f5;
      border: 1px solid #D8D8D8;
      width: 50%;
      height: 60%;
    }
  }

  .reset-button {
    width: 10%;
    height: 60%;
    background: #0064ff;
    // border-radius: 10px 10px 10px 10px;
    // margin-left: 15px;
    color: white;
  }
`;

const TitleBox = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #D8D8D8;
`;

const WithdrawalButton = styled.div`
  width: 96%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;

  .withdrawal-button {
    width: 20%;
    height: 50px;
    background: #0064ff;
    border-radius: 10px 10px 10px 10px;
  }

  .login-text {
    font-size: 18px;
    color: white;
  }
`;

export default Withdrawal;