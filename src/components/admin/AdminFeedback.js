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

const AdminFeedback = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("관리자/피드백 - COMMA"), 100);
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

  //   const Card = () => {
  //     return (
  //       <Members>
  //         {state.member.map((user, i) => {
  //           return (
  //             <div className='member-tag' key={i}>  
  //               <div className='member-tag-id'>{user.id}</div>
  //               <div className='member-tag-grade'>{user.nickname}</div>
  //               <div className='member-tag-grade'>{user.studentId}</div>
  //               <div className='member-tag-name'>{user.major}</div>
  //               <div className='member-tag-class'>{user.grade}</div>
  //               <div className='member-tag-class'>{user.classroom}</div>
  //               <div className='member-tag-class'>{user.academic}</div>
  //             </div>
  //             )
  //         })}
  //       </Members>
  //     );
  // };

  return(
    <Container>
      <Content>
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
          {/* <AdminItem/> */}
        </div>
        dsd
      </Content>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 650px;
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
    width: 100%;
    height: 240px;
    border: 1px solid #D8D8D8;
    margin: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }

  .item-list {
    width: 100%;
    height: 300px;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
    // display: flex;
  }

  .member-tag {
    width: 100%;
    height: 15%;
    border-bottom: 1px solid #D8D8D8;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .member-tag-data {
    width: 100%;
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }

  .member-data {
    width: 100%;
    height: 85px;
    border-bottom: 1px solid #D8D8D8;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .member-tag-id {
    width: 22%;
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

  .member-tag-phone {
    width: 14%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }

  .member-tag-student_id {
    width: 12%;
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
    width: 7%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }

  .member-tag-class {
    width: 7%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }

  .member-tag-academic {
    width: 7%;
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

export default AdminFeedback;