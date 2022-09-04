import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import CommunityPage from '../../components/community/CommunityPage';

import styled from 'styled-components';

const Community = () => {
  return(
    <Container>
      <MenuBox>
        <MenuBar/>
      </MenuBox>
      <div className='container-box'>
        <HeaderBox>
          <Header/>
        </HeaderBox>
        <CommunityBox> 
          <CommunityPage/>
        </CommunityBox>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .container-box {
    display: flex;
    width:100%;
  }
`;

const MenuBox = styled.div`
  width: 100%;
  height: 80px;
`;

const HeaderBox = styled.div`
  width: 20%;
`;

const CommunityBox = styled.div`
  width: 80%;
`;


export default Community;