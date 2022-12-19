import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
// import { Link } from 'react-router-dom';
//css

const MyNickname = () => {
  const id = useSelector((store) => store.auth.authStatus.userId);
  const [state, setState] = useState({
    nickname: '',
    userId: ''
  });

  // 회원정보 조회
  useEffect(() => {
    const getData = async () => {
      const url = `${process.env.REACT_APP_SERVER_DOMAIN}/user/${id}`;
      console.log(url);
      console.log(id);
      const response = await axios.get(url);
      console.log(response);
      if (response.data.result) {
        setState({
          ...state,
          userId: response.data.user.user_id,
          nickname: response.data.user.user_nickname,
          phone: response.data.user.phone,
        });
        console.log('회원정보 조회성공!');
      } else {
        console.log('회원정보 조회실패!');
      }

    }
    getData()
  }, []);

  return (
    <div className='info-data'>
      <div className='id'>{state.userId}</div>
      <div className='nick'>{state.nickname}</div>
      <div className='nick'>{state.phone}</div>
    </div>
  )
}

export default MyNickname;