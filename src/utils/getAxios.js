import Axios from 'axios';

// // const Domain = 'http://dev.spiderplatform.co.kr';
// // const Domain = 'http://localhost:8080';
// const Domain = 'http://210.121.173.182';

// const _axios = async (url, params) => {
//   //console.log(url);
//   const headers = {
//     headers: {
//       "Content-type" : "application/json",
//       "Opera-Token" : '123abc',


//     }
//   }

//   //console.log(Domain + url);
//   return await Axios.post(Domain + url, params, headers)
//   // return await Axios.post(Domain + url, params)
//     .then((response) => {
//       console.log(response.data);
//       return response.data;
//     })
//     .catch(function (error) {
//       console.log(error);
//     }
//   );
// };

// export default _axios;

  // 공지사항
  // const _postEemail = async () => {
  //   console.log(state);
  //   const Domain = 'http://210.121.173.182';
  //   const params = 0;
  //   const url = Domain + '/notice/index/' + params;
  //   console.log(url);
  //   console.log(params);
  //   const response = await _axios(url);
  //   console.log(response);
  // }


  import Axios from 'axios';

// const Domain = 'http://dev.spiderplatform.co.kr';
// const Domain = 'http://localhost:8080';
const Domain = 'http://210.121.173.182';

const _axios = async (url) => {
  //console.log(url);
  const headers = {
    headers: {
      "Content-type" : "application/json",
      "Opera-Token" : '123abc',


    }
  }

  //console.log(Domain + url);
  return await Axios.get(url)
  // return await Axios.post(Domain + url, params)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    }
  );
};

export default _axios;



import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import styled from 'styled-components';

// import MenuBar from '../../components/MenuBar';
// import _axios from '../../utils/axios';
// //import Profile from '../../components/home/Profile';

// const Home = () => {
//   const authStatus = useSelector((store) => store.auth.authStatus);
//   console.log(authStatus.isLogIn);
  
//   // const url = '/api/account/get_login_info.php';
//   // const url = '/signIn';
//   // const params = {
//   //   id: '1',
//   //   password: '2',
//   //   email: '3',
//   //   nickname: '4'
//   // };

//   // const _getData = async () => {
//   //   const data = await _axios(url, params);
//   //   console.log(data);
//   // }

//   // useEffect(() => {
//   //   _getData();
//   // },[]);
  

//   return (
//     <Container>
      
//       홈화면

//     </Container>
//   );
// }

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
// `;

// const Wrap = styled.div`
//   width: 100%;
//   height: 100%;
// `;

// export default Home;

// import React, { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router';
// import { Link } from 'react-router-dom';
// // 개발자
// import _axios from '../../utils/axios';
// // import Alert from '../../components/common/modal/Alert';
// //css
// import '../../styles/kendo.css';
// import {
//   Container,
//   Wrap,
//   LogoWrap,
// } from '../../styles/account';
// //input & button
// import Button from '../../components/common/Button';
// import Input from '../../components/common/CommonInput';
// //icon
// import Logo from '../../images/blue_bg.svg';

// const Join = () => {
//   const navigate = useNavigate();

//   const [state, setState] = useState({
//     userId: '',
//     userPw: '',
//     email: '',
//     emailCode:'',   // 인증번호
//     nickname:'',
//     phone:'',
//     idValidation: '',
//     pwValidation: '',
//     nameValidation: '',
//     phoneValidation: '',
//     emailValidation: '',
//     result: false,
//     failureCode: false,   // 재인증 버튼 표시
//     emailCheck:false,    // 이메일 인증여부 확인
//     codeCheck:false,      // 인증번호 인풋창
//     checkButton: false,
//     count: 0,
//     message: null,
//     success: false,
//     visibleDialog: false,
//   });

//   // 이메일 인증 발급
//   const _handleButtonClick = (e) => {
//     e.preventDefault();
//     _postEmail();
//   };

