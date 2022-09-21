import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faListCheck } from "@fortawesome/free-solid-svg-icons";

import Logo from '../../images/blue_bg.svg';
import banner from '../../images/banner.png';
//css
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Banner = () => {
  //   return(
  //     <Link to="/feedback" className='banner-box'>
  //       <div className='top-box'/>
  //       <div className='bottom-box'>
  //         <div className='top-text'>
  //           사이트 이용 후기 
  //         </div>
  //         <div className='bottom-text'>
  //           및 평점 남기기
  //         </div>
  //       </div>
  //     </Link>
  //   ); 
  
  //   );  
  // }

  return(
    <Container>
      <div className='banner-box1'>
        <a href='https://www.dongyang.ac.kr/dongyang/index.do' className='banner-link'>
        <img src={banner} alt="logo" className='banner-img'/>
          <div className='banner-text'>
            홈페이지 바로가기
          </div>
        </a>
      </div>
      <div className='banner-box2'>
        <Link to="/feedback" className='banner-link2'>
          <div  className='banner-img2'>
          <FontAwesomeIcon icon={faListCheck} size="2x" color="#0064ff"/>
          </div>
          <div className='banner-text'>
            사이트 평가 및 피드백
          </div>
        </Link>
      </div>   
      <div className='banner-box3'>
        <Link to="/guide" className='banner-link2'>
          <div  className='banner-img2'>
            <FontAwesomeIcon icon={faQuestion} size="2x" color="#0064ff"/>
          </div>
          <div className='banner-text'>
            COMMA 가이드
          </div>
        </Link>
      </div>   
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 98%; 
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;  
  flex-direction: column;
  text-decoration-line: none;
  // border: 1px solid #D8D8D8;

  .banner-box1 {
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #D8D8D8;
    // border: 1px solid #D8D8D8;
  }

  .banner-box1:hover {
    background: #F2F2F2;
  }

  .banner-box2 {
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: center;
    // border-left: 1px solid #D8D8D8;
    // border-right: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
  }

  .banner-box2:hover {
    background: #F2F2F2;
  }

  .banner-box3 {
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: center;
  }

  .banner-box3:hover {
    background: #F2F2F2;
  }
  
  .banner-link {
    width: 92%;
    height: 100%;
    text-decoration-line: none;
    display: flex;
    align-items: center;
    justify-content: center;
    // background: white;
    // background: red;
  }

  .banner-link2 {
    width: 95%;
    height: 100%;
    text-decoration-line: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .banner-img{
    width: 20%;
    height: 100%;
    display: flex;
    // justify-content: center;
    align-items: center;
  }

  .banner-img2 {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .banner-text {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: black;
  }
`;

export default Banner;