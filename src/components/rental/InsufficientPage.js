import React from 'react';
// 개발자
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//css, icon, img
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

const InsufficientPage = () => {
  return(
    <Container>
      <div className='insufficient-css'>
        <div className='icon-css'>
          <FontAwesomeIcon icon={faRobot} size="9x"/>
        </div>
        <div className='text-css'>
          상품이 현재 준비 중에 있습니다..
        </div>  
      </div>
    </Container> 
  )       
}

const Container = styled.div`
  width: 100%;
  height: 30%;

  .insufficient-css {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  .icon-css {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-itmes: center;

    @media screen and (max-width: 430px) {
      height: 75%;
    }
  }

  .text-css {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-itmes: center;
    font-size: 28px;

    @media screen and (max-width: 430px) {
      font-size: 24px;
    }
  }
`;

export default InsufficientPage;