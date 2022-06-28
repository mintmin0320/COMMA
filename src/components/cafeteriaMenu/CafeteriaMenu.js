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

const CafeteriaMenu = () => {
  const dt = new Date();
  let month = (1 + dt.getMonth());          
  month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
  let day = dt.getDate();                   
  day = day >= 10 ? day : '0' + day;

  let arrDayStr = ['일','월','화','수','목','금','토'];
  let str = (dt.getMonth()+1)+'월 '+dt.getDate()+'일 ('+arrDayStr[dt.getDay()]+')';
  let date = (dt.getFullYear())+'-'+(month)+'-'+(day)+'T00:00:00';

  const [state, setState] = useState({
    korean: '',
    good: '',
    result: false,    // 서버와의 axios 요청 결과
  });

  // useEffect(() => {
  //   const Refresh = async () => {
  //     const url = 'http://210.121.173.182/cafeteriaMenu';
  //     const response = await axios.get(url);
  //     console.log(response);
  //     console.log(response.data);
  //     if(response.status === 200){
  //       for(let i = 0; i < response.data.length; i++){
  //         if(response.data[i].day === date){
  //           setState({
  //             ...state,
  //             korean: response.data[i].koreanFood,
  //             good: response.data[i].goodFood,
  //           });
  //           console.log('식단 조회 성공');
  //           break;
  //         }
  //         if(response.data[i].day !== date){
  //           setState({
  //             ...state,
  //             korean: '오늘은 휴일입니다.',
  //             good: '오늘은 휴일입니다.',
  //           });
  //         console.log('오늘은 휴일입니다.');
  //         }
  //       }
  //     }else{    
  //       console.log('식단 조회 실패입니다');
  //     }
  //     console.log(state);
  //   }
  //     Refresh();
  // },[]);


  return (
    <Container>
      <MenuBox>
        <div className='textBox'>
          {str} 학식 메뉴
        </div>
        <div className='food'>
          <div className='foodCategory'>
            {state.korean}
          </div>
          <div className='foodCategory'>
            {state.good}
          </div>
        </div>
      </MenuBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  // border: 1px solid #D8D8D8;
  justify-content: center;
`;

const MenuBox = styled.div`
  display: flex;
  // justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 180px;
  border: 1px solid #D8D8D8;

  .textBox {
    width: 100%;
    border: 1px solid #D8D8D8;
    height: 20%;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .food {
    width: 100%;
    
    height: 80%;
    // display: flex;
    // justify-content: center;
  }
  .foodCategory {
    width: 100%;
    border: 1px solid #D8D8D8;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default CafeteriaMenu;