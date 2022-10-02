import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
// 개발자
import titleTab from '../../utils/TitleTab';
//css
import styled from 'styled-components';
//icon

const AdminOrderList = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("관리자/주문목록 - COMMA"), 100);
  const [state, setState] = useState({
    userId: '',
    grade: '',
    major: '',
    academic: '',
    classroom: '',
    nickname:'',
    studentId: '',
    result: false,        // 서버와의 axios 요청 결과   
    message: null,
    orderList: [],
  });

  useEffect(() => {
    const _getListData = async () => {
      const url = "http://210.121.173.182/admin/arduino/users";
      const response = await axios.get(url);
      console.log(response.data.result.신청[0].basket);
      console.log(JSON.stringify(response.data.result.신청[0].basket));
      setState({
        ...state,
        orderList: response.data.result.신청,
      });
      console.log('주문목록 조회성공');
    }
    _getListData()
  },[]);

  const Card = () => {
    console.log(state.orderList);
    return(
      <Fragment>
        {state.orderList.map((user, index) => {
          return (
            <div className='member-box' key={index}>
              <div className='member-id'>{user.userId}</div>
              <div className='member-name'>{user.userName}</div>
              <div className='member-student_id'>{user.userStudentId}</div>
              <div className='member-professor'>{user.professor}</div>
              <div className='member-subject'>{user.subjectName}</div>
              {/* <div className='member-item-list'>{user.basket}</div> */}
              <div className='member-date'>{user.applicationDate}</div>
              <div className='member-status'></div>
            </div>
          )
        })}
      </Fragment>
    )
  };

  return(
    <Container>
      <div className='content'>
        <div className='list-box'>
          <div className='tag-list'>
            <div className='member-id'>아이디</div>
            <div className='member-name'>이름</div>
            <div className='member-student_id'>학번</div>
            <div className='member-professor'>교수</div>
            <div className='member-subject'>과목</div>
            <div className='member-item-list'>리스트</div>
            <div className='member-date'>날짜</div>
            <div className='member-status'>상태</div>
          </div>
          <div className='member-data'>
            <Card/>
          </div>
        </div>
        <div className='list-box'>
          <div className='tag-list'>
            <div className='member-id'>전화번호</div>
            <div className='member-name'>이름</div>
            <div className='member-student_id'>학번</div>
            {/* <div className='member-professor'>교수</div> */}
            {/* <div className='member-subject'>과목</div> */}
            <div className='member-item-list'>리스트</div>
            <div className='member-date'>날짜</div>
            <div className='member-status'>상태</div>
          </div>
          <div className='member-data'>
            {/* <Card/> */}
          </div>
        </div>
      </div>
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
    height: 50%;
    flex-direction: column;
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
  }

  .member-name {
    width: 7%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }
  
  .member-student_id {
    width: 13%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }

  .member-professor {
    width: 7%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }

  .member-subject {
    width: 17%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }

  .member-item-list {
    width: 16%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }

  .member-date {
    width: 11%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }

  .member-status {
    width: 7%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
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
    height: 20%;
    display: flex;
    border-bottom: 1px solid #D8D8D8;
  }
`;

export default AdminOrderList;