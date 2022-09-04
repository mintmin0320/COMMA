import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import _axios from '../../utils/axios';
// 개발자
import titleTab from '../../utils/TitleTab';

//css
import styled from 'styled-components';

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX  } from '@fortawesome/free-solid-svg-icons';
import TopButton from '../TopButton';
import BasketCheck from './BasketCheck';
import Modal from '../Modal';

//icon

const BasketPage = () => {
  const userId = useSelector((store) => store.auth.authStatus.userId);
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("신청서 - COMMA"), 100);

  const [state, setState] = useState({
    name: '',
    major: '',
    professor: '',
    check: false,
    checkbox: false,
    changePage: false,
    itemList: [],
  });

  const _handleInputChange = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value 
    });
  }

  const _handleInputCheckbox = () => {
    setState({
      ...state,
      checkbox: !state.checkbox,
    });
  }

  const _itemDelete = (id) => {
    _dlelteItem(id); 
  }

  const _dlelteItem = async (id) => {
    const url = `http://210.121.173.182/cart/arduino`;
    const params = {
      userId,
      basket: [{
        arduinoId : id,
      }]}
    console.log(params);
    const response = await axios.delete(url,  {data: {params}});
    console.log(response);
    // if(response.status === 200){
    //   alert('상품 삭제');
    // } else {
    //   alert('삭제 실패');
    // }
  }

  const _allItemDelete = () => {
    _dlelteAllItem(); 
  }

  const _dlelteAllItem = async () => {
    const url = `http://210.121.173.182/cart`;
    const params = {
        id : userId,
    }
    console.log(params);
    const response = await axios.delete(url, params);
    console.log(response);
    if(response.status === 200){
      alert('상품 전체 삭제');
    } else {
      alert('전체 삭제 실패');
    }
  }

  useEffect(() => {
    const getMemberData = async () => {
      const url = `http://210.121.173.182/cart/${userId}`;
      const response = await axios.get(url);
      console.log(response);
      if(response.data.message === '장바구니 전송 완료'){
        setState({
          ...state,
          itemList: response.data.result,
        });
        console.log('회원 조회성공');
      } else {
        setState({
          ...state,
          check: true,
        });
        console.log('회원 조회실패');
      }
    }
    getMemberData();
  },[]);

  const Card = () => {
    console.log(state.itemList);
    return (
      <OrderBox>
        {state.itemList.map((item, index) => {
          return (
            <div className='item-box' key={index}>
              <div className='item-name-box'>{item.arduinoName}</div>
              <div className='count-item'>
                <div className='blank-box'/>
                <div className='count-box'>
                  <button 
                    className='plus-box' 
                    type='button'
                    onClick={() => {
                      if(item.count < 10){
                        state.itemList[index].count = Number(item.count) + 1;
                        setState({
                          ...state,
                          itemList: state.itemList,
                        });
                      }
                    }}
                  >
                    +
                  </button>
                  <div className='count'>{item.count}EA</div>
                  <button className='minus-box'
                    type='button'
                    onClick={() => {
                      if(item.count > 1){
                        state.itemList[index].count = Number(item.count) + -1;
                        setState({
                          ...state,
                          itemList: state.itemList,
                        });
                      }
                    }}
                  >
                    -
                  </button>
                </div>
                <div className='delete-box'>
                  <button
                    className='item-delete'
                    type='button'
                    onClick={() => _itemDelete(item.arduinoId)}
                  >
                    <FontAwesomeIcon icon={ faX } size="1x"/>
                  </button> 
                </div>
              </div>
            </div>
          )
        })}
      </OrderBox>
    );
  };

   // 주문 버튼 클릭
  const _handleSubmit = (e) => {
    e.preventDefault();
    _setData();
  }

  // 저장
  const _setData = async () => {
    console.log(state);
    const url = '/user/arduino';
    const params = {
      userId,
      professor: state.professor,
      subjectName: state.subject,
      basket: state.itemList,
    };
    console.log(params);
    const response = await _axios(url, params);
    console.log(response);
    if(response.result === true){
      setState({
        ...state,
        changePage: true,
      })
      alert('주문 성공!');
    }else{
      alert('주문 실패!');
    }
  };

  return(
    <Container>
      {!state.changePage && (
      <form onSubmit={_handleSubmit} className="main-content">
        <div className='header'>실험실습재료 신청</div>
          <div className='content'>
            <div className='input-form'>
              <div className='top-info'>
                <div className='name-box'>
                  <div className='name'>이름</div>
                  <input
                    className='name-input'
                    value={state.name}
                    type='text'
                    name='name'
                    onChange={_handleInputChange}
                    required={true}            
                    maxLength={10}
                  />
                </div>
                <div className='name-box'>
                  <div className='name'>활용교과목</div>
                  <input
                    className='second-box'
                    value={state.subject}
                    type='text'
                    name='subject'
                    onChange={_handleInputChange}
                    required={true}            
                    maxLength={10}
                  />
                </div>
              </div>
              <div className='top-info'>
                <div className='name-box'>
                  <div className='info'>소속</div>
                  <input
                    className='third-box'
                    value={state.major}
                    type='text'
                    name='major'
                    onChange={_handleInputChange}
                    required={true}            
                    maxLength={10}
                  />  
                </div>
                <div className='name-box'>
                  <div className='info'>담당교수</div>
                  <input
                    className='info-input'
                    value={state.professor}
                    type='text'
                    name='professor'
                    onChange={_handleInputChange}
                    required={true}            
                    maxLength={3}
                  />
                  </div>
                </div>
              </div>
            </div>
          <div className='top-box'>
            <div className='item-name'>품&nbsp;&nbsp;명</div>
            <div className='item-count'>수&nbsp;&nbsp;량</div>
          </div>
          { state.check === false && (
            <Card/>
          )}
          <div className='text-box'>
            <div className='text-box-left'>
              <div className='text'><div className='text-font'>· 상품을 찾을 시 학생증이 필요합니다.</div></div>
              <div className='text'><div className='text-font'>· 상품은 다음날 찾으러 오셔야 합니다.</div></div>
            </div>
            <div className='text-box-right'>
              <button
                className=''
                type='button'
                onClick={_allItemDelete}
              >
                전체삭제
              </button>  
            </div>
          </div>
          <OrderButton>
            <div className='check-box'>
              상기 내용을 모두 확인했습니다.&nbsp;
              <input type='checkbox' className='checkbox-button' onChange={_handleInputCheckbox} checked={state.checkbox}/>
            </div>
            {!state.checkbox ?
              <LoginButton style={{ background: "gray" }} disabled={!state.checkbox}><div className='login-text'>신청</div></LoginButton>
              : <LoginButton disabled={!state.checkbox}><div className='login-text'>신청</div></LoginButton>
            }     
          </OrderButton>
        </form>
      )}
      {state.changePage && (
        <BasketCheck/>
      )}
      <TopButton/>
      <Modal/>
    </Container> 
  )       
}

