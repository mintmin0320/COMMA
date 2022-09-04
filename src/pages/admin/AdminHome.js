import React, { useEffect } from 'react';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import AdminInfo from '../../components/admin/AdminInfo';
import ScrollIndiactor from '../../components/ScrollIndicator';
import styled from 'styled-components';

const AdminHome = () => {

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
        <AdminPageBox>
          <AdminInfo/>
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
  width: 25%;
  display: flex;
  justify-content: center;
`;

const AdminPageBox = styled.div`
  width: 75%;
  display: flex;
`;
export default AdminHome;
