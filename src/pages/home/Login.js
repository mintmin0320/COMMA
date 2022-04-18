/*
설명: 로그인 화면
*/
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
// 개발자
import { idSave, init, loginRequest } from '../../redux/actions/auth';
import _axios from '../../utils/axios';
//css
import '../../styles/kendo.css';
import {
  Container,
  Wrap,
  LogoWrap,
  FindIDPW,
  FindIDPWButton,
} from '../../styles/account';
//input & button
import CommonButton from '../../components/common/Button';
import CommonInput from '../../components/common/CommonInput';
//icon
import bang from '../../images/account/bang.svg';
import Logo from '../../images/logo.png';

const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useSelector((store) => store.auth);
  const storageData = sessionStorage.getItem('userId');
  const saveId = storageData === null || storageData === '' ? '' : atob(storageData);

  const [error, setError] = useState('');
  const [red, setRed] = useState(false);

  const [state, setState] = useState({
    isLoading: true,
    userId: saveId,
    idSave: saveId,
    idCheck: saveId !== '' ? true : false,
    userPw: '',
    isEyesOn: false,
    userInfo: [],
    success: false,
    message: null,
    visibleDialog: false,
  });

  // 입력값이 변할 때
  const _handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    setRed(false);
    setError('');
  };

  // 로그인 버튼 클릭
  const _handleSubmit = (e) => {
    e.preventDefault();

    if (state.idCheck) {
      dispatch(idSave(btoa(state.userId)));
    }

    dispatch(loginRequest(state.userId, state.userPw));
  };

  //엔터 키
  const _handleEnterPress = (e) => {
    e.preventDefault();

    if (e.charCode === 13) {
      dispatch(loginRequest(state.userId, state.userPw));
    }
  };

  useEffect(async () => {
    const loginStatus = await auth.login.status;
    // 로그인 정상
    if (loginStatus === 'SUCCESS') {
      setRed(false);
      setError('');

      setState({
        ...state,
        success: true,
        visibleDialog: true,
        message: auth.login.message,
      });

      setTimeout(() => {
        setState({
          ...state,
          success: false,
        });

        navigate('/');
      }, 1000);

      // 로그인실패
    } else if (loginStatus === 'FAILURE') {
      setRed(true);
      setError(auth.login.message);

      setTimeout(() => {
        setState({
          ...state,
          success: false,
        });
        dispatch(init());
      }, 1000);
    }
  }, [auth.login.status]);

  return (
    <Container>
      <Wrap>
        <Link to="/">
          <LogoWrap>
            <img src={Logo} alt="logo" width="100%"></img>
          </LogoWrap>
        </Link>
        <form onSubmit={_handleSubmit}>
          <CommonInput
            className="input-id"
            inputtype="text"
            width="100%"
            height="60px"
            margin="20px 0"
            value={state.userId}
            maxLength={20}
            autoComplete="off"
            name="userId"
            onChange={_handleInputChange}
            required={true}
            placeholder="아이디를 입력해주세요"
            validityStyles={false}
            titlename="아이디"
          />
          <CommonInput
            idName="typepass"
            kind={red ? 'is-active' : ''}
            inputtype="password"
            name="userPw"
            value={state.userPw}
            maxLength={20}
            onChange={_handleInputChange}
            onKeyPress={() => _handleEnterPress}
            required={true}
            titlename="비밀번호"
            width="100%"
            height="60px"
            margin="0 0 40px 0"
            placeholder="비밀번호를 입력해주세요."
            src={red ? bang : ''}
            error={error}
            validityStyles={false}
            autoComplete="off"
          />

          <CommonButton
            type={'submit'}
            className="loginAnchor"
            kind="wideBtn_01"
            width="100%!important"
          >
            로그인
          </CommonButton>
        </form>
        <FindIDPW>
          <FindIDPWButton to="/join">회원가입 | </FindIDPWButton>
          <FindIDPWButton to="/findID">아이디찾기 | </FindIDPWButton>
          <FindIDPWButton to="/findPW"> 비밀번호찾기</FindIDPWButton>
        </FindIDPW>
      </Wrap>
    </Container>
  );
};

export default Login;
