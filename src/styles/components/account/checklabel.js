import styled, { css } from 'styled-components';
import theme from '../../theme';
import { flexbox } from '../../utils/flexbox';
// images


export const LabelContainer = styled.div`
  position: relative;
  ${flexbox('start')};

  .check-title {
    ${theme.Title};
    padding-left: 25px;
  }

  &.underline {
    .check-title {
      text-decoration: underline;
    }
  }
`;

export const Label = styled.label`
  position: absolute;

  input {
    display: none;
  }
`;

