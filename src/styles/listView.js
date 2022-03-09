import { MaskedTextBox as KendoMaskedTextBox } from '@progress/kendo-react-inputs';
import styled, { css } from 'styled-components';
import theme from './theme';
// images
import greyArrow from '../images/account/grey-arrow.svg';

export const Container = styled.div`
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.position ? `position: ${props.position};` : '')}
  .allCenter {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .columnCenter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  margin: ${(props) => (props.margin ? props.margin : '1.8rem 0 0 0')};
  border-top: ${(props) => (props.borderTop ? props.borderTop : `1px solid ${theme.colors.grey3}`)};
  ${(props) => (props.position ? `position: ${props.position};` : '')}
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.overflow ? `overflow: ${props.overflow};` : '')}
`;

export const Wrap = styled.div`
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
`;

export const Scroller = styled.div`
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.marginLeft ? `margin-left: ${props.marginLeft};` : '')}
	overflow-x: scroll;
  overflow-y: hidden;
  padding-bottom: 5px;
`;

export const Table = styled.div`
  text-align: center;
  border: none;
  font: normal 13px Arial, sans-serif;
`;

export const Tr = styled.div`
  display: flex;
  align-items: center;
  height: ${(props) => (props.height ? props.height : '50px')};

  ${(props) => (props.direction ? `flex-direction: ${props.direction};` : '')}
  ${(props) => (props.align ? `justify-content: ${props.align};` : '')}
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.background ? `background-color: ${props.background};` : '')}
  ${(props) => (props.borderBottom ? `border-bottom: ${props.borderBottom};` : '')}

  &.table-head {
    ${theme.Title};

    .Ts {
      background-color: ${theme.colors.midGrey};
    }
  }

  &.table-body {
    .Ts {
      font-size: 14px;
      font-family: 'NotoR';
      color: ${(props) => (props.color ? props.color : ` ${theme.colors.black2}`)};

      &.underline {
        color: ${theme.colors.lapis};
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

export const Th = styled.div`
  height: ${(props) => (props.height ? props.height : '50px')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '48px')};
  ${(props) => (props.display ? `display: ${props.display};` : '')}
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems};` : '')}
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}  
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : '')}
  ${(props) => (props.borderBottom ? `border-bottom: ${props.borderBottom};` : '')}
  ${(props) => (props.align ? `justify-content: ${props.align};` : '')}
`;

export const Td = styled.div`
  height: 50px;
  line-height: 29px;
  padding: 10px;
  font-family: NotoR;
  font-size: 14px;
  color: ${theme.colors.black2};
  white-space: nowrap;

  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.lineHeight ? `line-height: ${props.lineHeight};` : '')}
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.borderRight ? `border-right: ${props.borderRight};` : '')}
  ${(props) =>
    props.borderBottom
      ? `border-bottom: ${props.borderBottom};`
      : `border-bottom: 1px solid ${theme.colors.grey4};`}
`;

export const Ts = styled.div`
  position: absolute;
  top: ${(props) => (props.top ? props.top : 'auto')};
  height: ${(props) => (props.height ? props.height : '50px')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '48px')};

  ${(props) => (props.display ? `display: ${props.display};` : '')}
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems};` : '')}
  ${(props) => (props.align ? `justify-content: ${props.align};` : '')}
  ${(props) => (props.left ? `left: ${props.left};` : '')}  
  ${(props) => (props.paddingLeft ? `padding-left: ${props.paddingLeft};` : '')}
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.fontFamily ? `font-family: ${props.fontFamily};` : '')}
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize};` : '')}
  ${(props) => (props.textDecoration ? `text-decoration: ${props.textDecoration};` : '')}
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.background ? `background-color: ${props.background};` : '')}
  ${(props) => (props.borderLeft ? `border-left: ${props.borderLeft};` : '')}
  ${(props) => (props.borderRight ? `border-right: ${props.borderRight};` : '')}
  ${(props) =>
    props.borderBottom
      ? `border-bottom: ${props.borderBottom};`
      : `border-bottom: 1px solid ${theme.colors.grey4}`}

  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : '')}
`;

export const Title = styled.h1`
  margin-bottom: 1.3em;
  ${theme.H3};
  color: ${theme.colors.black1};
`;