//   // 저장npm
//   const _postEmail = async () => {
//     const url = '/mailAuthentication'; 
//     const params = {
//       address: state.email,
//     };
//     console.log(params);
//     const response = await _axios(url, params);
//     console.log(response);
//     if(response.result){
//       setState({
//         ...state,
//         result: response.result,
//         message: response.message,
//         codeCheck: true,
//         failureCode:false,
//         checkButton:false,
//       });
//     }else{
//       setState({
//         ...state,
//         result: response.result,
//         message: response.message,
//       })    
//     }
//     console.log(response.result, response.message);
//   };

//    // 이메일 인증하기 클릭
//   const _handleButtonCheck = (e) => {
//     console.log(state.count);
//     e.preventDefault();
//     _checkCode();
//   };

//   // 저장
//   const _checkCode = async () => {
//     console.log(state);
//     const url = '/confirmation';
//     const params = {
//       id: state.emailCode,
//       address: state.email,
//     };
//     console.log(params);
//     const response = await _axios(url, params);
//     console.log(response);
//     if(response.result){
//       setState({
//         ...state,
//         emailCheck: true,
//         result: response.result,
//         message: response.message,
//       });
//     }else{
//       if(state.count <= 4 ){
//         setState({
//           ...state,
//           result: response.result,
//           message: response.message,
//           failureCode: false,
//           count: state.count + 1,
//           emailCheck: true,
//       });
//       alert('잘못된 인증번호입니다.');
//       }else {
//         setState({
//           ...state,
//           result: response.result,
//           message: response.message,
//           checkButton: true,
//           failureCode: true,
//           count: state.count = 0,
//         });
//       alert('잘못된 코드입니다.');
//         }
//     }
//     console.log(state.result, state.message);
//   };
  
  
//   let regString = /^[a-zA-Z0-9]*$/;
//   let regNum = /^[0-9]*$/;



//   // 입력값이 변할 때
//   const _handleInputChange = (e) => {
  
//     console.log(e.target.value);
//     if(e.target.name === 'email'){
//       if (regString.test(e.target.value)) {
//         console.log("올바른 형식이얌");
//         setState({
//           ...state,
//           emailValidation: '',
//           [e.target.name]: e.target.value 
//         });
//       } else {
//         console.log("특수문자를 제외한 아이디만 입력해주세요.");
//         setState({
//           ...state,
//           emailValidation: '잘못된 형식입니다.',
//           [e.target.name]: e.target.value 
//         });
//       }
//     }else if (e.target.name === 'userId'){
//         if (regString.test(e.target.value)) {
//           console.log("올바른 형식이얌");
//           setState({
//             ...state,
//             idValidation: '',
//             [e.target.name]: e.target.value 
//           });
//         }else {
//           console.log("특수문자를 제외한 아이디만 입력해주세요.");
//           setState({
//             ...state,
//             idValidation: '잘못된 형식입니다.',
//             [e.target.name]: e.target.value 
//           });
//         }
//       }else if(e.target.name === 'userPw'){
//         if (regString.test(e.target.value)) {
//           console.log("올바른 형식이얌");
//           setState({
//             ...state,
//             pwValidation: '',
//             [e.target.name]: e.target.value 
//           });
//         }else {
//           console.log("특수문자를 제외한 아이디만 입력해주세요.");
//           setState({
//             ...state,
//             pwValidation: '잘못된 형식입니다.',
//             [e.target.name]: e.target.value 
//           });
//         }
//       }else if(e.target.name === 'nickname')
//         if (regString.test(e.target.value)) {
//           console.log("올바른 형식이얌");
//           setState({
//             ...state,
//             nicknameValidation: '',
//             [e.target.name]: e.target.value 
//           });
//         }else {
//           console.log("특수문자를 제외한 아이디만 입력해주세요.");
//           setState({
//             ...state,
//             nicknameValidation: '잘못된 형식입니다.',
//             [e.target.name]: e.target.value 
//           });
//         }else if(e.target.name === 'phone'){
//         if (regNum.test(e.target.value)) {
//           console.log("올바른 형식이얌");
//           setState({
//             ...state,
//             phoneValidation: '',
//             [e.target.name]: e.target.value 
//           });
//         }else {
//           console.log("특수문자를 제외한 아이디만 입력해주세요.");
//           setState({
//             ...state,
//             phoneValidation: '잘못된 형식입니다.',
//             [e.target.name]: e.target.value 
//           });
//         }}
//   };

