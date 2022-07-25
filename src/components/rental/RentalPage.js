import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// 개발자
import { basketAdd } from '../../redux/actions/backet';
import titleTab from '../../utils/TitleTab';
// import Alert from '../../components/common/modal/Alert';
//css
import styled from 'styled-components';
//input & button
import Button from '../common/Button';
// import Input from '../common/CommonInput';
import data from './data';

//icon

const RentalPage = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("대여 - COMMA"), 300);
  const dispatch = useDispatch();
  const [arduino] = useState(data);

  // 담기 버튼 클릭
  const _handleBasketAdd = (itemId, itemTitle, itemCount) => {
    dispatch(basketAdd(itemId, itemTitle, itemCount));
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
                  onClickHandler= {() => _handleBasketAdd(data.id, data.title, data.count)}
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
    overflow: auto;
`;
export default RentalPage;