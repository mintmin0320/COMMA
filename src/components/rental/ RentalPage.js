import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// 개발자
import { basketAdd } from '../../redux/actions/backet';
// import Alert from '../../components/common/modal/Alert';
//css
import styled from 'styled-components';
//input & button
import Button from '../common/Button';
import Input from '../common/CommonInput';
import data from './data';

//icon

const RentalPage = () => {
  const dispatch = useDispatch();
  const [arduino, setData] = useState(data);
  const [state, setState] = useState({
    result: false,    // 서버와의 axios 요청 결과
    message: null,
  });

  // 담기 버튼 클릭
  const _handleBasketAdd = (itemId, itemTitle) => {
    dispatch(basketAdd(itemId, itemTitle));
  }

    const Card = () => {
      return (
        <div>
          {arduino.map((data, i) => {
            return (
              <CardBox key={i}>  
                <h3>{data.title}</h3>
                <h4>{data.content}</h4>
                <Button
                  className="loginAnchor"
                  kind="wideBtn_01"
                  width="10%!important"
                  onClickHandler= {() => _handleBasketAdd(data.id, data.title)}
                >
                  담기
                </Button>
              </CardBox>
              )
          })}
        </div>
      );
  };

  return(
    <Container>
      <Content>
      {Card()}
        
      </Content>
    </Container> 
  )       
}

const Container = styled.div`
    width: 100%;
    height: 900px;
    display: flex;
    justify-content: center;
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
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #D8D8D8;
`;
export default RentalPage;