/*
설명: 로그인 화면
*/
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
// 개발자
import { init, loginRequest } from '../../redux/actions/auth';
import titleTab from '../../utils/TitleTab';
//css
import '../../styles/kendo.css';
import {
  Container,
  Wrap,
  LogoWrap,
} from '../../styles/account';
import styled from 'styled-components';

//icon
import Logo from '../../images/white_bg.svg';
import banner from '../../images/banner.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("로그인 - COMMA"), 100);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((store) => store.auth);

  const [state, setState] = useState({
    isLoading: true,
    userId: '',
    userPw: '',
    selected: '@m365.dongyang.ac.kr',
    isEyesOn: false,
    userInfo: [],
    success: false,
    message: null,
    visibleDialog: false,
  });

  // 입력값이 변할 때
  const _handleInputChange = (e) => {
    setState({ 
      ...state, 
      [e.target.name]: e.target.value 
    });
  };

  const _handlePageMove = () => {
    window.open('https://www.dongyang.ac.kr/dongyang/index.do','홈페이지', 'scrollbars=yes');
  };

  const _handlePageMove2 = () => {
    window.open('https://account.live.com/username/recover','이메일찾기', 'scrollbars=yes');
  };

  // 로그인 버튼 클릭
  const _handleSubmit = (e) => {
    e.preventDefault();
    console.log(state.userPw);
    if (state.userId === 'admin'){
      dispatch(loginRequest(state.userId, state.userPw));  
    } else {
      dispatch(loginRequest(state.userId + state.selected, state.userPw));
    }
  };

  //엔터 키
  const _handleEnterPress = (e) => {
    e.preventDefault();

    if (e.charCode === 13) {
      dispatch(loginRequest(state.userId + state.selected, state.userPw));
    }
  };

  useEffect(async () => {
    const loginStatus = await auth.login.status;
    // 로그인 정상
    if (loginStatus === 'SUCCESS') {
      setState({
        ...state,
        success: true,
        visibleDialog: true,
        // message: auth.login.message,
      });

      setTimeout(() => {
        setState({
          ...state,
          success: false,
        });

        navigate('/');
      }, 700);

      // 로그인실패
    } else if (loginStatus === 'FAILURE') {
      setTimeout(() => {
        setState({
          ...state,
          success: false,
        });
        dispatch(init());
      }, 1000);
    }
  }, [auth.login.status]);

  //select box
  const selectList = ['@m365.dongyang.ac.kr', '@dongyang.ac.kr'];
  const handleSelect = (e) => {
    setState({
      ...state,
      selected: e.target.value,
    });
    console.log(e.target.value);
  };

  return (
    <Container>
      <Wrap>
        <LogoWrap>
            <img src={Logo} alt="logo" width="100%"></img>
        </LogoWrap>
        <form onSubmit={_handleSubmit}>
          <LoginBox>
            <IdBox>
              <TitleBox>
                <FontAwesomeIcon icon={faUser} size="1x"/>
              </TitleBox>
              <input
                placeholder='ID'
                maxLength={15}
                value={state.userId}
                onChange={_handleInputChange}
                onKeyPress={() => _handleEnterPress}
                required={true}
                type='text'
                name='userId'
              />
              <SelectBox>
                <select name='email' onChange={handleSelect} value={state.selected} style={{color:'black'}}>
                  {selectList.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </SelectBox>
            </IdBox>
            <PwBox>
              <TitleBox>
                <FontAwesomeIcon icon={faLock} size="1x"/>
              </TitleBox>
              <input
                placeholder='PASSWORD'
                maxLength={15}
                value={state.userPw}
                onChange={_handleInputChange}
                onKeyPress={() => _handleEnterPress}
                required={true}
                type='password'
                name='userPw'
              />
            </PwBox>
            <FindIDPW>
              <div 
                onClick={_handlePageMove2}
                style={{textDecorationLine: 'none', cursor: 'pointer',color: '#0064ff'}}
              >
                아이디 |
              </div>
              <Link to="/findPW" style={{textDecorationLine: 'none'}}>&nbsp;비밀번호찾기</Link>
            </FindIDPW>
            <button
              className='login-button'
              type='submit'
            >
              <div className='login-text'>로그인</div>
            </button>
            <Link to='/join' className='join-button'>
              <div className='button-text1'>처음 방문하셨나요?</div>
              <div className='button-text2'>&nbsp;회원가입</div>
            </Link>
            <div
              className='banner'
              onClick={_handlePageMove}
            >
              <div className='banner-img'>
                <img src={banner} alt="logo" width="65%" height="100%"></img>
              </div>
              <div className='banner-text'>
                <div className='banner-font'>홈페이지 바로가기 &gt;</div>
              </div>
            </div>
          </LoginBox>
        </form>
      </Wrap>
    </Container>
  );
};

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 20px 0;

  .login-button {
    width: 80%;
    height: 54px;
    background: #0064ff;
    border-radius: 10px 10px 10px 10px;
    margin: 0 0 16px 0;

    @media screen and (max-width: 430px) {
      width: 95%;
    }
  }

  .join-button {
    background: #f5f5f5;
    width: 80%;
    height: 40px;
    display: flex;
    justify-content: center;
    text-decoration-line: none;
    align-items: center;
    border-radius: 10px 10px 10px 10px;
    margin: 0 0 25px 0;

    @media screen and (max-width: 430px) {
      width: 95%;
    }
  }

  .login-text {
    font-size: 18px;
    color: white;
  }

  .button-text1{
    font-size: 16px;
    color: #969696;
  }

  .button-text2{
    font-size: 16px;
    color: #0064ff;
  }

  .banner {
    width: 80%;
    height: 65px;
    border-radius: 10px 10px 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #0064ff;
    font-size: 24px;
    text-decoration-line: none;
    cursor: pointer;
    color: #0064ff;

    @media screen and (max-width: 430px) {
      width: 95%;
    }
  }

  .banner-img {
    width: 35%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .banner-text {
    width: 90%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .banner-font {
    font-size: 24px;

    @media screen and (max-width: 430px) {
      font-size: 20px;
    }
  }
`;

const IdBox = styled.div`
  width: 80%;
  height: 60px;
  display: flex;
  // border: 1px solid #D8D8D8;
  input {
    font-size: 16px;
    background: #f5f5f5;
    width: 38%;

    @media screen and (max-width: 430px) {
      width: 45%;
    }
  }

  input::placeholder{
    font-size: 15px;
    color:rightgray;
  }
  margin: 0 0 10px 0;
  border-radius: 10px 10px 10px 10px;
  background: #f5f5f5;

  @media screen and (max-width: 430px) {
    width: 95%;
  }
`;

const PwBox = styled.div`
  height: 60px;
  width: 80%;
  display: flex;
  margin: 0 0 20px 0;
  // border: 1px solid #D8D8D8;
  border-radius: 10px 10px 10px 10px;
  background: #f5f5f5;
  input {
    font-size: 18px;
    background: #f5f5f5;
    border-radius: 0 10px 10px 0;
    width: 85%;
  }
  input::placeholder{
    font-size: 15px;
    color:rightgray;
  }

  @media screen and (max-width: 430px) {
    width: 95%;
  }
`;

const SelectBox = styled.div`
  height: 60px;
  width: 40%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  // border: 1px solid #A9A9A9;

  select {
    background: #f5f5f5;
  }

  @media screen and (max-width: 430px) {
    font-size: 14px;
    width: 50%;
    border-radius: 0 10px 10px 0;
  }
`;

const TitleBox = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FindIDPW = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-end;
  margin: 0 0 20px 0;

  @media screen and (max-width: 430px) {
    font-size: 14px;
    width: 95%;
  }
`;

export default LoginPage;
