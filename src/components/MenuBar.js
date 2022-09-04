import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
//css
import '../styles/globalStyle';
import styled from 'styled-components';
//input & button
//icon
import Logo from '../images/blue_bg.svg';

const MenuBar = () => {

  return (
    <Container>
      <Link to="/" className='logo-box'>
        <img src={Logo} alt="logo" className='logo-img'/>
        <div className='logo-text'>COMMA</div>
      </Link>
      <div className='blank'/>
      <div className='button-box'>
        <NavLink to="/"
          className='menu-button1'
          style={({ isActive }) => ({
            color: isActive ? 'white' : '#0064ff',
            backgroundColor: isActive ? '#0064ff' : 'white',
          })} 
        >
          공지사항
        </NavLink>
        <NavLink to="/rental"
          className='menu-button2'
          style={({ isActive }) => ({
            color: isActive ? 'white' : '#0064ff',
            backgroundColor: isActive ? '#0064ff' : 'white',
          })}  
        >
          대여
        </NavLink>
        <NavLink to="/community"
          className='menu-button3'
          style={({ isActive }) => ({
            color: isActive ? 'white' : '#0064ff',
            backgroundColor: isActive ? '#0064ff' : 'white',
          })}
        >
            커뮤니티
          </NavLink>
        <NavLink to="/patchNotes"
          className='menu-button4'
          style={({ isActive }) => ({
            color: isActive ? 'white' : '#0064ff',
            backgroundColor: isActive ? '#0064ff' : 'white',
          })}
        >
          개발자&nbsp;노트
        </NavLink>
      </div>
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

  .logo-box {
    width: 20%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    // background: blue;
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
  }

  .blank {
    width: 50%;
    height: 100%; 
    background: white;
  }

  .button-box {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    background: white;
  }

  .menu-button1 {
    width: 20%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    // border-right: 1px solid #D8D8D8;
    background: white;
  }
  
  .menu-button1:hover {
    background: #0064ff;
    color: white;
  }

  .menu-button2 {
    width: 20%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    // border-right: 1px solid #D8D8D8;
    background: white;
  }

  .menu-button2:hover {
    background: #0064ff;
    color: white;
  }

  .menu-button3 {
    width: 20%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    // border-right: 1px solid #D8D8D8;
    background: white;
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
  }

  .menu-button4:hover {
    background: #0064ff;
    color: white;
  }

`;

export default MenuBar;