import styled from 'styled-components';
import theme from '../theme';

export const GlobalInput = styled.div`
  /* common */
  margin: ${(props) => (props.margin ? props.margin : '')};

  .global-input-title {
    ${theme.Caption};
    color: ${theme.colors.grey1};
    line-height: 2;
  }

  .global-input-wrap {
    position: relative;
  }

  .global-input-place {
    display: flex;
    ${theme.H5};
    color: ${theme.colors.grey1};
    z-index: 1;

    width: ${(props) => (props.width ? props.width : '100%')};
    height: ${(props) => (props.height ? props.height : '44px')};
    padding: ${(props) => (props.padding ? props.padding : '0 0 0 10px')};
    font-size: ${(props) => props.fontSize && props.fontSize};

    border: ${(props) => (props.border ? props.border : `1px solid ${theme.colors.grey3}`)};
    border-radius: ${(props) => (props.radious ? props.radious : '4px')};

    :focus {
      caret-color: ${(props) =>
        props.cursorColor
          ? props.cursorColor
          : `${theme.colors.newblue}`}; // caret(input cursor) 색상 변경
      border: ${(props) =>
        props.errorIcon
          ? `1px solid ${theme.colors.red}`
          : props.focusBorder
          ? props.focusBorder
          : `1px solid ${theme.colors.newblue}`};
    }

    &:disabled {
      ${theme.Title};
      color: ${theme.colors.grey3};
      background: ${theme.colors.grey6};
    }

    ::placeholder {
      ${theme.Title};
      color: ${theme.colors.grey3};
    }

    img {
      margin-right: 5px;
    }
  }

  .message {
    position: absolute;
    margin-top: 5px;
    line-height: 2.4;
    ${theme.Button2};
    color: ${theme.colors.grey3};

    &.error-message {
      color: ${theme.colors.red};
    }
  }

  .global-input-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 13px;

    &.search {
      right: 3px;
    }

    .search-remove {
      padding: 10px 5px 10px 10px;
    }

    .search-submit {
      padding: 10px;
    }
  }

  input[type='password'] {
    font-family: 'pass', 'Roboto', Helvetica, Arial, sans-serif;
    font-size: 25px;
    letter-spacing: -3px;

    &::-webkit-input-placeholder {
      transform: scale(0.77);
      transform-origin: 0 50%;
    }

    &::-moz-placeholder {
      font-size: 14px;
      opacity: 1;
    }

    &:-ms-input-placeholder {
      font-size: 14px;
      font-family: 'Roboto', Helvetica, Arial, sans-serif;
    }
  }
  /* common end */

  /****************************** kind ********************************** */

  /* error */
  &.global-input-error {
    .global-input-title {
      color: ${theme.colors.red};
    }

    .global-input-place {
      border-color: ${theme.colors.red};
    }
  }
`;
