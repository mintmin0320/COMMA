import styled from 'styled-components';
import theme from '../theme';
import { flexbox } from '../utils/flexbox';

export const StyledSelctBank = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1000001;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px 20px 0px 0px;
  .option_wrap {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #ffffff;
    border-radius: 20px 20px 0px 0px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 65px 0 20px;
    z-index: 99999999;

    .button {
      ${flexbox()};
      width: 45%;
      height: 44px;
      margin-bottom: 20px;
      ${theme.Body1}
      color: #0e2b64;
      border-radius: 3px;
      border: 1px solid ${theme.colors.grey3};
    }

    .button.active {
      strong {
        color: ${theme.colors.newblue};
        ${theme.Title};
      }
    }

    .none {
      width: 45%;
      height: 44px;
      opacity: 0;
    }

    .close-btn {
      position: absolute;
      right: 15px;
      top: 15px;
    }
  }

  .button-inner {
    width: 100%;
    ${flexbox()};

    strong {
      margin-left: 5px;
      ${theme.Body1};
      font-size: 15px;
      color: ${theme.colors.grey1};
      white-space: nowrap;
    }
  }

  .bank-img {
    width: 30px;
    height: 20px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      // 이미지 선명하게
      image-rendering: -webkit-optimize-contrast;
    }
  }
`;