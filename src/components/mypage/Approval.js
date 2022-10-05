import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// 개발자
import _axios from '../../utils/axios';
import titleTab from '../../utils/TitleTab';
//css
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const Approval = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("마이페이지 - COMMA"), 100);
  const dispatch = useDispatch();
  const id = useSelector((store) => store.auth.authStatus.userId);
  const [state, setState] = useState({
    userPw: '',
    checkPw: false,
    result:  false,        
    message: null,
    approvalList: [],
  });

  useEffect(() => {
    const getOrderData = async () => {
      const url = `http://210.121.173.182/user/arduino/${id}`;
      const response = await axios.get(url);
      console.log(url);
      console.log(response);
      if(response.status === 200){
        setState({
          ...state,
          approvalList: response.data.result.승인,
        })
        console.log('회원 주문목록(승인) 조회성공');
      } else {
        console.log('회원 주문목록(승인) 조회실패');
      }
    }
    getOrderData()
  },[]);

  const Card = () => {
    return (
      <OrederList>
        {state.approvalList.map((item2, index) => {
          const List = item2.basket;
          return (
            <div className='order-data' key={index}>
              <div className='date-data'>{item2.applicationDate}</div>
              <div className='list-data'>
                {List.map((row2, index3) => {
                  return(
                    <div className='row-box' key={index3}>
                      <div>{row2.item}</div>
                      <div className='count-color'>{row2.count}EA</div>
                    </div>
                  )
                })}
              </div>
              <div className='approve-data'>{item2.status}</div>
            </div>
          )
        })}
      </OrederList>
    );
  };

  return(
    <Card/>
  )
}

const OrederList = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  // border: 1px solid #D8D8D8;
  flex-direction: column; 
  align-items: center;
  // justify-content: center;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  .order-data {
    width: 100%;
    height: 50%;
    display: flex;
    border-bottom: 1px solid #D8D8D8;
  }
  
  .date-data {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }

  .list-data {
    width: 70%;
    height: 100%;
    border-right: 1px solid #D8D8D8;
    overflow: scroll;

    ::-webkit-scrollbar {
      display: none;
      }
  }

  .approve-data {
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .row-box {
    border-bottom: 1px solid black;
    padding: 8px;
  }

  .count-color {
    color: #0064ff;
  }
`;

export default Approval;