import React from 'react';
import styled from 'styled-components';

const Modal = ({ className, children, width, height, padding, zIndex, transformY, onCancel }) => {
  return (
    <StyledModal
      className={className}
      zIndex={zIndex}
      width={width}
      height={height}
      padding={padding}
      transformY={transformY}
    >
      <div className="modal-window">
        <div className="inner-box">{children}</div>
      </div>
      <div className="modal-back" onClick={onCancel} />
    </StyledModal>
  );
};

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);

  display: flex;
  z-index: ${(props) => props.zIndex || 1000} !important;

  .modal-window {
    z-index: ${(props) => props.zIndex + 1 || 1001};
    position: relative;
    background-color: #fff;
    border-radius: 3px;
    margin: auto;
    padding: ${(props) => props.padding || '0'};
    box-sizing: border-box;
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
    transform: ${(props) => `translateY(${props.transformY})` || 'translateY(0)'};
    /* transform: translateY(-81px); */
    inner-box {
      overflow: hidden;
    }
  }

  .close-btn {
    position: absolute;
    right: 0;
    top: -40px;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
    font-weight: 100;
    width: 2.7rem;
    height: 2.7rem;
  }

  .modal-back {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

export default Modal;
