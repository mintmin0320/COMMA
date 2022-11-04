import React from 'react';
import styled from 'styled-components';
import Spiner from './../images/Spiner.gif'

const Loading = () => {
  return (
    <Background>
      <img src={Spiner} alt="로딩중" width="5%" />
      <LoadingText>wait for me</LoadingText>
    </Background>
  ) 
};

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vmax;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const LoadingText = styled.div`
  font: 1rem 'Noto Sans KR';
  text-align: center;
  font-size: 20px;
`;

export default Loading;