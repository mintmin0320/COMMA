import styled from 'styled-components';
import { animations, flexbox } from '../utils';
import theme from '../theme';

export const StatusListContainer = styled.div`
  ${flexbox('between', 'start')};
  min-height: 80px;
  padding: ${({ padding }) => padding ?? '40px 40px 0 40px'};
  ${theme.Title};
  color: ${theme.colors.grey1};

  .status-left {
    ${flexbox('center', 'start')};

    .date {
      margin-right: 15px;
    }

    .status,
    .expire-date {
      margin-top: 5px;
      ${theme.Button2};
    }
  }

  .status-right {
    .plus {
      margin-right: 10px;
      color: ${theme.colors.grey3};
    }
  }
`;
