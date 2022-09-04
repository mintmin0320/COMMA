import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
// 개발자
//input & button
//css
import styled from 'styled-components';
//input & button
//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot  } from '@fortawesome/free-solid-svg-icons';

const Weather = () => {
  let today = new Date();
  today.setHours(today.getHours() + 1);
  let time = today.getHours();
  time = time >= 10 ? time.toString() + '00' : '0' + time.toString() + '00';
  let skydata = '';
  let popdata = '';
  let tmpdata = '';
  let ptydata = '';
  let rehdata = '';
  // let pcpdata = '';
  const [state, setState] = useState({
    weather: '',
    sky: '',
    pop: '',
    tmp: '',
    pty: '',
    reh: '',
    // pcp: '',
    change: true,
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
  //           console.log('하늘상태' + skydata); 
  //         }
  //         if(response.data.result[i].fcstTime === time && response.data.result[i].category === 'PTY' && response.data.result[i].fcstValue !== '0'){            
  //           ptydata = response.data.result[i].fcstValue;
  //           console.log('강수형태' + ptydata); 
  //         }
  //         if(response.data.result[i].fcstTime === time && response.data.result[i].category === 'POP'){            
  //           popdata = response.data.result[i].fcstValue;
  //           console.log('강수확률' + popdata); 
  //         }
  //         if(response.data.result[i].fcstTime === time && response.data.result[i].category === 'TMP'){            
  //           tmpdata = response.data.result[i].fcstValue;
  //           console.log('기온' + tmpdata); 
  //         }
  //         if(response.data.result[i].fcstTime === time && response.data.result[i].category === 'REH'){            
  //           rehdata = response.data.result[i].fcstValue;
  //           console.log('습도' + rehdata); 
  //         }
  //         // if(response.data.result[i].fcstTime === time && response.data.result[i].category === 'PCP'){            
  //         //   pcpdata = response.data.result[i].fcstValue;
  //         //   console.log('강수량' + pcpdata); 
  //         // }
  //         setState({
  //           ...state,
  //           sky: skydata,
  //           pop: popdata,
  //           pty: '/' + ptydata,
  //           tmp: tmpdata,
  //           reh: rehdata,
  //           // pcp: pcpdata,
  //         });
  //       }
  //       console.log('날씨 갱신 성공');
  //     }else{    
  //       console.log('날씨 갱신 실패');
  //     }
  //   }
  //     _Refresh();
  // },[]);

  const TopWidget = () => {
    let timerId = setTimeout(() => {
      setState({
        ...state,
        change: false,
      });
      return () => clearInterval(timerId);
    }, 8000);
    return(
      <Fragment>
        <div className='popBox'>{(state.sky === '1') ? '맑음' : (state.sky === '3') ? '구름많음' : (state.sky === '4') ? '흐림' : '갱신필요'}
        {state.pty === '/1' ? '/비' : (state.pty === '/2') ? '/(비,눈)' : (state.pty === '/3') ? '/눈' : (state.pty === '/5') ? '/빗방울'
        : (state.pty === '/6') ? '/빗방울눈날림' : (state.pty === '/7') ? '/눈날림' : (state.pty === '/4') ? '/소나기' : ''} </div>  
        <div className='popBox'>{state.tmp}℃</div>
        <div className='popBox'><FontAwesomeIcon icon={faLocationDot}/>&nbsp;고척동</div>
      </Fragment>
    ); 
  }

  const BottomWidget = () => {
    let timerId = setTimeout(() => {
      setState({
        ...state,
        change: true,
      });
      return () => clearInterval(timerId);
    }, 8000);
    return(
    <Fragment>
      <div className='popdBox'>습도 {state.reh}%</div>
      <div className='popdBox'>강수확률 {state.pop}%</div>
    </Fragment>
    );  
  }

  return (
    <Container>
      <WeatherBoxTop>
        <WeatherBox>
          {state.change === true ? TopWidget() :  BottomWidget()}
        </WeatherBox>
        </WeatherBoxTop>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  border: 2px solid #D8D8D8;
  // border-radius: 10px 10px 10px 10px;
  // border-top: 2px solid #D8D8D8;
  // border-right: 2px solid #D8D8D8;
  // border-left: 2px solid #D8D8D8;
  background: white;

  .reButton {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const WeatherBoxTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const WeatherBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // border-top: 1px solid #D8D8D8;
  // border-bottom: 1px solid #D8D8D8;
  
  .popBox {  
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid #D8D8D8;
  //   animation: 0.9s ease-in-out loadEffect1;
  //   @keyframes loadEffect1 {
  //     0%{
  //       opacity: 0.1;
  //       transform: translateY(10px);
  //     }
  //     100%{
  //       opacity: 1;
  //       transform: translateY(0px);
  //     }
  //   }
  }

  .popdBox {  
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // animation: 0.9s ease-in-out loadEffect2;
    // @keyframes loadEffect2 {
    //   0%{
    //     opacity: 0.1;
    //     transform: translateY(10px);
    //   }
    //   100%{
    //     opacity: 1;
    //     transform: translateY(0px);
    //   }
    // }
  }
  `;




export default Weather;