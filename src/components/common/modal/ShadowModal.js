import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const ShadowModal = ({ title, sub1, sub2,sub3, kind, btnText, onClick, titleColor, subColor }) => {
  return (
    <StyledModal className={kind} titleColor={titleColor} subColor={subColor}>
      <div className="shadow-modal">
        <h2>{title}</h2>
        <p>
          {sub1} <br />
          {sub2}
        </p>
        <div className="button">
          <button type='button' onClick={onClick}>{btnText ? btnText : '닫기'}</button>
        </div>
      </div>
    </StyledModal>
  );
};

export default ShadowModal;

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;

  .shadow-modal {
    width: 280px;
    padding: 20px 14px 10px 20px;
    background-color: ${theme.colors.white};
    border-radius: 3px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  h2 {
    margin-bottom: 20px;
    ${theme.H5};
    color: ${(props) => props.titleColor ? props.titleColor : `${theme.colors.navyBox}`};
  }

  p {
    margin-bottom: 25px;
    ${theme.Body1};
    color: ${(props) => props.subColor ? props.subColor : `${theme.colors.grey1}`};
    word-break: keep-all;
  }

  .button {
    width: 100%;
    text-align: right;

    button {
      ${theme.Button1};
      color: ${theme.colors.lapis};
      outline: none;
      border: none;
      background: transparent;
    }
  }

  @media ${({ theme }) => theme.device.desktop} {
    .shadow-modal {
      position: absolute;
      transform: translateX(50%);
    }
  }
`;