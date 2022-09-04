import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

// 개발자
import _axios from '../../utils/axios';
import titleTab from '../../utils/TitleTab';
// import Alert from '../../components/common/modal/Alert';

//css
import '../../styles/kendo.css';
import theme from '../../styles/theme';
import {
  Container,
  LogoWrap,
} from '../../styles/account';
import styled from 'styled-components';

//icon
import Logo from '../../images/white_bg.svg';

const JoinPage = () => {
  const navigate = useNavigate();

  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("회원가입 - COMMA"), 100);

  // 유효성 검사
  const regEng = /^[a-zA-Z0-9]{5,15}$/;         // 영문, 2~15 글자수
  const regNum = /^[0-9]{10,11}$/;            // 숫자, 10~11 자릿수
  const regCodeNum = /^[0-9]{6,6}$/;          // 숫자, 6자릿수
  const regStudentNum = /^[0-9]{8,8}$/;          // 숫자, 6자릿수
  const regString = /^[가-힣a-zA-Z0-9ㄱ-ㅎ]+$/; // 한글, 영문
  const regName = /^[가-힣]+$/; // 한글
  const regPw = /^[a-zA-Z0-9?!@#$%^&~]*$/;  // 영문, 숫자, 특수문자 !@#$%^&~ 가능

  // selectbox
  const yClassList = ['YA', 'YB', 'YC', 'YD'];
  const p1_classList = ['PA', 'PB', 'PC'];
  const p2_classList = ['PA', 'PB', 'PC', 'PE'];
  const qClassList = ['QA', 'QB'];
  const majorList = ['컴퓨터소프트웨어공학과', '컴퓨터정보공학과', '인공지능소프트웨어학과'];
  const gradeList = ['1', '2', '3'];
  const academicList = ['재학', '휴학', '졸업'];

  // selected
  const selectList = ['@@m365.dongyang.ac.kr', '@dongyang.ac.kr']; 

  //타이머 
  const time = useRef(120)
  const timerId = useRef(null);
  const [min, setMin] = useState(2);
  const [sec, setSec] = useState(0);
  
  const [state, setState] = useState({
    userId: '',
    userPw: '',
    checkPw: '',
    emailCode:'',   // 인증번호
    nickname:'',  
    name: '', // 이름
    phone:'', 
    studentId: '',  // 학번
    selected: '@m365.dongyang.ac.kr', // 이메일 확장자
    major: '컴퓨터소프트웨어공학과', // 학과
    grade: '1', // 학년
    classroom: 'YA',  // 반
    academic: '재학', //학적
    idValidation: '', // id 유효성 검사
    pwValidation: '',
    checkPwValidation: '',
    nicknameValidation: '',
    studentIdValidation: '',
    nameValidation: '',
    phoneValidation: '',
    emailValidation: '',
    codeValidation: '',
    validation: false,    // 회원가입을 위한 유효성 검사
    validationPw: false,    
    validationCheckPw: false,
    validationNickname: false,
    validationName: false,    
    validationPhone: false,   
    validationStudent: false, 
    result: false,        // 서버와의 axios 요청 결과
    emailCheck: false,    // 이메일 인증여부 확인 (첫 번째 순서)
    emailCodeCheck: false,      // 인증번호 인증 확인 (두 번째 순서)
    checkButton: false,   // 다른 이메일 인증하기
    count: 0,             // 남은 인증번호 입력가능 횟수
    message: null,
    success: false,       // 회원가입 성공/실패
    reCode: false,
    disInput: false,
  });

  // 이메일 인증 발급
  const _handleRequest = (e) => {
    e.preventDefault();
    console.log(state.email);
    _postEmail();
    setState({
      ...state,
      emailCodeCheck: true,
    });
  };

  // 저장npm
  const _postEmail = async () => {
    const url = '/mailAuthentication'; 
    const params = {
      address: state.userId + state.selected,
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
        alertCheck: true,
      })    
      console.log('발급 실패!');
    }
  };

  // 인증코드 재요청 버튼 클릭
  const _handleReRequest = (e) => {
    e.preventDefault();
    _postEmail();
    time.current = 120;
    setMin(2);
    };

   // 이메일 인증하기 클릭
  const _handleEmailCheck = (e) => {
    console.log(state.count);
    e.preventDefault();
    _codeCheck();
    setState({
      ...state,
      emailCheck: true,
    });
  };
  
  // 저장
  const _codeCheck = async () => {
    const url = '/confirmation';
    const params = {
      id: state.emailCode,
      address: state.userId + state.selected,
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
  };
  
  // 입력값이 변할 때
  const _handleInputChange = (e) => {
    console.log(e.target.value);
    switch(e.target.name){
      case 'userId' :
        if (regEng.test(e.target.value)) {
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
            idValidation: '5~15자의 영문과 숫자만 입력해주세요.',
            [e.target.name]: e.target.value 
          });
        }break;
      case 'userPw' :
        if (regPw.test(e.target.value)) {
          console.log("올바른 비밀번호 형식입니다.");
          setState({
            ...state,
            validationPw: true,
            pwValidation: '',
            [e.target.name]: e.target.value 
          });
        }else {
          console.log("비밀번호만 입력해주세요.");
          setState({
            ...state,
            validationPw: false,
            pwValidation: '잘못된 형식입니다.',
            [e.target.name]: e.target.value 
          });
        }break;     
      case 'nickname' :
        if (regString.test(e.target.value)) {
          console.log("올바른 형식입니다.");
          setState({
            ...state,
            validationNickname: true,
            nicknameValidation: '',
            [e.target.name]: e.target.value 
          });
        }else {
          console.log("특수문자를 제외한 아이디만 입력해주세요.");
          setState({
            ...state,
            validationNickname: false,
            nicknameValidation: '잘못된 형식입니다.',
            [e.target.name]: e.target.value 
          });
        }break;
      case 'name' :
        if (regName.test(e.target.value)) {
          console.log("올바른 형식입니다.");
          setState({
            ...state,
            validationName: true,
            nameValidation: '',
            [e.target.name]: e.target.value 
          });
        }else {
          console.log("특수문자를 제외한 아이디만 입력해주세요.!");
          setState({
            ...state,
            validationName: false,
            nameValidation: '잘못된 형식입니다.',
            [e.target.name]: e.target.value 
          });
        }break;
      case 'phone' :
        if (regNum.test(e.target.value)) {
          console.log("10~11자리 수를 입력하세요.");
          setState({
            ...state,
            validationPhone: true,
            phoneValidation: '',
            [e.target.name]: e.target.value 
          });
        }else {
          console.log("잘못된 형식입니다.");
          setState({
            ...state,
            validationPhone: false,
            phoneValidation: '잘못된 형식입니다.',
            [e.target.name]: e.target.value 
          });
        }break;
      case 'studentId' :
        if (regStudentNum.test(e.target.value)) {
          console.log("8자리 수를 입력하세요.");
          setState({
            ...state,
            validationStudent: true,
            studentIdValidation: '',
            [e.target.name]: e.target.value 
          });
        }else {
          console.log("잘못된 형식입니다.");
          setState({
            ...state,
            validationStudent: false,
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
            codeValidation: '6자리의 숫자만 입력해주세요.',
            [e.target.name]: e.target.value 
            });
      }break;
      default:
    }
  };

  const _handlePwchange = (e) => {
    console.log(e.target.value);
    if(state.userPw === e.target.value) {
      setState({
        ...state,
        validationCheckPw: true,
        checkPwValidation: '',
        [e.target.name]: e.target.value 
      });
    } else {
      setState({
        ...state,
        validationCheckPw: false,
        checkPwValidation: '비밀번호가 일치하지 않습니다..',
        [e.target.name]: e.target.value 
      });
    }
  }

  // 회원가입 버튼 클릭
  const _handleSubmit = (e) => {
    e.preventDefault();
    _setData();
    setState({
      ...state,
      success: true,
    });
  }

  // 저장
  const _setData = async () => {
    console.log(state);
    const url = '/signUp';
    const params = {
      id: state.email + state.selected,
      password: state.userPw,
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
      )
    };
  
  const handleSelect = (e) => {
    setState({
      ...state,
      selected: e.target.value,
    });
    console.log(e.target.value);
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
        <select onChange={handleMajor} value={state.major} className='select-major-box '>
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
        <select onChange={handleGrade} value={state.grade} className='select-box'>
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
        <select onChange={handleClass} value={state.classroom} className='select-box'> 
          {yClassList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </Selectvalues>
    );
  };

  const SelectP1Class = () => {
    const handleClass = (e) => {
      setState({
        ...state,
        classroom: e.target.value,
      });
      console.log(e.target.value);  
    }
    return(
      <Selectvalues>
        <select onChange={handleClass} value={state.classroom} className='select-box'> 
          {p1_classList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </Selectvalues>
    );
  };
    
  const SelectP2Class = () => {
    const handleClass = (e) => {
      setState({
        ...state,
        classroom: e.target.value,
      });
      console.log(e.target.value);  
    }
    return(
      <Selectvalues>
        <select onChange={handleClass} value={state.classroom} className='select-box'> 
          {p2_classList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </Selectvalues>
    );
  };
    
  const SelectQClass = () => {                  
    const handleClass = (e) => {
      setState({
        ...state,
        classroom: e.target.value,
      });
      console.log(e.target.value);  
    }
    return(
      <Selectvalues>
        <select onChange={handleClass} value={state.classroom} className='select-box'> 
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
        <select onChange={handleAcademic} value={state.academic} className='select-box'>
          {academicList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </Selectvalues>
    );
  };

  return (
    <Container>
      <Wrap>
        <Link to="/login">
          <LogoWrap>
            <img src={Logo} alt="logo" width="100%"></img>
          </LogoWrap>
        </Link>
        <form onSubmit={_handleSubmit}>
          <JoinBox>
            {!state.emailCheck && !state.emailCodeCheck && !state.success && (
              <IdBox>
                <TitleBox>
                  이메일
                </TitleBox>
                  <input
                    value={state.userId}
                    type='text'
                    name='userId'
                    onChange={_handleInputChange}
                    required={true}
                    // disabled={state.disInput}
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
            )}
            {!state.emailCheck && !state.emailCodeCheck && !state.success && (
              <Validation>
                <div className='validation-text'>{state.idValidation}</div>
              </Validation>
            )}
            {!state.emailCheck && !state.emailCodeCheck && !state.success && (
              <button
                className='login-button'
                disabled={!state.validation || state.userId === ''}
                onClick={_handleRequest}
              >
                <div className='login-text'>인증하기</div>
              </button>
            )}
          {!state.emailCheck && state.emailCodeCheck && !state.success && (
            <CodeBox>
              <TitleBox>
                인증번호
              </TitleBox>
              <input
                value={state.emailCode}
                type='text'
                name='emailCode'
                onChange={_handleInputChange}
                required={true}            
                maxLength={6}
              />
              <StateBox>
                <Timer/>
                {/* !state.emailCheck && state.codeCheck && !state.checkButton && time.current === 0 &&( */}
                {!state.emailCheck && state.emailCodeCheck && !state.success && time.current === 0 && ( 
                <button
                  className='reset-button'
                  onClick={_handleReRequest}
                >
                  <div className='login-text'><div className='reset-font'>재인증</div></div>
                </button>)}
              </StateBox>  
            </CodeBox>
          )}
          {!state.emailCheck && state.emailCodeCheck && !state.success && (
            <Validation>
              <div className='validation-text'>{state.codeValidation}</div>
            </Validation>
          )}
          {!state.emailCheck && state.emailCodeCheck && !state.success && (
            <button
              className='login-button'
              disabled={!state.validation || state.emailCode === ''}
              onClick={_handleEmailCheck}
            >
              <div className='login-text'>확인</div>
            </button>
          )}
          {state.emailCheck && !state.success && (
            <IdBox>
              <TitleBox>
                아이디
              </TitleBox>
              <input
                value={state.userId + state.selected}
                type='text'
                name='userId'
                disabled={true}
              />
            </IdBox>
          )}
          {state.emailCheck && !state.success && (
            <Validation>
              <div className='validation-text'>{state.idValidation}</div>
            </Validation>
          )}
          {state.emailCheck && !state.success && (
            <IdBox>
              <TitleBox>
                비밀번호
              </TitleBox>
              <input
                style={{fontSize: '24px'}}
                value={state.userPw}
                type='password'
                name='userPw'
                onChange={_handleInputChange}
                required={true}            
                maxLength={15}
              />
            </IdBox>
          )}
          {state.emailCheck && !state.success && (
            <Validation>
              <div className='validation-text'>{state.pwValidation}</div>
            </Validation>
          )}
          {state.emailCheck && !state.success && (
            <IdBox>
              <TitleBox>
                비밀번호 확인
              </TitleBox>
              <input
                style={{fontSize: '24px'}}
                value={state.checkPw}
                type='password'
                name='checkPw'
                onChange={_handlePwchange}
                required={true}            
                maxLength={15}
              />
            </IdBox>
          )} 
          {state.emailCheck && !state.success && (
            <Validation>
              
                <div className='validation-text'>{state.checkPwValidation}</div>
            
            </Validation>
          )}
          {state.emailCheck && !state.success && (
            <IdBox>
              <TitleBox>
                이름
              </TitleBox>
              <input
                value={state.name}
                type='text'
                name='name'
                onChange={_handleInputChange}
                required={true}            
                maxLength={10}
              />
            </IdBox>
          )}
          {state.emailCheck && !state.success && (
            <Validation>
              <div className='validation-text'>{state.nameValidation}</div>
            </Validation>
          )}
          {state.emailCheck && !state.success && (
            <IdBox>
              <TitleBox>
                별명
              </TitleBox>
              <input
                value={state.nickname}
                type='text'
                name='nickname'
                onChange={_handleInputChange}
                required={true}            
                maxLength={10}
              />
              <TitleBox>
                <button
                  className='reset-button'
                  // onClick={_handleReRequest}
                >
                  중복검사
                </button>
              </TitleBox>
            </IdBox>
          )}
          {state.emailCheck && !state.success && (
            <Validation>
              <div className='validation-text'>{state.nicknameValidation}</div>
            </Validation>
          )}
          {state.emailCheck && !state.success && (
            <IdBox>
              <TitleBox>
                전화번호
              </TitleBox>
              <input
                value={state.phone}
                type='text'
                name='phone'
                onChange={_handleInputChange}
                required={true}            
                maxLength={11}
              />
            </IdBox>
          )}
          {state.emailCheck && !state.success && (
            <Validation>
              <div className='validation-text'>{state.phoneValidation}</div>
            </Validation>
          )}
          {state.emailCheck &&!state.success && (
            <IdBox>
              <TitleBox>
                학번
              </TitleBox>
              <input
                value={state.studentId}
                type='text'
                name='studentId'
                onChange={_handleInputChange}
                required={true}            
                maxLength={8}
              />
            </IdBox>
          )}
          {state.emailCheck && !state.success && (
            <Validation>
              <div className='validation-text'>{state.studentIdValidation}</div>
            </Validation>
          )}
          {state.emailCheck && !state.success && (
            <ValueBox>
              <SelectMajor/>
              <SelectGrade/>
                { state.major === '컴퓨터소프트웨어공학과' ?
                  <SelectYClass/>
                  : state.major === '컴퓨터정보공학과' && state.grade === '1' ?
                  <SelectP1Class/>
                  : state.major === '컴퓨터정보공학과' && state.grade === '2' ?
                  <SelectP2Class/>
                  : state.major === '인공지능소프트웨어학과' ?
                  <SelectQClass/>
                  : ''
                }
              <SelectAcademic/>
            </ValueBox>
          )}
          {state.emailCheck && !state.success && (
            <Validation>
              <div className='validation-text'>{state.idValidation}</div>
            </Validation>
          )}
          {state.emailCheck && !state.success && (
            <button
              className='login-button'
              disabled={!state.validationPw || !state.validationCheckPw || !state.validationNickname || !state.validationName || !state.validationPhone || !state.validationStudent}
            >
              <div className='login-text'>회원가입</div>
            </button>
          )}
          {state.emailCheck && state.success && (
            <button
              className='login-button'
              onClick={_signUpSuccess}
            >
              <div className='login-text'>로그인하기</div>
            </button>
          )}
        </JoinBox>
      </form>
    </Wrap>
  </Container>
);
};

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
    width: 560px;
    // height: 800px;
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

const JoinBox = styled.div`
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
    height: 80px;
    border-radius: 10px 10px 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #0064ff;
    font-size: 24px;
    text-decoration-line: none;
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
`;

const StateBox = styled.div`
    width: 35%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 0 10px 10px 0;

    .reset-button {
      width: 38%;
      height: 55%;
      background: #0064ff;
      border-radius: 10px 10px 10px 10px;
      margin-right: 5px;
    }

    .reset-font {
      font-size: 12.5px;
    }
`;

const Time = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55%;
  background: #0064ff;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid #0064ff;
  width: 35%;
  color: white;
`;

const Selectvalues = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  
  .select-major-box {
    display: flex;
    justify-content: center;
    background: #f5f5f5;
    height: 60px;
    width: 100%;
    border-radius: 10px 10px 10px 10px; 
  }

  .select-box {
    display: flex;
    justify-content: center;
    background: #f5f5f5;
    height: 60px;
    width: 80%;
    border-radius: 10px 10px 10px 10px;
    margin-left: 10px;
  }
`;

const ValueBox = styled.div`
  display: flex;
  
  align-items: center;
  width: 80%;
  height: 60px;
  // background: #f5f5f5;
  // border-radius: 10px 10px 10px 10px;
`;

const IdBox = styled.div`
  width: 80%;
  height: 60px;
  display: flex;
  
  input {
    font-size: 16px;
    background: #f5f5f5;
    width: 50%;
  }

  margin: 0 0 10px 0;
  border-radius: 10px 10px 10px 10px;
  background: #f5f5f5;
`;

const CodeBox = styled.div`
  width: 80%;
  height: 60px;
  display: flex;

  input {
    font-size: 16px;
    background: #f5f5f5;
    width:55%;
  }

  margin: 0 0 10px 0;
  border-radius: 10px 10px 10px 10px;
  background: #f5f5f5;
`;

const TitleBox = styled.div`
  width: 22%;
  display: flex;
  justify-content: center;
  align-items: center;
  

  .reset-button {
    width: 75%;
    height: 50%;
    background: #0064ff;
    border-radius: 10px 10px 10px 10px;
    // margin-left: 15px;
    color: white;
  }
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

const CountDown = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 10%;
  color: blue;
  margin-right: 14px;
`;

export default JoinPage;
