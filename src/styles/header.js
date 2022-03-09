import styled from 'styled-components';
import theme from '../styles/theme';

// 알림뱃지
export const NoticeBell = styled.div`
  position: relative;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }

  strong {
    position: absolute;
    top: 6px;
    right: 5.8px;
    color: ${theme.colors.white};
    font-size: 10px;
    font-family: NotoM;
  }

  @media ${({ theme }) => theme.device.desktop} {
    top: 3px;
    margin-right: 10px;

    img {
      width: 35px;
      height: 35px;
    }

    strong {
      top: 7px;
      right: 7.8px;
    }
  }
`;

export const StyledSelectModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  padding-top: 66px;
  background-color: rgb(0, 0, 0, 0.6);
  z-index: 3;

  .modal-inner {
    position: relative;
    height: 444px;
    padding: 20px;
    background-color: ${theme.colors.white};
  }

  .modal-close {
    position: absolute;
    top: 26px;
    right: 35px;
    cursor: pointer;
  }

  .modal-title {
    margin-bottom: 30px;
    padding: 0 0 10px 0;
    ${theme.Title20}
    text-align: center;
    color: ${theme.colors.black1};
    border-bottom: 10px solid ${theme.colors.boxGray};
  }

  .notice-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    padding: 0 10px 16px;
    border-bottom: 1.5px solid ${theme.colors.boxGray};
    cursor: pointer;
  }

  .notice-txt-wrap {
    p {
      ${theme.Title};
      color: ${theme.colors.grey1};
    }
  }

  .notice-txt {
    margin-bottom: 10px;

    strong {
      margin-right: 18px;
      padding: 2px 10px 3px;
      ${theme.Body1};
      color: ${theme.colors.white};
      border-radius: 3px;

      &.notice {
        background-color: ${theme.colors.royalblue};
      }
      &.question {
        background-color: ${theme.colors.murstard};
      }
      &.partner {
        background-color: ${theme.colors.turquoise};
      }
      &.cms {
        background-color: ${theme.colors.violet};
      }
    }

    span {
      ${theme.Body1};
      color: ${theme.colors.grey1};
    }
  }

  .not-alert {
    margin-top: 100px;
    text-align: center;

    div {
      margin-bottom: 25px;
    }

    p {
      ${theme.H4};
      color: ${theme.colors.grey3};
    }
  }

  @media ${({ theme }) => theme.device.desktop} {
    .modal-inner {
      position: absolute;
      top: 75px;
      right: 245.5px;
      width: 375px;

      &:before {
        right: 66px;
      }
    }
  }

  @media (min-width: 1825px) {
    .modal-inner {
      right: 366px;
    }
  }
`;
