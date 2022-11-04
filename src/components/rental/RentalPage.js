import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router';
// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
// 개발자
import titleTab from '../../utils/TitleTab';
import { toast, ToastContainer } from 'react-toastify';
import TopButton from '../TopButton';
import _axios from '../../utils/axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BestList from './BestList';
import InsufficientPage from './InsufficientPage';
//css, icon, img
import 'react-toastify/dist/ReactToastify.css';
import { faMagnifyingGlass, faMedal } from "@fortawesome/free-solid-svg-icons";
import Plus from '../../images/circle-plus-solid.svg';
import Loading from '../Loading';

const RentalPage = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("아두이노 - COMMA"), 300);
  const userId = useSelector((store) => store.auth.authStatus.userId);

  const [state, setState] = useState({
    search: '',
    basket_id: '',
    check: '',
    page: 1,
    index: 1,
    modal: false,
    plus: false,
    insufficient: false,
    itemList: [],
    bestList: [],
    request: '',
    loading: false,
  });

   // 입력값이 변할 때
  const _handleInputChange = (e) => {
    setState({ 
      ...state, 
      [e.target.name]: e.target.value,
    });
  }

  // 상품 장바구니에 담기
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
    setState({
      ...state,
      loading: true,
    });
    const response = await _axios(url, params);
    console.log(response);
    if(response.result === 'true'){
      toast.success('장바구니에 상품이 담겼습니다.');
    } else if(response.message === '이미 장바구니에 추가된 부품입니다.') {
      toast.error(response.message);
    } else if(response.message === '신청하신 아두이노 부품이 부족합니다.') {
      toast.error(response.message);
    } else {
      toast.error('실패');
    }
    setState({
      ...state,
      loading: false,
    });
  }

  // 분류 값 전달
  const checkOnlyOne = (checkThis) => {
    console.log(checkThis.value);
    const checkboxes = document.getElementsByName('check')
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false
      }
    }
    if(checkThis.value === '전체'){
      setState({
        ...state,
        check: '',
      });  
    } else {
      setState({
        ...state,
        check: checkThis.value,
      });
    }
  }

    // page + 1
  const _handleInputPlus = () => {
    if(state.page + 1 === 10){
      setState({ 
        ...state, 
        page: 9,
        index: 9,
      });  
    } else {
      setState({ 
        ...state, 
        page: state.page + 1,
        index: state.index + 1,
      });
    }
  }
    
  // page - 1
  const _handleInputMinus = () => {
    if(state.page -1 === 0){
      setState({ 
        ...state, 
        index: 1,
        page: 1,
      });  
    } else {
      setState({ 
        ...state, 
        page: state.page - 1,
        index: state.index - 1,
      });
    }
  }

  // page 이동
  const _handleInputMove = () => {
    if(state.index === '0' || state.index < '0' || state.index > '9') {
      setState({ 
        ...state, 
        index: 1,
        page: 1,
      });  
    } else {
      setState({ 
        ...state, 
        page: state.index,
      });
    }
  }

  // 검색 버튼 클릭
  const _handleSearchButton = () => {
    console.log(state.search);
    _getSearchData();
  }

  const _getSearchData = async () => {
    const url = `http://210.121.173.182/arduino/name/${state.search}`;
    setState({
      ...state,
      loading: true,
    });
    const response = await axios.get(url);
    console.log(response);
    if(response.data.result === false){
      setState({
        ...state,
        insufficient: true,
        loading: false,
      });
      console.log('없는 상품');
    } else {
      setState({
        ...state,
        itemList: response.data.result,
      });
      console.log('검색 성공');
    }
  }

  // 아두이노 리스트
  useEffect(() => {
    const _getItemData = async () => {
      if(state.check !== '' && state.check !== '조명' && state.check !== '트랜지스터'){
        setState({
          ...state,
          loading: true,
        });
        const url = `http://210.121.173.182/arduino/type/${state.check}`;
        const response = await axios.get(url);
        console.log(response);
        setState({
          ...state,
          itemList: response.data.result,
          search: '',
          insufficient: false,
          index: 1,
          loading: false,
        });
        console.log(`아두이노 ${state.check} 분류 성공`);
      } 
      else if(state.check === '조명' || state.check === '트랜지스터') {
        setState({
          ...state,
          insufficient: true,
          index: 1,
        });
      }
      else {
        setState({
          ...state,
          loading: false, // 빌드시 true로 전환!!
        });
        const url = `http://210.121.173.182/arduino/${state.page - 1}`;
        const response = await axios.get(url);
        console.log(response);
        setState({
          ...state,
          itemList: response.data.result,
          insufficient: false,
          loading: false,
        });
        console.log(`아두이노 리스트 출력 성공`);
      }
    } 
    _getItemData();
  },[state.check, state.page]);

  const Card = () => {
    return (
      <Fragment>
        {state.itemList.map((item, index) => {
          return (
            <Fragment key={index}>
              <div
                className='data-box'
                onClick={() => _handleBasketAdd(item.arduinoId)}
              >  
                <div className='img-box'>
                  사진
                </div>
                <div className='title-box'>
                  {item.arduinoSpecificationName}
                </div>
                <div className='category-box'>
                  {item.arduinoComponentTypeName + '-' + item.arduinoProductName}
                </div>
                <div className='count-box'>
                  {item.count + 'EA'}
                </div>
              </div>
            </Fragment>
          )})
        }
      </Fragment>
    );
  };

  return(
    <Container>
      { state.loading ? <Loading/> : null }
      <div className='box'>
        <div className='top-menu'>
          <div className='header-bar'>
            <div className='search-box'>
              <div className='left-box'><div className='font-box'>검색</div></div>
              <div className='right-box'>
                <div className='search'>
                  <input
                    value={state.search}
                    onChange={_handleInputChange}                
                    type='text'
                    name='search'     
                    className='input-css'             
                  />
                  <button
                    className='login-button'
                    type='button'
                    onClick={_handleSearchButton}
                  >
                    <FontAwesomeIcon icon={ faMagnifyingGlass }/>
                  </button>
                </div>
              </div>
            </div>
            <div className='classification'>
              <div className='left-box'>
                <div className='font-box'>분류</div>
              </div>
              <div className='right-search-box'>
                <div className='check-box'>
                  <div className='checkbox1'>
                    <input
                      type='checkbox'
                      onChange={(e) => checkOnlyOne(e.target)}
                      value="전체"
                      name="check"
                    />
                      전체
                  </div>
                  <div className='checkbox1'>
                    <input
                      type='checkbox'
                      onChange={(e) => checkOnlyOne(e.target)}
                      value="센서"
                      name="check"
                    />
                      센서
                  </div>
                  <div className='checkbox1'>
                    <input
                      type='checkbox'
                      onChange={(e) => checkOnlyOne(e.target)}
                      value="모듈"
                      name="check"
                    />
                      모듈
                  </div>
                  <div className='checkbox1'>
                    <input
                      type='checkbox'
                      onChange={(e) => checkOnlyOne(e.target)}
                      value="조명"
                      name="check"
                    />
                      조명
                  </div>
                  <div className='checkbox1'>
                    <input
                      type='checkbox'
                      onChange={(e) => checkOnlyOne(e.target)}
                      value="IC"
                      name="check"
                    />
                      IC
                  </div>
                  <div className='checkbox1'>
                    <input
                      type='checkbox'
                      onChange={(e) => checkOnlyOne(e.target)}
                      value="모터"
                      name="check"
                    />
                      모터
                  </div>
                  <div className='checkbox1'>
                    <input
                      type='checkbox'
                      onChange={(e) => checkOnlyOne(e.target)}
                      value="보드"
                      name="check"
                    />
                      보드
                  </div>
                  <div className='checkbox1'>
                    <input
                      type='checkbox'
                      onChange={(e) => checkOnlyOne(e.target)}
                      value="다이오드"
                      name="check"
                    />
                    다이오드
                  </div>
                  <div className='checkbox1'>
                    <input
                      type='checkbox'
                      onChange={(e) => checkOnlyOne(e.target)}
                      value="부저"
                      name="check"
                    />
                    부저
                  </div>
                  <div className='checkbox1'>
                    <input
                      type='checkbox'
                      onChange={(e) => checkOnlyOne(e.target)}
                      value="스위치"
                      name="check"
                    />
                    스위치
                  </div>
                  <div className='checkbox1'>
                    <input
                      type='checkbox'
                      onChange={(e) => checkOnlyOne(e.target)}
                      value="저항"
                      name="check"
                    />
                    저항
                  </div>
                  <div className='checkbox1'>
                    <input
                      type='checkbox'
                      onChange={(e) => checkOnlyOne(e.target)}
                      value="캐패시터"
                      name="check"
                    />
                    캐패시터
                  </div>
                  <div className='checkbox1'>
                    <input
                      type='checkbox'
                      onChange={(e) => checkOnlyOne(e.target)}
                      value="트랜지스터"
                      name="check"
                    />
                    트랜지스터
                  </div>
                  <div className='checkbox1'>
                    <input
                      type='checkbox'
                      onChange={(e) => checkOnlyOne(e.target)}
                      value="기타"
                      name="check"
                    />
                    기타
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='ranking'>
            <div className='ranking-title'>
              <FontAwesomeIcon icon={faMedal}/>&nbsp;Best
            </div>
            <BestList/>
          </div>
        </div>
      </div>
      <MobileMoreData>
        <div className='index-box'>
          <div className='before-index'>
            <button
              className='button-css'
              onClick={_handleInputMinus}
            >
                이전
            </button>
          </div>
          <div className='now-index'>
            <input
              className='input-css'
              value={state.index}
              name="index"
              type="text"
              onChange={_handleInputChange}
              maxLength={1}
              placeholder='1~9'
            />
            <button
              className='search-button'
              onClick={_handleInputMove}
            >
              이동
            </button>
          </div>
          <div className='after-index'>
            <button
              className='button-css'
              onClick={_handleInputPlus}
            >
              다음
            </button>
          </div>
        </div>
      </MobileMoreData>
      <Content>
      {!state.insufficient ? 
        <div className='data'>
          <Card/>   
        </div>
        :<div className='insufficient'>
          <InsufficientPage/>
        </div>}
      </Content>
      <MoreData>
        <div className='index-box'>
          <div className='before-index'>
            <button
              className='button-css'
              onClick={_handleInputMinus}
            >
                이전
            </button>
          </div>
          <div className='now-index'>
            <input
              className='input-css'
              value={state.index}
              name="index"
              type="text"
              onChange={_handleInputChange}
              maxLength={1}
              placeholder='1~9'
            />
            <button
              className='search-button'
              onClick={_handleInputMove}
            >
              이동
            </button>
          </div>
          <div className='after-index'>
            <button
              className='button-css'
              onClick={_handleInputPlus}
            >
              다음
            </button>
          </div>
        </div>
      </MoreData>
      <TopButton/>
      <ToastContainer
        position="top-center"
        autoClose={1000}
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
  height: 100vmax;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  /* align-items: center; */
  margin-top: 20px;
  background: white;

  @media screen and (max-width: 430px) {
    width: 100%;
    height: 100vh;
    margin-top: 0px;
  }

  .box {
    height: 15%;
    border: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      height: 25%;
    }
  }

  .top-menu {
    width: 100%;
    height: 100%;
    display: flex;

    @media screen and (max-width: 430px) {
      flex-direction: column;
    }
  }

  .header-bar {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    border-right: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .search-box {
    width: 100%;
    height: 25%;
    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #D8D8D8;

    @media screen and (max-width: 430px) {
      height: 30%;
    }
  }

  .left-box {
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 430px) {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .font-box {
    font-size: 16px;

    @media screen and (max-width: 430px) {
      font-size: 16px;
    }
  }

  .right-box {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 430px) {
      width: 80%;
      display: flex;
      align-items: center;
    }

    .search {
      width: 90%;
      height: 100%;
      display: flex;
      align-items: center;
    }

    .input-css {
      border-radius: 0px 0px 0px 0px;
    }
    
    input {
      font-size: 16px;
      background: #f5f5f5;
      width: 90%;
      height: 60%;
      // border-radius: 10px 10px 10px 10px;
      border: 1px solid #D8D8D8;
    }
  }

  .right-search-box {
    width: 90%;
    height: 80%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 430px) {
      width: 80%;
      display: flex;
      align-items: center;
    }

    .check-box {
      width: 90%;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      background: #F5F5F5;
    }

    .checkbox1 {
      width: 100%;
      height: 90%;
      display: flex;
      // justify-content: flex-end;
      // padding: 10px;
      align-items: center;
      // background: red;
      font-size: 14px;
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

    @media screen and (max-width: 430px) {
      height: 70%;
    }
  }
    
  .ranking {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 430px) {
      display: none;
    }
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
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F5F5F5;
    // border: 1px solid #D8D8D8;
  }

  .ranking-box {
    width: 95%;
    height: 33%;
    display: flex;
    // justify-content: center;
    align-items: center;
    font-family: Helvetica;
    font-size: 15px;
  }

  .text-box {
    width: 80%;
    height: 100%;
    display: flex;
    // justify-content: center;
    align-items: center;
    
  }

  .best-icon-box {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .best-icon-box:hover {
    color: #0064ff;
    cursor: pointer;
  }

  .iccon {
    width: 30%;
    height: 80%;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 82%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // margin-top: 20px;
  border-right: 1px solid #D8D8D8;
  border-left: 1px solid #D8D8D8;
  border-bottom: 1px solid #D8D8D8;
  // background: red;

  @media screen and (max-width: 430px) {
    height: 67%;
  }

  .data {
    width: 97%;
    height: 97%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px 15px;
    overflow-y: scroll;
    // background: red;
    // justify-content: center;
    // margin-top: 20px;

    @media screen and (max-width: 430px) {
      display: flex;
      height: 800px;
      flex-direction: column;
      align-items: center;
    }
  }

  .data::-webkit-scrollbar{
    display:none;
  }

  .insufficient {
    width: 97%;
    height: 97%;
    display: flex;
  }

  .data-box {
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // border-left: 1px solid #D8D8D8;
    // border-right: 1px solid #D8D8D8;
    border: 1px solid #D8D8D8;
    // border-radius: 35px 35px 35px 35px;
    padding: 10px;
    cursor: pointer;
    // background: #0064ff;

    @media screen and (max-width: 430px) {
      display: block;
      width: 65%;
      height: 200px;
    }
  }

  // .data-box:hover {
  //   width: 100%;
  //   height: 100%;
  //   background-image: url(${Plus});
  //   background-repeat: no-repeat;
  //   background-size: 30%;
  //   background-position: center; 
  //   border: 2px solid #0064ff;
  //   // transition: 1s;
  //   cursor: pointer;

  //   div {
  //     display: none;
  //   }
  // }

  .img-box {
    width: 100%;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #D8D8D8;
    margin-top: 5px;
    margin-bottom: 5px;

    @media screen and (max-width: 430px) {
      height: 40%;
    }
  }

  .title-box {
    width: 100%;
    height: 25%;
    display: flex;
    // justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 5px;
  }

  .category-box {
    width: 100%;
    height: 20%;
    display: flex;
    // justify-content: center;
    align-items: center;
    font-size: 10px;
    color: gray;
    margin-bottom: 5px;

    @media screen and (max-width: 430px) {
      height: 15%;
    }
  }

  .count-box {
    width: 100%;
    height: 20%;
    display: flex;
    // justify-content: center;
    align-items: center;
    font-size: 10px;
  }
`;

const MoreData = styled.div`
  width: 100%;
  height: 3%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 430px) {
    display: none;
  }

  .index-box {
    width: 90%;
    height: 100%;
    display:flex;
  }

  .before-index {
    width: 40%;
    height: 100%;
    display:flex;
    justify-content: flex-end;
    align-items: center;
  }

  .now-index {
    width: 20%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
  }

  .after-index {
    width: 40%;
    height: 100%;
    display:flex;
    align-items: center;
    // justify-content: center;
  }

  .button-css {
    width: 20%;
    height: 80%;
    
    :hover {
      background: #0064ff;
      color: white;
    }
  }

  .input-css {
    width: 30%;
    height: 80%;
    border: 1px solid #D8D8D8;
    text-align:center
  }

  .search-button {
    width: 30%;
    height: 80%;
  }
`;

const MobileMoreData = styled.div`
  display: none;

  @media screen and (max-width: 430px) {
    width: 100%;
    height: 5%;
    display:flex;
    justify-content: center;
  }

  .index-box {
    width: 90%;
    height: 100%;
    display:flex;

    @media screen and (max-width: 430px) {
      width: 100%;
    }
  }

  .before-index {
    width: 40%;
    height: 100%;
    display:flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 430px) {
      display:flex;
      justify-content: center;
    }
  }

  .now-index {
    width: 20%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
  }

  .after-index {
    width: 40%;
    height: 100%;
    display:flex;
    align-items: center;
    // justify-content: center;

    @media screen and (max-width: 430px) {
      display:flex;
      justify-content: center;
    }
  }

  .button-css {
    width: 20%;
    height: 80%;
    
    @media screen and (max-width: 430px) {
      width: 40%;
    }
  }

  .input-css {
    width: 30%;
    height: 80%;
    border: 1px solid #D8D8D8;
    text-align:center
  }

  .search-button {
    width: 30%;
    height: 80%;

    @media screen and (max-width: 430px) {
      width: 50%;
    }
  }
`;

export default RentalPage;