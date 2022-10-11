import React, { useEffect, useState } from 'react';
import axios from 'axios';
// 개발자
import titleTab from '../../utils/TitleTab';
import EllipsisText from "react-ellipsis-text";
//css
import styled from 'styled-components';

const AdminFeedback = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("관리자/피드백 - COMMA"), 100);
  const [state, setState] = useState({
    count: '',
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    opinion: [],
  });

  // 피드백 결과 데이터
  useEffect(() => {
    const _getData = async () => {
      const url = "http://210.121.173.182/admin/survey";
      const response = await axios.get(url);
      console.log(response);
      console.log(response.data.result.opinion);
      if(response.status === 200){
        setState({
          ...state,
          count: response.data.result.count,
          question1: response.data.result.question1,
          question2: response.data.result.question2,
          question3: response.data.result.question3,
          question4: response.data.result.question4,
          question5: response.data.result.question5,
          opinion: response.data.result.opinion,
        })
        console.log('관리자 피드백 조회성공');
      } else {
        console.log('관리자 조회실패');
      }
    }
    _getData()
  },[]);

  // 기타 의견 출력
  const Card = () => {
    console.log(state.opinion);
    return (
      <div className='question-tag'>
        {state.opinion.map((data, idx) => {
          if(data !== '') {
            return (
              <div className='question2' key={idx}>
                <EllipsisText
                  text={data}
                  length={100}
                />
              </div>
            )
          }
        })}
      </div>
    );
  };

  return(
    <Container>
      <div className='content'>
        <div className='count-box'>{state.count}명 참여</div>
        <div className='tag-list'>
          <div className='tag-box'>
            <div className='question'>1. 버튼 및 아이콘의 클릭이 용이하고 배치가 한눈에 들어오는가?</div>
            <div className='question'>2. 사이트의 각 메뉴를 이용하는 데 불편이나 오류가 없고, 사용자에게 명확한 에러 인식을 위한 문구 또는 신호를 전달하는가?</div>
            <div className='question'>3. 공지사항을 확인하는 데 유용한가?</div>
            <div className='question'>4. 아두이노 부품 신청, 수령하는 데 도움이 되었는가?</div>
            <div className='question1'>5. 해당 사이트를 재방문할 의사가 있는가? </div>
          </div>
          <div className='tag-data'>
            <div className='question-data'><div className='score-font'>{state.question1}&nbsp;</div>/ 5점</div>
            <div className='question-data'><div className='score-font'>{state.question2}&nbsp;</div>/ 5점</div>
            <div className='question-data'><div className='score-font'>{state.question3}&nbsp;</div>/ 5점</div>
            <div className='question-data'><div className='score-font'>{state.question4}&nbsp;</div>/ 5점</div>
            <div className='question1-data'><div className='score-font'>{state.question5}&nbsp;</div>/ 5점</div>
          </div>
        </div>
        <div className='opinion-box'>
          <div className='opinion-tag'>기타</div>
          <Card/>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  
  .content {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  .count-box {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0064ff;
    background: #F2F2F2;
    font-size: 24px;
    border-bottom: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
  }

  .tag-list {
    width: 100%;
    height: 40%;
    display: flex;
    border-right: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
  }

  .tag-box {
    width: 80%;
    height: 100%;
    border-right: 1px solid #D8D8D8;
  }

  .tag-data {
    width: 20%;
    height: 100%;
  }

  .question {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F2F2F2;
    border-bottom: 1px solid #D8D8D8;
  }

  .question1 {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F2F2F2;  
  }

  .question-data {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-bottom: 1px solid #D8D8D8;
  }

  .question1-data {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;  
  }

  .opinion-box {
    width: 100%;
    height: 50%;
    border-right: 1px solid #D8D8D8;
    border-top: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
  }

  .opinion-tag {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #0064ff;
    border-bottom: 1px solid #D8D8D8;
    background: #F2F2F2;
  }

  .question-tag {
    width: 100%;
    height: 90%;
    overflow-y: scroll;
  }

  .question-tag::-webkit-scrollbar{
    display:none;
  }

  .question2 {
    width: 100%;
    height: 20%;
    border-bottom: 1px solid #D8D8D8;
    padding: 10px;
  }

  .score-font {
    color: #0064ff;
  }
`;

export default AdminFeedback;