export const SearchForm = styled.section`
  padding: 30px;
  width: 1348px;
  border: 2px solid ${theme.colors.grey4};
  border-radius: 3px;
  background-color: ${theme.colors.midGrey};

  .search-first-row {
    display: flex;
    border-bottom: 2px solid ${theme.colors.grey4};
    p,
    label {
      ${theme.Button1};
      color: ${theme.colors.grey1};
    }
    .search-status {
      margin-right: 1.3em;
    }
  }

  .search-checkbox-wrap {
    label {
      display: inline-flex;
      align-items: center;
      margin-right: 1em;
      &:last-child {
        position: relative;
        margin-right: 6em;
        &:after {
          position: absolute;
          display: block;
          content: '';
          right: -3.2em;
          width: 2px;
          height: 2.5em;
          background-color: ${theme.colors.grey4};
        }
      }
    }
    input {
      margin-right: 0.8em;
    }
  }
  .search-select-wrap {
    display: flex;
    position: relative;

    .search-select {
      display: flex;
      p {
        margin-right: 0.8em;
      }
      .styled-select {
        transform: translateY(-30%);
      }
    }

    &:before {
      position: absolute;
      display: block;
      content: '';
      top: -10px;
      left: -30px;
      width: 2px;
      height: 2.5em;
      background-color: ${theme.colors.grey4};
    }
  }
  /* search-first-row end */
  .search-second-row {
    display: flex;
    align-items: center;
    margin-top: 1em;

    .DateInputBox {
      display: flex;

      .findidinput {
        margin: 0;
        padding: 10px 10px 10px 1.2em;
        width: 120px !important;
        border: 1px solid ${theme.colors.grey4};
        border-radius: 3px;
      }

      .first-input {
        position: relative;
        margin-right: 2em;

        &:after {
          position: absolute;
          display: block;
          content: '';
          transform: translateY(7px);
          right: -1.5em;
          width: 10px;
          height: 1px;
          background-color: ${theme.colors.grey1};
        }
      }

      .k-textbox {
        padding-left: 0;
        ${theme.Body1};
        border: none;
      }
    }

    .styled-select {
      margin-left: 10px;
      width: 120px;
    }

    .refresh-img {
      margin-right: 1em;
      cursor: pointer;
      transform: translateY(2px);
      
      img {
        width: 39px;
        height: 39px;
      }
    }

    .search {
      margin-right: 10px;
      padding: 0 10px;
      height: 40px;
      border-radius: 3px;
    }

    .search-input {
      width: 280px;
      height: 40px;
      margin-right: 10px;
      padding-left: 10px;
      color: ${theme.colors.black1};
      ${theme.Body1};
      border: 1px solid ${theme.colors.grey4};
      border-radius: 3px;

      ::placeholder {
        ${theme.Body1};
        color: ${theme.colors.grey3};
      }
    }

    .btn_14 {
      margin-right: 1.5em;
    }

    .btn_15,
    .btn_16 {
      margin-right: 10px;
    }

    .btn_15.not,
    .btn_01.not {
      cursor: not-allowed;
    }
  }
  /* search-second-row end */
`;

export const StyledSelect = styled.div`
  width: 140px;
  height: 40px;
  margin-right: 0.8em;
  color: ${theme.colors.grey2};
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.grey4};
  border-radius: 3px;
  p {
    ${theme.Body1};
  }
  select {
    width: 100%;
    padding: 10px;
    ${theme.Body1};
    background: url('${greyArrow}') no-repeat 95% 50%;
    border-radius: 3px;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }
`;

export const StyledSelect2 = styled.div`
  width: ${(props) => (props.width ? props.width : '140px')};
  height: ${(props) => (props.height ? props.height : '32px')};
  color: ${theme.colors.grey2};
  background-color: ${theme.colors.boxGray};

  p {
    ${theme.Body2};
  }

  select {
    width: 100%;
    padding: 7px 20px 5px 10px;
    ${theme.Body2};
    background: url('${greyArrow}') no-repeat 88% 48%;
    border-radius: 3px;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }
`;

