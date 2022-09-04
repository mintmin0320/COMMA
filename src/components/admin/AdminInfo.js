import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
// 개발자
import titleTab from '../../utils/TitleTab';
//css
import styled from 'styled-components';
//icon

const AdminInfo = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("관리자 - COMMA"), 100);
  const [state, setState] = useState({
    userId: '',
    grade: '',
    major: '',
    academic: '',
    classroom: '',
    nickname:'',
    studentId: '',
    memberList: [],
  });

  useEffect(() => {
    const getMemberData = async () => {
      const url = "http://210.121.173.182/admin/users";
      const response = await axios.get(url);
      console.log(response);
        setState({
          ...state,
          memberList: response.data,
        })
        console.log('회원 조회성공');
    }
    getMemberData()
  },[]);

  const Card = () => {
    return(
      <Fragment>
        {state.memberList.map((user, index) => {
          console.log(state.memberList)
          return (
            <div className='member-data' key={index}>
              <div className='member-tag-id'>{user.id}</div>
              <div className='member-tag-name'>{user.name}</div>
              <div className='member-tag-nickname'>{user.nickname}</div>
              <div className='member-tag-phone'>{user.phone}</div>
              <div className='member-tag-student_id'>{user.studentId}</div>
              <div className='member-tag-major'>{user.major}</div>
              <div className='member-tag-grade'>{user.grade}</div>
              <div className='member-tag-class'>{user.classroom}</div>
              <div className='member-tag-academic'>{user.academic}</div>
              <div className='member-tag-delete'>X</div>
            </div>
          )
        })}
      </Fragment>
    )
  };

  return(
    <Container>
      <Content>
        <div className='member-tag'>
          <div className='member-tag-id'>아이디</div>
          <div className='member-tag-name'>이름</div>
          <div className='member-tag-nickname'>닉네임</div>
          <div className='member-tag-phone'>전화번호</div>
          <div className='member-tag-student_id'>학번</div>
          <div className='member-tag-major'>학과</div>
          <div className='member-tag-grade'>학년</div>
          <div className='member-tag-class'>반</div>
          <div className='member-tag-academic'>학적</div>
          <div className='member-tag-delete'>추방</div>
        </div>
        <div className='member-list'>
          <div className='member-tag-data'>
            <Card></Card>    
          </div>          
        </div>          
      </Content>
    </Container>
  )
}

const Container = styled.div`
  width: 98%;
  height: 650px;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: column;
  align-items: center;

  .member-list {
    width: 100%;
    height: 100%;
    border: 1px solid #D8D8D8;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    
    ::-webkit-scrollbar {
      display: none;
      }
  }

  .member-tag {
    width: 100%;
    height: 7%;
    border-top: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
    display: flex;
    justify-content: center;
    margin: 20px 0 0 0;
  }

  .member-tag-data {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .member-data {
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #D8D8D8;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .member-tag-id {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }

  .member-tag-name {
    width: 8%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }

  .member-tag-nickname {
    width:  15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }

  .member-tag-phone {
    width: 14%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }

  .member-tag-student_id {
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
    
  }

  .member-tag-major {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }

  .member-tag-grade {
    width: 5%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }

  .member-tag-class {
    width: 5%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }

  .member-tag-academic {
    width: 5%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }

  .member-tag-delete {
    width: 5%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Members = styled.div`
  width: 100%;
  height: 45px;
  // display: flex;
  // justify-content: center;
`;

export default AdminInfo;