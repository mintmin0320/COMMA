import styled from 'styled-components';
import theme from '../../theme';
import { flexbox, inlineFlexbox } from '../../utils';

export const LosContainer = styled.section`
  padding: 20px;
  color: #373838;

  .los-title {
    ${theme.H5};
    margin-bottom: 37px;
  }

  .los-floating-btn {
    position: fixed;
    bottom: 25px;
    width: 100%;
    text-align: center;

    button {
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
    }
  }
`

export const LosConditionContainer = styled.section`
  padding: 40px 20px;
  color: ${theme.colors.grey1};

  .los-condition-list {
    ${flexbox('between')};
    margin-bottom: 20px;
    padding: 0 20px 20px;

    &:not(:last-child) {
      border-bottom: 1px solid ${theme.colors.grey6};
    }

    .list-left {
      ${flexbox()};

      .img {
        width: 62px;
        height: 60px;
        margin-right: 20px;

        img {
          display: block;
          width 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 3px solid ${theme.colors.grey3};
        }
      }

      svg {
        margin-right: 22px;
      }
    }
  }

  .los-condition-txt-wrap {
    .name {
      ${theme.H5};
    }

    p, span {
      ${theme.Body2};
    }

    .status-point {
      margin-left: 5px;
    }
  }

  .los-condition-img-wrap {
    
    a:first-child {
      margin-right: 15px;
    }
  }


`