//   // 회원가입 버튼 클릭
//   const _handleSubmit = (e) => {
//     e.preventDefault();

//     _setData();

//     setTimeout(() => {
//       setState({ 
//         ...state, 
//         success: false 
//       });
//     }, 1000);
//     // 회원가입 성공 시 페이지 이동
//     if (!state.emailCheck) {
//       navigate('/login');
//     }
//   };

//   // 저장
//   const _setData = async () => {
//     console.log(state);
//     const url = '/signUp';
//     const params = {
//       user_id: state.userId,
//       user_password: state.userPw,
//       email: state.email,
//       nickname: state.nickname,
//       phone: state.phone,
//     };
//     console.log(params);
//     const response = await _axios(url, params);
//     console.log(response);
//     if(response.result){
//       setState({
//         ...state,
//         result: response.result,
//         message: response.message,
//         success: true,
//         visibleDialog: true,
//       });
//       alert(state.message);
//     }else{
//       setState({
//         ...state,
//         result: response.result,
//         message: response.message,
//       });
//       alert(state.message);
//     }
//   };

//   const _toggleDialog = (e) => {
//     e.preventDefault();

//     setState({
//       ...state,
//       visibleDialog: !state.visibleDialog,
//     });
//   };

//   // const Timer = () => {
        
//         // const [min, setMin] = useState(1);
//         // const [sec, setSec] = useState(0); 
//         // const time = useRef(60);
//         // const timerId = useRef(null);
//   //   useEffect(() => {
//   //     if(!state.emailCheck && state.codeCheck && !state.timeOut){
//   //       timerId.current = setInterval(() => {
//   //         setMin(parseInt(time.current / 60));
//   //         setSec(time.current % 60);
//   //         time.current -= 1;
//   //       }, 1000);
//   //       return () => clearInterval(timerId.current);
//   //   }}, []);

//   //   useEffect(() => {
//   //     if(time.current <= 0){
//   //       console.log("타임 아웃");
//   //       clearInterval(timerId.current);
//   //       setState({
//   //         ...state,
//   //         failureCode:true,
//   //         timeOut:true,
//   //       })
//   //       console.log(state.failureCode);
//   //     }
//   //   }, [sec]);
    
//   //     return (
//   //       <div>
//   //         {min} : {sec}
//   //       </div>
//   //     );
//   //   // }else{
//   //   //   return(
//   //   //     <div></div> 
//   //   //   );
//   // };

