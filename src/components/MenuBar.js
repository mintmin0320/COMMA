import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {  logoutRequest } from '../redux/actions/auth';
import { toast, ToastContainer } from 'react-toastify';
//css
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globalStyle';
import styled from 'styled-components';
//input & button
//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faL } from "@fortawesome/free-solid-svg-icons";
import Logo from '../images/blue_bg.svg';

const MenuBar = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    menubar: false,
  });

  const _handleMenuBar = (e) => {
    e.preventDefault();
    setState({
      ...state,
      menubar: !state.menubar,
    })
  };

  const _handleButton = () => {
    toast.error('미완성 페이지 입니다.');
  };

  // 로그아웃 버튼 클릭
  const _handleLogout = (e) => {
    e.preventDefault();
    toast("로그아웃");
    dispatch(logoutRequest());
  };

  return (
    <Container>
      <Link to="/" className='logo-box'>
        <img src={Logo} alt="logo" className='logo-img'/>
        <div className='logo-text'>COMMA</div>
        <button
          className='menu-bar'
          onClick={_handleMenuBar}
          type="button"
        >
          <FontAwesomeIcon icon={faBars} size="3x"/>
        </button>
      </Link>
      <div className='blank'/>
      <div className='button-box'>
        <NavLink 
          to="/"
          className='menu-button1'
          style={({ isActive }) => ({
            color: isActive ? 'white' : '#0064ff',
            backgroundColor: isActive ? '#0064ff' : 'white',
          })} 
        >
          공지사항
        </NavLink>
        <NavLink
          to="/rental"
          className='menu-button2'
          style={({ isActive }) => ({
            color: isActive ? 'white' : '#0064ff',
            backgroundColor: isActive ? '#0064ff' : 'white',
          })}  
        >
          실습재료
        </NavLink>
        <NavLink 
          to="/community"
          className='menu-button3'
          style={({ isActive }) => ({
            color: isActive ? 'white' : '#0064ff',
            backgroundColor: isActive ? '#0064ff' : 'white',
          })}
        >
          커뮤니티
        </NavLink>
        <NavLink to="/jobs"
          className='menu-button3'
          style={({ isActive }) => ({
            color: isActive ? 'white' : '#0064ff',
            backgroundColor: isActive ? '#0064ff' : 'white',
          })}
        >
          채용공고
        </NavLink>
      </div>
      {state.menubar && (
        <div className='mobile-button-box'>
          <NavLink
            to="/"
            className='menu-button1'
            style={({ isActive }) => ({
              color: isActive ? 'white' : '#0064ff',
              backgroundColor: isActive ? '#0064ff' : '#F2F2F2',
            })} 
          >
            공지사항
          </NavLink>
          <NavLink
            to="/rental"
            className='menu-button2'
            style={({ isActive }) => ({
              color: isActive ? 'white' : '#0064ff',
              backgroundColor: isActive ? '#0064ff' : '#F2F2F2',
            })}  
          >
            실습재료
          </NavLink>
          <NavLink
            to="/community"
            className='menu-button3'
            style={({ isActive }) => ({
              color: isActive ? 'white' : '#0064ff',
              backgroundColor: isActive ? '#0064ff' : '#F2F2F2',
            })}
          >
              커뮤니티
          </NavLink>
          <NavLink to="/jobs"
            className='menu-button4'
            style={({ isActive }) => ({
              color: isActive ? 'white' : '#0064ff',
              backgroundColor: isActive ? '#0064ff' : '#F2F2F2',
            })}
          >
            채용공고
          </NavLink>
          <button
            className='menu-button5'
            onClick={_handleLogout}
          >
            로그아웃
          </button>
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={600}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #D8D8D8;
  background: white;
  padding: 10px;

  @media screen and (max-width: 430px) {
    flex-direction: column;
    height: auto;
    justify-content: flex-start;
  }

  .logo-box {
    width: 20%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    // background: blue;

    @media screen and (max-width: 430px) {
      width: 96%;
      justify-content: flex-start;
      height: 60px;
    }
  }

  .logo-img {
    display: flex;  
    align-items: center;
    height: 65%;
    margin-right: 5px;
  }

  .logo-text {
    display: flex;  
    align-items: center;
    // width: 70%;
    height: 100%;
    font-size: 28px;
    font-family: Helvetica;
    // font-weight: bold;
    
    @media screen and (max-width: 430px) {
      font-size: 24px;
    }
  }

  .menu-bar {
    display: none;  

    @media screen and (max-width: 430px) {
      display: flex;
      background: white;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: flex-end;
    }
  }

  .blank {
    width: 60%;
    height: 100%; 
    background: white;

    @media screen and (max-width: 430px) {
      display: none;
    }
  }

  .button-box {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    background: white;

    @media screen and (max-width: 430px) {
      display: none;
    }
  }

  .mobile-button-box {
    @media screen and (max-width: 430px) {
      flex-direction: column;
      width: 100%;
      font-size: 15px;
    }
  }

  .menu-button1 {
    width: 30%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    // border-right: 1px solid #D8D8D8;
    background: white;

    @media screen and (max-width: 430px) {
      width: 100%;
      height: 50px;
      border-top: 2px solid #F2F2F2;
      border-bottom: 5px solid white;
    }
  }
  
  .menu-button1:hover {
    background: #0064ff;
    color: white;
  }

  .menu-button2 {
    width: 30%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    // border-right: 1px solid #D8D8D8;
    background: white;

    @media screen and (max-width: 430px) {
      width: 100%;
      height: 50px;
      border-bottom: 5px solid white;
    }
  }

  .menu-button2:hover {
    background: #0064ff;
    color: white;
  }

  .menu-button3 {
    width: 30%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    // border-right: 1px solid #D8D8D8;
    background: white;
    color: #0064ff;

    @media screen and (max-width: 430px) {
      width: 100%;
      height: 50px;
      border-bottom: 5px solid white;
    }
  }

  .menu-button3:hover {
    background: #0064ff;
    color: white;
  }

  .menu-button4 {
    width: 20%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: white;

    @media screen and (max-width: 430px) {
      width: 100%;
      height: 50px;
      border-bottom: 5px solid white;
    }
  }

  .menu-button4:hover {
    background: #0064ff;
    color: white;
  }

  .menu-button5 {
    width: 20%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: white;

    @media screen and (max-width: 430px) {
      width: 100%;
      height: 50px;
      color: #0064ff;
      background: #F2F2F2;
    }
  }

`;

export default MenuBar;