import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
// 개발자
//input & button
import Button from '../common/Button';
import { basketRemove } from '../../redux/actions/backet';
//css
import styled from 'styled-components';
//input & button
//icon
import basketImg from '../../images/basket.PNG';
import _axios from '../../utils/axios';

const Basket = () => {
  const dispatch = useDispatch();
  const userId = useSelector((store) => store.auth.authStatus.userId);
  // let myMap = new Map();

  // 장바구니 상태
  let basketStatus = useSelector((store) => store.basket.basketStatus);
  // console.log(basketStatus[0].itemCount);
  

  // 장바구니 제거 버튼 클릭
  const _handleBasketRemove = (itemId) => {
    dispatch(basketRemove(itemId));
  }

  const [state, setState] = useState({
    userId: userId,
    check: false,
    out: false,
    component: '',
  });

  const _handleOver = (e) => {
    e.preventDefault();
    setState({
      ...state,
      check: true,
    });
  };

  const _handleOut = (e) => {
    e.preventDefault();
    setState({
      ...state,
      check: false,
    });
  };

  // 주문 + 바구니 초기화
  const _handleSetData = (e) => {
    e.preventDefault();
    _setData();
    basketStatus.length = 0;
  };

  const _setData = async () => {
    let component = {
      test1 : '1',
      test2 : '1',
      test3 : '1',
      test4 : '1',
    }

    const url = '/arduino/apply';
    const params = {
      userId: state.userId,
      component: component,
    };
    console.log(params);
    const response = await _axios(url, params);
    console.log(response);
    console.log(response.data);
    if(response.result){
      console.log('성공');
      alert('주문 성공!');
    }else{    
      console.log('실패');
      alert('주문 실패!');
    }
  }
  
  const Card = () => {
    return (
      <div>
        {basketStatus.map((data, i) => {
          return (   
            <CardBox key={i}>
              <div className='items'>
                <div className='items-title'>{data.itemTitle}</div>
                  <Button
                    kind="wideBtn_01"
                    width="5%!important"
                    onClickHandler= {() => _handleBasketRemove(data.itemId)} 
                  >
                    제거
                  </Button>
                </div>
            </CardBox>    
              )
          })}
      </div>
    );
  };

  return (
    <Container>
      <Content>
        {!state.check ?
          <div className='basketOut' onMouseOver={_handleOver}>
            <img src={basketImg} alt="logo" width="60%" height="60%"></img> 
          </div>
          :<div className='basketIn' onMouseOut={_handleOut}>
            <Card/>
            <Button
              className="loginAnchor"
              kind="wideBtn_01"
              width="30%!important"
              margin="15px 0 0 0"
              onClickHandler={_handleSetData}
            >
              주문
            </Button> 
          </div>}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  // border: 1px solid #D8D8D8;
  justify-content: center;
`;

const Content = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  border: 1px solid #D8D8D8;
  justify-content: center;
  align-items: center;

  .basketOut {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // background: red;
  }

  .basketIn {
    width: 85%;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background: blue;
  }
`;

const CardBox = styled.div`
    width: 200px;
    height: 50px;
    // margin: 0 0 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #D8D8D8;
    
    .items {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .items-title {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    // .items-button {
    //   width: 30%;
    // }
`;

export default Basket;