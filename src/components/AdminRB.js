import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast, faUserCheck, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

const AdminRB = () => {
  return (
    <Container>
      <NavLink
        to="/admin/memberlist"
        className='button-box'
        style={({ isActive }) => ({
          color: isActive ? 'white' : '#0064ff',
          backgroundColor: isActive ? '#0064ff' : '#F2F2F2',
        })}  
      >
        <FontAwesomeIcon icon={faUserCheck} size="2x" />
      </NavLink>
      <NavLink
        to="/admin/orderlist"
        className='button-box2'
        style={({ isActive }) => ({
          color: isActive ? 'white' : '#0064ff',
          backgroundColor: isActive ? '#0064ff' : '#F2F2F2',
        })}
      >
        <FontAwesomeIcon icon={faTruckFast} size="2x" />
      </NavLink>
      <NavLink
        to="/admin/feedback"
        className='button-box3'
        style={({ isActive }) => ({
          color: isActive ? 'white' : '#0064ff',
          backgroundColor: isActive ? '#0064ff' : '#F2F2F2',
        })}
      >
        <FontAwesomeIcon icon={faListCheck} size="2x" />
      </NavLink>
    </Container>
  )
};

const Container = styled.div`
  width: 100%;
  border-top: 2px solid #D8D8D8;
  height: 48px;
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
    background: #E0E0E0;
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

export default AdminRB;