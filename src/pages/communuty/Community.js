import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import CommunityPage from '../../components/community/CommunityPage';

import styled from 'styled-components';

const Community = () => {
    return(
      <Container>
        <HeaderBox>
          <Header/>
        </HeaderBox>
        <CommunityBox>
          <MenuBox>
            <MenuBar/>
          </MenuBox>
          <CommunityPage/>
        </CommunityBox>
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

const CommunityBox = styled.div`
  display: block;
  width: 80%;
`;


export default Community;