//   return (
//     <Container>
//     <Wrap>
//       <Link to="/">
//         <LogoWrap>
//           <img src={Logo} alt="logo" width="100%"></img>
//         </LogoWrap>
//       </Link>
//       <form onSubmit={_handleSubmit}>
//         {!state.emailCheck && (
//         <Input
//           idName="typepass"
//           inputtype="text"
//           name="email"
//           value={state.email}
//           maxLength={20}
//           onChange={_handleInputChange}
//           required={true}
//           titlename="이메일"
//           width="100%"
//           height="60px"
//           margin="0 0 0 0"
//           placeholder="이메일 아이디 입력해주세요."
//           validityStyles={false}
//           autoComplete="off"
//         />)}
//         {!state.emailCheck && (
//           <h4>
//             {state.emailValidation}
//           </h4>)}
//         {!state.emailCheck && state.codeCheck && state.checkButton && state.failureCode &&(
//         <Button
//             className="loginAnchor"
//             kind="wideBtn_01"
//             width="100%!important"
//             onClickHandler= {_handleButtonClick}
//         >
//             다른 이메일로 인증번호 발급
//         </Button>)}
//         {!state.emailCheck && state.codeCheck && ( 
//         <Input
//             idName="typepass"
//             inputtype="text"
//             name="emailCode"
//             value={state.emailCode}
//             maxLength={6}
//             onChange={_handleInputChange}
//             required={true}
//             titlename="인증번호"
//             width="100%"
//             height="60px"
//             margin="0 0 0 0"
//             placeholder="인증번호를 입력해주세요."
//             validityStyles={false}
//             autoComplete="off"
//           />)}
//         {!state.emailCheck && !state.codeCheck && !state.checkButton && (
//         <Button
//             className="loginAnchor"
//             kind="wideBtn_01"
//             width="100%!important"
//             onClickHandler= {_handleButtonClick}
//         >
//             인증번호 발급
//         </Button>)}
//         {!state.emailCheck && state.codeCheck && !state.checkButton &&(
//         <Button
//             className="loginAnchor"
//             kind="wideBtn_01"
//             width="100%!important"
//             onClickHandler= {_handleButtonCheck}
//         >
//             인증완료
//         </Button>)}
//         {!state.emailCheck && state.codeCheck && !state.checkButton &&(
//         <h2>
//           {state.count}/5
//         </h2>)}
//         {state.emailCheck && (
//         <Input
//           className="input-id"
//           inputtype="text"
//           width="100%"
//           height="60px"
//           margin="20px 0"
//           value={state.userId}
//           maxLength={20}
//           autoComplete="off"
//           name="userId"
//           onChange={_handleInputChange}
//           required={true}
//           placeholder="아이디를 입력해주세요"
//           validityStyles={false}
//           titlename="아이디"
//         />)}
//         {state.emailCheck && (
//           <h4>
//             {state.idValidation}
//           </h4>)}
//         {state.emailCheck && (
//         <Input
//           idName="typepass"
//           inputtype="text"
//           name="userPw"
//           value={state.userPw}
//           maxLength={20}
//           onChange={_handleInputChange}
//           required={true}
//           titlename="비밀번호"
//           width="100%"
//           height="60px"
//           margin="0 0 20px 0"
//           placeholder="비밀번호를 입력해주세요."
//           validityStyles={false}
//           autoComplete="off"
//         />)}
//         {!state.emailCheck && (
//           <h3>
//             {state.pwValidation}
//           </h3>)} 
//         {state.emailCheck && (
//         <Input
//           idName="typepass"
//           inputtype="text"
//           name="nickname"
//           value={state.nickname}
//           maxLength={20}
//           onChange={_handleInputChange}
//           required={true}
//           titlename="닉네임"
//           width="100%"
//           height="60px"
//           margin="20px 0 20px 0"
//           placeholder="닉네임을 입력해주세요."
//           validityStyles={false}
//           autoComplete="off"
//         />)}
//         {state.emailCheck && (
//           <h3>
//             {state.nameValidation}
//           </h3>)}
//         {state.emailCheck && (
//         <Input
//           idName="typepass"
//           inputtype="text"
//           name="phone"
//           value={state.phone}
//           maxLength={20}
//           onChange={_handleInputChange}
//           required={true}
//           titlename="전화번호"
//           width="100%"
//           height="60px"
//           margin="0 0 40px 0"
//           placeholder="-을 제외한 전화번호를 입력해주세요."
//           validityStyles={false}
//           autoComplete="off"
//         />)}
//         {state.emailCheck && (
//           <h3>
//             {state.phoneValidation}
//           </h3>)}
//         {state.emailCheck && (
//         <Button
//           type={'submit'}
//           className="loginAnchor"
//           kind="wideBtn_01"
//           width="100%!important"
//         >
//           회원가입
//         </Button>
//         )}
//       </form>

//       {/* {state.success && state.visibleDialog && (
//         <Alert
//           kind="alert-4"
//           sub1={state.message}
//           onClick2={_toggleDialog}
//         ></Alert>
//       )} */}
//     </Wrap>
//   </Container>
// );
// };

// export default Join;

