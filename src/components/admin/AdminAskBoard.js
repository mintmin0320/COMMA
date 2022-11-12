import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// 개발자
import titleTab from '../../utils/TitleTab';
import EllipsisText from "react-ellipsis-text";
import Loading from '../Loading';

const AdminFeedback = () => {
  
  return(
    <Container>
      관리자 문의 게시판
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  
  .content {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  .count-box {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0064ff;
    background: #F2F2F2;
    font-size: 24px;
    border-bottom: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
  }

  .tag-list {
    width: 100%;
    height: 40%;
    display: flex;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
  }

  .tag-box {
    width: 80%;
    height: 100%;
    border-right: 1px solid #D8D8D8;
  }

  .tag-data {
    width: 20%;
    height: 100%;
  }

  .question {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F2F2F2;
    border-bottom: 1px solid #D8D8D8;
  }

  .question1 {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F2F2F2;  
  }

  .question-data {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-bottom: 1px solid #D8D8D8;
  }

  .question1-data {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;  
  }

  .opinion-box {
    width: 100%;
    height: 50%;
    border-right: 1px solid #D8D8D8;
    border-top: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
  }

  .opinion-tag {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #0064ff;
    border-bottom: 1px solid #D8D8D8;
    background: #F2F2F2;
  }

  .question-tag {
    width: 100%;
    height: 90%;
    overflow-y: scroll;
  }

  .question-tag::-webkit-scrollbar{
    display:none;
  }

  .question2 {
    width: 100%;
    height: 20%;
    border-bottom: 1px solid #D8D8D8;
    padding: 10px;
  }

  .score-font {
    color: #0064ff;
  }
`;

export default AdminFeedback;