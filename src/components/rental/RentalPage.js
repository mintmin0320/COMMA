import React, { Fragment, useState } from 'react';
// import { useNavigate } from 'react-router';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// 개발자
import titleTab from '../../utils/TitleTab';
import TopButton from '../TopButton';
import Modal from '../Modal';
import _axios from '../../utils/axios';
import data from './data';
//css
import styled from 'styled-components';
//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartArrowDown, faMedal } from "@fortawesome/free-solid-svg-icons";

const RentalPage = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("대여 - COMMA"), 300);
  const userId = useSelector((store) => store.auth.authStatus.userId);
  const [arduino] = useState(data);

  const [state, setState] = useState({
    search: '',
    basket_id: '',
    modal: false,
  });

   // 입력값이 변할 때
  const _handleInputChange = (e) => {
    setState({ 
      ...state, 
      [e.target.name]: e.target.value 
    });
  }

  const _handleBasketAdd = (id) => {
    console.log(id);
    _getData(id);
  };
  

  const _getData = async (id) => {
    const url = '/cart'
    const params = {
      userId: userId,
      basket: [{
        arduinoId : id,
      }]
    };
    const response = await _axios(url, params);
    console.log(response);
    if(response.result === 'true'){
      // alert('성공');
      <Modal/>
    } else if(response.message === '이미 장바구니에 추가된 부품입니다.') {
      alert(response.message);
    } else if(response.message === '신청하신 아두이노 부품이 부족합니다.') {
      alert(response.message);
    } else {
      alert('실패');
    }
  }

  const Card = () => {
    return (
      <Fragment>
        {arduino.map((data, index) => {
          return (
            <div className='data-box' key={index}>  
              <div className='img-box'>
                사진
              </div>
              <div className='title-box'>
                {data.arduino_name}
              </div>
              <div className='category-box'>
                {data.arduino_name}
              </div>
              <div className='count-box'>
                {data.count}
              </div>
              <div className='icon-box'>
                <FontAwesomeIcon icon={ faCartArrowDown } size="2x" onClick={() => _handleBasketAdd(data.arduinoId)}/>
              </div>
            </div>
          )})
        }
      </Fragment>
    );
  };

  return(
    <Container>
      <div className='box'>
        <div className='top-menu'>
          <div className='header-bar'>
            <div className='search-box'>
              <div className='left-box'>검색</div>
                <div className='right-box'>
                  <input
                    value={state.search}
                    onChange={_handleInputChange}                
                    type='text'
                    name='search'
                    // onKeyPress={() => _handleEnterPress}
                  />
                  <button
                    className='login-button'
                    type='submit'
                  >
                    <FontAwesomeIcon icon={ faMagnifyingGlass } size="1x"/>
                  </button>
                </div>
            </div>
            <div className='classification'>
              <div className='left-box'>
                분류
              </div>
              <div className='right-box'>
                  <input
                    value={state.search}
                    onChange={_handleInputChange}                
                    type='text'
                    name='search'
                    // onKeyPress={() => _handleEnterPress}
                  />
              </div>
            </div>
          </div>
          <div className='ranking'>
            <div className='ranking-title'><FontAwesomeIcon icon={faMedal}/>&nbsp;Best</div>
            <div className='ranking-item-box'>
              <div className='ranking-box'>1</div>
              <div className='ranking-box'>2</div>
              <div className='ranking-box'>3</div>
            </div>
            <div className='ranking-box2'></div>
          </div>
        </div>
      </div>
      <Content>
        <div className='data'>
          <Card/>
        </div>
      </Content>
      <TopButton/>
    </Container> 
  )       
}

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-itmes: center;
  margin-top: 20px;

  .box {
    height: 200px;
    border: 1px solid #D8D8D8;
  }

  .top-menu {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .header-bar {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;

  }

  .search-box {
    width: 100%;
    height: 25%;
    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #D8D8D8;
  }

  .left-box {
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right-box {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    
    input {
      font-size: 16px;
      background: #f5f5f5;
      width: 60%;
      height: 60%;
      // border-radius: 10px 10px 10px 10px;
      border: 1.5px solid #D8D8D8;
      margin: 0 0 0 10px;
    }
  }

  .login-button {
    width: 10%;
    height: 60%;
    background: #0064ff;
    color: #f5f5f5;
  }

  .classification {
    width: 100%;
    height: 75%;
    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
  }
    
  .ranking {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .ranking-title {
    width: 90%;
    height: 20%;
    display: flex;
    // justify-content: center;
    align-items: center;
    font-family: Helvetica;
  }

  .ranking-item-box {
    width: 90%;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #D8D8D8;
  }

  .ranking-box {
    width: 90%;
    height: 33%;
    display: flex;
    // justify-content: center;
    align-items: center;
    font-family: Helvetica;
  }

  .ranking-box2 {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // margin-top: 20px;

  .data {
    width: 100%;
    height: 500px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    // justify-content: center;
    // margin-top: 20px;
  }

  .data-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
    // border-radius: 5px 5px 5px 5px;
  }

  .data-box2 {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
    // border-radius: 5px 5px 5px 5px;
  }

  .img-box {
    width: 80%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #D8D8D8;
    margin-top: 5px;
  }

  .title-box {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  .category-box {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: gray;
  }

  .count-box {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }

  .icon-box {
    width: 30%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
  }

  .icon-box:hover {
    background: #0064ff;
    color: white;
    border-radius: 5px 5px 5px 5px;
  }
`;
export default RentalPage;