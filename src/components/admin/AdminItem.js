import React, { useEffect, useState } from 'react';
// 개발자
import _axios from '../../utils/axios';
import axios from 'axios';
// import Alert from '../../components/common/modal/Alert';
//css
import styled from 'styled-components';
//input & button
import Button from '../common/Button';
//icon

const AdminItem = () => {
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
    component: {},
    keys1: [],
    keys2: [],
    keys3: [],
    keys4: [],
    values: [],
  });

     // 신청자 목록
    useEffect(() => {
      const getItemData = async () => {
        const url = "http://210.121.173.182/admin/arduino/applicants";
        const response = await axios.get(url);
        console.log(response.data.result);
        if(response.status === 200){
          setState({
            ...state,
            keys1: Object.keys(response.data.result[0].component)[0],
            keys2: Object.keys(response.data.result[0].component)[1],
            keys3: Object.keys(response.data.result[0].component)[2],
            keys4: Object.keys(response.data.result[0].component)[3],
            values: Object.values(response.data.result[0].component)[0],
            itemList: response.data.result,
            userId: response.data.result[0].userId,
          })
          console.log('신청자 목록 조회 성공');
          
        } else {
          console.log('신청자 목록 조회 실패');
        } 
      }
      
      getItemData()
    },[]);
    console.log(state.userId);
    
    const ItemList = () => {
      return (
        <Members>
          {state.itemList.map((item, i) => {
            return (
              <div className='member-tag' key={i}>  
                <div className='member-tag-id'><div>{state.keys4} : {state.values}개,</div>
                <div>{state.keys3} : {state.values}개,</div>
                <div>{state.keys2} : {state.values}개,</div>
                <div>{state.keys1} : {state.values}개</div></div>
                <div className='member-tag-grade'>{item.studentId}</div>
                <div className='member-tag-name'>{item.major}</div>
                <div className='member-tag-class'>{item.grade}</div>
                <div className='member-tag-class'>{item.classroom}</div>
                <div className='member-tag-class'>{item.academic}</div>
                <Button 
                  width="14.7%"
                  height='100%'                  
                  className='item-button'
                  onClickHandler={_handleRequest}
                  >
                    승인
                </Button>
              </div>
              )
          })}
        </Members>
      );
  };

    // 승인 요청
    const _handleRequest = (e) => {
      e.preventDefault();
      _Request();
    };
  
    const _Request = async () => {
      const url = '/admin/arduino/approve';
      const params = {
        id: state.userId,
      };
      const response = await _axios(url, params);
      console.log(response);
      if(response.result){
        console.log('승인 요청 성공');
        alert('승인 완료!');
        setState({
          ...state,
          itemList: [],
        })
      }else{    
        console.log('승인 요청 실패');
        alert('승인 실패!');
      }
    }

    return(
      <Container>
        <ItemList/>
      </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
`;

const Members = styled.div`
    width: 100%;
    height: 45px;
    // display: flex;
    // justify-content: center;

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

export default AdminItem;