const Container = styled.div`
  width: 85%;
  // height: 750px;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  .main-content {
    width: 94%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;  
    border: 1px solid #D8D8D8;
  }

  .top-box {
    width: 92%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
  }

  .text-box {
    width: 92%;
    display: flex;
  }

  .text-box-left {
    width: 60%;
  }

  .text-font {
    color: gray;
    font-size: 14px;
  }

  .text {
    width: 60%;
    height: 15px;
    margin-bottom: 10px;
  }

  .text-box-right {
    width: 40%;
    display: flex;
    justify-content: flex-end;
  }

  .header {
    width: 100%;
    height: 10%;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
  }

  .content {
    width: 92%;  
  }

  .top-info {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    // border: 1px solid #D8D8D8;  
    
  }

  .name-box {
    width: 50%;
    height: 100%;
    display: flex;
  }

  .name {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.5px solid black; 
    background: #CEE3F6;
  }

  .name-input {
    width: 50%;
    height: 100%;
    border-top: 0.5px solid black; 
    border-bottom: 0.5px solid black; 
  }

  .info {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 0.5px solid black;
    border-bottom: 0.5px solid black;  
    border-left: 0.5px solid black;
    background: #CEE3F6;  
  }

  .info-input {
    width: 50%;
    height: 100%;
    border-bottom: 0.5px solid black;
    border-right: 0.5px solid black; 
  }

  .second-box {
    width: 50%;
    height: 100%;
    border-bottom: 0.5px solid black; 
    border-right: 0.5px solid black; 
    border-top: 0.5px solid black; 
  }

  .third-box {
    width: 50%;
    height: 100%;
    border-bottom: 0.5px solid black; 
  }

  .input-form {
    display: flex;
    flex-direction: column;
    height: 100px;
  }

  .item-blank {
    width: 10%;
    background: black;
  }

  .item-name {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #D8D8D8; 
  }

  .item-count {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item-count-box {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .count-box {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    // background: green;
  }

  .blank {
    width: 10%;
  }

  .delete-box {
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item-delete {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    // background: red;
  }

  .plus-box {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px 10px 10px 10px;
  }

  .count {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .minus-box {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px 10px 10px 10px;
  }

  .bottom-box {
    width: 92%;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
    margin: 0 0 7px 0;
  }
`;

const OrderBox = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  border-bottom: 1px solid #D8D8D8;
  border-right: 1px solid #D8D8D8;
  border-left: 1px solid #D8D8D8;
  overflow: auto;

  .item-box {
    width: 100%;
    height: 60px;
    display: flex;
  }
  
  .item-name-box {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
  }

  .blank-box {
    width: 10%;
  }

  .count-item {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #D8D8D8;
  }
`;

const CardBox = styled.div`
  width: 950px;
  height: 180px;
  margin: 0 0 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #D8D8D8;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`;

const OrderButton = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login-button {
    width: 10%;
    height: 50px;
    background: #0064ff;
    border-radius: 10px 10px 10px 10px;
    margin-bottom: 10px;
  }

  .check-box {
    width: 30%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .checkbox-button {
    width: 10%;
    height: 35%;
  }
  
  .login-text {
    font-size: 18px;
    color: white;
  }
`;

const LoginButton = styled.button`
  width: 10%;
  height: 50px;
  background: #0064ff;
  border-radius: 10px 10px 10px 10px;
  margin-bottom: 10px;
`

export default BasketPage;