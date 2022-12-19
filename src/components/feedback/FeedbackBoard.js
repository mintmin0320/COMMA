import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
// 개발자
import titleTab from '../../utils/TitleTab';
// css
import 'react-toastify/dist/ReactToastify.css';

const FeedbackBoard = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("피드백 게시판"), 100);
  const userId = useSelector((store) => store.auth.authStatus.userId);

  // 각 문항의 체크박스 점수를 저장
  const [test, setTest] = useState({
    test1: false,
    test2: false,
    test3: false,
    test4: false,
    test5: false
  });

  // 선택사항의 점수와 텍스트
  const rateLists = [
    { id: 1, rate: "매우 불만" },
    { id: 2, rate: "불만" },
    { id: 3, rate: "보통" },
    { id: 4, rate: "만족" },
    { id: 5, rate: "매우 만족" },
  ];

  // 기타사항
  const [note, setNote] = useState("");
  const handleInputChange = (e) => {
    setNote(e.target.value);
  }

  // 문항 당 하나의 체크박스만 선택
  const checkOnlyOne = (checkThis, question) => {
    var q_num = parseInt(checkThis.name.slice(-1));
    var val = parseInt(checkThis.value);
    const checkboxes = document.getElementsByName(question);
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false
      }
    }
    if (checkThis.checked === true) { // 체크가 되면 점수를 저장
      if (q_num === 1) setTest({ ...test, test1: parseInt(val) });
      else if (q_num === 2) setTest({ ...test, test2: parseInt(val) });
      else if (q_num === 3) setTest({ ...test, test3: parseInt(val) });
      else if (q_num === 4) setTest({ ...test, test4: parseInt(val) });
      else if (q_num === 5) setTest({ ...test, test5: parseInt(val) });
    }
    else { // 체크 해제되었을 경우
      if (q_num === 1) setTest({ ...test, test1: false });
      else if (q_num === 2) setTest({ ...test, test2: false });
      else if (q_num === 3) setTest({ ...test, test3: false });
      else if (q_num === 4) setTest({ ...test, test4: false });
      else if (q_num === 5) setTest({ ...test, test5: false });
    }
    // console.log(checkThis);
  }

  // 데이터 전송
  const postSurvey = async () => {
    const url = `${process.env.REACT_APP_SERVER_DOMAIN}/admin/survey`;
    const params = {
      userId: userId,
      surveyResult: test,
      opinion: note
    };
    // console.log(params);

    // 모든 체크박스가 선택되지 않았을 경우
    if (test.test1 === false || test.test2 === false || test.test3 === false || test.test4 === false || test.test5 === false) {
      toast.warn("모든 문항의 체크박스를 선택하세요.");
      return;
    }

    // 서버로 데이터 전송
    const response = await axios.post(url, params);
    // console.log(response.data);

    // 메세지 출력
    toast.success(response.data.message);

    // (초기화는 체크박스가 모두 선택되어야 실행된다.)
    // 체크박스 전체 해제
    var checkboxes;
    for (var i = 1; i <= 5; i++) {
      checkboxes = document.getElementsByName("q" + i);
      for (var j = 0; j < 5; j++) {
        checkboxes[j].checked = false;
      }
    }
    setTest({
      ...test,
      test1: false,
      test2: false,
      test3: false,
      test4: false,
      test5: false
    });
    // 비고란 초기화
    setNote("");
  }

  // 문항 디스플레이
  const List = (question, text) => {
    return (
      <Bundle>
        <p>{text}</p>
        {rateLists.map((data) => (
          <div key={data.id}>
            <input type="checkbox" id={question + "_" + data.id} name={question} value={data.id} onChange={(e) => checkOnlyOne(e.target, question)} />
            <label htmlFor={question + "_" + data.id}> {data.rate}</label>
          </div>
        ))}
      </Bundle>
    )
  }

  return (
    <Container>
      {List("q1", "1. 버튼 및 아이콘의 클릭이 용이하고 배치가 한 눈에 들어오는가?")}
      {List("q2", "2. 사이트의 각 메뉴를 이용하는 데 불편이나 오류가 없고, 사용자에게 명확한 에러 인식을 위한 문구 또는 신호를 전달하는가?")}
      {List("q3", "3. 공지사항을 확인하는 데 유용한가?")}
      {List("q4", "4. 아두이노 부품 신청, 수령하는 데 도움이 되었는가?")}
      {List("q5", "5. 해당 사이트를 재방문할 의사가 있는가? ")}
      <Bundle>
        <p>기타의견</p>
        <textarea onChange={handleInputChange} value={note}></textarea>
      </Bundle>
      <button onClick={postSurvey}>제출</button>
      <ToastContainer
        position="top-center"
        autoClose={400}
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
  // margin-left: 20px;
  width: 85%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-itmes: center;
  margin-top: 20px;
  background: white;

  button{
    margin: 30px 20px;
    padding: 15px 30px;
    color: #ffffff;
    background: #0064ff;
  }
`

const Bundle = styled.div`
  margin: 20px 20px 0px 20px;
  // width: 100%;
  padding: 10px;
  border: 1px solid #d8d8d8;
  font-size: 14px;

  div {
  margin: 5px 0px;
  }
  label {
  margin-left: 5px;
  }

  p {
  margin: 0;
  margin-top: 5px;
  margin-bottom: 10px;
  word-break: break-all;
  font-weight: bold;
  }

  textarea {
    resize: none;
    border: 1px solid #d8d8d8;
    width: 100%;
    height: 150px;
  }
`

export default FeedbackBoard;