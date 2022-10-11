import React from 'react';
//css, img
import banner from '../../images/white_bg.svg';
//개발자
import titleTab from '../../utils/TitleTab';
import styled from 'styled-components';

const ProfileFile = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("프로필 변경"), 100); 


  return(
    <Container>
      <img src={banner} alt="logo" className='profile'/>
    </Container>
  )       
}

const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .profile {
    width: 100%;
    height: 50%;
    border: 1px solid #D8D8D8;
    border-radius: 50%;
    cursor: pointer;
    // background: white;
  }
`
// const FileBox = styled.div`
//   .profile {
//     width: 50%;
//     height: 50%;
//     border: 1px solid #D8D8D8;
//     border-radius: 50%;
//     background: white;
// }
// `

export default ProfileFile;