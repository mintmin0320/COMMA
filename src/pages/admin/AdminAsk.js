import React from 'react';
import MenuBar from '../../components/MenuBar';
import AdminFeedback from '../../components/admin/AdminFeedback';
import ScrollIndiactor from '../../components/ScrollIndicator';
import styled from 'styled-components';
import AdminAskBoard from '../../components/admin/AdminAskBoard';
import AdminBar from '../../components/AdminBar';
import AdminRB from '../../components/AdminRB';

const AdminAsk = () => {
  return(
    <Container>
      <ScrollIndiactor/>
      <MenuBox>
        <MenuBar/>
      </MenuBox>
      <div className='container-box'>
        <HeaderBox>
          <AdminBar/>
        </HeaderBox>
        <RpsBtnBox>
          <AdminRB/>
        </RpsBtnBox>
        <AdminPageBox>
          <AdminAskBoard/>
        </AdminPageBox>
      </div>
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
  width: 15%;
  // display: flex;
  // justify-content: center;

  @media screen and (max-width: 430px) {
    display: none;
  }
`;

const RpsBtnBox = styled.div`
  display: none;

  @media screen and (max-width: 430px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
  }
`

const AdminPageBox = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;

export default AdminAsk;
