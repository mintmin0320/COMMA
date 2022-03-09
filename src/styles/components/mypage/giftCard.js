import styled, { css } from 'styled-components';
import theme from '../../theme';
import { flexbox } from '../../utils/flexbox';
// images

export const GiftCardContainer = styled.div`
  padding: 30px 20px;

  .gift-card-desc {
    ${theme.Body2};
    color: #373838;
  }
  
  .gift-card-btn-wrap {
    ${flexbox('between')};

    button {
      &:first-child {
        flex: 8;
        margin-right: 10px;

        img {
          display: block;
          width: 30px;
          height: 30px;
          object-fit: contain;

          // 이미지 선명하게
          image-rendering: -webkit-optimize-contrast;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      }
  
      &:last-child {
        flex: 2;
        margin-right: 0;
        padding: 0 15px;
        color: ${theme.colors.grey1};
        border-radius: 3px;
      }
    }
  }
`;

export const GiftBtnSection = styled.div`
  margin-top: 30px;

  h2 {
    ${theme.Caption};
    color: ${theme.colors.grey1};
    margin-bottom: 5px;
  }
`;