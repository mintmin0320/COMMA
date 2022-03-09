import theme from '../theme';
import styled from 'styled-components';
// image
import greyArrow from '../../images/account/grey-arrow.svg';

export const Container = styled.div`
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.display ? `display: ${props.display};` : 'flex;')}
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}


  flex-direction: column;
  align-items: center;
  .pagerBox {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    .inputPager {
      width: 56px;
      height: 40px;
      position: absolute;
      display: flex;
      align-items: center;
      right: 30px;
      font-family: NoToR;
      font-size: ${theme.fontSizes.Body1};
      color: ${theme.colors.black1};
      span {
        padding-left: 10px;
      }
    }
  }
  // kendo 페이징 css
  .k-dropdown {
    display: none !important;
  }
  .k-pager-sm .k-pager-numbers-wrap {
    margin-left: 0.3em;
    margin-right: 0.3em;
  }
  .k-pager-numbers {
    display: block;
    &.k-reset {
      li {
        margin-right: 6px;
        border: 1px solid ${theme.colors.grey1};
        transform: translateY(-1px);
        &:first-child {
          margin-left: 6px;
        }
        &:last-child {
          margin-right: 8px;
        }
      }
    }
  }
  .k-pager-info {
    display: none;
  }
  .k-pager-wrap {
    display: flex;
    justify-content: center;
    margin: 1em 0 1em;
    background-color: ${theme.colors.white};
    border: none;
    width: 100%;
  }
  .k-pager-numbers .k-link.k-state-selected {
    background-color: ${theme.colors.white};
    color: ${theme.colors.lapis};
    font-family: NoToM;
    font-size: 14px;
  }
  .k-state-disabled.k-pager-nav,
  .k-pager-numbers .k-state-disabled.k-link,
  .k-state-disabled.k-pager-refresh {
    border: 1px solid ${theme.colors.grey3};
    margin: 3px;
  }
  .k-pager-numbers .k-link {
    background-color: ${theme.colors.white};
    color: ${theme.colors.grey1};
    font-family: NoToR;
    font-size: 14px;
  }
  .k-pager-nav {
    width: 32px;
    height: 32px;
    border: 1px solid ${theme.colors.grey3};
  }
  .k-pager-first {
    margin-right: 6px;
  }
  .k-pager-last {
    margin-left: 6px;
  }
  @media ${({ theme }) => theme.device.desktop} {
    .k-pager-wrap {
      width: 100%;
      background-color: ${theme.colors.midGrey};
      border-top: 1px solid ${theme.colors.grey3};
      border-bottom: 1px solid ${theme.colors.grey3};
    }
    .k-textbox {
      display: flex;
      border: 1px solid ${theme.colors.grey3};
      color: ${theme.colors.black1};
    }
  }
`;

export const Table = styled.div`
  border-top: 1px solid ${theme.colors.midGrey};
  background: #fff;
  overflow: auto;
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.background ? `background: ${props.background};` : '')}
`;

export const ScrollContainer = styled.div`
  overflow: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Wrap = styled.div`
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
`;

export const StyledSelectPoint = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => (props.width ? ` ${props.width};` : '160px')};
  height: ${(props) => (props.height ? `${props.height};` : '40px')};

  color: ${theme.colors.grey2};
  background-color: ${theme.colors.white};
  /* border: 1px solid ${theme.colors.grey4}; */
  img {
    margin: 0 0.5rem 0 1rem;
  }
  p {
    margin-right: 20px;
    ${theme.Body1};
  }
  select {
    width: 100%;
    padding: 10px;
    ${theme.Body1};
    background: url('${greyArrow}') no-repeat 714% 50%;
    border-radius: 3px;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }
  .p-title {
    ${theme.Button1};
    color: ${theme.colors.grey1};
    margin-right: 20px;
  }
  .p-title2 {
    margin-left: 1rem;
  }
`;

export const StyledSearchButton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => (props.marginBottom ? `${props.marginBottom}` : '')};
  h1 {
    display: flex;
    align-items: center;
    color: ${theme.colors.grey1};
    font-size: ${theme.fontSizes.Body1};
    font-family: NoToB;
  }

  p {
    color: ${theme.colors.lapis};
    font-size: ${theme.fontSizes.Body1};
    font-family: NoToR;
    padding: 0 7px;
  }
`;

export const Tr = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 2px;
  ${(props) => (props.direction ? `flex-direction: ${props.direction};` : '')}
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.background ? `background: ${props.background};` : '')}
  ${(props) => (props.align ? `justify-content: ${props.align};` : '')}
`;

export const Th = styled.div`
  display: flex;
  font-size: 0.9em;
  font-size: ${theme.fontSizes.Body1};
  font-family: NoToM;
  color: #000000;
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.background ? `background: ${props.background};` : '')}
  ${(props) => (props.align ? `justify-content: ${props.align};` : '')}
`;

export const Td = styled.div`
  display: flex;
  font-size: 0.9em;
  font-size: ${theme.fontSizes.Body1};
  font-family: NoToR;
  color: ${theme.colors.grey1};
  ${(props) => (props.direction ? `flex-direction: ${props.direction};` : '')}
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.background ? `background: ${props.background};` : '')}
  ${(props) => (props.weight ? `font-weight: ${props.weight};` : '')}
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize};` : '')}
  ${(props) => (props.align ? `justify-content: ${props.align};` : '')}
  ${(props) => (props.valign ? `align-items: ${props.valign};` : '')}
`;

export const Td2 = styled.div`
  font-size: 0.9em;
  color: #666666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.background ? `background: ${props.background};` : '')}
  ${(props) => (props.weight ? `font-weight: ${props.weight};` : '')}
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize};` : '')}
  ${(props) => (props.align ? `text-align: ${props.align};` : '')}
`;

