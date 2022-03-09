import styled, { css } from 'styled-components';
import theme from '../../theme';
import { flexbox } from '../../utils/flexbox';
// images

export const ServiceIconContainer = styled.div`

  .service-title {
    margin-bottom: 24px;
    ${theme.H5};
    color: #373838;
  }

  .icon-item {
    ${flexbox('between')};
    padding-left: 5px;

    &:not(:last-child) {
      margin-bottom: 15px;
    }

    .icon-left {
      ${flexbox()};
    }

    .icon-list-img {
      margin-right: 10px;
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
    
    span {
      ${theme.Body1};
      color: ${theme.colors.black1};
    }

  }

`;