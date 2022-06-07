import React, { useEffect } from 'react';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import AdminInfo from '../../components/admin/AdminInfo';

import styled from 'styled-components';

const AdminHome = () => {

  return(
    <Container>
        <HeaderBox>
          <Header/>
      </HeaderBox>
      <AdminPageBox>
      <MenuBox>
        <MenuBar/>
      </MenuBox>
        <AdminInfo/>
      </AdminPageBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const MenuBox = styled.div`
  width: 80%;
  height: 80px;
`;

const HeaderBox = styled.div`
  width: 20%;
  
`;

const AdminPageBox = styled.div`
  display: block;
  width: 80%;
`;
export default AdminHome;
