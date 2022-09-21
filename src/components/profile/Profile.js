import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {  logoutRequest } from '../../redux/actions/auth';
// 개발자
//css
import styled from 'styled-components';
//icon
import Logo from '../../images/white_bg.svg';
import banner from '../../images/hamin.JPG';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowRightFromBracket, faCartShopping, faGear } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const dispatch = useDispatch();
  
  // 로그아웃 버튼 클릭
  const _handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutRequest());
  };

  return (
    <Container>
      <ProfileBox>
        <div className='photo-box'>
          <div className='right-profile'>
            <div className='top-profile'>
              <img src={banner} alt="logo" className='profile'/>
              <div className='nick-box'>하민님</div>
              <button
                className='logout-box'
                onClick={_handleLogout}
              >
                로그아웃
              </button>
            </div>
            <div className='bottom-profile'>
              <div className='my-post'>내가 쓴 글&nbsp;1</div>
              <div className='my-comment'>내가 쓴 댓글&nbsp;4</div>
            </div>
            <div className='button-items'>
              <Link to="/mypage" className='button-box'>
                <FontAwesomeIcon icon={faUser} />
              </Link>
              <Link to="/basket" className='button-box'>
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
              <Link to="/admin" className='button-box'>
                <FontAwesomeIcon icon={faGear} />
              </Link>
            </div>
          </div>
        </div>
      </ProfileBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  // margin-top: 20px;
  
  .reButton {
    width: 95%;
    display: flex;
    justify-content: flex-end;
  }

`;
const ProfileBox = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: 1px solid #D8D8D8;

  .photo-box {
    width: 90%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #D8D8D8;
    border-radius: 10px 10px 10px 10px;
    // background: red;
  }

  .right-profile {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .top-profile {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #D8D8D8;
  }

  .nick-box {
    width: 50%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }

  .logout-box {
    width: 50%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: gray;
    background: white;
  }

  .logout-box:hover {
    background: #F2F2F2;
    color: black;
    border-radius: 10px 10px 10px 10px;
  }

  .bottom-profile {
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #D8D8D8;
  }

  .my-post {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }

  .my-comment {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }

  .profile {
    width: 50%;
    height: 50%;
    border: 1px solid #D8D8D8;
    border-radius: 50%;
    background: white;
  }

  .button-box {
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    // border-radius: 20px 20px 20px 20px;
    textDecoration: 'none'
  }

  .button-box:hover{
    background: #F2F2F2;
  }

  .button-items {
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    // border-top: 1px solid #D8D8D8;
    // border-radius: 20px 20px 20px 20px;
    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;


export default Profile;