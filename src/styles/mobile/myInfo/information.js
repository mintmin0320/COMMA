import styled from 'styled-components';
import theme from '../../theme';
import { flexbox, inlineFlexbox } from '../../utils';

export const InformationContainer = styled.section`
  padding: 20px;
  color: #373838;

  .info-head {
    ${flexbox('between')};
    margin-bottom: 28px;
  }

  .info-title {
    ${theme.H5};
  }

  .input-btn-wrap {
    ${flexbox('between', 'end')};

    &:not(:last-child) {
      margin-bottom: 30px;
    }

    .global-input-01 {
      flex: 1;
      margin-right: 10px;
    }
  }

  .info-account-title {
    margin-bottom: 20px;
  }

  .info-kind {
    ${flexbox('between')};

    &-left {
      ${flexbox()};
      ${theme.Body1};

      span {
        margin-left: 10px;
      }

      .img {
        margin: 0 auto;
        width: 30px;
        height: 30px;

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;

          // 이미지 선명하게
          image-rendering: -webkit-optimize-contrast;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      }
    }

    &.first {
      margin-bottom: 15px;
    }
  }

  .info-withdrawal {
    position: absolute;
    left: 0;
    bottom: 40px;
    width: 100%;
    text-align: center;

    span {
      ${theme.Body1};
      text-decoration: underline;
    }
  }
`;

export const SelectInputWrap = styled.div`
  width: 100%;

  h2 {
    ${theme.Caption};
    color: ${theme.colors.grey1};
    margin-bottom: -5px;
  }

  .select-input-wrap {
    display: flex;
  }

  .global-select-01 {
    flex: 3;
    margin-right: 10px;
  }

  .global-input-01 {
    flex: 7;
  }
`;

export const WithdrawalContainer = styled.section`
  padding: 20px;
  color: ${theme.colors.black1};

  .drawal-title {
    margin-bottom: 40px;
    ${theme.H5};
    color: #373838;
  }

  .drawal-txt-wrap {
    margin-bottom: 70px;
    ${theme.H4};

    strong {
      display: block;
      margin-bottom: 15px;
    }

    p {
      position: relative;
      padding-left: 15px;
      ${theme.Body1};

      &::before {
        display: block;
        content: '';
        position: absolute;
        top: 7px;
        left: 2px;
        width: 3px;
        height: 3px;
        background: ${theme.colors.black1};
        border-radius: 8px;
      }
    }
  }

  .drawal-check {
    margin-bottom: 30px;
    padding-left: 10px;
  }

  .btn-wrap {
    button {
      color: ${theme.colors.white};
      border-radius: 25px;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15), 0px 1px 2px 1px rgba(0, 0, 0, 0.3);
    }
  }
`;

export const SettingContainer = styled.section`
  padding: 20px;
  color: ${theme.colors.black1};

  .title {
    margin-bottom: 20px;
    padding-left: 10px;
    ${theme.Body2};
  }

  .sidebar-setting-head {
    margin-bottom: 45px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${theme.colors.grey6};

    p {
      padding-left: 10px;
    }

    strong {
      margin-right: 20px;
      ${theme.Title};
    }

    span {
      ${theme.Body2};
    }
  }

  .sidebar-list {
    margin-bottom: 40px;
    ${theme.Body1};
  }

  .sidebar-item {
    ${flexbox('between')};
    margin-bottom: 10px;
    padding: 10px;
    border-bottom: 1px solid ${theme.colors.grey6};

    .left {
      ${inlineFlexbox()};
      ${theme.Title};

      > svg {
        margin-right: 10px;
      }
    }
  }

  .modal__info {
    font-family: NoToR;

    .modal__info-box {
      position: fixed;
      left: 0;
      top: 56px;
    }
    .k-dialog-titlebar {
      background-color: ${theme.colors.newblue};
    }

    .k-content {
      padding-bottom: 100px !important;
    }
  }
`;
