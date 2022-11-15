import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
// 개발자
import Loading from '../Loading';
//css
import 'react-toastify/dist/ReactToastify.css';

const MyComment = () => {
  const id = useSelector((store) => store.auth.authStatus.userId);
  const [state, setState] = useState({        
    cmtList: [],
    loading: false,
  });

  useEffect(() => {
    const getUserLogCmt = async () => {
      const url = `http://210.121.173.182/user/${id}/comment/`;
      const response = await axios.get(url);
      console.log(response);
      if(response.status === 200){
        setState({
          ...state,
          cmtList: response.data.result,
        });
        console.log('회원 댓글 목록 조회성공');
      }else {
        setState({
          ...state,
          cmtList: [],
        });
        console.log('회원 댓글 목록 조회실패');
      }
    }
    getUserLogCmt()
  },[]);

  const Card = () => {
    console.log(state.cmtList);
    return(
      <React.Fragment>
        {state.cmtList.map((cmt, index) => {
          return (
            <div className='bbs-box' key={index}>
              <div className='cmt-content'>{cmt.content}</div>
              <div className='bbs-date'>{cmt.writeDate}</div>
            </div>
          )
        })}
      </React.Fragment>
    )
  };
  console.log(state.cmtList);
  return(
    <Container>
      <Card/>
  </Container>
  );
}

const Container = styled.div`

  .bbs-date {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cmt-content {
    width: 75%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #D8D8D8;
  }
`;


export default MyComment;