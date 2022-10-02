import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// 개발자
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// css, icon
import styled from 'styled-components';
import { faUser, faPlus, faCartShopping, faGear, faMinus } from "@fortawesome/free-solid-svg-icons";

const ResponsiveBtn = () => {
  const userId = useSelector((store) => store.auth.authStatus.userId);
  const [state, setState] = useState({
    check: false,
  });

  const _handleModalPlus = () => {
    setState({
      ...state,
      check: true,
    })
  };

  const _handleModalMinus = () => {
    setState({
      ...state,
      check: false,
    })
  };

  return (
    <Container>
      {!state.check ?
        <button
          className='modal-button'
          onClick={_handleModalPlus}
        >
          <FontAwesomeIcon icon={faPlus} size="2x" color='white'/>
        </button>
      :<Content>
        <NavLink
          to="/mypage"
          className='button-box'
          style={({ isActive }) => ({
            color: isActive ? 'white' : '#0064ff',
            backgroundColor: isActive ? '#0064ff' : '#F2F2F2',
          })}  
        >
          <FontAwesomeIcon icon={faUser} size="2x" />
        </NavLink>
        <button
          className='button-box2'
          onClick={_handleModalMinus}
        >
          <FontAwesomeIcon icon={faMinus} size="2x" />
        </button>
        {userId === 'admin'
          ? <NavLink
              to="/admin/memberlist"
              className='button-box3'
              style={({ isActive }) => ({
                color: isActive ? 'white' : '#0064ff',
                backgroundColor: isActive ? '#0064ff' : '#F2F2F2',
              })}
            >
              <FontAwesomeIcon icon={faGear} size="2x" />
            </NavLink>
          : <NavLink
              to="/basket"
              className='button-box3'
              style={({ isActive }) => ({
                color: isActive ? 'white' : '#0064ff',
                backgroundColor: isActive ? '#0064ff' : '#F2F2F2',
              })}
            >
              <FontAwesomeIcon icon={faCartShopping} size="2x" />
            </NavLink>  
        }
      </Content>}
    </Container>
  )
};

const Container = styled.div`
  
  .modal-button {
    width: 80px;
    height: 30px;
    background: #0064ff;
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translateX( -50% );
    opacity: 0.6;
    border-radius: 10px 10px 0 0;
  }
`

const Content = styled.div`
  width: 100%;
  border-top: 2px solid #D8D8D8;
  height: 45px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;

  .button-box {
    width: 34%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 2px solid #D8D8D8;
    background: #E0E0E0;
  }

  .button-box2 {
    width: 34%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 2px solid #D8D8D8;
    background: #F2F2F2;
  }

  .button-box3 {
    width: 34%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E0E0E0;
  }
`

export default ResponsiveBtn;