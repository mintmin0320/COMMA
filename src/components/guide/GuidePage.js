import React from 'react';
//css, img
import styled from 'styled-components';
import rental from '../../images/rental.png';
import basketpage from '../../images/basketpage.png';
import arduino from '../../images/arduino.png';
import mail1 from '../../images/mail1.png';
import mail2 from '../../images/mail2.png';
import mypage from '../../images/mypage.png';
//개발자
import titleTab from '../../utils/TitleTab';

const GuidePage = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("가이드"), 100); 

  return(
    <Container>
      <div className='box'>
        <div className='left-box'/>
        <div className='right-box'>
          <div className='title-box'>
            COMMA 이용 가이드
          </div>
          <div className='content'>
            <div className='total-box'>
              <div className='title'>1. 아두이노 대여 기능</div>
              <div className='total-content'>
                <div className='first-page'>
                  <div className='img1'>
                    <img src={arduino} alt="profile" className='rental'/>
                  </div>
                  <div className='text1'>1. 아두이노페이지에서 원하는 상품을 장바구니에 담습니다.</div>
                </div>
                <div className='first-page'>
                  <div className='img1'>
                    <img src={basketpage} alt="profile" className='rental'/>
                  </div>
                  <div className='text1'>
                    2. 양식에 맞게 정보를 입력하고 부품의 수량을 조절한 뒤에 신청 버튼을 눌러 주문합니다.
                  </div>
                </div>
                <div className='first-page'>
                  <div className='img1'>
                    <img src={mail1} alt="profile" className='rental'/>
                  </div>
                  <div className='text1'>3. 신청이 완료 되면 이메일로 신청확인 메일이 도칙합니다.</div>
                </div>
                <div className='first-page'>
                  <div className='img1'>
                    <img src={mypage} alt="profile" className='rental'/>
                  </div>
                  <div className='text1'>4. 신청 부품이 승인되면 마이페이지에서 승인 여부를 확인할 수 있습니다.</div>
                </div>
                <div className='first-page'>
                  <div className='img1'>
                    <img src={mail2} alt="profile" className='rental'/>
                  </div>
                  <div className='text1'>5. 마이페이지가 외에 이메일로도 신청 승인 메세지를 확인할 수  있습니다.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )       
}

const Container = styled.div`
  width: 85%;
  height: 100vmax; 
  display: flex;
  background: white;
  margin-top: 20px;
  // align-items: center;

  .box {
    width: 100%;
    height: 100%; 
    display: flex;
    align-items: center;
  }

  .left-box {
    width: 4%;
    height: 100%; 
    display: flex;
    // justify-content: flex-start;
    background: #A9BCF5;
    border-radius: 0 5px 5px 0;
  }

  .right-box {
    width: 100%;
    height: 100%; 
    flex-direction: column;
    // justify-content: center;
  }

  .title-box {
    width: 100%;
    height: 5%; 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #0064ff;
  }

  .content {
    width: 100%;
    height: 95%; 
    // flex-direction: column;
    display: flex;
    justify-content: center;
    // align-items: center;
  }

  .total-box {
    width: 95%;
    height: 100%;
  }

  .total-content {
    width: 100%;
    height: 95%;
    // background: pink;    
    // border-bottom: 1px solid #D8D8D8;  
  }

  .title {
    width: 100%;
    height: 5%; 
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
    // background: green; 
    font-size: 23px; 
  }


  .first-page {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;  
    // background: red;
  }

  .img1 {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rental {
    width: 90%;
    height: 90%;
  }

  .text1 {
    width: 30%;
    height: 90%;
    font-size: 20px;
    // background: green;
  }
`

export default GuidePage;