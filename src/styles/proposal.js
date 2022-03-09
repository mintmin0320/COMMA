import { MaskedTextBox } from '@progress/kendo-react-inputs';
import styled from 'styled-components';
import theme from '../styles/theme';
import { Container, Col, Row } from 'react-bootstrap';
import checkbox from '../images/partnership/checkboxSelected.svg';
import uncheckbox from '../images/insu/uncheckbox.svg';
import complete from '../images/partnership/complete.svg';

export const AdiminWrap = styled.div`
  width: 100%;
`;

export const CompleteContainer = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.colors.white};
  text-align: center;

  img {
    margin-top: 18em;
  }
  h2 {
    margin: 30px 0;
    ${theme.H3};
    color: ${theme.colors.balck};
  }

  p {
    ${theme.colors.grey2};
    ${theme.Title}
  }

  @media ${({ theme }) => theme.device.desktop} {
    img {
      margin-top: 22em;
    }
  }
`;

export const StyledContainer = styled(Container)`
  h1 {
    text-align: center;
    ${theme.H3};
    color: ${theme.colors.black1};
    padding-bottom: 20px;
    border-bottom: 1px solid ${theme.colors.grey2};
  }

  .btn-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media ${({ theme }) => theme.device.mobile} {
    .btn-wrap {
      margin-bottom: 30px;
    }
  }

  @media ${({ theme }) => theme.device.desktop} {
    margin: 150px auto 100px;
  }

  #popupDom {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 99;
    left: 0;
    top: 10%;
    background-color: ${theme.colors.white};

    @media ${({ theme }) => theme.device.desktop} {
      top: 17%;
      left: 10%;
      width: 450px;
    }
    @media ${({ theme }) => theme.device.mobile} {
    }
  }
  .dialog {
    z-index: 99;
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
    .dialog-wrap {
      width: 250px;
      padding: 30px 22px;
      text-align: center;
      border-radius: 3px;
      background-color: ${theme.colors.white};
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
        rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
        rgba(0, 0, 0, 0.09) 0px -3px 5px;
      .dialog-message {
        ${theme.Body1};
        color: ${theme.colors.black1};
      }
      .dialog-btn {
        cursor: pointer;
        margin-top: 30px;
        ${theme.Button1};
        color: ${theme.colors.lapis};
      }
    }
  }
  .success-dialog {
    z-index: 99;
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
    .dialog-wrap {
      width: 292px;
      padding: 30px 20px;
      text-align: left;
      border-radius: 3px;
      background-color: ${theme.colors.white};
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
        rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
        rgba(0, 0, 0, 0.09) 0px -3px 5px;
      .dialog-message {
        ${theme.Body1};
        color: ${theme.colors.black1};
      }
      h3 {
        ${theme.H5}
        margin-bottom:20px;
      }
      .dialog-btn {
        float: right;
        cursor: pointer;
        margin: 30px 10px 0 0;
        ${theme.Button1};
        color: ${theme.colors.lapis};
      }
    }
  }
`;

export const LeftWrap = styled.div`
  padding: 30px;

  @media ${({ theme }) => theme.device.mobile} {
    padding: 10px 10px 0px 10px;
  }
`;

export const RightWrap = styled.div`
  padding: 30px;

  @media ${({ theme }) => theme.device.mobile} {
    padding: 0px 10px 10px 10px;

    .toggle-check {
      margin-right: 1rem;
      margin-left: 0rem !important;
    }

    input[id='all'] + label {
      margin-right: 1rem;
      margin-left: 0rem !important;
    }
  }

  .header-strong {
    ${theme.Body1};
    color: ${theme.colors.black1};
  }

  .check-wrap {
    display: flex;
    align-items: center;
  }

  .toggle-btn {
    margin-left: 10px;
    padding: 4px 10px;
    background-color: ${theme.colors.grey4};
    ${theme.Body2};
    border-radius: 30px;
    cursor: pointer;
  }

  .toggle-check {
    width: 15px;
    height: 15px;
    margin-right: 1rem;
    margin-left: 1rem;
    display: none;
  }

  input[id='all'] + label {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 1rem;
    margin-left: 1rem;
    cursor: pointer;
    background: url(${uncheckbox}) center;
  }

  input[id='all']:checked + label {
    background: url(${checkbox}) center;
    border: none;
    width: 15px;
    height: 15px;
  }

  .toggle-wrap {
    @media ${({ theme }) => theme.device.desktop} {
      padding: 16px 20px 16px 38%;
    }
    @media ${({ theme }) => theme.device.mobile} {
      padding: 16px;
    }
    background-color: ${theme.colors.midGrey};

    h3 {
      margin-bottom: 20px;
      ${theme.Body1};
    }
    p {
      ${theme.Body2}
    }
  }
`;

export const Wrap = styled.section`
  .input-wrap {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 0 16px;
    margin: 16px 0;
    border-bottom: 1px solid ${theme.colors.grey4};
    ${theme.Body1}
  }

  .input-companydoc {
    display: flex;
    align-items: center;

    img {
      margin-left: 15px;
      cursor: pointer;
    }
  }

  .textarea-input-wrap {
    align-items: baseline !important;
  }

  .textarea-box {
    width: 100%;
    height: 200px;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .label {
    width: 200px;
    flex-shrink: 0;
    padding-left: 15px;
    padding-right: 15px;
    ${theme.Body1};
    font-weight: 500;
    font-family: 'NotoM';
    color: ${theme.colors.black1};
  }
  span {
    color: #f68657;
  }

  .input-box {
    width: 100%;
    height: ${(props) => props.height};
    padding: 6px;
    border: solid 1px ${theme.colors.grey4};
    ${theme.Body1};
    background-color: transparent;
    color: ${theme.colors.black1};

    ::placeholder {
      ${theme.Body1};
      color: ${theme.colors.grey3};
    }
    :focus,
    :active {
      outline: none;
    }
  }

  .companyDoc-label {
    display: flex;
    align-items: center;
  }

  .download-btn {
    ${theme.Body2}
    background-color: ${theme.colors.grey2};
    color: ${theme.colors.white};
    padding: 7px 10px;
    margin-left: 20px;
  }

  .address-wrap {
    input {
      margin-bottom: 10px;
    }

    > div {
      display: flex;
      align-items: center;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    .input-wrap {
      display: block;
      width: 100%;
      padding: 0 0 16px;
      margin: 16px 0;
      border-bottom: 1px solid ${theme.colors.grey4};
    }

    .label {
      width: 100%;
      padding-left: 0;
      margin-bottom: 10px;
      ${theme.Body1};
      font-weight: 500;
      color: ${theme.colors.black1};
    }

    .toggle-btn {
      width: 80px;
      margin-left: 70%;
      margin-top: 10px;
    }
  }
`;

export const StyledInput = styled(MaskedTextBox)`
  display: flex;
  align-items: center;
  border: solid 1px ${theme.colors.grey4};
  ${theme.Title};
  background-color: transparent !important;
  color: ${theme.colors.black1};
  .k-textbox {
    padding: 6px;
    background-color: transparent;
    height: unset;
    ${theme.Title};
  }
  .k-textbox:focus {
    box-shadow: none;
  }
  .k-maskedtextbox {
    background-color: transparent !important;
    :active {
      box-shadow: none;
    }
  }
  .k-textbox::placeholder {
    color: #a9a9a9 !important;
    ${theme.Body1}
  }
`;
