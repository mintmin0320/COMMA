import styled from 'styled-components';
import theme from '../theme';

export const GlobalRadio = styled.div`

  .global-radio-title {
    ${theme.SubTitle2};
    color: ${theme.colors.gray1};
  }

  .global-radio-content {
    display: flex;
    margin: ${(props) => props.margin};
    color: ${theme.colors.black1};
  }

  .global-radio-wrap {
    margin: ${(props) => props.wrapMargin ? props.wrapMargin : '10px'};
  }

  .svg {
    margin-right: 10px;
  }

  label {
    display: flex;
    align-items: center;
    width: auto;
    ${theme.H5};
  }

  input {
    display: none;
  }

  .global-radio-help {
    ${theme.Button2};
    color: ${theme.colors.grey3};
  }

  /* kind */

  &.radio-text-underline {

    .radio-item {
      ${theme.Title};
      text-decoration: underline;
    }
  }
`;
