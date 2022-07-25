import React, { useEffect, useState } from 'react';
// 개발자
import axios from 'axios';
import titleTab from '../../utils/TitleTab';
// import Alert from '../../components/common/modal/Alert';
//css
import styled from 'styled-components';
//input & button
import AdminItem from './AdminItem';
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
    result: false,        // 서버와의 axios 요청 결과   
    message: null,
    member: [],
    itemList: [],
  });

  // 회원목록
    // useEffect(() => {
    //   const getMemberData = async () => {
    //     const url = "http://210.121.173.182/admin/members";
    //     const response = await axios.get(url);
    //     const data = response.data;
    //     console.log(data);
    //     if(response.status === 200){
    //       setState({
    //         ...state,
    //         member: data,
    //       })
    //       console.log('회원 조회성공');
    //     } else {
    //       console.log('회원 조회실패');
    //     }
    //   }
    //   getMemberData()
    // },[]);

    const Card = () => {
      return (
        <Members>
          {state.member.map((user, i) => {
            return (
              <div className='member-tag' key={i}>  
                <div className='member-tag-id'>{user.id}</div>
                <div className='member-tag-grade'>{user.nickname}</div>
                <div className='member-tag-grade'>{user.studentId}</div>
                <div className='member-tag-name'>{user.major}</div>
                <div className='member-tag-class'>{user.grade}</div>
                <div className='member-tag-class'>{user.classroom}</div>
                <div className='member-tag-class'>{user.academic}</div>
              </div>
              )
          })}
        </Members>
      );
  };

  return(
    <Container>
      <Content>
        <div className='member-list'>
          <div className='member-tag'>
            <div className='member-tag-id'>아이디</div>
            <div className='member-tag-grade'>닉네임</div>
            <div className='member-tag-grade'>학번</div>
            <div className='member-tag-name'>학과</div>
            <div className='member-tag-class'>학년</div>
            <div className='member-tag-class'>반</div>
            <div className='member-tag-class'>학적</div>
          </div>  
          <Card/>
        </div>
        <div className='item-list'>
          <div className='member-tag'>
            <div className='member-tag-id'>신청목록</div>
            <div className='member-tag-grade'>학번</div>
            <div className='member-tag-name'>학과</div>
            <div className='member-tag-class'>학년</div>
            <div className='member-tag-class'>반</div>
            <div className='member-tag-class'>학적</div>
            <div className='member-tag-grade'></div>
          </div>
          <AdminItem/>
        </div>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  height: 600px;
  // border: 1px solid #D8D8D8;
  display: flex;
  flex-direction: column;
  align-items: center;

  .member-list {
    width: 96%;
    height: 240px;
    border: 1px solid #D8D8D8;
    margin: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto
  }

  .item-list {
    width: 96%;
    height: 300px;
    border: 1px solid #D8D8D8;
    margin: 20px 0 0 0;
    // display: flex;
    overflow: auto;
  }

  .member-tag {
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #D8D8D8;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .member-tag-name {
    width: 21%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
  }

  .member-tag-grade {
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
  }

  .member-tag-class {
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
  }

  .member-tag-id {
    width: 27%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
  }
`;

const Members = styled.div`
  width: 100%;
  height: 45px;
  // display: flex;
  // justify-content: center;
`;

export default AdminInfo;