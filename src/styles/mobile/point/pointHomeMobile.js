import styled from 'styled-components';
import theme from '../../theme';
import { flexbox, inlineFlexbox } from '../../utils/flexbox';

export const PointContainer = styled.section`
  padding: 20px;

  .point-title {
    margin-top: 40px;

    h1 {
      margin-bottom: 20px;
      ${theme.H5};
      color: #373838;
    }

    .point-status {
      margin-bottom: 30px;
      padding: 5px;
      ${theme.Button2};
      text-align: center;
      color: ${theme.colors.white};
      background: ${theme.colors.grey4};
      border-radius: 10px;

      p {
        ${theme.Button2};
        font-family: 'NotoM';
        color: ${theme.colors.black1};
      }
    }
  }

  .point-icon-group {
    ${flexbox('start')};
    margin-bottom: 40px;
    padding-left: 15px;

    .icon {

      &-img {
        margin: 0 auto 10px;
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

      &:not(:last-child) {
        margin-right: 30px;
      }

      p {
        ${theme.Body1};
        color: ${theme.colors.black1};
      }
    }

  }
`;
