import styled from "styled-components";
import theme from "../theme";
import { flexbox } from "../utils/flexbox";

export const GlobalSelect = styled.div`
  /* common */
  margin: ${(props) => props.margin ? props.margin : ''};

  .global-select-title {
    ${theme.Caption};
    color: ${theme.colors.grey1};
    line-height: 2;
  }

  .global-select-wrap {
    position: relative;
  }

  .global-select-place {

    ${flexbox('start')};
    ${theme.Title};
    color: ${theme.colors.black1};
    z-index: 1;

    width: ${(props) => props.width ? props.width : '100%'};
    height: ${(props) => (props.height ? props.height : '44px')};
    padding: ${(props) => props.padding ? props.padding : '0 0 0 10px'};
  
    border: ${(props) => props.border ? props.border : `1px solid ${theme.colors.grey3}`};
    border-radius: ${(props) => props.radious ? props.radious : '4px'};

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

  .global-select-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 13px;
  }

  
  input[type="password"] {
    font-family: 'pass', 'Roboto', Helvetica, Arial, sans-serif ;
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
  &.global-select-error {

    .global-select-title {
      color: ${theme.colors.red};
    }

    .global-select-place {
      border-color: ${theme.colors.red};
    }
  }
`;