import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
// 개발자
import _axios from '../../utils/axios';
// import Alert from '../../components/common/modal/Alert';
//css
import '../../styles/kendo.css';
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
//icon
import Logo from '../../images/blue_bg.svg';

const Join = () => {
  const navigate = useNavigate(); // 페이지 이동 함수

  const [state, setState] = useState({
    userId: '',
    userPw: '',
    email: '',
    emailCode:'',   // 인증번호
    nickname:'',
    phone:'',
    idValidation: '',     // 회원가입 인풋창 유효성 검사
    pwValidation: '',
    nameValidation: '',
    phoneValidation: '',
    emailValidation: '',
    codeValidation: '',
    validation: false,    // 유효성 검사 결과 
    result: false,        // 서버와의 axios 요청 결과
    failureCode: false,   // 재인증 버튼 표시
    emailCheck:false,    // 이메일 인증여부 확인
    codeCheck:false,      // 인증번호 인풋창
    checkButton: false,   // 다른 이메일 인증하기
    count: 0,             // 남은 인증번호 입력가능 횟수
    message: null,
    success: false,       // 회원가입 성공/실패
    visibleDialog: false,
    min: 1,
    sec: 0,
  });

  // 이메일 인증 발급
  const _handleButtonClick = (e) => {
    e.preventDefault();
    _postEmail();
  };

  // 저장npm
  const _postEmail = async () => {
    const url = '/mailAuthentication'; 
    const params = {
      address: state.email + '@m365.dongyang.ac.kr',
    };
    console.log(params);
    const response = await _axios(url, params);
    console.log(response);
    if(response.result){
      setState({
        ...state,
        result: response.result,
        message: response.message,
        codeCheck: true,
        failureCode:false,
        checkButton:false,
      });
      alert('발급 되었습니다.');
    }else{
      setState({
        ...state,
        result: response.result,
        message: response.message,
      })    
      alert('발급 실패!');
    }
  };

   // 이메일 인증하기 클릭
  const _handleButtonCheck = (e) => {
    console.log(state.count);
    e.preventDefault();
    _checkCode();
    // setState({
    //   ...state,
    //   emailCheck:true,
    // });
  };

  // 저장
  const _checkCode = async () => {
    console.log(state);
    const url = '/confirmation';
    const params = {
      id: state.emailCode,
      address: state.email,
    };
    console.log(params);
    const response = await _axios(url, params);
    console.log(response);
    if(response.result){
      setState({
        ...state,
        emailCheck: true,
        result: response.result,
        message: response.message,
      });
      alert('인증 성공!');
    }else{
      if(state.count <= 4 ){
        setState({
          ...state,
          result: response.result,
          message: response.message,
          failureCode: false,
          count: state.count + 1,
          emailCheck: true,
      });
      alert('잘못된 코드입니다.');
      }else {
        setState({
          ...state,
          result: response.result,
          message: response.message,
          checkButton: true,
          failureCode: true,
          count: state.count = 0,
        });
      alert('횟수 초과입니다.');
        }
    }
    console.log(state.result, state.message);
  };
  
  // 유효성 검사
  let regString = /^[a-zA-Z0-9]{2,15}$/; // 영문, 2~15 글자수
  let regNum = /^[0-9]{10,11}$/;          // 숫자, 10~11 자릿수
  let regCodeNum = /^[0-9]{6,6}$/;        // 숫자, 6자릿수
  let regName = /^[가-힣a-zA-Z0-9ㄱ-ㅎ]+$/; // 한글, 영문
  let regPw = /^[a-zA-Z0-9?!@#$%^&~]*$/;  // 영문, 숫자, 특수문자 !@#$%^&~ 가능

  // 입력값이 변할 때
  const _handleInputChange = (e) => {
    console.log(e.target.value);
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
      case 'userPw' :
        if (regPw.test(e.target.value)) {
          console.log("올바른 형식입니다.");
          setState({
            ...state,
            validation: true,
            pwValidation: '',
            [e.target.name]: e.target.value 
          });
        }else {
          console.log("특수문자를 제외한 아이디만 입력해주세요.");
          setState({
            ...state,
            validation: false,
            pwValidation: '잘못된 형식입니다.',
            [e.target.name]: e.target.value 
          });
        }break;    
      case 'nickname' :
        if (regName.test(e.target.value)) {
          console.log("올바른 형식입니다.");
          setState({
            ...state,
            validation: true,
            nameValidation: '',
            [e.target.name]: e.target.value 
          });
        }else {
          console.log("특수문자를 제외한 아이디만 입력해주세요.");
          setState({
            ...state,
            validation: false,
            nameValidation: '잘못된 형식입니다.',
            [e.target.name]: e.target.value 
          });
        }break;
      case 'phone' :
        if (regNum.test(e.target.value)) {
          console.log("10~11자리 수를 입력하세요.");
          setState({
            ...state,
            validation: true,
            phoneValidation: '',
            [e.target.name]: e.target.value 
          });
        }else {
          console.log("잘못된 형식입니다.");
          setState({
            ...state,
            validation: false,
            phoneValidation: '잘못된 형식입니다.',
            [e.target.name]: e.target.value 
          });
        }break;
        case 'emailCode' :
          if (regCodeNum.test(e.target.value)) {
            console.log("올바른 형식입니다.");
            setState({
              ...state,
              validation: true,
              codeValidation: '',
              [e.target.name]: e.target.value 
            });
          }else {
            console.log("잘못된 형식입니다.");
            setState({
              ...state,
              validation: false,
              codeValidation: '잘못된 형식입니다.',
              [e.target.name]: e.target.value 
            });
          }break;
    }
  };

  // 회원가입 버튼 클릭
  const _handleSubmit = (e) => {
    e.preventDefault();
      _setData();
  }

  // 저장
  const _setData = async () => {
    console.log(state);
    const url = '/signUp';
    const params = {
      user_id: state.userId,
      user_password: state.userPw,
      email: state.email,
      nickname: state.nickname,
      phone: state.phone,
    };
    console.log(params);
    const response = await _axios(url, params);
    console.log(response);
    if(response.result){
      setState({
        ...state,
        result: response.result,
        message: response.message,
        success: true,
        visibleDialog: true,
      });
      alert('회원가입 성공!');
      
    }else{
      setState({
        ...state,
        success:false,
        result: response.result,
        message: response.message,
      });
      alert('회원가입 실패!');
    }
  };
  // 회원가입 성공 시 페이지 이동
  const _signUpSuccess = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  const _toggleDialog = (e) => {
    e.preventDefault();

    setState({
      ...state,
      visibleDialog: !state.visibleDialog,
    });
  };

  // const Timer = () => {
  //   // const time = useRef(60);
  //   // const timerId = useRef(null);
  //   useEffect(() => {
  //     const countdown = setInterval(() => {
  //       if (parseInt(state.sec) > 0) {
  //         setState({
  //           ...state,
  //           sec: parseInt(state.sec) - 1,
  //         });
  //       }

  //       if (parseInt(state.sec) === 0) {
  //         if (parseInt(state.min) === 0) {
  //           clearInterval(countdown);
  //         } else {
  //           setState({
  //             ...state,
  //             min: parseInt(state.min) - 1,
  //             sec: 59,
  //           });
  //         }
  //       }
  //     }, 1000);
  //     return () => clearInterval(countdown);
  //   }, [state.min, state.sec]);
  // }
  

  // //   useEffect(() => {
  // //     timerId.current = setInterval(() => {
  // //       setState({
  // //         min: parseInt(time.current / 60),
  // //         sec: time.current % 60,
  // //       });
  // //       time.current -= 1;
  // //     }, 1000);
  // //     return () => clearInterval(timerId.current);
  // // }, []);
  // //   useEffect(() => {
  // //     if(time.current === 0){
  // //       console.log("타임 아웃");
  // //       clearInterval(timerId.current);
  // //       setState({
  // //         ...state,
  // //         })
  // //       }
  // //     }, [state.sec]);
  // // }

 

  return (
    <Container>
    <Wrap>
      <Link to="/">
        <LogoWrap>
          <img src={Logo} alt="logo" width="100%"></img>
        </LogoWrap>
      </Link>
      <form onSubmit={_handleSubmit}>
        {!state.emailCheck && (
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
        />)}
        {!state.emailCheck && (
          <Validation>
            {state.emailValidation}
          </Validation>)}
        {!state.emailCheck && state.codeCheck && state.checkButton && state.failureCode &&(
        <Button
            className="loginAnchor"
            kind="wideBtn_01"
            width="100%!important"
            onClickHandler= {_handleButtonClick}
            disabled={!state.validation}
        >
            다른 이메일로 인증번호 발급
        </Button>)}
        {!state.emailCheck && state.codeCheck && ( 
        <Input
            idName="typepass"
            inputtype="text"
            name="emailCode"
            value={state.emailCode}
            maxLength={6}
            onChange={_handleInputChange}
            required={true}
            titlename="인증번호"
            width="100%"
            height="60px"
            margin="0 0 0 0"
            placeholder="인증번호를 입력해주세요."
            validityStyles={false}
            autoComplete="off"
          />)}
          {!state.emailCheck && state.codeCheck && (
          <Validation>
            {state.codeValidation}
          </Validation>)}
        {!state.emailCheck && !state.codeCheck && !state.checkButton && (
        <Button
            className="loginAnchor"
            kind="wideBtn_01"
            width="100%!important"
            onClickHandler= {_handleButtonClick}
            disabled={!state.validation}
        >
            인증번호 발급
        </Button>)}
        {!state.emailCheck && state.codeCheck && !state.checkButton &&(
        <Button
            className="loginAnchor"
            kind="wideBtn_01"
            width="100%!important"
            onClickHandler= {_handleButtonCheck}
            disabled={!state.validation}
        >
            인증완료
        </Button>)}
        {!state.emailCheck && state.codeCheck && !state.checkButton &&(
        <CountDown>
          {state.count}/5
        </CountDown>)}
        {!state.emailCheck && state.codeCheck && (
        <h4>
          {state.min +':' + state.sec}
        </h4>)}
        {state.emailCheck && !state.success && (
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
        {state.emailCheck && (
          <Validation>
            {state.idValidation}
          </Validation>)}
        {state.emailCheck && !state.success && (
        <Input
          idName="typepass"
          inputtype="text"
          name="userPw"
          value={state.userPw}
          maxLength={15}
          onChange={_handleInputChange}
          required={true}
          titlename="비밀번호"
          width="100%"
          height="60px"
          margin="10px 0 0 0"
          placeholder="비밀번호를 입력해주세요."
          validityStyles={false}
          autoComplete="off"
        />)}
        {state.emailCheck && (
          <Validation>
            {state.pwValidation}
          </Validation>)} 
        {state.emailCheck && !state.success && (
        <Input
          idName="typepass"
          inputtype="text"
          name="nickname"
          value={state.nickname}
          maxLength={15}
          onChange={_handleInputChange}
          required={true}
          titlename="닉네임"
          width="100%"
          height="60px"
          margin="10px 0 0 0"
          placeholder="닉네임을 입력해주세요."
          validityStyles={false}
          autoComplete="off"
        />)}
        {state.emailCheck && (
          <Validation>
            {state.nameValidation}
          </Validation>)}
        {state.emailCheck && !state.success && (
        <Input
          idName="typepass"
          inputtype="text"
          name="phone"
          value={state.phone}
          maxLength={11}
          onChange={_handleInputChange}
          required={true}
          titlename="전화번호"
          width="100%"
          height="60px"
          margin="10px 0 0 0"
          placeholder="-을 제외한 전화번호를 입력해주세요."
          validityStyles={false}
          autoComplete="off"
        />)}
        {state.emailCheck && (
          <Validation>
            {state.phoneValidation}
          </Validation>)}
        {state.emailCheck && !state.success &&(
        <Button
          type={'submit'}
          className="loginAnchor"
          kind="wideBtn_01"
          width="100%!important"
          disabled={!state.validation}
        >
          회원가입
        </Button>)}
        {state.emailCheck && state.success && (
        <Button
          className="loginAnchor"
          kind="wideBtn_01"
          width="100%!important"
          onClickHandler={_signUpSuccess}
        >
          로그인하기
        </Button>)}
      </form>

      {/* {state.success && state.visibleDialog && (
        <Alert
          kind="alert-4"
          sub1={state.message}
          onClick2={_toggleDialog}
        ></Alert>
      )} */}
    </Wrap>
  </Container>
);
};

export default Join;