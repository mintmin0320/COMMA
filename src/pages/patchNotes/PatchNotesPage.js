import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import PatchNotes from '../../components/patchNotes/PatchNotes'
import ScrollIndiactor from '../../components/ScrollIndicator';
import TopButton from '../../components/TopButton';

const PatchNotesPage = () => {
  return(
    <Container>
      <ScrollIndiactor/>
      <MenuBox>
        <MenuBar/>
      </MenuBox>
      <div className='container-box'>
        <HeaderBox>
          <Header/>
        </HeaderBox>
        <PatchNotesPageBox>
          <PatchNotes/>
        </PatchNotesPageBox>
      </div>
      <TopButton/>
    </Container>
  );
}

const Container = styled.div`
  .container-box {
    display: flex;
  }
`;

const MenuBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
`;

const HeaderBox = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
`;

const PatchNotesPageBox = styled.div`
  width: 70%;
  display: flex;
  
`;
export default PatchNotesPage;
