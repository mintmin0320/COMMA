import styled, { css } from 'styled-components';
import theme from '../../theme';
import { flexbox } from '../../utils/flexbox';
// images

export const ProductContainer = styled.div`
  padding: 20px;

  .product-title {
    ${theme.H5};
    color: #373838;
  }
`;

export const TabInner = styled.div`
  padding: 20px;
  color: ${theme.colors.black1};

  .product-bg {
    margin-bottom: 20px;

    img {
      width: 100%;
    }
  }

  .product-payment {
    ${theme.Body1};
    margin-bottom: 25px;
  }

  .product-list {
    h2 {
      ${theme.H5};
      margin-bottom: 25px;
    }

    li {
      ${flexbox('start', 'start')};
      margin-bottom: 20px;
      ${theme.Body1};

      p:first-child {
        flex: 3;
      }

      p:last-child,
      div:last-child {
        flex: 7;
      }
    }

    &.list-desc {
      margin-bottom: 15px;
      padding: 5px 15px 15px;

      li {
        margin-bottom: 5px;
      }
    }
  }

  .product-list-depth {
    margin-bottom: 15px;

    li {
      position: relative;
      margin-bottom: 0;
      padding-left: 10px;

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 8px;
        left: 0;
        width: 3px;
        height: 3px;
        background: ${theme.colors.black1};
      }
    }
  }
`;
