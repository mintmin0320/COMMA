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

//icon
import Logo from '../../images/blue_bg.svg';
import { Link } from 'react-router-dom';

const BasketCheck = () => {
  const userId = useSelector((store) => store.auth.authStatus.userId);
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("신청서 - COMMA"), 100);

  const [state, setState] = useState({
    name: '',
    major: '',
    professor: '',
    check: false,
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

  // const Card = () => {
  //   console.log(state.itemList);
  //   return (
  //     <OrderBox>
  //       {state.itemList.map((item, index) => {
  //         return (
  //           <div className='item-box' key={index}>
  //             <div className='item-name-box'>{item.arduinoName}</div>
  //             <div className='count-item'>
  //               <div className='blank-box'/>
  //               <div className='count-box'>
  //                 <button 
  //                   className='plus-box' 
  //                   type='button'
  //                   onClick={() => {
  //                     if(item.count < 10){
  //                       state.itemList[index].count = Number(item.count) + 1;
  //                       setState({
  //                         ...state,
  //                         itemList: state.itemList,
  //                       });
  //                     }
  //                   }}
  //                 >
  //                   +
  //                 </button>
  //                 <div className='count'>{item.count}EA</div>
  //                 <button className='minus-box'
  //                   type='button'
  //                   onClick={() => {
  //                     if(item.count > 1){
  //                       state.itemList[index].count = Number(item.count) + -1;
  //                       setState({
  //                         ...state,
  //                         itemList: state.itemList,
  //                       });
  //                     }
  //                   }}
  //                 >
  //                   -
  //                 </button>
  //               </div>
  //               <div className='delete-box'>
  //                 <button
  //                   className='item-delete'
  //                   type='button'
  //                   onClick={() => _itemDelete(item.arduinoId)}
  //                 >
  //                   <FontAwesomeIcon icon={ faX } size="1x"/>
  //                 </button> 
  //               </div>
  //             </div>
  //           </div>
  //         )
  //       })}
  //     </OrderBox>
  //   );
  // };

  return(
    <Container>
      <div className='content'>
        <div className='top-basket-box'>
          {/* <img src={Logo} alt="logo" className='logo-box'/> */}
        </div>
        <div className='bottom-basket-box'>
          <div className='button-box'>
            <Link to='/mypage' className='link-mypage'><button className='button-box1'>마이페이지</button></Link>
            <Link to='/rental' className='link-rental'><button className='button-box2'>대여</button></Link>
          </div>
        </div>
      </div>
      <TopButton/>
    </Container> 
  )       
}

const Container = styled.div`
  width: 85%;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-top: 20px;

  .content {
    width: 100%;
    height: 100%;
    // border: 1px solid #D8D8D8;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .top-basket-box {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-box {
    width: 80%;
    height: 80%;
  }

  .bottom-basket-box {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button-box {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;     
  }

  .link-mypage {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 24px;
  }

  .link-rental {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 24px;
  }

  .button-box1 {
    width: 50%;
    height: 100px;
    background: #f5f5f5;
    color: #0064ff;
    border-radius: 10px 10px 10px 10px;
  }

  .button-box2 {
    width: 50%;
    height: 100px;
    background: #f5f5f5;
    color: #0064ff;
    border-radius: 10px 10px 10px 10px;
  }
`;

export default BasketCheck;
