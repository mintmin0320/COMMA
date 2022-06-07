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
import Axios from 'axios';
//css
import '../../styles/kendo.css';
import {
  Container,
  Wrap,
  LogoWrap,
  FindIDPW,
  FindIDPWButton,
  IdBox,
} from '../../styles/account';
import styled from 'styled-components';
//input & button
import CommonButton from '../common/Button';
import CommonInput from '../common/CommonInput';

//icon
import bang from '../../images/account/bang.svg';
import Logo from '../../images/blue_bg.svg';

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useSelector((store) => store.auth);
  const storageData = sessionStorage.getItem('userId');

    // bcrypt 불러오기 - commonjs
  // const bcrypt = require("bcrypt")

  // const password = '1234'

  // 해시 함수로 비밀번호 암호화해서 변수에 저장하기
  // const encrypted = bcrypt.hash(password, 10)
  // console.log(encrypted);

  // const encodedPassword = '$2a$10$tUUfk1E0jGr90ntHxl/wE.lzrVvAQfxJ7nRo3RYXi2XqJtlv2h.UW'
  // const same = bcrypt.compareSync(password, encodedPassword)

  // // 암호화된 내용 확인하기
  // console.log(encrypted);

  // const saveId = storageData === null || storageData === '' ? '' : atob(storageData);

  const [error, setError] = useState('');
  const [red, setRed] = useState(false);

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
    // idSave: saveId,
    // idCheck: saveId !== '' ? true : false,
  });

  // 입력값이 변할 때
  const _handleInputChange = (e) => {
    setState({ 
      ...state, 
      [e.target.name]: e.target.value 
    });
    setRed(false);
    setError('');
  };

  // 로그인 버튼 클릭
  const _handleSubmit = (e) => {
    e.preventDefault();
    // if (state.idCheck) {
    //   dispatch(idSave(btoa(state.userId)));
    // }
    console.log(state.userPw);
    dispatch(loginRequest(state.userId + state.selected, state.userPw));
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
      setRed(false);
      setError('');

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
        <Link to="/">
          <LogoWrap>
            <img src={Logo} alt="logo" width="100%"></img>
          </LogoWrap>
        </Link>
        <form onSubmit={_handleSubmit}>
          <IdBox>
          <CommonInput
            className="input-id"
            inputtype="text"
            width="100%"
            height="60px"
            margin="0 0"
            value={state.userId}
            maxLength={40}
            autoComplete="off"
            name="userId"
            onChange={_handleInputChange}
            required={true}
            placeholder="아이디를 입력해주세요"
            validityStyles={false}
            titlename="아이디"
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
            margin="0 0 0 0"
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

const SelectBox = styled.div`
    width: 236px;
    height: 60px;
    display: flex;
    align-items: center;
    border: 1px solid #A9A9A9;
`;

export default LoginPage;