// const Timer = () => {
        
  //       const [min, setMin] = useState(1);
  //       const [sec, setSec] = useState(0); 
  //       const time = useRef(60);
  //       const timerId = useRef(null);
  //   useEffect(() => {
  //     if(!state.emailCheck && state.codeCheck && !state.timeOut){
  //       timerId.current = setInterval(() => {
  //         setMin(parseInt(time.current / 60));
  //         setSec(time.current % 60);
  //         time.current -= 1;
  //       }, 1000);
  //       return () => clearInterval(timerId.current);
  //   }}, []);

  //   useEffect(() => {
  //     if(time.current <= 0){
  //       console.log("타임 아웃");
  //       clearInterval(timerId.current);
  //       setState({
  //         ...state,
  //         failureCode:true,
  //         timeOut:true,
  //       })
  //       console.log(state.failureCode);
  //     }
  //   }, [sec]);
    
  //     return (
  //       <div>
  //         {min} : {sec}
  //       </div>
  //     );
  //   // }else{
  //   //   return(
  //   //     <div></div> 
  //   //   );







  import React, { useEffect, useState } from 'react';
// import styled, { css } from 'styled-components';
// import theme from '../../styles/theme';

// const CommonInput = ({
//   width,
//   inputWidth,
//   height,
//   margin,
//   inputtype,
//   idName,
//   kind,
//   children,
//   onClickHandler,
//   onClickHandler2,
//   disabled,
//   placeholder,
//   titlename,
//   value,
//   validityStyles,
//   src,
//   autoComplete,
//   onChange,
//   onFocus,
//   onBlur,
//   onkeyPress,
//   required,
//   name,
//   maxLength,
//   mask,
//   error,
//   icon,
//   error2,
//   borderBottom,
//   RefInput,
//   readOnly,
//   padding,
//   border,
//   borderRadius,
//   srcmargin,
//   srcc,
//   onKeyPress,
//   translateX,
//   imgTop,
// }) => {
//   return (
//     <StyledInpuWrap width={width} imgTop={imgTop}>
//       <p className={kind}>{titlename}</p>
//       <StyledInput
//         ref={RefInput}
//         id={idName}
//         className={kind}
//         type={inputtype}
//         name={name}
//         value={value}
//         width={inputWidth ? inputWidth : width}
//         translateX={translateX}
//         height={height}
//         margin={margin}
//         readOnly={readOnly}
//         onChange={onChange}
//         disabled={disabled}
//         onkeyPress={onkeyPress}
//         required={required}
//         placeholder={placeholder}
//         maxLength={maxLength}
//         autoComplete={autoComplete}
//         validityStyles={validityStyles}
//         mask={mask}
//         borderBottom={borderBottom}
//         onClick={onClickHandler}
//         padding={padding}
//         border={border}
//         borderRadius={borderRadius}
//         onKeyPress={onKeyPress}
//         onFocus={onFocus}
//         onBlur={onBlur}
//       >
//         {children}
//       </StyledInput>
//       <h4>hi</h4>
//       {icon === false ? (
//         ''
//       ) : (
//         <a id="eyesOn" className="inputIcon" onClick={onClickHandler2}>
//           <img src={src}></img>
//           <img src={srcc} className="srcc"></img>
//         </a>
//       )}

//       <h1>{error}</h1>
//       <h2>{error2}</h2>
//     </StyledInpuWrap>
//   );
// };

