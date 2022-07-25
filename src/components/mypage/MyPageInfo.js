import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// 개발자
import {  logoutRequest } from '../../redux/actions/auth'
import _axios from '../../utils/axios';
import axios from 'axios';
//css
import styled from 'styled-components';
//input & button

import titleTab from '../../utils/TitleTab';
//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons';

const MypageInfo = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("마이페이지 - COMMA"), 100);

  const dispatch = useDispatch();
  
  const userId = useSelector((store) => store.auth.authStatus.userId);
  const [state, setState] = useState({
    userId: userId,
    userPw: '',
    email: '',
    nickname:'',
    phone:'',
    changePw:'',
    changeName: '',
    checkPw: false,
    result:  false,        // 서버와의 axios 요청 결과
    message: null,
  });
  
  // 입력값이 변할 때
  const _handleInputChange = (e) => {
    setState({ 
      ...state, 
      [e.target.name]: e.target.value 
    });
  }
    
    // 회원정보 조회
    // useEffect(() => {
    //   const getData = async () => {
    //     const url = "http://210.121.173.182/user/" + state.userId;
    //     console.log(state.userId);
    //     const response = await axios.get(url);
    //     console.log(response);
    //     setState({
    //       ...state,
    //       email: response.data.user.email,
    //       nickname: response.data.user.user_nickname,
    //       phone: response.data.user.phone,
    //     })
    //   }
    //   getData()
    // },[]);

    // 비밀번호 변경 확인
  const _handlePwCheck = (e) => {
    e.preventDefault();
    _postPw();
  };

  // 저장npm
  const _postPw = async () => {
    const url = '/user/password/check';
    const params = {
      user_id: state.userId,
      user_password: state.userPw,
    };
    console.log(state.userPw);
    console.log('pw check :' + state.user_password);
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
      alert('비밀번호 인증 성공');
    }else{
      setState({
        ...state,
        result: response.result,
        message: response.message,
      })    
      alert('비밀번호 인증 실패');
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
      user_id: state.userId,
      user_password: state.changePw,
    };
    console.log('pw2 check :' + state.user_password);
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
      alert('비밀번호 변경 성공');
    }else{
      setState({
        ...state,
        result: response.result,
        message: response.message,
      })    
      alert('비밀번호 변경 실패');
    }
  };

  // 닉네임 변경
  const _handleChangeName = (e) => {
    e.preventDefault();
    _chaneName();
  };

  // 저장npm
  const _chaneName = async () => {
    const url = '/user/nickname';
    const params = {
      user_id: state.userId,
      user_nickname: state.changeName,
    };
    const response = await _axios(url, params);
    console.log(response);
    if(response.result){
      setState({
        ...state,
        result: response.result,  
        message: response.message,
      });
      alert('닉네임 변경 성공');
    }else{
      setState({
        ...state,
        result: response.result,
        message: response.message,
      })    
      alert('닉네임 변경 실패');
    }
  };

  const _handleWithdrawal = (e) => {
    e.preventDefault();
    _Withdrawal();
  };

  // 회원탈퇴
  const _Withdrawal = async () => {
    const url = '/user' + state.userId;
    console.log(state.userId);
    const response = await axios.delete(url);
    console.log(response);
    if(response.result){
      setState({
        ...state,
        result: response.result,  
        message: response.message,
      });
      dispatch(logoutRequest());
      alert('회원 탈퇴 성공');
    }else{
      setState({
        ...state,
        result: response.result,
        message: response.message,
      })    
      alert('회원탈퇴 실패');
    }
  };

  return(
    <Container>
      <Content>
        <MyInfo>
          <div className='info'>
            <div className='info-text'>
              <div className='info-id'>아이디</div>
              <div className='info-nick'>닉네임</div>
              <div className='info-phone'>전화번호</div>
            </div>
            <div className='info-data'>
              <div className='id'>아이디</div>
              <div className='nick'>닉네임</div>
              <div className='phone'>전화번호</div>
            </div>
          </div>
          <div className='info-correction'>
            비밀번호변경자리
          </div>
        </MyInfo>
        <OrederList>
          <div className='order-text'>
            주문목록
          </div>
          <div className='order-data'>

          </div>
        </OrederList>
        <Withdrawal>
          <button
            className='withdrawal-button'
            onClick={_handleWithdrawal}
          >
            <div className='login-text'>회원탈퇴</div>
          </button>
        </Withdrawal>

          {/* <NameInputBox>
            <Input
              idName="typepass"
              inputtype="password"
              name="userPw"
              value={state.userPw}
              maxLength={11}
              onChange={_handleInputChange}
              required={true}
              titlename="현재 비밀번호"
              width="100%"
              height="40px"
              validityStyles={false}
              autoComplete="off"
            />
            <Button
              className="loginAnchor"
              height="40px"
              width="30%"
              onClickHandler= {_handlePwCheck}
            >
              확인
            </Button>
          </NameInputBox>
          <NameInputBox>
            <Input
              inputtype="password"
              name="changePw"
              value={state.changePw}
              maxLength={11}
              onChange={_handleInputChange}
              required={true}
              titlename="변경 비밀번호"
              width="100%"
              height="40px"
              validityStyles={false}
              autoComplete="off"
              disabled={!state.checkPw}
            />
            <Button
              type={'submit'}
              className="loginAnchor"
              height="40px"
              width="30%"
              onClickHandler={_handleChangePw}
              disabled={!state.checkPw}
            >
              확인
            </Button>
          </NameInputBox>
          <NameInputBox>
            <Input
              inputtype="text"
              name="changeName"
              value={state.changeName}
              maxLength={11}
              onChange={_handleInputChange}
              required={true}
              titlename="변경 닉네임"
              width="100%"
              height="40px"
              alidityStyles={false}
              autoComplete="off"
            />
            <Button
              className="loginAnchor"
              height="40px"
              width="30%"
              onClickHandler={_handleChangeName}
            >
              확인
            </Button>
          </NameInputBox> */}
          </Content>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  height: 750px; //나중에 auto로 바꾸자
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    border: 1px solid #D8D8D8;
    

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
    border-bottom: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
  }

  .info-nick {
    width: 100%;
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
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
    border-bottom: 1px solid #D8D8D8;
  }

  .nick {
    width: 100%;
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #D8D8D8;
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
    border: 1px solid #D8D8D8;

  }
    
`;

const OrederList = styled.div`
  width: 96%;
  height: 240px;
  margin: 20px 0 0 0;
  display: flex;
  border: 1px solid #D8D8D8;
  flex-direction: column; 
  align-items: center;
  justify-content: center;

  .order-text {
    width: 100%;
    height: 20%;
    border-bottom: 1px solid #D8D8D8;
  }

  .order-data {
    width: 100%;
    height: 80%;
    overflow: auto;
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
  }

  .login-text {
    font-size: 18px;
    color: white;
  }
`;

export default MypageInfo;