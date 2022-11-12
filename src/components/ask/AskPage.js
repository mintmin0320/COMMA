import React from 'react';
import titleTab from '../../utils/TitleTab';
import styled from 'styled-components';

const AskPage = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("문의 - COMMA"), 100);

  return(
    <Container>
      사용자 관리자 문의 게시판
    </Container>
  )
}

const Container = styled.div`
  width: 85%;
  height: 60vmax;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  background: white;
`

export default AskPage;