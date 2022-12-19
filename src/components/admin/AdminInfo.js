import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// 개발자
import titleTab from '../../utils/TitleTab';
import Loading from '../Loading';

const AdminInfo = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("관리자/회원명단 - COMMA"), 100);
  const [state, setState] = useState({
    userId: '',
    grade: '',
    major: '',
    academic: '',
    classroom: '',
    nickname: '',
    studentId: '',
    delete: false,
    memberList: [],
    loading: false,
  });

  useEffect(() => {
    const _getMemberData = async () => {
      const url = `${process.env.REACT_APP_SERVER_DOMAIN}/admin/users`;
      setState({
        ...state,
        loading: true,
      })
      const response = await axios.get(url);
      console.log(response);
      if (response.status === 200) {
        setState({
          ...state,
          memberList: response.data,
          loading: false,
        })
        console.log('회원목록 조회성공');
      } else {
        setState({
          ...state,
          loading: false,
        })
        console.log('회원목록 조회실패');
      }
    }
    _getMemberData()
  }, []);

  const _memberDelete = (id) => {
    _dlelteMember(id);
  }

  const _dlelteMember = async (id) => {
    console.log(id);
    const url = `${process.env.REACT_APP_SERVER_DOMAIN}/admin/user`;
    const response = await axios.delete(url, {
      data: {
        id: id,
      }
    });
    console.log(response);
    if (response.status === 200) {
      window.location.reload();
      console.log('추방 성공');
    } else {
      console.log('추방 실패');
    }
  }

  const Card = () => {
    return (
      <Fragment>
        {state.memberList.map((user, index) => {
          return (
            <div className='member-box' key={index}>
              <div className='member-id'>{user.id}</div>
              <div className='member-name'>{user.name}</div>
              <div className='member-nickname'>{user.nickname}</div>
              <div className='member-phone'>{user.phone}</div>
              <div className='member-student_id'>{user.studentId}</div>
              <div className='member-major'>{user.major}</div>
              <div className='member-grade'>{user.grade}</div>
              <div className='member-class'>{user.classroom}</div>
              <div className='member-academic'>{user.academic}</div>
              <button
                className='member-delete'
                onClick={() => _memberDelete(user.id)}
              >
                X
              </button>
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
        <div className='tag-list'>
          <div className='member-id'>아이디</div>
          <div className='member-name'>이름</div>
          <div className='member-nickname'>닉네임</div>
          <div className='member-phone'>전화번호</div>
          <div className='member-student_id'>학번</div>
          <div className='member-major'>학과</div>
          <div className='member-grade'>학년</div>
          <div className='member-class'>반</div>
          <div className='member-academic'>학적</div>
          <div className='member-delete'>추방</div>
        </div>
        <div className='member-data'>
          <Card />
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;

  .content {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  .tag-list {
    width: 100%;
    height: 10%;
    display: flex;
    background: #F2F2F2;
    border-bottom: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
  }

  .member-id {
    width: 24%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      width: 40%;
    }
  }

  .member-name {
    width: 8%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      width: 11%;
    }
  }

  .member-nickname {
    width: 13%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      width: 20%;
    }
  }

  .member-phone {
    width: 12%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      /* width: 14%; */
      display: none;
    }
  }

  .member-student_id {
    width: 8%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      /* width: 11%; */
      display: none;
    }
  }

  .member-major {
    width: 16%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      width: 24%;
    }
  }

  .member-grade {
    width: 5%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      display: none;
    }
  }

  .member-class {
    width: 5%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
    
    @media screen and (max-width: 430px) {
      display: none;
    }
  }

  .member-academic {
    width: 5%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      border-right: 0px solid #D8D8D8;
    }
  }

  .member-delete {
    width: 4%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:transparent;

    @media screen and (max-width: 430px) {
      display: none;
    }
  }

  .member-data {
    width: 100%;
    height: 90%;
    flex-direction: column;
    overflow-y: scroll;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
  }

  .member-data::-webkit-scrollbar{
    display:none;
  }

  .member-box {
    width: 100%;
    height: 20%;
    display: flex;
    border-bottom: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      height: 13%;
    }
  }
`;

export default AdminInfo;