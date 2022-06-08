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
  IdBox,
} from '../../styles/account';
import styled from 'styled-components';
//input & button
import Button from '../common/Button';
import Input from '../common/CommonInput';
// import Timer from './Timer';
//icon
import Logo from '../../images/blue_bg.svg';

const JoinPage = () => {
  const navigate = useNavigate(); // 페이지 이동 함수
    // encrypt 
  const [min, setMin] = useState(1);
  const [sec, setSec] = useState(0);
  const time = useRef(60);
  const timerId = useRef(null);
  let yClassList = ['YA', 'YB', 'YC', 'YD'];
  let p1_classList = ['PA', 'PB', 'PC'];
  let p2_classList = ['PA', 'PB', 'PC', 'PE'];
  let qClassList = ['QA', 'QB'];
  let majorList = ['컴퓨터소프트웨어공학과', '컴퓨터정보공학과', '인공지능소프트웨어학과'];
  let gradeList = ['1', '2', '3'];
  let academicList = ['재학', '휴학', '졸업'];

  const [state, setState] = useState({
    userId: '',
    userPw: '',
    email: '',
    emailCode:'',   // 인증번호
    nickname:'',
    name: '',
    phone:'',
    studentId: '',
    selected: '@m365.dongyang.ac.kr',
    major: '컴퓨터소프트웨어공학과', // 학과
    grade: '1', // 학년
    classroom: 'YA',  // 반
    academic: '재학',
    idValidation: '',     // 회원가입 인풋창 유효성 검사
    pwValidation: '',
    nicknameValidation: '',
    studentIdValidation: '',
    nameValidation: '',
    phoneValidation: '',
    emailValidation: '',
    codeValidation: '',
    validation: false,    // 유효성 검사 결과 
    result: false,        // 서버와의 axios 요청 결과
    emailCheck:false,    // 이메일 인증여부 확인
    codeCheck:false,      // 인증번호 인풋창
    checkButton: false,   // 다른 이메일 인증하기
    count: 0,             // 남은 인증번호 입력가능 횟수
    message: null,
    success: false,       // 회원가입 성공/실패
    visibleDialog: false,
    reCode: false,
    disInput: false,
  });

  // 이메일 인증 발급
  const _handleButtonClick = (e) => {
    e.preventDefault();
    console.log(state.email);
    _postEmail();
    // setState({
    //   ...state,
    //   codeCheck: true,
    // });
  };

  // 저장npm
  const _postEmail = async () => {
    const url = '/mailAuthentication'; 
    const params = {
      address: state.email + state.selected,
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
        disInput: true,
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
    //   emailCheck: true,
    // });
  };

  // 저장
  const _checkCode = async () => {
    console.log(state);
    const url = '/confirmation';
    const params = {
      id: state.emailCode,
      address: state.email + state.selected,
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
      if(state.count < 4 ){
        setState({
          ...state,
          result: response.result,
          message: response.message,
          failureCode: false,
          disInput: false,
          count: state.count + 1,
      });
      alert('잘못된 코드입니다.');
      }else {
        setState({
          ...state,
          result: response.result,
          message: response.message,
          codeCheck: false,
          count: state.count = 0,
        });
      alert('횟수 초과입니다.');
        }
    }
    console.log(state.result, state.message);
  };
  
  // 유효성 검사
  let regEng = /^[a-zA-Z0-9]{2,15}$/;         // 영문, 2~15 글자수
  let regNum = /^[0-9]{10,11}$/;            // 숫자, 10~11 자릿수
  let regCodeNum = /^[0-9]{6,6}$/;          // 숫자, 6자릿수
  let regStudentNum = /^[0-9]{8,8}$/;          // 숫자, 6자릿수
  let regString = /^[가-힣a-zA-Z0-9ㄱ-ㅎ]+$/; // 한글, 영문
  let regName = /^[가-힣]+$/; // 한글
  let regPw = /^[a-zA-Z0-9?!@#$%^&~]*$/;  // 영문, 숫자, 특수문자 !@#$%^&~ 가능

  // 입력값이 변할 때
  const _handleInputChange = (e) => {
    console.log(e.target.value);
    switch(e.target.name){
      case 'email' :
        if (regEng.test(e.target.value)) {
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
        if (regEng.test(e.target.value)) {
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
        if (regString.test(e.target.value)) {
          console.log("올바른 형식입니다.");
          setState({
            ...state,
            validation: true,
            nicknameValidation: '',
            [e.target.name]: e.target.value 
          });
        }else {
          console.log("특수문자를 제외한 아이디만 입력해주세요.");
          setState({
            ...state,
            validation: false,
            nicknameValidation: '잘못된 형식입니다.',
            [e.target.name]: e.target.value 
          });
        }break;
      case 'name' :
        if (regName.test(e.target.value)) {
          console.log("올바른 형식입니다.");
          setState({
            ...state,
            validation: true,
            nameValidation: '',
            [e.target.name]: e.target.value 
          });
        }else {
          console.log("특수문자를 제외한 아이디만 입력해주세요.!");
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
      case 'studentId' :
        if (regStudentNum.test(e.target.value)) {
          console.log("8자리 수를 입력하세요.");
          setState({
            ...state,
            validation: true,
            studentIdValidation: '',
            [e.target.name]: e.target.value 
          });
        }else {
          console.log("잘못된 형식입니다.");
          setState({
            ...state,
            validation: false,
            studentIdValidation: '잘못된 형식입니다.',
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
      id: state.email + state.selected,
      password: state.userPw,
      // email: state.email + state.selected,
      nickname: state.nickname,
      phone: state.phone,
      name: state.name,
      studentId: state.studentId,
      classroom: state.classroom,
      major: state.major,
      grade: state.grade,
      academic: state.academic,
    };
    console.log(params);
    const response = await _axios(url, params);
    console.log(response);
    if(response.result){
      setState({
        ...state,
        result: response.result,
        nickname: state.nickname,
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

  // 이메일 인증 타이머
  const Timer = () => {
    useEffect(() => {
        timerId.current = setInterval(() => {
        setMin(parseInt(time.current / 60));
        setSec(time.current % 60);
        time.current -= 1;
      }, 1000);
      return () => clearInterval(timerId.current);
    },[timerId.current]);

    useEffect(() => {
      if(time.current <= 0){
        console.log("타임 아웃");
        setMin(0);
        setSec(0);
        clearInterval(timerId.current);
        }
      }, [sec]);
      
      return(
        <Time>
          {min}:{sec}
        </Time>
      );
    };

    const SelectEmail = () => {
      const selectList = ['@m365.dongyang.ac.kr', '@dongyang.ac.kr'];
      const handleSelect = (e) => {
        setState({
          ...state,
          selected: e.target.value,
        });
        console.log(e.target.value);
      };
        return(
          <select onChange={handleSelect} value={state.selected} disabled={state.disInput}>
            {selectList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
        </select>
        );
      };
    
    const SelectMajor = () => {
      const handleMajor = (e) => {
        setState({
          ...state,
          major: e.target.value,
        });
        console.log(e.target.value);
      };
        return(
          <Selectvalues>
            <select onChange={handleMajor} value={state.major}>
              {majorList.map((item)  => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}  
            </select> 
          </Selectvalues>
          );
        };

    const SelectGrade = () => {
      const handleGrade = (e) => {
        setState({
          ...state,
          grade: e.target.value,
        });
        console.log(e.target.value);
      };
        return(
          <Selectvalues>
            <select onChange={handleGrade} value={state.grade}>
              {gradeList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </Selectvalues>
        );
    };

    const SelectYClass = () => {
      const handleClass = (e) => {
        setState({
          ...state,
          classroom: e.target.value,
        });
        console.log(e.target.value);  
      }
        return(
          <Selectvalues>
            <select onChange={handleClass} value={state.classroom}> 
              {yClassList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </Selectvalues>
        );
    };

    const SelectP1_class = () => {
      const handleClass = (e) => {
        setState({
          ...state,
          classroom: e.target.value,
        });
        console.log(e.target.value);  
      }
        return(
          <Selectvalues>
            <select onChange={handleClass} value={state.classroom}> 
              {p1_classList.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </Selectvalues>
        );
    };
    
    const SelectP2_class = () => {
      const handleClass = (e) => {
        setState({
          ...state,
          classroom: e.target.value,
        });
        console.log(e.target.value);  
      }
      return(
        <Selectvalues>
          <select onChange={handleClass} value={state.classroom}> 
            {p2_classList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </Selectvalues>
      );
    };
    
    const SelectQ_class = () => {                  
      const handleClass = (e) => {
        setState({
          ...state,
          classroom: e.target.value,
        });
        console.log(e.target.value);  
      }
      return(
        <Selectvalues>
          <select onChange={handleClass} value={state.classroom}> 
            {qClassList.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
          ))}
        </select>
      </Selectvalues>
      );
    };
    const SelectAcademic = () => {
      const handleAcademic = (e) => {
        setState({
          ...state,
          academic: e.target.value,
        });
        console.log(e.target.value);
      };
      return(
        <Selectvalues>
          <select onChange={handleAcademic} value={state.academic}>
            {academicList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </Selectvalues>
      );
    };

    // 인증코드 재요청 버튼 클릭
    const _handleReRequest = (e) => {
      e.preventDefault();
      _postEmail();
      time.current = 60;
      setMin(1);
    };

  return (
    <Container>
    <Wrap>
      <Link to="/">
        <LogoWrap>
          <img src={Logo} alt="logo" width="100%"></img>
        </LogoWrap>
      </Link>
      <form onSubmit={_handleSubmit}>
      <IdBox>
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
          disabled={state.disInput}
        />)}
        {!state.emailCheck && (
          <SelectBox>
            <SelectEmail/>
          </SelectBox>)}
          </IdBox>
        {!state.emailCheck && (
          <Validation>
            {state.emailValidation}
          </Validation>)}
        <IdBox>
        {!state.emailCheck && state.codeCheck && ( 
        <Input
            idName="typepass"
            inputtype="text"
            name="emailCode"
            value={state.emailCode}
            maxLength={6}
            onChange={_handleInputChange}
            titlename="인증번호"
            width="100%"
            height="60px"
            margin="0 0 0 0"
            placeholder="인증번호를 입력해주세요."
            validityStyles={false}
            autoComplete="off"
          />)}
        {!state.emailCheck && state.codeCheck && ( 
          <StateBox>
            <Timer/>
              {!state.emailCheck && state.codeCheck && !state.checkButton && time.current === 0 &&(
                <Button
                  margin="0 20px 0 0"
                  width="70%"
                  height="50%"
                  onClickHandler= {_handleReRequest}
                >
                  재요청
                </Button>)}
          </StateBox>)}
          </IdBox>
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
        {state.emailCheck && !state.success && (
        <Input
          className="input-id"
          inputtype="text"
          width="100%"
          height="60px"
          margin="0 0"
          value={state.email + state.selected}
          maxLength={15}
          autoComplete="off"
          name="userId"
          onChange={_handleInputChange}
          required={true}
          validityStyles={false}
          titlename="아이디"
          disabled={true}
        />)}
        {state.emailCheck && (
          <Validation>
            {state.idValidation}
          </Validation>)}
        {state.emailCheck && !state.success && (
        <Input
          inputtype="password"
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
          inputtype="text"
          name="name"
          value={state.name}
          maxLength={10}
          onChange={_handleInputChange}
          required={true}
          titlename="이름"
          width="100%"
          height="60px"
          margin="10px 0 0 0"
          placeholder="이름을 입력해주세요."
          validityStyles={false}
          autoComplete="off"
        />)}
        {state.emailCheck && (
          <Validation>
            {state.nameValidation}
          </Validation>)}
        {state.emailCheck && !state.success && (
        <Input
          inputtype="text"
          name="studentId"
          value={state.studentId}
          maxLength={8}
          onChange={_handleInputChange}
          required={true}
          titlename="학번"
          width="100%"
          height="60px"
          margin="10px 0 0 0"
          placeholder="학번을 입력해주세요."
          validityStyles={false}
          autoComplete="off"
        />)}
        {state.emailCheck && (
          <Validation>
            {state.studentIdValidation}
          </Validation>)}
        {state.emailCheck && !state.success && (
        <Input
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
            {state.nicknameValidation}
          </Validation>)}
        {state.emailCheck && !state.success && (
        <Input
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
        {state.emailCheck && !state.success && (
          <ValueBox>
            <SelectMajor/>
            <SelectGrade/>
            { state.major === '컴퓨터소프트웨어공학과' ?
              <SelectYClass/>
            : state.major === '컴퓨터정보공학과' && state.grade === '1' ?
              <SelectP1_class/>
              : state.major === '컴퓨터정보공학과' && state.grade === '2' ?
              <SelectP2_class/>
              : state.major === '인공지능소프트웨어학과' ?
              <SelectQ_class/>
              : ''
            }
            <SelectAcademic/>
          </ValueBox>)}
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

const SelectBox = styled.div`
    width: 236px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #A9A9A9;

`;

const StateBox = styled.div`
    width: 275px;
    height: 60px;
    display: flex;
    align-items: center;
    border: 1px solid #A9A9A9;

`;

const Time = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
`;

const Selectvalues = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const ValueBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  border: 1px solid #A9A9A9;
`;

export default JoinPage;