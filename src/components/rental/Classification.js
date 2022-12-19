import React, { Fragment, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useSelector } from 'react-redux';
// 개발자
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EllipsisText from "react-ellipsis-text";
import _axios from '../../utils/axios';
//css
import 'react-toastify/dist/ReactToastify.css';
//icon, img
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Classification = () => {
  const userId = useSelector((store) => store.auth.authStatus.userId);

  const [state, setState] = useState({
    basket_id: '',
    bestList: [],
  });

  const _handleBasketAdd = (id) => {
    console.log(id);
    // toast.success('장바구니에 상품이 담겼습니다.');
    _getData(id);
  };

  const _getData = async (id) => {
    const url = '/cart'
    const params = {
      userId: userId,
      basket: [{
        arduinoId: id,
      }]
    };
    const response = await _axios(url, params);
    console.log(response);
    if (response.result === 'true') {
      toast.success('장바구니에 상품이 담겼습니다.');
    } else if (response.message === '이미 장바구니에 추가된 부품입니다.') {
      toast.error(response.message);
    } else if (response.message === '신청하신 아두이노 부품이 부족합니다.') {
      alert.error(response.message);
    } else {
      alert.error('실패');
    }
  }

  // best 상품
  useEffect(() => {
    const _getBestData = async () => {
      const url = `${process.env.REACT_APP_SERVER_DOMAIN}/arduino/best`;
      const response = await axios.get(url);
      console.log(response.data.result);
      setState({
        ...state,
        bestList: response.data.result,
      });
      console.log('베스트 리스트 출력 성공');
    }
    _getBestData();
  }, []);

  const Best = () => {
    return (
      <div className='ranking-item-box'>
        {state.bestList.map((list, index) => {
          return (
            <Fragment key={index}>
              <div className='ranking-box' >
                <div className='text-box'>
                  {index + 1}.&nbsp;
                  <EllipsisText
                    text={list.arduinoSpecificationName}
                    length={27}
                  />
                </div>
                <div className='best-icon-box'>
                  <FontAwesomeIcon icon={faCartArrowDown} size="2x" onClick={() => _handleBasketAdd(list.arduinoId)} />
                </div>
              </div>
            </Fragment>
          )
        })
        }
      </div>
    );
  };

  return (
    <Best>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Best>
  )
}

export default Classification;