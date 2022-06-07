import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// 개발자
import { init, logoutRequest } from '../../redux/actions/auth';
import _axios from '../../utils/axios';
import axios from 'axios';
// import Alert from '../../components/common/modal/Alert';
//css
import styled from 'styled-components';
//input & button
import Button from '../common/Button';
import Input from '../common/CommonInput';
//icon

const AdminInfo = () => {
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
    data: [],
  });
    
  // // 회원목록
  //   useEffect(() => {
  //     const getMemberData = async () => {
  //       const url = "http://210.121.173.182/admin/members";
  //       const response = await axios.get(url);
  //       console.log(response.data);
  //       console.log(state.data);
  //       if(response.status === 200){
  //         setState({
  //           ...state,
  //           userId: response.data.userId,
  //           major: response.data.major,
  //           grade: response.data.grade,
  //           academic: response.data.academic,
  //           classroom: response.data.classroom,
  //           nickname: response.data.nickname,
  //           studentId: response.data.studentId,
  //         })
  //         console.log('회원 조회성공');
  //       } else {
  //         console.log('회원 조회실패');
  //       }
  //     }
  //     getMemberData()
  //   },[]);
    
  //   // 신청자 목록
  //   useEffect(() => {
  //     const getItemData = async () => {
  //       const url = "http://210.121.173.182/arduino/applicants";
  //       const response = await axios.get(url);
  //       console.log(response.data);
  //       console.log(state.data);
  //       if(response.status === 200){
  //         setState({
  //           ...state,
  //           userId: response.data.userId,
  //           major: response.data.major,
  //           grade: response.data.grade,
  //           academic: response.data.academic,
  //           classroom: response.data.classroom,
  //           studentId: response.data.studentId,
  //           component: response.data.component,
  //         })
  //         console.log('신청자 목록 조회 성공');
  //       } else {
  //         console.log('신청자 목록 조회 실패');
  //       } 
  //     }
  //     getItemData()
  //   },[]);

    // 승인 요청
    const _handleRequest = (e) => {
      e.preventDefault();
      _Request();
    };
  
    const _Request = async () => {
      const url = 'http://210.121.173.182/admin/arduino/approve';
      const params = {
        userId: state.userId,
      };
      console.log(params);
      const response = await _axios(url, params);
      console.log(response);
      console.log(response.data);
      if(response.result){
        console.log('승인 요청 성공');
        alert('승인 완료!');
      }else{    
        console.log('승인 요청 실패');
        alert('승인 실패!');
      }
    }

  // const Card = () => {
  //   return (
  //     <div>
  //       {basketStatus.map((data, i) => {
  //         return (   
  //           <CardBox key={i}>
  //             <div className='items'>
  //               <div className='items-title'>{data.itemTitle}</div>
  //                 <Button
  //                   kind="wideBtn_01"
  //                   width="5%!important"
  //                   onClickHandler= {() => _handleBasketRemove(data.itemId)} 
  //                 >
  //                   제거
  //                 </Button>
  //               </div>
  //           </CardBox>    
  //             )
  //         })}
  //     </div>
  //   );
  // };

    return(
      <Container>
        <Content>
          <div className='member-list'>
            <div className='member-tag'>
              <div className='member-tag-name'>아이디</div>
              <div className='member-tag-grade'>학번</div>
              <div className='member-tag-name'>학과</div>
              <div className='member-tag-grade'>학년</div>
              <div className='member-tag-grade'>반</div>
              <div className='member-tag-grade'>닉네임</div>
              <div className='member-tag-grade'>학적</div>
            </div>  
          </div>
          <div className='item-list'>
            <div className='member-tag'>
              <div className='member-tag-name'>아이디</div>
              <div className='member-tag-grade'>학번</div>
              <div className='member-tag-name'>학과</div>
              <div className='member-tag-grade'>학년</div>
              <div className='member-tag-grade'>반</div>
              <div className='member-tag-grade'>학적</div>
              <div className='member-tag-grade'>승인</div>
            </div>

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
    width: 95%;
    height: 600px;
    border: 1px solid #D8D8D8;
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
      display: flex;
      overflow: auto
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
      width: 20%;
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
`;

export default AdminInfo;