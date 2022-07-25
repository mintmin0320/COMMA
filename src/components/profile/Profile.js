import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {  logoutRequest } from '../../redux/actions/auth';
// 개발자
//input & button
import Button from '../../components/common/Button';
//css
import styled from 'styled-components';
//input & button
//icon
import Logo from '../../images/blue_bg.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowRightFromBracket, faBasketShopping } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const dispatch = useDispatch();
  
  // 로그아웃 버튼 클릭
  const _handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutRequest());
  };
  
  const [state, setState] = useState({
    result: false,    // 서버와의 axios 요청 결과
    message: null,
  });

  return (
    <Container>
      <ProfileBox>
        <div className='photo-box'>
          <img src={Logo} alt="logo" width="40%" height="60%"></img>
        </div> 
        <div className='photo-name'>닉네임</div>
        <div className='button-items'>
          <Link to="/mypage" style={{ textDecoration: 'none', width: '100%'}}>
            <div className='button-box'>
              <FontAwesomeIcon icon={faUser} />
            </div>
          </Link>
          <Link to="/basket" style={{ textDecoration: 'none', width: '100%'}}>
            <div className='button-box'>
              <FontAwesomeIcon icon={faBasketShopping} />
            </div>
          </Link>
          <button
            style={{ textDecoration: 'none', width: '100%', backgroundColor: 'transparent' }} 
            onClick={_handleLogout}
          >
            <FontAwesomeIcon icon={faArrowRightFromBracket} color="#0064FF" />
          </button>
        </div>
      </ProfileBox>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  height: 130px;
  
  .reButton {
    width: 95%;
    display: flex;
    justify-content: flex-end;
  }

`;
const ProfileBox = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #D8D8D8;

  .photo-box {
    width: 100%;
    height: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .photo-name {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button-box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    border-radius: 20px 20px 20px 20px;
  }

  .button-box:hover{
    background: #F2F2F2;
  }

  .button-items {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #D8D8D8;
  }
`;


export default Profile;