export const Label = styled.div`
  font-size: 1em;
  line-height: 30px;
  padding-left: 3px;
  margin-right: 2px;
  margin-bottom: 1px;
  background: #f5f5f5;
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
`;

export const CardWrap = styled.div`
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  width: 100%;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 10px;
`;

export const SmallButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.justifyContent ? ` ${props.justifyContent};` : 'flex-end')};
  width: 100%;
  margin-top: 10px;
  padding-right: 5px;
`;

export const StyledSelect = styled.div`
  width: ${(props) => (props.width ? ` ${props.width};` : '140px')};
  height: ${(props) => (props.height ? `${props.height};` : '40px')};
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

export const SmallButton = styled.button`
  border: 1px solid #dcdcdc;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  background: #fff;
`;

export const Title = styled.div`
  margin-bottom: 30px;
  ${theme.H3};
  color: ${theme.colors.black1};
`;

export const TotalView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-family: NoToM;
  border: 2px solid ${theme.colors.turquoise};
  border-radius: 3px;

  section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 30px;
    .title {
      font-size: ${theme.fontSizes.Title};
    }
    .value {
      font-size: ${theme.fontSizes.H5};
      color: ${theme.colors.turquoise};
    }
  }
`;

export const WriterWrap = styled.div`
  display: flex;
  font-size: 0.9em;
  color: #666666;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  margin-right: 10px;
`;

export const SlideWrap = styled.div`
  width: 100%;
  height: auto;
  transition: all 0.5s;
`;

// SearchForm
export const SearchForm = styled.div`
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.backgroundColor ? `background-color: ${props.backgroundColor};` : '')}
  ${(props) => (props.border ? `border: ${props.border};` : '')}
  border-radius: 3px;

  .input-wrap {
    position: relative;

    .search-input {
      width: 100%;
      height: 44px;
      margin-right: 10px;
      margin-bottom: 30px;
      padding-left: 20px;
      color: ${theme.colors.black1};
      ${theme.Body1};
      border: 1px solid ${theme.colors.grey3};
      border-radius: 3px;

      ::placeholder {
        ${theme.Body1};
        color: ${theme.colors.grey3};
      }
    }

    img {
      position: absolute;
      top: 0;
      right: 10px;
      transform: translateY(50%);
    }
  }

  @media (min-width: 760px) {
    display: flex;

    .input-wrap {
      order: 2;
      width: 524px;
      margin-right: 15px;

      .search-input {
        height: 40px;
        margin-bottom: 0px;
      }
    }

    img {
      display: none;
    }

    .web-btn {
      order: 3;
    }
  }
`;

export const CheckboxWrap = styled.div`
  display: flex;

  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.borderBottom ? `border-bottom: ${props.borderBottom};` : '')}

  
  @media (min-width: 760px) {
    order: 1;
    align-items: center;
    ${(props) => (props.margin ? `margin: ${props.margin};` : 'margin: 0 30px 0 0;')}
  }
`;

export const SearchTitle = styled.h2`
  ${theme.Button1};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
`;

// 검색조건 input
export const SearchTerm = styled.div`
  position: relative;
  margin-bottom: 20px;
  padding: 0 2em;
  width: 100%;
  .search-term-btn {
    display: flex;
    position: absolute;
    top: -18px;
    right: 15px;
    padding: 10px;
    transform: translateY(50%);
  }
  span {
    ${theme.Body2};
    color: ${theme.colors.grey1};
  }
  img {
    transform: translateY(-3px);
  }
`;

// 검색조건 모달
export const StyledSelectModal = styled.div`
  z-index: 3;
  position: fixed;
  top: 56px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.6);

  .modal-inner {
    height: 100%;
    padding: 20px 20px 200px;
    border-radius: 20px 20px 0px 0px;
    background-color: ${theme.colors.white};
    overflow-y: auto;
  }
  .modal-close {
    position: absolute;
    top: 27.5 px;
    right: 25px;
  }
  .modal-title-name {
    padding: 0 0 10px 0;
    ${theme.H4}
    text-align: center;
    border-bottom: 1px solid #f1f2f2;
    color: ${theme.colors.black1};
  }
  /* select 창 */
  .select-inner {
    width: 100%;
  }
  .select-section {
    padding-bottom: 20px;
    border-bottom: 1px solid ${theme.colors.boxGray};
  }
  .select-btn-wrap {
    display: flex;

    button {
      margin-right: 8px;
    }
  }
  .search-date {
    display: flex;
    justify-content: space-between;
    position: relative;
    &:after {
      position: absolute;
      display: block;
      content: '';
      top: 48%;
      left: 47.8%;
      width: 15px;
      height: 1px;
      background-color: ${theme.colors.black1};
    }
    input {
      width: 45%;
      height: 40px;
      border: 1px solid ${theme.colors.grey3};
      border-radius: 3px;
    }
  }

  .modal-subtitle-name {
    margin: 20px 0 16px;
    ${theme.Title}
    color:${theme.colors.black1}
  }
  .select-input-wrap {
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
  }
`;

export const GradationBox = styled.div`
  display: flex;
  color: white;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 3px;
  div {
    display: flex;
    font-family: NoToM;
    height: 20px;
    p {
      text-align: left;
      font-size: ${theme.fontSizes.Button1};
      color: ${theme.colors.royalblue};
      margin-right: 16px;
    }

    div {
      width: 103px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: ${theme.colors.white};
      color: ${theme.colors.grey1};
    }
  }
`;
