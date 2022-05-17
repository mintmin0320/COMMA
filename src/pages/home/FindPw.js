import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Logo from '../../images/blue_bg.svg';
import _axios from '../../utils/axios';
import {
  Container,
  Wrap,
  LogoWrap,
  Validation,
  CountDown,
} from '../../styles/account';
//input & button
import Button from '../../components/common/Button';
import Input from '../../components/common/CommonInput';

const FindPw = () => {
    const navigate = useNavigate(); // 페이지 이동 함수
  
    const [state, setState] = useState({
      email: '',
      userId: '',
      emailCode:'',   // 인증번호
      idValidation: '',  // 회원가입 인풋창 유효성 검사
      validation: false,    // 유효성 검사 결과 
      result: false,        // 서버와의 axios 요청 결과
      message: null,
      count: 1,
    });
  
    // 이메일 인증 발급
    const _handleButtonClick = (e) => {
      e.preventDefault();
      _postEmail();
      console.log('count :' + state.count);
    };
  
    const _signIn = (e) => {
      e.preventDefault();
      navigate('/login');
    };
  
    const _postEmail = async () => {
      const url = '/user/password'; 
      const params = {
        user_id: state.userId,
        email: state.email + '@m365.dongyang.ac.kr',
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
        alert('발급 되었습니다.');
      }else{
        setState({
          ...state,
          result: response.result,
          message: response.message,
          count: state.count + 1,
        });
        alert( '실패! ' + state.count +'/3' );
        }  
      }
    
  
    let regString = /^[a-zA-Z0-9]{0,15}$/; // 영문, 2~15 글자수
    // 입력값이 변할 때
    const _handleInputChange = (e) => {
      switch(e.target.name){
        case 'email' :
          if (regString.test(e.target.value)) {
            console.log("올바른 형식입니다.");
            setState({
              ...state,
              emailValidation: '',
              validation: true,
              [e.target.name]: e.target.value 
            });
          }else {
            console.log("특수문자를 제외한 아이디만 입력해주세요.");
            setState({
              ...state,
              validation: false,
              emailValidation: '잘못된 형식입니다.',
              [e.target.name]: e.target.value 
            });
          }break;
        case 'userId' :
          if (regString.test(e.target.value)) {
            console.log("올바른 형식입니다.");
            setState({
              ...state,
              idValidation: '',
              validation: true,
              [e.target.name]: e.target.value 
            });
          }else {
            console.log("특수문자를 제외한 아이디만 입력해주세요.");
            setState({
              ...state,
              validation: false,
              idValidation: '잘못된 형식입니다.',
              [e.target.name]: e.target.value 
            });
          }break;
        }
      };
  
    return (
      <Container>
        <Wrap>
        <Link to="/">
          <LogoWrap>
            <img src={Logo} alt="logo" width="100%"></img>
          </LogoWrap>
        </Link>
        {!state.result && (
        <Input
          className="input-id"
          inputtype="text"
          width="100%"
          height="60px"
          margin="0 0"
          value={state.userId}
          maxLength={15}
          autoComplete="off"
          name="userId"
          onChange={_handleInputChange}
          required={true}
          placeholder="아이디를 입력해주세요"
          validityStyles={false}
          titlename="아이디"
        />)}
        {!state.result && (
          <Validation>
            {state.idValidation}
          </Validation>)}
        {!state.result && (
        <Input
            idName="typepass"
            inputtype="text"
            name="email"
            value={state.email}
            maxLength={20}
            onChange={_handleInputChange}
            required={true}
            titlename="이메일"
            width="100%"
            height="60px"
            margin="0 0 10px 0"
            placeholder="이메일 아이디 입력해주세요."
            validityStyles={false}
            autoComplete="off"
        />) }
        {!state.result && (
            <Validation>
              {state.emailValidation}
            </Validation>)}
        {!state.result && state.count !== 4 &&(
        <Button
            className="loginAnchor"
            kind="wideBtn_01"
            width="100%!important"
            onClickHandler= {_handleButtonClick}
            disabled={!state.validation}
        >
            확인
        </Button>)}
          {state.result && (
            <Button
            className="loginAnchor"
            kind="wideBtn_01"
            width="100%!important"
            onClickHandler={_signIn}
          >
            로그인하기
          </Button>)}
        </Wrap>
        </Container>
    );
  }
  
  export default FindPw;