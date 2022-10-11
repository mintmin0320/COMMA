import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// 개발자
import {  logoutRequest } from '../../redux/actions/auth';
import EllipsisText from 'react-ellipsis-text';
import ProfileFile from './ProfileFile';
//npm install --save react-ellipsis-text    
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//css
import styled from 'styled-components';
//icon
import { faUser, faCartShopping, faGear } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const dispatch = useDispatch();
  const userId = useSelector((store) => store.auth.authStatus.userId);
  const [state, setState] = useState({
    nickname:'',
  });
  
  // 로그아웃 버튼 클릭
  const _handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutRequest());
  };

  useEffect(() => {
    const _getProfileData = async () => {
      const url = `http://210.121.173.182/user/profile/${userId}`;
      const response = await axios.get(url);
      setState({
        ...state,
        nickname: response.data.user,
      })
      console.log('프로필 조회성공');
    }
    _getProfileData()
  },[]);

  return (
    <Container>
      <ProfileBox>
        <div className='photo-box'>
          <div className='right-profile'>
            <div className='top-profile'>
              <ProfileFile/>
              <div className='nick-box'>
                <EllipsisText
                  text={state.nickname}
                  length={5} />
                  님
              </div>
              <button
                className='logout-box'
                onClick={_handleLogout}
              >
                로그아웃
              </button>
            </div>
            <div className='bottom-profile'>
              <div className='my-post'>내가 쓴 글&nbsp;</div>
              <div className='my-comment'>내가 쓴 댓글&nbsp;</div>
            </div>
            <div className='button-items'>
              <Link to="/mypage" className='button-box'>
                <FontAwesomeIcon icon={faUser} />
              </Link>
              <Link to="/basket" className='button-box'>
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
              {userId === 'admin' && (
                <Link to="/admin/memberlist" className='button-box'>
                  <FontAwesomeIcon icon={faGear} />
                </Link>
              )}
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
    width: 55%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
    font-size: 15px;
  }

  .logout-box {
    width: 45%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: gray;
    background-color:transparent;
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
    border-radius: 10px 10px 10px 10px;
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