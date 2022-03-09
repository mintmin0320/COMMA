import styled from 'styled-components';
import theme from '../../theme';
import { flexbox } from '../../utils';

export const ServiceContainer = styled.section`
  padding: 20px;
  color: ${theme.colors.black1};

  .service-title {
    margin-bottom: 20px;

    h1 {
      line-height: 1.3;
      ${theme.H5};
      color: #373838;
    }

    span {
      ${theme.Button2};
      font-family: 'NotoM';
    }
  }

  .service-bg {
    margin-bottom: 20px;

    img {
      width: 100%;
    }
  }

  .service-desc {
    margin-bottom: 15px;
    ${theme.Body1};
  }

  .service-btn-wrap {
    ${flexbox()};
    margin-bottom: 25px;

    button:first-child {
      margin-right: 10px;
    }
  }

  hr {
    margin-bottom: 30px;
    border: 1px solid ${theme.colors.grey6};
  }

  .service-plan {
    h2 {
      margin-bottom: 10px;
      ${theme.H5};
    }

    h3 {
      margin-bottom: 4px;
      ${theme.Body1};
    }

    li {
      position: relative;
      padding-left: 15px;
      ${theme.Body2};

      &:before {
        display: block;
        content: '';
        position: absolute;
        top: 6px;
        left: 5px;
        width: 3px;
        height: 3px;
        background: ${theme.colors.black1};
      }
    }
  }
`;
