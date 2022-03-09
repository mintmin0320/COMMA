import styled from 'styled-components';
import theme from '../../theme';
import { flexbox } from '../../utils';

export const ConciergeContainer = styled.section`
  padding: 20px;

  .concierge-title {
    ${theme.H5};
    color: #373838;
  }

  .concierge-footer {
    ${flexbox('between')};
    margin-top: 150px;
    margin-bottom: 20px;
    padding: 20px;
    background: ${theme.colors.boxGray};
    border-radius: 4px;

    .concierge-left {
      .txt1 {
        margin-bottom: 3px;
        ${theme.Button2};
      }

      .txt2 {
        ${theme.Title};
      }
    }

    .concierge-right {
      ${theme.Caption};

      span {
        margin-right: 6px;
      }
    }
  }
`;

export const ConciergeHead = styled.div`
  ${flexbox('between')};
  padding: 10px 40px;
  color: ${theme.colors.black1};
  background: #f5f5f5;

  .concierge-head-txt {
    h2 {
      ${theme.Title};
    }

    p {
      ${theme.Button2};
    }
  }
`;
