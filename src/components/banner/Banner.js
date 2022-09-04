import React, { Fragment, useState } from 'react';
import Logo from '../../images/blue_bg.svg';
import banner from '../../images/banner.png';
//css
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Banner = () => {
  const [state, setState] = useState({
    change: false,
  });

  const TopWidget = () => {
    let timerId = setTimeout(() => {
      setState({
        ...state,
        change: false,
      });
      return () => clearInterval(timerId);
    }, 8000);
    return(
      <Link to="/feedback" className='banner-box'>
        <div className='top-box'/>
        <div className='bottom-box'>
          <div className='top-text'>
            사이트 이용 후기 
          </div>
          <div className='bottom-text'>
            및 평점 남기기
          </div>
        </div>
      </Link>
    ); 
  }

  const BottomWidget = () => {
    let timerId = setTimeout(() => {
      setState({
        ...state,
        change: true,
      });
      return () => clearInterval(timerId);
    }, 8000);
    return(
      <a href='https://www.dongyang.ac.kr/dongyang/index.do' className='banner-link'>
        <img src={banner} alt="logo" className='banner-img'></img>
        <div className='banner-text'>
          홈페이지 바로가기
        </div>
      </a>
    );  
  }

  return(
    <Container>
      {state.change === true ? TopWidget() :  BottomWidget()}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;  
  border: 1px solid #D8D8D8;
  // border-radius: 10px 10px 10px 10px;
  // box-shadow: 7px 7px lightgray;

  .banner-box {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    text-decoration-line: none;
  }

  .top-box {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-img {
    width: 75%;
    height: 75%;
  }

  .bottom-box {
    width: 100%;
    height: 40%;
  }

  .top-text {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 1em;
    color: #0064ff;
  }

  .bottom-text {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    margin-top: 5px;
    font-size: 1em;
    color: #0064ff;
  }

  .banner-link {
    width: 100%;
    height: 100%;
    text-decoration-line: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
  }

  .banner-img {
    width: 50%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .banner-text {
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
`;



export default Banner;