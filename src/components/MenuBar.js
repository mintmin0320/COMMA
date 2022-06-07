import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// 개발자
import { init, logoutRequest } from '../redux/actions/auth';
// import _axios from '../../utils/axios';
// import Alert from '../../components/common/modal/Alert';
//css
import styled from 'styled-components';
//input & button
import Button from '../components/common/Button';
//icon
// import Logo from '../../images/blue_bg.svg';
import Logo from '../images/blue_bg.svg';

const MenuBar = () => {

  return (
    <Container>
      <Link to="/"><button className='menu-button'>공지사항</button></Link>
      <Link to="/rental"><button className='menu-button'>대여</button></Link>
      <Link to="/"><button className='menu-button'>커뮤니티</button></Link>
      <Link to="/"><button className='menu-button'>기타</button></Link>

    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 80%;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #D8D8D8;
  background: #CEE3F6;

  .menu-button {
    width: 150px;
    height: 50px;
    text-decoration: none;
  }
`;

export default MenuBar;