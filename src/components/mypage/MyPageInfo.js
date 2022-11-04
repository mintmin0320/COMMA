import React, {  Fragment, useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
// 개발자
import Withdrawal from './Withdrawal';
import _axios from '../../utils/axios';
import titleTab from '../../utils/TitleTab';
import TopButton from '../TopButton';
import Approval from './Approval';
//css
import logo from '../../images/white_bg.svg';

const MypageInfo = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("마이페이지 - COMMA"), 100);
  const [imgBase64, setImgBase64] = useState(logo);
  const [imgFile, setImgFile] = useState(null);
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
    message: null,
    application: true,
    img: '',
  });
    
  // 회원정보 조회
  // useEffect(() => {
  //   const getData = async () => {
  //     const url = `http://210.121.173.182/user/${id}`;
  //     console.log(url);
  //     console.log(id);
  //     const response = await axios.get(url);
  //     console.log(response);
  //     setState({
  //       ...state,
  //       userId: response.data.user.user_id,
  //       nickname: response.data.user.user_nickname,
  //     })
  //   }
  //   getData()
  // },[]);

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

  const _handleWithdrawal = () => {
    setState({
      ...state,
      page: true,
    })
  };

  // useEffect(() => {
  //   const getOrderData = async () => {
  //     const url = `http://210.121.173.182/user/arduino/${id}`;
  //     const response = await axios.get(url);
  //     console.log(url);
  //     console.log(response);
  //     if(response.status === 200){
  //       setState({
  //         ...state,
  //         orderList: response.data.result.신청,
  //       })
  //       console.log('회원 주문목록 조회성공');
  //     } else {
  //       console.log('회원 주문목록 조회실패');
  //     }
  //   }
  //   getOrderData()
  // },[]);

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
            </div>
          )
        })}
      </OrederList>
    );
  };

  const _setImg = async (base64) => {
    const url = '/user/arduino';
    const params = {
      img: base64,
    };
    console.log(params);
    // setState({
    //   ...state,
    //   loading: true,
    // });
    const response = await _axios(url, params);
    console.log(response);
    // if(response.result === true){
    //   navigate('/mypage');
    //   setState({
    //     ...state,
    //     changePage: true,
    //     loading: false,
    //   })
    // }else{
    //   setState({
    //     ...state,
    //     loading: false,
    //   })
    //   toast.error('주문 실패!');
    // }
  };

  const _handleChangeFile = (event) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        console.log(base64);
        // _setImg(base64);
        setImgBase64(base64); // 파일 base64 상태 업데이트
      }
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setImgFile(event.target.files[0]); // 파일 상태 업데이트
    }
  }

    // 파일 삭제
    const _handledeleteFileImage = () => {
      URL.revokeObjectURL(imgBase64);
      setImgBase64(logo);
    };
  
  return(
    <Container>
      {!state.page && (
        <Content>
          <div className='title1'>내정보</div>
          <MyInfo>
            <div className='info'>
              <div className='info-text'>
                <div className='info-id'>아이디</div>
                <div className='info-nick'>닉네임</div>
              </div>
              <div className='info-data'>
                <div className='id'>{state.userId}</div>
                <div className='nick'>{state.nickname}</div>
              </div>
            </div>
            <div className='change-profile'>
              <div className='change-button-box'>
                <div className='img-box'>
                <img 
                  src={imgBase64}
                  className="img"
                />
                </div>
                <div className='btn-box'>
                  <div className='btn'>
                    <label htmlFor='profile'>
                      <div class="btn-upload">파일 업로드하기</div>
                    </label>
                    <input
                      type="file"
                      accept='image/*'
                      id='profile'
                      onChange={_handleChangeFile}
                    />
                  </div>
                  <div className='delete-box'>
                    <div class="btn-upload" 
                      onClick={_handledeleteFileImage}
                    >
                      기본이미지
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MyInfo>
          <div className='title2'>신청목록</div>
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
            <div className='order-text'>
              <div className='date'>신청날짜</div>
              <div className='list'>신청목록</div>
              <div className='approve'>상태</div>
            </div>
            {!state.application ? <Approval/> : <Card/>}
          </div>
          <WithdrawalButton>
            <button
              className='withdrawal-button'
              onClick={_handleWithdrawal}
            >
              <div className='login-text'>회원탈퇴</div>
            </button>
          </WithdrawalButton>
          <TopButton/>
        </Content>
      )}  
      {state.page && (
        <WithdrawalBox>
          <Withdrawal/>
        </WithdrawalBox>
      )}
    </Container>
  )
}

const Container = styled.div`
  width: 85%;
  height: 55vmax; 
  display: flex;
  justify-content: center;
  background: white;
  margin-top: 20px;

  @media screen and (max-width: 430px) {
    width: 100%;
    height: 100vh;
  }
`;

const Content = styled.div`
  width: 100%;
  // height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title1 {
    width: 96%;
    height: 5%;
    border-bottom: 2px solid black;
    display:flex;
    align-items: center;
    font-size: 25px;
    margin: 10px 0 0 0;
  }

  .title2 {
    width: 96%;
    height: 5%;
    border-bottom: 2px solid black;
    display:flex;
    align-items: center;
    font-size: 25px;
  }

  .change-status {
    width: 96%;
    height: 5%;
    display:flex;
    align-items: center;  
    font-size: 24px;
    // justify-content: center;
    // border: 1px solid #D8D8D8;
    // background: red;
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
    width: 70%;
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
    // border-top: 1px solid #D8D8D8;
    // border-right: 1px solid #D8D8D8;
  }

`;

const MyInfo = styled.div`
  width: 96%;
  height: 180px;
  margin: 20px 0 0 0;
  display: flex;
  justify-content: space-around;
  // flex-direction: column; 
  // align-items: center;

  .info {
    width: 48%;
    height: 100%;
    display: flex;
    // background: red;
    
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

  .info-phone {
    width: 100%;
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #D8D8D8;
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
    // border-right: 1px solid #D8D8D8;
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
    // border-radius: 50%;
    // border: 1px solid #D8D8D8;
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
    width: 70%;
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