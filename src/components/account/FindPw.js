import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

import {
  LogoWrap,
} from '../../styles/account';
import theme from '../../styles/theme';
import styled from 'styled-components';

import titleTab from '../../utils/TitleTab';
import _axios from '../../utils/axios';

//input & button
import Logo from '../../images/white_bg.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const FindPw = () => {
  const navigate = useNavigate();
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("비밀번호 찾기 - COMMA"), 100);

  const regString = /^[a-zA-Z0-9]{5,15}$/; // 영문, 5~15 글자수
  const selectList = ['@m365.dongyang.ac.kr', '@dongyang.ac.kr']; 

  const [state, setState] = useState({
    userId: '',
    selected: '@m365.dongyang.ac.kr',
    idValidation: '',  // 회원가입 인풋창 유효성 검사
    validation: false,    // 유효성 검사 결과 
    result: false,        // 서버와의 axios 요청 결과
    message: null,
    });
  
    const _signIn = (e) => {
      e.preventDefault();
      navigate('/login');
    };
    
    // 이메일로 비밀번호 발급
    const _handleButtonClick = (e) => {
      e.preventDefault();
      _postEmail();
    };
  
    const _postEmail = async () => {
      const url = '/user/find/password'; 
      const params = {
        user_id: state.userId + state.selected,
      };
      console.log(params);
      const response = await _axios(url, params);
      console.log(response);
      if(response.result){
        setState({
          ...state,
          result: response.result,
          message: response.message,
        });
        console.log('발급 되었습니다.');
      }else{
        setState({
          ...state,
          idValidation: '잘못된 이메일입니다.',
          message: response.message,
        });
        console.log( '실패!');
        }  
      };
    
    // 입력값이 변할 때
    const _handleInputChange = (e) => {
      if (regString.test(e.target.value)) {
        console.log("올바른 형식입니다.");
        setState({
          ...state,
          idValidation: '',
          validation: true,
          [e.target.name]: e.target.value 
        });
      }else {
        console.log("실패");
        setState({
          ...state,
          validation: false,
          idValidation: '5~15자의 영문과 숫자만 입력해주세요.',
          [e.target.name]: e.target.value 
        });
    }};

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
        <Link to="/login">
          <LogoWrap>
            <img src={Logo} alt="logo" width="100%"></img>
          </LogoWrap>
        </Link>
          <EmailBox>
            <IdBox>
              <TitleBox>
                <FontAwesomeIcon icon={faEnvelope} size="2x"/>
              </TitleBox>
              <input
                placeholder='ID'
                maxLength={15}
                value={state.userId}
                onChange={_handleInputChange}
                required={true}
                type='text'
                name='userId'
              />
              <SelectBox>
                <div>
                  <select onChange={handleSelect} value={state.selected}>
                    {selectList.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </SelectBox>
            </IdBox>
            <Validation>
              <div className='validation-text'>{state.idValidation}</div>
            </Validation>
            <button
              className='login-button'
              disabled={!state.validation || state.userId === ''}
              onClick={_handleButtonClick}
            >
              <div className='login-text'>확인</div>
            </button>
            {state.result && (
              <button
                className='login-button'
                onClick={_signIn}
              >
              <div className='login-text'>로그인하기</div>
            </button>)}
            <a href='https://account.live.com/username/recover' className='join-button'>
              <div className='button-text1'>이메일을 잊으셨나요?</div>
              <div className='button-text2'>&nbsp;이메일찾기</div>
            </a>
          </EmailBox>
        </Wrap>
      </Container>
    );
  }

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`

const Wrap = styled.div`
  height: auto;
  padding: 0 20px;
  object-fit: contain;
  background-color: ${theme.colors.white};
  box-shadow: 2px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 20px 20px;
  
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    padding-top: 0px;
    padding-bottom: 30px;
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: 500px;
    margin: 30px 0 80px;
    align-items: center;
    padding: 0 !important;
  }

  .loginAnchor {
    margin-right: 0;
  }

  .wideBtn_01,
  .wideBtn_02 {
    width: 100%;
    margin: 0;
  }
`;

  const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: 1px solid #A9A9A9;

  .login-button {
    width: 80%;
    height: 50px;
    background: #0064ff;
    border-radius: 10px 10px 10px 10px;
    margin: 0 0 16px 0;

    @media screen and (max-width: 430px) {
      width: 95%;
    }
  }

  .login-text {
    font-size: 18px;
    color: white;
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

  .button-text1{
    font-size: 16px;
    color: #969696;
  }

  .button-text2{
    font-size: 16px;
    color: #0064ff;
  }
`;

const IdBox = styled.div`
  width: 80%;
  height: 60px;
  display: flex;
  
  input {
    font-size: 16px;
    background: #f5f5f5;
    width: 45%;
  }

  input::placeholder{
    font-size: 13px;
    color:rightgray;
  }
  margin: 0 0 10px 0;
  border-radius: 10px 10px 10px 10px;
  background: #f5f5f5;

  @media screen and (max-width: 430px) {
    width: 95%;
    input {
      font-size: 13px;
    } 
  }
`;

const SelectBox = styled.div`
  height: 60px;
  width: 40%;
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

const Validation = styled.div`
  width: 80%;
  height: 30px;  
  display: flex;
  justify-content: center;
  
  .validation-text {
    color: red;
  }
`;
  export default FindPw;