export const DateInputBox = styled.div`
  position: relative;

  ${(props) => {
    if (props.hp) {
      return css`
        .k-textbox {
          background-color: ${theme.colors.grey3};
          border: none !important;
          border-bottom: 1px solid ${theme.colors.grey1} !important;
          color: ${theme.colors.grey1} !important;
        }
      `;
    }
  }}

  p {
    z-index: 1;
    position: absolute;
    top: 22%;
    left: 20px;
    ${theme.Body2};
    color: ${(props) =>
      props.className === 'is-active'
        ? 'rgb(254,71,71)'
        : // eslint-disable-next-line no-template-curly-in-string
          '${theme.colors.grey2}'};
    border: none !important;
    cursor: default;
  }
  .findidinput {
    margin: 0 0 40px 0;
    border-bottom: none;
    ::placeholder {
      width: 181px;
      color: ${theme.colors.grey3};
      font-size: ${(props) => (props.type === 'password' ? '24px' : '14px')};
      line-height: 1.15;
      text-align: left;
    }

    .is-active {
      color: ${theme.colors.red};
      font-weight: 500;
      font-family: NotoM;
      border: 1px solid ${theme.colors.red};
    }
  }

  .error-red {
    position: absolute;
    bottom: 14px;
    right: 0;
    color: ${theme.colors.red};
    font-size: 12px;
    font-family: 'NotoR';
  }
`;

export const DateInput = styled(KendoMaskedTextBox)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  background-color: #ffffff;
  padding-left: ${(props) => props.paddingleft};
  opacity: 1 !important;
  text-underline-position: none;

  &.input-disabled {
    input {
      color: ${theme.colors.grey3} !important;
      cursor: not-allowed;
    }
  }

  .is-active {
    color: ${theme.colors.red};
    font-weight: 500;
    font-family: NotoM;
    border: 1px solid ${theme.colors.red};
  }

  .k-textbox {
    border: 0.5px solid #f1f2f2;
    border: ${(props) =>
      props.className === 'is-active findidinput'
        ? ' 0.5px solid #fe4747'
        : ' 0.5px solid #f1f2f2 '};

    border-radius: 0;
    height: auto;
    text-align: ${(props) => (props.textalign ? props.textalign : '')};
    font-size: 14px;
    padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : '40%')};
    box-shadow: none !important;
    color: ${(props) => (props.className === 'is-active findidinput' ? '#fe4747' : '#000 ')};
    font-family: NotoR;
    ::placeholder {
      font-size: 14px;
      color: ${theme.colors.grey3}!important;
      font-family: NotoR;
      letter-spacing: normal;
    }
  }

  .k-textbox::placeholder {
    text-align: ${(props) => (props.textalign ? props.textalign : '')};
  }

  :hover {
    border-color: rgba(0, 0, 0, 0.15);
    color: #656565;
    background-color: #ffffff;
  }

  .k-textbox:disabled {
    /* border: solid 1px #e2e2e2; */
    background-color: rgba(239, 239, 239, 0.9);
    border: 1px solid #f1f2f2;
    color: #4b4b4b;
  }

  ::placeholder {
    font-family: NotoR;
    ${theme.Body1}
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;

    letter-spacing: normal;

    padding: 13px 15.3px 12px 0px;

    color: ${theme.colors.grey3};
  }
  :focus {
    outline: none;
    box-shadow: none !important;
    border-color: none;
  }
`;

export const PagerWrap = styled.div`
  position: relative;

  .k-pager-wrap {
    justify-content: center;
    padding: 12px 8px;
    width: 1348px;
  }
  .k-pager-numbers li {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
  .k-pager-info {
    display: none;
  }
  .k-pager-numbers .k-link.k-state-selected {
    color: ${theme.colors.lapis};
  }
  .k-pager-numbers .k-link {
    line-height: 24 !important;
    ${theme.Button1};
    color: ${theme.colors.grey1};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.grey1};
    &:hover {
      color: ${theme.colors.black1};
      background-color: ${theme.colors.grey4};
    }
  }
  .k-pager-numbers-wrap {
    margin-right: 10px;
  }
  .k-pager-nav {
    border: 1px solid ${theme.colors.grey3};
    margin-right: 10px;
  }
  .input-wrap {
    position: absolute;
    display: flex;
    align-items: center;
    top: 13px;
    right: 2%;

    input {
      margin-right: 7px;
      border: 1px solid ${theme.colors.grey3};
    }

    .rows {
      margin-right: 0.7em;
      padding: 0;
      width: 56px;
      height: 40px;
      text-align: center;
      border: 1px solid ${theme.colors.grey3};

      ::placeholder {
        color: ${theme.colors.black1};
      }
    }
    span {
      ${theme.Body1};
      color: ${theme.colors.black1};
    }
  }
`;
