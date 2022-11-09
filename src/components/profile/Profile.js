import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import EllipsisText from 'react-ellipsis-text'; //npm install --save react-ellipsis-text    
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 개발자
import { logoutRequest } from '../../redux/actions/auth';
import ProfileImg from './ProfileImg';
//css
import styled from 'styled-components';
import chip from '../../images/chip.png';
//icon
import { faUser, faCartShopping, faGear, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

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
      console.log(response);
      setState({
        ...state,
        nickname: response.data.result,
      });
      if(response.status === 200){
        console.log('프로필 조회성공');
      } else {
        console.log('프로필 조회실패');
      }    
      return () => _getProfileData();
    }
    _getProfileData()
  }
  ,[]);
  
  return (
    <Container>
      <ProfileBox>
        <div className='profile-container'>
          <div className='profile-content'>
            <div className='top-profile'>
              <div className='sign-box'>
                <div className='nick-box'>
                  <div className='text-box'>
                    <EllipsisText
                      text={state.nickname}
                      length={18} />
                      님
                    </div>
                </div>
                <div className='student-id'>
                  <div className='text-box2'>Student ID</div>
                </div>
                <div className='card-img'>
                  <div className='card-box'>
                    <div className='icon-box'>
                      <FontAwesomeIcon icon={faChevronLeft} size="2x" color='white' />
                    </div>
                    <div className='chip-box'>
                      <img src={chip} alt="logo" className='profile2'/>  
                    </div>
                  </div>
                </div>
              </div>
              <div className='img-box'>
                <div className='img-mid-box'>
                  <div className='img'>
                    <ProfileImg/>
                  </div>
                  <div className='logout-box'>
                    <button
                      className='logout'
                      onClick={_handleLogout}
                    >
                      로그아웃
                    </button>
                  </div>
                </div>
              </div>
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
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: 1px solid #D8D8D8;

  .profile {
    width: 90%;
    height: 90%;
    border: 1px solid #0101DF;
    // border-radius: 50%;
    background: white;
  }

  .profile-container {
    width: 90%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #0101DF;
    /* border-radius: 10px 10px 10px 10px; */
    // background: blue;
  }

  .profile-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border-radius: 10px 10px 10px 10px; */
    background: #0101DF;
  }

  .top-profile {
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #D8D8D8;
    // background: red;
  }

  .img-box {
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0101DF;
    /* border-radius: 0px 10px 0px 0px; */
  }

  .img-mid-box {
    width: 90%;
    height: 95%;
    background: white;
  }

  .img {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    // background: #0101DF;
  }

  .sign-box {
    width: 65%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border-bottom: 1px solid #D8D8D8;
    background: #0101DF;
    /* border-radius: 10px 0px 0px 0px; */
  }

  .nick-box {
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;

  }

  .student-id {
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }

  .card-img {
    width: 100%;
    height: 50%;
    display: flex;
    // justify-content: center;
    // align-items: center;
    font-size: 15px;
  }

  .icon-box {
    width:25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .chip-box {
    width:75%;
    height: 100%;
  }

  .logout-box {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-box {
    width: 90%;
    height: 100%;
    display: flex;
    color: white;
    align-items: center;
    font-weight: bold;
    font-size: 17px;
  }

  .text-box2 {
    width: 90%;
    height: 100%;
    color: white;
    font-weight: bold;
    font-size: 17px;
  }

  .card-box {
    width: 80%;
    height: 80%;
    display: flex;
    // background: red;
  }

  .profile2 {
    width: 50%;
    height: 100%;
  }

  .logout {
    width: 90%;
    height: 90%;
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
    /* border-radius: 10px 10px 10px 10px; */
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
    text-decoration: none;
  }

  .button-box:hover{
    background: #F2F2F2;
    /* border-radius: 10px 10px 10px 10px; */
  }

  .button-items {
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    // border-top: 1px solid #D8D8D8;
    /* border-radius: 0px 0px 10px 10px; */
    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export default Profile;