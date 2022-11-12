import React, {  Fragment, useEffect, useState } from 'react';
import _axios from '../../utils/axios';
import Approval from './Approval';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
// import Loading from '../Loading';

const MyOrderlist = () => {
  const id = useSelector((store) => store.auth.authStatus.userId);
  const [state, setState] = useState({
    userPw: '',
    email: '',
    nickname:'',
    phone:'',
    changePw:'',
    changeName: '',
    orderList: [],
    page: false,
    result:  false,        
    application: true,
    changeImg: false,
    loading: false,
    card: true,
  });
  const _handleApplication = () => {
    setState({
      ...state,
      application: true,
    })
  };

  const _handleApplication2 = () => {
    setState({
      ...state,
      application: false,
    })
  };



  // 신청 취소 버튼
  const _handleStrikethrough = (data) => {
    _getStrikethrough(data);
  };
  
  const _getStrikethrough = async (data) => {
    const url = 'http://210.121.173.182/user/arduino'
    setState({
      ...state,
      loading: true,
    })
    const response = await axios.delete(url, {
      data: {
        userId: id,
        applicationTime: data,
      }
    });
    console.log(response);
    if(response.data.result){
      window.location.reload();
    }
    else {
      toast.error('실패!');
    }
    setState({
      ...state,
      loading: false,
    });
  }

  useEffect(() => {
    const getOrderData = async () => {
      const url = `http://210.121.173.182/user/arduino/${id}`;
      const response = await axios.get(url);
      console.log(response);
      if(response.data.result){
        setState({
          ...state,
          orderList: response.data.result.신청,
        });
        console.log('회원 주문목록 조회성공');
      }else {
        setState({
          ...state,
          orderList: [],
        });
        console.log('회원 주문목록 조회실패');
      }
    }
    getOrderData()
  },[]);

  const Card = () => {
    return (
      <OrederList>
        {state.orderList.map((item, index) => {
          const basketList = item.basket;
          return (
            <div className='order-data' key={index}>
              <div className='date-data'>{item.applicationDate}</div>
              <div className='list-data'>
                {basketList.map((row, index2) => {
                  return(
                    <div className='row-box' key={index2}>
                      <div>{row.item}</div>
                      <div className='count-color'>{row.count}EA</div>
                    </div>
                  )
                })}
              </div>
              <div className='approve-data'>{item.status}</div>
              <div className='strikethrough-data'>
                <button
                  className='strikethrough-btn'
                  type='button'
                  onClick={() => _handleStrikethrough(item.applicationDate)}
                >
                  X
                </button>
              </div>
            </div>
          )
        })}
      </OrederList>
    );
  };
  return (
    <React.Fragment>
    <div className='change-status'>
    {state.application 
      ?<Fragment>
          <div
            className='change-text'
            onClick={_handleApplication}
          >
            신청
          </div>
          &nbsp;&nbsp;
          <div
            className='change-text2' 
            onClick={_handleApplication2}
          >
            승인
          </div>
        </Fragment>
        :
        <Fragment>
          <div
            className='change-text2'
            onClick={_handleApplication}
          >
            신청
          </div>
          &nbsp;&nbsp;
          <div
            className='change-text'
            onClick={_handleApplication2}
          >
            승인
          </div>
        </Fragment>
      }
    </div>
    <div className='order-box'>
      {state.application ? 
        <div className='order-text'>
          <div className='date'>신청날짜</div>
          <div className='list'>신청목록</div>
          <div className='approve'>상태</div>
          <div className='strikethrough'>취소</div>
        </div>
        :
        <div className='order-text'>
          <div className='date'>신청날짜</div>
          <div className='list2'>신청목록</div>
          <div className='approve2'>상태</div>
        </div>  
      }
      {!state.application ? <Approval/> : <Card/>}
    </div>
    <ToastContainer
        position="top-center"
        autoClose={900}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </React.Fragment>
  );
};

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
    width: 60%;
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
    border-right: 1px solid #D8D8D8;
  }

  .strikethrough-data {
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

  .change-profile {
    width: 48%;
    height: 100%;
    display: flex;
    background: red;
    
    @media screen and (max-width: 430px) {
      width: 98%;
      font-size: 15px;
    }
  }

  .strikethrough-btn {
    width: 50%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    
    @media screen and (max-width: 430px) {
      width: 60%;
      height: 60%;
    }
  }

`;

export default MyOrderlist;
