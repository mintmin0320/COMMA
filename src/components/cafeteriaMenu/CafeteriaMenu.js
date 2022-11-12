import React, { useEffect, useState } from 'react';
import axios from 'axios';
// 개발자
//css
import styled from 'styled-components';

const CafeteriaMenu = () => {
  const dt = new Date();
  let month = (1 + dt.getMonth());          
  month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
  let day = dt.getDate();                   
  day = day >= 10 ? day : '0' + day;

  let arrDayStr = ['일','월','화','수','목','금','토'];
  let str = (dt.getMonth()+1)+'월 '+dt.getDate()+'일 ('+arrDayStr[dt.getDay()]+')';
  let todayDate = (dt.getFullYear())+'-'+(month)+'-'+(day);

  let koreanData = '';
  let goodData = '';

  const [state, setState] = useState({
    koreanFood: '',
    goodFood: '',
  });

  // useEffect(() => {
  //   const Refresh = async () => {
  //     const url = 'http://210.121.173.182/cafeteriaMenu';
  //     const response = await axios.get(url);
  //     console.log(response);
  //     if(response.status === 200){
  //       for(let i = 0; i < response.data.result.length; i++){
  //         if(response.data.result[i].date === todayDate){
  //           if(response.data.result[i].category === '한식'){
  //             koreanData = response.data.result[i].food;
  //             console.log('한식 조회 성공');
  //           }
  //           else if(response.data.result[i].category === '일품'){
  //             goodData = response.data.result[i].food;
  //             console.log('일품 조회 성공');
  //           }
  //         }
  //         setState({
  //           ...state,
  //           koreanFood: koreanData,
  //           goodFood: goodData,
  //         });
  //         console.log('식단 조회 성공');
  //       }
  //     }else{    
  //       console.log('식단 조회 실패입니다');
  //     }
  //   }
  //     Refresh();
  // },[]);

  return (
    <Container>
      <MenuBox>
        <div className='textBox'>
          {str} 학식 메뉴
        </div>
        <div className='food-box'>
          <div className='korean-food'>
            {state.koreanFood === '' ? '오늘은 휴일입니다.' : state.koreanFood}
          </div>
          <div className='good-food'>
            {state.goodFood === '' ? '오늘은 휴일입니다.' : state.goodFood}
          </div>
        </div>
      </MenuBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  // border: 1px solid #D8D8D8;
  justify-content: center;
  background: white;
`;

const MenuBox = styled.div`
  display: flex;
  // justify-content: center;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid #D8D8D8; 
  border-left: 2px solid #D8D8D8; 
  width: 100%;
  height: 100%;
  
  .textBox {
    width: 100%;
    border-top: 2px solid #D8D8D8; 
    border-bottom: 2px solid #D8D8D8; 
    height: 20%;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .food-box {
    width: 100%;
    height: 80%;
    // display: flex;
    // justify-content: center;
    // border-left: 1px solid #D8D8D8;
    // border-right: 1px solid #D8D8D8;
    border-bottom: 2px solid #D8D8D8;
    padding: 4px;
  }
  .korean-food {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #D8D8D8;
    font-size: 13px;
    padding: 8px;
  }
  
  .good-food {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    padding: 8px;
  }
`;

export default CafeteriaMenu;