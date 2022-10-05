import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequest } from '../redux/actions/auth';
import EllipsisText from 'react-ellipsis-text';
// 개발자
//css
import styled from 'styled-components';
//icon

const AdminBar = () => {
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
        <div className='photo-box'>
          <div className='right-profile'>
            <div className='top-profile'>
              <div className='nick-box'>
                <EllipsisText
                  text={state.nickname}
                  length={5} />
              </div>
              <button
                className='logout-box'
                onClick={_handleLogout}
              >
                로그아웃
              </button>
            </div>
            <div className='button-items'>
              <NavLink
                to="/admin/memberlist"
                className='button-box'
                style={({ isActive }) => ({
                  color: isActive ? 'white' : '#0064ff',
                  backgroundColor: isActive ? '#0064ff' : '#F5F5F5',
                })}  
              >
                회원명단
              </NavLink>
              <NavLink
                to="/admin/orderlist"
                className='button-box'
                style={({ isActive }) => ({
                  color: isActive ? 'white' : '#0064ff',
                  backgroundColor: isActive ? '#0064ff' : '#F5F5F5',
                })}  
              >
                주문현황
              </NavLink>
              <NavLink
                to="/admin/feedback"
                className='button-box'
                style={({ isActive }) => ({
                  color: isActive ? 'white' : '#0064ff',
                  backgroundColor: isActive ? '#0064ff' : '#F5F5F5',
                })}  
              >
                피드백 현황
              </NavLink>
            </div>
          </div>
        </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  // margin-top: 20px;

  .photo-box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  .right-profile {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .top-profile {
    width: 100%;
    height: 15%;
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
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #D8D8D8;
  }

  .button-box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F2F2F2;
    // border-radius: 20px 20px 20px 20px;
    text-decoration: none;
    border-bottom: 1px solid #D8D8D8;
  }

  .button-items {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export default AdminBar;