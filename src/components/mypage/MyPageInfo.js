import React, {  Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
// 개발자
import Withdrawal from './Withdrawal';
import _axios from '../../utils/axios';
import titleTab from '../../utils/TitleTab';
import Loading from '../Loading';
import MyPageImg from './MyPageImg';
import MyNickname from './MyNickname';
import MyOrderlist from './MyOrderlistPage';
import MyLog from './MyLog';
//css, icon
import logo from '../../images/white_bg.svg';
import 'react-toastify/dist/ReactToastify.css';

const MypageInfo = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("마이페이지 - COMMA"), 100);
  const [imgBase64, setImgBase64] = useState(logo);
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
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  });
    
  const _handleWithdrawal = () => {
    setState({
      ...state,
      page: true,
    })
  };

  const checkChange1 = () => {
    setState({
      ...state,
      check1: false,
      check2: false,
      check3: false,
      check4: false,
    })
  };

  const checkChange2 = () => {
    setState({
      ...state,
      check1: false,
      check2: true,
      check3: false,
      check4: false,
    })
  };

  const checkChange3 = () => {
    setState({
      ...state,
      check1: false,
      check2: false,
      check3: true,
      check4: false,
    })
  };

  const checkChange4 = () => {
    setState({
      ...state,
      check1: false,
      check2: false,
      check3: false,
      check4: true,
    })
  };

  //이미지 업로드
  const _handleChangeFile = async (event) => {
    const formData = new FormData();
    formData.append('profileImg', event.target.files[0]);
    formData.append('userId', id);
    // for (let key of formData.keys()) {
    //   console.log(key, ":", formData.get(key));
    // }
    const url = 'http://210.121.173.182/user/profileImg';
    const data = formData;
    const response = await axios.post(url, data);
    console.log(response);
    if(response.status === 200) {
      window.location.reload();
      console.log('이미지 업로드 성공!');
    } else {
      toast.error('이미지 업로드 실패!');
    }
  }

  // 파일 삭제
  const _handledeleteFileImage = () => {
    URL.revokeObjectURL(imgBase64);
    setImgBase64(logo);
  };
  
  return(
    <Container>
      { state.loading ? <Loading/> : null }
      {!state.page && (
        <Content>
          <div className='title1'>
            <div className='menu-box2' onClick={checkChange1}>
              내정보
            </div>
            <div className='menu-box' onClick={checkChange2}>
              신청목록
            </div>
            <div className='menu-box' onClick={checkChange3}>
              활동기록
            </div>
            <div className='menu-box' onClick={checkChange4}>
              회원탈퇴
            </div>
          </div>
          {!state.check1 && !state.check2 && !state.check3 && !state.check4 && (
          <MyInfo>
            <div className='info'>
              <div className='info-text'>
                <div className='info-id'>아이디</div>
                <div className='info-nick'>닉네임</div>
                <div className='info-bbs'>전화번호</div>
              </div>
              <MyNickname/>
            </div>
            <div className='change-profile'>
              <div className='change-button-box'>
              <div className='img-box'>
                  <MyPageImg/>
                </div>
                <div className='btn-box'>
                  <div className='btn'>
                    <label htmlFor='profile'>
                      <div className="btn-upload">파일 업로드하기</div>
                    </label>
                    <input
                      type="file"
                      accept='image/*'
                      id='profile'
                      onChange={_handleChangeFile}
                    />
                  </div>
                  <div className='delete-box'>
                    {/* <div className="btn-upload" 
                      onClick={_handledeleteFileImage}
                    >
                      기본이미지
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </MyInfo>
          )}
          
          {!state.check1 && state.check2 && !state.check3 && !state.check4 && (
            <React.Fragment>
            <div className='title2'>신청목록</div>
            <MyOrderlist/>
            </React.Fragment>
          )}
              {!state.check1 && !state.check2 && state.check3 && !state.check4 && (
                <MyLog/>
              )}
              {!state.check1 && !state.check2 && !state.check3 && state.check4 &&(
                <Withdrawal/>
              )}
          </Content>
        )
      }  
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
    </Container>
  )
}

const Container = styled.div`
  width: 85%;
  height: 55vmax; 
  display: flex;
  justify-content: center;
  
  margin-top: 20px;

  @media screen and (max-width: 430px) {
    width: 100%;
    height: 100vh;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;

  .title1 {
    width: 100%;
    height: 7%;
    /* border-bottom: 1px solid #D8D8D8; */
    display:flex;
    align-items: center;
    font-size: 20px;
    /* margin: 10px 0 0 0; */
    /* background: #0064ff; */
  }

  .menu-box {
    width : 15%;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #D8D8D8;
    border-top: 1px solid #D8D8D8;
    /* border-bottom: 1px solid #D8D8D8; */
    cursor: pointer;
    background: #0064ff;
    color: white;

    @media screen and (max-width: 430px) {
      width: 100%;
    }
  }

  .menu-box2 {
    width : 15%;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #D8D8D8;
    border-top: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
    cursor: pointer;
    background: #0064ff;
    color: white;

    @media screen and (max-width: 430px) {
      width: 100%;
    }
  }

  .menu-box:hover {
    color: #0064ff;
    background: white;
  }

  .menu-box2:hover {
    color: #0064ff;
    background: white;
  }

  .title2 {
    width: 96%;
    height: 5%;
    border-bottom: 2px solid black;
    display:flex;
    align-items: center;
    font-size: 25px;
    margin: 20px 0 0 0;
  }

  .change-status {
    width: 96%;
    height: 5%;
    display:flex;
    align-items: center;  
    font-size: 24px;
  }

  .change-text {
    display:flex;
    align-items: center;  
    font-size: 22px;
    cursor: pointer;
  }

  .change-text2 {
    display:flex;
    align-items: center;  
    font-size: 22px;
    cursor: pointer;
    color: #E6E6E6;
  }

  .order-box {
    width: 96%;
    height: 300px;
    display:flex;
    flex-direction: column;  
    align-items: center;  
    border: 1px solid #D8D8D8;
    // margin-top: 20px;
  }

  .order-text {
    width: 100%;
    height: 20%;
    display: flex;
    background: #F2F2F2;
    border-bottom: 1px solid #D8D8D8;
  }

  .date {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
    // border-left: 1px solid #D8D8D8;
    // border-top: 1px solid #D8D8D8;
  }

  .list {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
    // border-top: 1px solid #D8D8D8;
  }

  .approve {
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }

  .list2 {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;
  }

  .approve2 {
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .strikethrough {
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MyInfo = styled.div`
  width: 96%;
  height: 180px;
  margin: 20px 0 0 0;
  display: flex;
  justify-content: space-around;

  .info {
    width: 48%;
    height: 100%;
    display: flex;
    
    @media screen and (max-width: 430px) {
      width: 98%;
      font-size: 15px;
    }
  }

  .info-text {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;   
  }

  .info-id {
    width: 100%;
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #D8D8D8;
  }

  .info-nick {
    width: 100%;
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
  }

  .info-bbs {
    width: 100%;
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
  }

  .info-data {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column; 
  }

  .id {
    width: 100%;
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
  }

  .nick {
    width: 100%;
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
  }

  .phone {
    width: 100%;
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .info-correction {
    width: 48%;
    height: 100%;
    display: flex;
    flex-direction: column; 
    
    @media screen and (max-width: 430px) {
      display: none;
    }
  }

  .pwd {
    border: 1px solid #D8D8D8;
    height: 33%;
    display: flex;
    justify-content: space-around;
    align-items: center; 

    input {
      font-size: 16px;
      background: #f5f5f5;
      width: 50%;
      border-radius: 10px 10px 10px 10px;
    }
  }

  .change-pwd {
    border-right: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
    height: 33%;
    display: flex;
    justify-content: space-around;
    align-items: center; 

    input {
      font-size: 16px;
      background: #f5f5f5;
      width: 50%;
      border-radius: 10px 10px 10px 10px;
    }
  }

  .reset-button {
    width: 10%;
    height: 50%;
    background: #0064ff;
    border-radius: 10px 10px 10px 10px;
    // margin-left: 15px;
    color: white;
  }

  .change-profile {
    width: 48%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    // border: 1px solid #D8D8D8;
    border-left: 2px solid #D8D8D8;
    
    @media screen and (max-width: 430px) {
      display: none;
    }
  }

  #profile {
    display: none;
  }

  .img-box {
    // width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #D8D8D8;
  }

  .btn {
    width: 100%;
    height: 50%;
    display: flex; 
    justify-content: center;
    align-items: center;
  }

  .btn-box {
    width: 50%;
    height: 100%;
    flex-direction: column;   
    justify-content: center;
    align-items: center;
  }

  .delete-box {
    width: 100%;
    height: 50%;
    display: flex; 
    justify-content: center;
    align-items: center;
  }

  .delete-btn {
    width: 150px;
    height: 30px;
  }

  .img {
    overflow: hidden;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  .change-button-box {
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn-upload {
    width: 150px;
    height: 30px;
    background: #fff;
    border: 1px solid rgb(77,77,77);
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const WithdrawalBox = styled.div`
  width: 100%;
  height: 280px;
`;

const WithdrawalButton = styled.div`
  width: 96%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0 0;

  @media screen and (max-width: 430px) {
    display: none;
  }

  .withdrawal-button {
    width: 20%;
    height: 50px;
    background: #0064ff;
    border-radius: 10px 10px 10px 10px;
  }

  .login-text {
    font-size: 18px;
    color: white;
  }
`;

export default MypageInfo;
