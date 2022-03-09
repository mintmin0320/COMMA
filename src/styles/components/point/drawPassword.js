import styled, { css } from 'styled-components';
import theme from '../../theme';
import { flexbox } from '../../utils/flexbox';
// images

export const DrawPasswordContainer = styled.div`
  padding: 20px;

  .draw-title {
    margin-bottom: 20px;

  }

  h1 {
    ${theme.H5};
    color: ${theme.colors.grey1};
  }

  span {
    ${theme.Body1};
    color: ${theme.colors.grey3};

    &.error {
      color: ${theme.colors.red};
    }
  }

  .draw-re-enter {
    margin-top: 30px;
    ${flexbox()};
    text-align: center;
    text-decoration: underline;
    font-size: 18px;
    color: ${theme.colors.black1};
  }

`;