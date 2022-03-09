import styled from 'styled-components';
import theme from '../../theme';
import { flexbox, inlineFlexbox } from '../../utils/flexbox';
// 이미지
import close from '../../../images/account/close.svg';

export const AgreeContainer = styled.div`
  hr {
    border: 1px solid #e3e3e3;
  }

  .agree-all-check {
    ${flexbox('between')};
  }

  .agree-arrow-btn {
    ${inlineFlexbox()};
  }

  .agree-arrow-txt {
    margin-right: 10px;
    ${theme.Body2};
    color: ${theme.colors.newblue};
  }

  .agree-body {
    margin-top: 20px;
    color: ${theme.colors.black1};

    .agree-sub-txt {
      ${theme.Body2};
    }
  }
`;

export const CheckModal = styled.div`
  z-index: 10;
  .k-window {
    padding: 0 20px 0 40px;
    @media ${({ theme }) => theme.device.mobile} {
      width: 100%;
    }
    @media ${({ theme }) => theme.device.desktop} {
      width: 100% !important;
      padding: 0 150px 30px 150px;
      align-items: center;
    }
  }
  .k-dialog-titlebar {
    height: 144px;
    background-color: #fff;
    border-bottom: none;
  }
  .k-window-title {
    padding-top: 80px;
    ${theme.H4}
    color: ${theme.colors.navy};
  }
  .k-window-content {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    padding: none !important;
    // 폰트
    font-family: NoToR;
    font-size: 14px;
    line-height: 20px;
    color: #373838;
  }
  .k-window-content::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  .k-window-actions {
    display: none;
  }
  .k-button-icon {
    @media ${({ theme }) => theme.device.mobile} {
      top: -40px;
      background-image: url(${close}) !important;
      width: 20px;
      height: 20px;
      background-position: center !important;
      background-size: cover !important;
    }
    @media ${({ theme }) => theme.device.desktop} {
      position: absolute;
      top: 30px;
      right: 180px;
      background-image: url(${close}) !important;
      width: 20px;
      height: 20px;
      background-position: center !important;
      background-size: cover !important;
    }
    span {
      display: none;
    }
  }
`;
