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
  IdBox,
} from '../../styles/account';
import styled from 'styled-components';
//input & button
import Button from '../common/Button';
import Input from '../common/CommonInput';

const FindId = () => {
  const navigate = useNavigate(); // 페이지 이동 함수

  const [state, setState] = useState({
    email: '',
    emailCode:'',   // 인증번호
    emailValidation: '', // 회원가입 인풋창 유효성 검사
    selected: '@m365.dongyang.ac.kr',
    validation: false,    // 유효성 검사 결과 
    result: false,        // 서버와의 axios 요청 결과
    message: null,
    count: 0,
  });

  // 이메일 인증 발급
  const _handleButtonClick = (e) => {
    e.preventDefault();
    _postEmail();
    console.log(state.count);
  };

  const _findPw = (e) => {
    e.preventDefault();
    navigate('/findPw');
  };

  const _postEmail = async () => {
    const url = '/user/id'; 
    const params = {
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
        alert('발급 실패! 남은 횟수 : ' + state.count + 1);
      }
  };

  let regString = /^[a-zA-Z0-9]{0,15}$/; // 영문, 2~15 글자수
  // 입력값이 변할 때
  const _handleInputChange = (e) => {
    console.log(e.target.value);
    if (regString.test(e.target.value)) {
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
          [e.target.name]: e.target.value 
      })
    };
  };

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
      <IdBox>
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
          placeholder="이메일을 입력해주세요."
          validityStyles={false}
          autoComplete="off"
      />)}
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
      {!state.result && (
          <Validation>
            {state.emailValidation}
          </Validation>)}
      {!state.result && state.count !== 3 &&(
      <Button
          className="loginAnchor"
          kind="wideBtn_01"
          width="100%!important"
          onClickHandler= {_handleButtonClick}
          disabled={!state.validation}
      >
            이메일 확인
      </Button>)}
        {state.result && (
          <Button
          className="loginAnchor"
          kind="wideBtn_01"
          width="100%!important"
          onClickHandler={_findPw}
        >
          비밀번호 찾기
        </Button>)}
      </Wrap>
      </Container>
  );
}
const SelectBox = styled.div`
    width: 236px;
    height: 60px;
    display: flex;
    align-items: center;
    border: 1px solid #A9A9A9;
`;

export default FindId;