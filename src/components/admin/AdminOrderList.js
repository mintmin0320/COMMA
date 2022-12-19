import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';
// 개발자
import titleTab from '../../utils/TitleTab';
import _axios from '../../utils/axios';
//css
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading';

const AdminOrderList = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("관리자/주문목록 - COMMA"), 100);
  const [state, setState] = useState({
    userId: '',
    grade: '',
    major: '',
    academic: '',
    classroom: '',
    nickname: '',
    studentId: '',
    result: false,        // 서버와의 axios 요청 결과   
    orderList: [],
    approveList: [],
    loading: false,
  });

  // 관리자 승인 버튼
  const _handleApprove = (id, date) => {
    console.log(id, date);
    _getApprove(id, date);
  };

  const _getApprove = async (id, date) => {
    const url = '/admin/arduino/user'
    const params = {
      userId: id,
      applicationDate: date,
    };
    setState({
      ...state,
      loading: true,
    });
    const response = await _axios(url, params);
    console.log(response);
    if (response.result) {
      setState({
        ...state,
        loading: false,
      });
      toast.success('승인!');
    }
    else {
      setState({
        ...state,
        loading: false,
      });
      toast.error('실패');
    }
  }

  //주문 목록 조회
  useEffect(() => {
    const _getListData = async () => {
      const url = `${process.env.REACT_APP_SERVER_DOMAIN}/admin/arduino/users`;
      setState({
        ...state,
        loading: true,
      });
      const response = await axios.get(url);
      console.log(response);
      if (response.status === 200) {
        setState({
          ...state,
          loading: false,
          orderList: response.data.result.신청,
          approveList: response.data.result.승인,
        });
        console.log('관리자 주문목록 조회성공!');
      } else {
        setState({
          ...state,
          loading: false,
        });
        console.log('관리자 주문목록 조회실패!');
      }
    }
    _getListData()
  }, []);

  const Card = () => {
    return (
      <Fragment>
        {state.orderList.map((row, index) => {
          const orderBasket = row.basket;
          return (
            <div className='member-box' key={index}>
              <div className='member-id'>{row.userId}</div>
              <div className='member-name'>{row.userName}</div>
              <div className='member-student_id'>{row.userStudentId}</div>
              <div className='member-professor'>{row.professor}</div>
              <div className='member-subject'>{row.subjectName}</div>
              <div className='member-item-list'>
                {orderBasket.map((row2, index2) => {
                  return (
                    <div className='row-box' key={index2}>
                      <div>{row2.item}</div>
                      <div className='count-color'>{row2.count}EA</div>
                    </div>
                  )
                })}
              </div>
              <div className='member-date'>{row.applicationDate}</div>
              <div className='member-status-data'>
                <div className='btn-box'>
                  <button
                    className='status-btn'
                    onClick={() => _handleApprove(row.userId, row.applicationDate)}
                  >
                    승인
                  </button>
                </div>
                <div className='btn-box'>
                  <button
                    className='status-btn'
                  // onClick={() => _handleApprove(row.userId, row.applicationDate)}
                  >
                    취소
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </Fragment>
    )
  };

  const Card2 = () => {
    return (
      <Fragment>
        {state.approveList.map((row, index) => {
          const approveBasket = row.basket;
          return (
            <div className='member-box' key={index}>
              <div className='approve-name'>{row.userName}</div>
              <div className='approve-student_id'>{row.userStudentId}</div>
              <div className='approve-phone'>{row.phone}</div>
              <div className='approve-date'>{row.applicationDate}</div>
              <div className='approve-status'>{row.status}</div>
              <div className='approve-item-list'>
                {approveBasket.map((row3, index2) => {
                  return (
                    <div className='row-box' key={index2}>
                      <div>{row3.item}</div>
                      <div className='count-color'>{row3.count}EA</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </Fragment>
    )
  };

  return (
    <Container>
      {state.loading ? <Loading /> : null}
      <div className='content'>
        <div className='list-box'>
          <div className='tag-list'>
            <div className='member-id'>아이디</div>
            <div className='member-name'>이름</div>
            <div className='member-student_id'>학번</div>
            <div className='member-professor'>교수</div>
            <div className='member-subject'>과목</div>
            <div className='member-item-list2'>리스트</div>
            <div className='member-date'>날짜</div>
            <div className='member-status'>상태</div>
          </div>
          <div className='member-data'>
            <Card />
          </div>
        </div>
        <div className='list-blank' />
        <div className='list-box2'>
          <div className='tag-list'>
            <div className='approve-name'>이름</div>
            <div className='approve-student_id'>학번</div>
            <div className='approve-phone'>전화번호</div>
            <div className='approve-date'>날짜</div>
            <div className='approve-status'>상태</div>
            <div className='approve-item-list2'>리스트</div>
          </div>
          <div className='member-data'>
            <Card2 />
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;

  .content {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  .list-box {
    width: 100%;
    height: 44%;
    flex-direction: column;
    // margin-bottom: 10px;
  }

  .list-blank {
    width: 100%;
    height: 4%;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
  }

  .list-box2 {
    width: 100%;
    height: 44%;
    flex-direction: column;
    border-top: 1px solid #D8D8D8;
  }

  .tag-list {
    width: 100%;
    height: 15%;
    display: flex;
    background: #F2F2F2;
    border-bottom: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
  }

  .member-id {
    width: 22%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      display: none;
    }
  }

  .member-name {
    width: 7%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      width: 10%;
    }
  }
  
  .member-student_id {
    width: 11%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      width: 20%;
    }
  }

  .member-professor {
    width: 7%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      width: 10%;
    }
  }

  .member-subject {
    width: 18%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      display: none;
    }
  }

  .member-item-list {
    width: 19%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
    overflow-y: scroll;
    padding: 8px;
    // background: red;

    @media screen and (max-width: 430px) {
      width: 25%;
    }
  }

  .member-item-list2 {
    width: 19%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
    // background: red;

    @media screen and (max-width: 430px) {
      width: 25%;
    }
  }

  .member-item-list::-webkit-scrollbar{
    display:none;
  }

  .row-box {
    border-bottom: 1px solid black;
    padding: 8px;
  }

  .count-color {
    color: #0064ff;
  }

  .member-date {
    width: 9%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      width: 20%;
    }
  }

  .member-status {
    width: 7%;
    height: 100%;
    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      width: 15%;
    }
  }

  .member-status-data {
    width: 7%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-right: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      width: 15%;
    }
  }

  .btn-box {
    width: 80%;
    height: 30%;
    border-radius: 10px 10px 10px 10px;

    @media screen and (max-width: 430px) {
      width: 80%;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }

  .status-btn {
    width: 100%;
    height: 100%;
    color: #0064ff;
    border-radius: 10px 10px 10px 10px;

    @media screen and (max-width: 430px) {
      width: 100%;
      height: 30%;
    }
  }

  .status-box:hover {
    background: #0064ff;
    color: white;
  }

  .member-data {
    width: 100%;
    height: 85%;
    flex-direction: column;
    overflow-y: scroll;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
    // background: red;
  }

  .member-data::-webkit-scrollbar{
    display:none;
  }

  .member-box {
    width: 100%;
    height: 55%;
    display: flex;
    border-bottom: 1px solid #D8D8D8;
  }
  
  .approve-name {
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }

  .approve-student_id {
    width: 12%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      width: 20%;
    }
  }
  
  .approve-phone {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      width: 25%;
    }
  }

  .approve-date {
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      width: 18%;
    }
  }

  .approve-status {
    width: 7%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      width: 7%;
    }
  }

  .approve-item-list {
    width: 41%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
    overflow-y: scroll;
    padding: 8px;

    @media screen and (max-width: 430px) {
      width: 25%;
    }
  }

  .approve-item-list::-webkit-scrollbar{
    display:none;
  }

  .approve-item-list2 {
    width: 41%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
    
    @media screen and (max-width: 430px) {
      width: 25%;
    }
  }
`;

export default AdminOrderList;