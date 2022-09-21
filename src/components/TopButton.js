import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const TopButton = () => {
  const [ScrollY, setScrollY] = useState(0);
  const handleFollow = () => {
    setScrollY(window.scrollY);
  }

  const _handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    console.log(ScrollY);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollY(0);  // ScrollY 의 값을 초기화
  }

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    }
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow);
    }
  })

  return (
    <Container>
      <button
        className="topBtn"
        onClick={_handleTop}  
      >
        <FontAwesomeIcon icon={faArrowUp} size="2x"/>
      </button>
    </Container>
  )
};

const Container = styled.div`
  .topBtn {
    position: fixed; 
    bottom: 40px; 
    right: 40px;
    width: 50px; 
    height: 50px;
    border-radius: 100%;
    border: 0 none;
    background: #0064ff;
    color: white;
    // border: 2px solid #0064ff;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: -0.06em;
    cursor: pointer;

    @media screen and (max-width: 430px) {
      display: none;
    }
  }

  .topBtn:hover,
  .topBtn:focus,
  .topBtn:active { 
    outline: 0 none; 
  } 
`

export default TopButton;