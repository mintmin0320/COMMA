import styled, { css } from 'styled-components';
import theme from '../../theme';
import { flexbox } from '../../utils/flexbox';
// images

export const PointInfoContainer = styled.div`

  .point-list {
    ${flexbox('between')};
    margin-bottom: 20px;
    padding: 20px;
    background-color: ${theme.colors.grey6};
    border-radius: 10px;

    .detail-left {
      ${flexbox()};
      ${theme.Body1};

      svg {
        margin-right: 20px;
      }

      .date {
        margin-bottom: 5px;
      }
    }

    .detail-point {
      span, strong {
        ${theme.Title};
      }

      span {
        margin-right: 15px;
      }

      .minus {
        color: ${theme.colors.grey3};
      }

      .plus {
        color: ${theme.colors.newblue};
      }
    }
  }
`;