// const StyledInpuWrap = styled.div`
//   position: relative;
//   width: ${(props) => props.width};
//   p {
//     position: absolute;
//     top: 35%;
//     left: 20px;
//     ${theme.Body2};
//     color: ${theme.colors.grey2};
//     border: none !important;
//     cursor: default;
//   }
//   .inputIcon {
//     display: ${(props) => (props.type === 'text' ? 'none' : 'block')};
//     position: absolute;
//     top: ${(props) => (props.imgTop ? props.imgTop : '19px')};
//     right: 15px;
//     border: none;
//     background: none;
//     cursor: pointer;
//   }
//   .srcc {
//     margin-top: ${(props) => (props.height === '42px' ? '-20px !important' : '-10px !important')};
//   }
//   .is-active {
//     color: ${theme.colors.red};
//     font-weight: 500;
//     font-family: NotoM;
//     border: 1px solid ${theme.colors.red};
//   }
//   .is-active-middle {
//     color: ${theme.colors.red};
//     font-family: NotoM;
//     border-left: 1px solid ${theme.colors.red};
//     border-right: 1px solid ${theme.colors.red};
//     &.bottom {
//       border-bottom: 1px solid ${theme.colors.red};
//     }
//   }
//   h1 {
//     position: absolute;
//     bottom: -30px;
//     right: 0;
//     color: ${theme.colors.red};
//     font-size: 12px;
//     font-family: 'NotoR';
//   }
//   h2 {
//     position: absolute;
//     /* bottom: -30px; */
//     right: 66px;
//     color: ${theme.colors.red};
//     font-size: 12px;
//     font-family: 'NotoR';
//   }
// `;

// const StyledInput = styled.input`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   width: ${(props) => props.width};
//   height: ${(props) => (props.height ? props.height : '60px')};
//   margin: ${(props) => props.margin};
//   padding: ${(props) => (props.padding ? props.padding : '0 8% 0 38%')};
//   color: ${theme.colors.black1};
//   cursor: default;
//   font-size: ${(props) => (props.type === 'password' ? '14px' : '14px')};
//   letter-spacing: ${(props) => (props.type === 'password' ? '3px' : 'normal')};
//   font-family: NotoR;
//   border: ${(props) => (props.border ? props.border : '1px solid #A9A9A9')};
//   border-bottom: ${(props) => props.borderBottom};
//   border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '0')};
//   z-index: 1;
//   ${(props) => props.translateX && `transform : translateX(${props.translateX})`};
//   &:focus {
//     box-shadow: none;
//     outline: none;
//     /* border: 1px solid #f1f2f2; */
//   }
//   ::placeholder {
//     color: ${theme.colors.grey3};
//     font-size: ${(props) => (props.type === 'password' ? '14px' : '14px')};
//     font-family: NotoR;
//     /* transform: ${(props) => (props.type === 'password' ? 'translateY(-12px)' : '')}; */
//     letter-spacing: ${(props) => (props.type === 'password' ? 'normal' : 'normal')};
//   }
//   img {
//     margin-right: 5px;
//   }
//   :disabled {
//     color: #9b9b9b;
//     border: none;
//   }
//   /* kind */
//   &.address {
//     ::placeholder {
//       color: ${theme.colors.grey1};
//     }
//   }
//   @media ${({ theme }) => theme.device.mobile} {
//   }
// `;

// export default CommonInput;


// 저장npm
  // const _Refresh = async () => {
  //   const url = 'http://210.121.173.182/weather';
  //   const response = await axios.get(url);
  //   console.log(response);
  //   const weatherData = response.data.result;
  //   console.log(response.data.result);
  //   if(response.status === 200){
  //     for(let i = 0; i < weatherData.length; i++){
  //       if(response.data.result[i].fcstTime === oneHours && response.data.result[i].category === 'SKY') {
  //         console.log('h1'); 
  //         setState({
  //           ...state,
  //           one: response.data.result[i].fcstValue,
  //         });}
  //       if(response.data.result[i].fcstTime === twoHours && response.data.result[i].category === 'SKY') {
  //         console.log('h2');
  //         setState({
  //           ...state,
  //           two: response.data.result[i].fcstValue,
  //         });}
  //       if(response.data.result[i].fcstTime === threeHours && response.data.result[i].category === 'SKY') {
  //         console.log('h3');
  //         setState({
  //         ...state,
  //           three: response.data.result[i].fcstValue,
  //         });}
  //       if(response.data.result[i].fcstTime === fourHours && response.data.result[i].category === 'SKY') {
  //         console.log('h4');
  //         setState({
  //           ...state,
  //           four: response.data.result[i].fcstValue,
  //         });}
  //       }
  //     alert('날씨 조회 성공');
  //   }else{    
  //     alert('날씨 조회 실패');
  //   }