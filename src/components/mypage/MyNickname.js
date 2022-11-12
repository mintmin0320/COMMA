import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// 개발자
import _axios from '../../utils/axios';
//css

const MyNickname = () => {
  const id = useSelector((store) => store.auth.authStatus.userId);
  const [state, setState] = useState({
    nickname:  '',
    userId: ''
  });

 // 회원정보 조회
  useEffect(() => {
    const getData = async () => {
      const url = `http://210.121.173.182/user/${id}`;
      console.log(url);
      console.log(id);
      const response = await axios.get(url);
      console.log(response);
      if(response.data.result){
        setState({
          ...state,
          userId: response.data.user.user_id,
          nickname: response.data.user.user_nickname,
        });
        console.log('회원정보 조회성공!');
      } else {
        console.log('회원정보 조회실패!');
      }
      
    }
    getData()
  },[]);

  return(
    <div className='info-data'>
      <div className='id'>{state.userId}</div>
      <div className='nick'>{state.nickname}</div>
      <div className='nick'>3개</div>
    </div>
  )
}

export default MyNickname;