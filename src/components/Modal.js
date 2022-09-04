import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Modal = () => {
  const [state, setState] = useState({
    modal: false,
  });

  const _handleOut = () => {
    setState({
      ...state,
      modal: true
    });
  };

  return (
    <Container style={ state.modal ? { display: "none" } : { display: "block" } }>
      <div
        className='content'
        onClick={_handleOut}
      >
        <div className='modal-box'>

        </div>
      </div>
    </Container>
  )
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  // display: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // background: #F2F2F2;
  // opacity: 0.1;
  // border: 1px solid black;
  // border-radius: 20px 20px 20px 20px;

  .content {
    width: 100%;
    height: 100%;
    // opacity: 1;
  }

  .modal-box {
    width: 450px;
    height: 450px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    rgba(0, 0, 0, 0.6)
    
  }
`

const ProgressMainStyle33 = styled.div`
  height: 1.5px;
  background: #2E9AFE;
`

export default Modal;