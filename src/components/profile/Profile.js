import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {  logoutRequest } from '../../redux/actions/auth';
// 개발자
//input & button
import Button from '../../components/common/Button';
//css
import styled from 'styled-components';
//input & button
//icon
import Logo from '../../images/blue_bg.svg';


const Profile = () => {
  const dispatch = useDispatch();
  // 로그아웃 버튼 클릭
  const _handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutRequest());
  };
  const [state, setState] = useState({
    result: false,    // 서버와의 axios 요청 결과
    message: null,
  });

  // useEffect(() => {
  //   const _Refresh = async () => {
  //     const url = 'http://210.121.173.182/weather';
  //     const response = await axios.get(url);
  //     console.log(response);
  //     const weatherData = response.data.result;
  //     console.log(response.data.result);
  //     if(response.status === 200){
  //       for(let i = 0; i < weatherData.length; i++){
  //         if(response.data.result[i].fcstTime === today.getHours().toString() + '00' && response.data.result[i].category === 'SKY'){            
  //           skydata = response.data.result[i].fcstValue;
  //           console.log('1시간 하늘상태' + skydata); 
  //         }
  //         if(response.data.result[i].fcstTime === today.getHours().toString() + '00' && response.data.result[i].category === 'PTY' && response.data.result[i].fcstValue !== '0'){            
  //           ptydata = response.data.result[i].fcstValue;
  //           console.log('1시간 강수형태' + ptydata); 
  //         }
  //         if(response.data.result[i].fcstTime === today.getHours().toString() + '00' && response.data.result[i].category === 'POP'){            
  //           popdata = response.data.result[i].fcstValue;
  //           console.log('1시간 강수확률' + popdata); 
  //         }
  //         if(response.data.result[i].fcstTime === today.getHours().toString() + '00' && response.data.result[i].category === 'TMP'){            
  //           tmpdata = response.data.result[i].fcstValue;
  //           console.log('1시간 기온' + tmpdata); 
  //         }
  //         setState({
  //           ...state,
  //           sky: skydata,
  //           pop: popdata,
  //           pty: '/' + ptydata,
  //           tmp: tmpdata
  //         });
  //       }
  //       console.log('날씨 조회 성공');
  //     }else{    
  //       console.log('날씨 조회 실패');
  //     }
  //   }
  //     _Refresh();
  // },[]);

  return (
    <Container>
      <ProfileBox>
        <div className='photo-box'>
          <img src={Logo} alt="logo" width="40%" height="60%"></img>
        </div> 
        <div className='button-items'>
        <Link to="/mypage" style={{ textDecoration: 'none', width: '100%'}}>
          <div className='button-box'>
            <Button
              width="100%"
              height="100%"
          >
              마이페이지
          </Button>
          </div>
        </Link>
          <Button
            width="80%"
            height="100%"
            onClickHandler= {_handleLogout}
          >
            로그아웃
          </Button>
        </div>
      </ProfileBox>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  height: 130px;
  
  .reButton {
    width: 95%;
    display: flex;
    justify-content: flex-end;
  }

`;
const ProfileBox = styled.div`
  width: 100%;
    height: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #D8D8D8;
  
  .photo-box {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #D8D8D8; //지우자 완성하면
  }
  .button-box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .button-items {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;


export default Profile;