import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// 개발자
// import _axios from '../../utils/axios';
// import Alert from '../../components/common/modal/Alert';
//css
import styled from 'styled-components';
//input & button
import Button from '../components/common/Button';
//icon
// import Logo from '../../images/blue_bg.svg';
import Logo from '../images/blue_bg.svg';
import Weather from './weather/Weather';
import CafeteriaMenu from './cafeteriaMenu/CafeteriaMenu';
import Basket from './rental/Basket';
import Profile from './profile/Profile';

const Header = () => {

  return (
    <Container>
      <LogoBox>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <LogoText>
            <h2 className='textLogo'>COMMA</h2>
          </LogoText>
        </Link>
      </LogoBox>
      <ProfileBox>
        <Profile/>
        </ProfileBox>
        <WeatherBox>
          <Weather/>
        </WeatherBox>
        <CafeteriaMenuBox>
          <CafeteriaMenu/>
        </CafeteriaMenuBox>
        <BasketBox>
          <Basket/>
        </BasketBox>
      </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 20%;
  height: 100%;
  border: 2px solid #D8D8D8;
  
`;

const LogoText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;

  .textLogo {
    font-size: 2.5em;
    font-family: Georgia;
    font-weight: bold; 
  }
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 110px;
`;

const ProfileBox = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Profilee = styled.div`
  width: 90%;
  height: 100px;
  border: 1px solid #D8D8
`;

const WeatherBox = styled.div`
  width: 100%;
  height: 150px;
`;

const CafeteriaMenuBox = styled.div`
  width: 100%;
  height: 200px;
`;

const BasketBox = styled.div`
  width: 100%;
  height: 250px;
`;



export default Header;