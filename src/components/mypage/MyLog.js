import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
// 개발자
import Loading from '../Loading';
import MyComment from './MyComment';
//css
import 'react-toastify/dist/ReactToastify.css';

const MyLog = () => {
  const id = useSelector((store) => store.auth.authStatus.userId);
  const [state, setState] = useState({        
    postList: [],
    loading: false,
  });

  useEffect(() => {
    const getUserLog = async () => {
      const url = `http://210.121.173.182/user/${id}/post/`;
      const response = await axios.get(url);
      console.log(response);
      if(response.status === 200){
        setState({
          ...state,
          postList: response.data.result,
        });
        console.log('회원 글 목록 조회성공');
      }else {
        setState({
          ...state,
          postList: [],
        });
        console.log('회원 글 목록 조회실패');
      }
    }
    getUserLog()
  },[]);

  const Card = () => {
    return(
      <React.Fragment>
        {state.postList.map((bbs, index) => {
          return (
            <div className='bbs-box' key={index}>
              <div className='bbs-id'>{bbs.postId}</div>
              <div className='bbs-title'>{bbs.title}</div>
              <div className='bbs-date'>{bbs.writeDate}</div>
            </div>
          )
        })}
      </React.Fragment>
    )
  };

  return(
    <Container>
      <div className='my-post-box'>
        <div className='page-title1'>
          내가 쓴 글
        </div>
        <div className='log-input-box'>
          <div className='tag-box'>
            <div className='bbs-id'>글번호</div>
            <div className='bbs-title'>제목</div>
            <div className='bbs-date'>작성일</div>
          </div>
          <div className='log-content'>
            <Card/>
          </div>
        </div>
      </div>
      <div className='my-comment-box'>
        <div className='page-title1'>
          내가 쓴 댓글
        </div>
        <div className='log-input-box'>
          <div className='tag-box'>
            <div className='cmt-content'>내용</div>
            <div className='bbs-date'>작성일</div>
          </div>
          <div className='log-content'>
            <MyComment/>
          </div>  
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column; 
  align-items: center;
  
  .my-post-box {
    width: 96%;
    height: 50%;
  }

  .my-comment-box {
    width: 96%;
    height: 50%;
  }

  .page-title1 {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    font-size: 22px;
    border-bottom: 2px solid black;
  }

  .log-input-box {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tag-box {
    width: 100%;
    height: 15%;
    display: flex;
    background: #F2F2F2;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
  }

  .log-content {
    width: 100%;
    height: 80%;
    border: 1px solid #D8D8D8;
    overflow-y: scroll;
  }

  .log-content::-webkit-scrollbar{
    display:none;
  }

  .bbs-box {
    width: 100%;
    height: 80px;
    display: flex;
    border-bottom: 1px solid #D8D8D8;
  }

  .bbs-id {
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #D8D8D8;
  }

  .bbs-title {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #D8D8D8;
  }

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

export default MyLog;