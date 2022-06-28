import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// 개발자
//input & button
import Button from '../../components/common/Button';
//css
import styled from 'styled-components';
//input & button
//icon
import sun from '../../images/sun.png';

const Weather = () => {
  let today = new Date();
  today.setHours(today.getHours() + 1);
  let time = today.getHours();
  time = time >= 10 ? time.toString() + '00' : '0' + time.toString() + '00';
  let skydata = '';
  let popdata = '';
  let tmpdata = '';
  let ptydata = '';
  const [state, setState] = useState({
    weather: '',
    sky: '',
    pop: '',
    tmp: '',
    pty: '',
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
  //         if(response.data.result[i].fcstTime === time && response.data.result[i].category === 'SKY'){            
  //           skydata = response.data.result[i].fcstValue;
  //           console.log('1시간 하늘상태' + skydata); 
  //         }
  //         if(response.data.result[i].fcstTime === time && response.data.result[i].category === 'PTY' && response.data.result[i].fcstValue !== '0'){            
  //           ptydata = response.data.result[i].fcstValue;
  //           console.log('1시간 강수형태' + ptydata); 
  //         }
  //         if(response.data.result[i].fcstTime === time && response.data.result[i].category === 'POP'){            
  //           popdata = response.data.result[i].fcstValue;
  //           console.log('1시간 강수확률' + popdata); 
  //         }
  //         if(response.data.result[i].fcstTime === time && response.data.result[i].category === 'TMP'){            
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
  //       console.log('날씨 갱신 성공');
  //     }else{    
  //       console.log('날씨 갱신 실패');
  //     }
  //   }
  //     _Refresh();
  // },[]);

  const _handleWheather = (e) => {
    e.preventDefault();
    _Refresh();
  };

  const _Refresh = async () => {
    const url = 'http://210.121.173.182/weather';
    const response = await axios.get(url);
    console.log(response);
    const weatherData = response.data.result;
    console.log(response.data.result);
    if(response.status === 200){
      for(let i = 0; i < weatherData.length; i++){
        if(response.data.result[i].fcstTime === time && response.data.result[i].category === 'SKY'){            
          skydata = response.data.result[i].fcstValue;
          console.log('1시간 하늘상태' + skydata); 
        }
        if(response.data.result[i].fcstTime === time && response.data.result[i].category === 'PTY' && response.data.result[i].fcstValue !== '0'){            
          ptydata = response.data.result[i].fcstValue;
          console.log('1시간 강수형태' + ptydata); 
        }
        if(response.data.result[i].fcstTime === time && response.data.result[i].category === 'POP'){            
          popdata = response.data.result[i].fcstValue;
          console.log('1시간 강수확률' + popdata); 
        }
        if(response.data.result[i].fcstTime === time && response.data.result[i].category === 'TMP'){            
          tmpdata = response.data.result[i].fcstValue;
          console.log('1시간 기온' + tmpdata); 
        }
        setState({
          ...state,
          sky: skydata,
          pop: popdata,
          pty: '/' + ptydata,
          tmp: tmpdata
        });
      }
      console.log('날씨 갱신 성공');
    }else{    
      console.log('날씨 갱신 실패');
    }
  }
  return (
    <Container>
        <div className='reButton'>
          <div className='location'>구로구 고척동</div>
        <Button
          width="5%"
          height="5%"
          onClickHandler= {_handleWheather}
        >
              갱신
        </Button>
      </div>  
      <WeatherBoxTop>
        <WeatherBox>
          <div className='skyBox'>현재 날씨 ({(state.sky === '1') ? '맑음' : (state.sky === '3') ? '구름많음' : (state.sky === '4') ? '흐림' : '갱신필요'}
          {state.pty === '/1' ? '/비' : (state.pty === '/2') ? '/(비,눈)' : (state.pty === '/3') ? '/눈' : (state.pty === '/5') ? '/빗방울'
          : (state.pty === '/6') ? '/빗방울눈날림' : (state.pty === '/7') ? '/눈날림' : (state.pty === '/4') ? '/소나기' : ''}) </div> 
          <div className='tmpBox'>
            <div className='popBox'>기온 ({state.tmp})도 </div>
            <div className='popBox'>강수량 확률 ({state.pop})%</div>
          </div>  
        </WeatherBox>
      </WeatherBoxTop>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 150px;

  .reButton {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .location {
    width: 75%;
    display: flex;
    justify-content: flex-start;
  }
`;

const WeatherBoxTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const WeatherBox = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #D8D8D8;

  .skyBox {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #D8D8D8;
  }
  .tmpBox {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .popBox {  
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #D8D8D8;
  }
`;

const ProfileBox = styled.div`
  width: 20%;
  height: 100%;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  background: blue;
  
`;

const Profile = styled.div`
  width: 90%;
  height: 180px;
  border: 1px solid #D8D8D8;
`;

const ProfileButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
`;

const Img = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px solid #D8D8D8;
`;

const Name = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;




export default Weather;