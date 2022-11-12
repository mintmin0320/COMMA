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
import Logo from '../images/blue_bg.svg';
import Weather from './weather/Weather';
import CafeteriaMenu from './cafeteriaMenu/CafeteriaMenu';
import Profile from './profile/Profile';
import Banner from './banner/Banner';

const Header = () => {
  return (
    <Container>
      <ProfileBox>
        <Profile/>
      </ProfileBox>
      <WeatherBox>
        <Weather/>
      </WeatherBox>
      <CafeteriaMenuBox>
        <CafeteriaMenu/>
      </CafeteriaMenuBox>
      <BannerBox>        
        <Banner/>
      </BannerBox>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 18%;
  height: 1v;
  // background: red;
  // border: 2px solid #D8D8D8;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px 10px 10px 10px;
  background: white;
`;

const ProfileBox = styled.div`
  width: 95%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

const WeatherBox = styled.div`
  width: 85%;
  height: 50px;
`;

const CafeteriaMenuBox = styled.div`
  width: 85%;
  height: 140px;  
`;

const BannerBox = styled.div`
  width: 85%;
  height: 180px;
`;



export default Header;