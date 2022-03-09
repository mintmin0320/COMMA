import styled from 'styled-components';
import theme from '../../../styles/theme';
import checkboxOn from '../../../images/common/checkbox-on.svg';
import checkboxOff from '../../../images/common/checkbox-off.svg';

export const CheckboxWrap = styled.div`
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}

  .checkbox-inner {
    width: ${(props) => (props.width ? ` ${props.width}` : '200px')};
    display: flex;
    flex-wrap: wrap;
    ${(props) => (props.column ? `display:flex;` : '')}
    ${(props) => (props.column ? `flex-direction:column;` : '')}
  }
  label {
    display: inline-flex;
    align-items: center;
    width: ${(props) => (props.labelWidth ? ` ${props.labelWidth}` : '85px')};
    margin-right: 6em;
    margin-bottom: 12px;
    ${theme.Body1};
    color: ${theme.colors.black1};
    overflow: unset;
    white-space: nowrap;
    height: 15px;

    &.checkbox-on {
      background: url(${checkboxOn}) no-repeat 0 1px / contain;
    }

    &.checkbox-off {
      background: url(${checkboxOff}) no-repeat 0 0px / contain;
    }

    p {
      margin-left: 25px;
    }

    @media ${({ theme }) => theme.device.desktop} {
      margin-right: 1em;
    }
  }

  input {
    margin-right: 0.8em;
  }

  input[type='checkbox'] {
    display: none;
  }

  @media ${({ theme }) => theme.device.desktop} {
    .checkbox-inner {
      width: ${(props) => (props.width ? ` ${props.width}` : '100%')};
    }
    label {
      width: ${(props) => (props.labelWidth ? ` ${props.labelWidth}` : 'auto')};
      margin-bottom: ${(props) =>
        props.checkLabelMarginBottom ? ` ${props.checkLabelMarginBottom}` : '0'};
    }
  }
`;
