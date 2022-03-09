import { Input } from '@progress/kendo-react-inputs';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import theme from './theme';

export const ScrollContainer = styled.div`
  overflow: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Container = styled.div`
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}

   // ComboBox css
   .k-combobox.k-combobox-clearable .k-input {
    padding-right: 0;
  }
  .k-input {
    ${theme.Body1};
    color: ${theme.colors.black1};
    select {
      ${theme.Body1};
    }
  }
  .k-clear-value {
    display: none;
  }

  .title {
    margin: 20px 0 40px !important;
    ${theme.H3}
  }
`;

export const Wrap = styled.div`
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}

  @media ${({ theme }) => theme.device.desktop} {
    ${(props) => (props.DeskPadding ? `padding: ${props.DeskPadding};` : '')}
  }
`;

export const Table = styled.div`
  background: #fff;
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.background ? `background: ${props.background};` : '')}
  ${(props) => (props.borderTop ? `border-top: ${props.borderTop};` : '')}
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
`;

export const Tr = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${(props) => (props.direction ? `flex-direction: ${props.direction};` : '')}
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.background ? `background: ${props.background};` : '')}
  ${(props) =>
    props.borderTop
      ? `border-top: ${props.borderTop};`
      : `border-top: 1px solid ${theme.colors.grey4};`}
  ${(props) =>
    props.borderBottom
      ? `border-bottom: ${props.borderBottom};`
      : `border-bottom: 1px solid ${theme.colors.grey4};`}
  ${(props) =>
    props.marginBottom ? `margin-bottom: ${props.marginBottom};` : 'margin-bottom: 4.5em;'}

  @media ${({ theme }) => theme.device.mobile} {
    ${(props) => (props.MobileMargin ? `margin: ${props.MobileMargin};` : '')}
  }
`;

export const Th = styled.div`
  display: flex;
  font-size: 0.9em;
  color: #000000;
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.background ? `background: ${props.background};` : '')}
  ${(props) => (props.align ? `justify-content: ${props.align};` : '')}
`;

export const Td = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${theme.Body1};
  color: ${theme.colors.black1};
  ${(props) => (props.overflow ? `overflow: ${props.overflow};` : '  overflow: hidden;')}

  ${(props) => (props.direction ? `flex-direction: ${props.direction};` : '')}
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : 'height: 50px;')}
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.background ? `background: ${props.background};` : '')}
  ${(props) => (props.weight ? `font-weight: ${props.weight};` : '')}
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize};` : '')}
  ${(props) => (props.align ? `justify-content: ${props.align};` : '')}
  ${(props) => (props.valign ? `align-items: ${props.valign};` : '')}
  ${(props) =>
    props.borderBottom
      ? `border-bottom: ${props.borderBottom};`
      : `border-bottom: 1px solid ${theme.colors.grey4};`}

  @media ${({ theme }) => theme.device.mobile} {
    ${(props) => (props.display ? `display: ${props.display};` : '')}
  }

  .infoBox {
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    ${theme.Body1};
    border: 1px solid #e3e3e3;
    -ms-overflow-style: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }
  p {
    ${theme.Body1};
    padding: 5px 0 5px 10px;
  }

  .input_box {
    display: flex;
    align-items: center;
    padding: 0.5em 1em;
    width: 100%;
    height: 95%;
    font-size: 13px;
    line-height: 1.5em;
  }

  // date

  .input-date {
    ${theme.Body1};
    border: 1px solid ${theme.colors.grey4};
    border-radius: 3px;
    padding: 4px 0px 4px 8px;
    ::placeholder {
      ${theme.colors.grey3}
    }
  }
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
  display: flex;
  align-items: center;
  ${theme.Button1};
  color: ${theme.colors.black1};
  background-color: ${isMobile ? `${theme.colors.midGrey}` : `${theme.colors.boxGray}`};
  padding: ${(props) => (props.padding ? `${props.padding}` : '15px 0 15px 20px')};
  margin: ${(props) => props.margin && `${props.margin}`};
  ${(props) => (props.width ? `min-width: ${props.width};` : 'width: 130px')}
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
  justify-content: flex-end;
  width: 100%;
  margin-top: 10px;
  padding-right: 5px;

  @media ${({ theme }) => theme.device.mobile} {
    justify-content: center;
    ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  }
`;

export const SmallButtonWrap2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  padding-right: 5px;

  .button-cover {
    display: flex;
  }

  @media ${({ theme }) => theme.device.mobile} {
    justify-content: center;
    ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
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

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  ${(props) => (props.margin ? `margin: ${props.margin};` : 'margin: 0 0 0.8em 0')}
`;

export const Title = styled.div`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : `${theme.fontSizes.H5}`)};
  font-family: NoToM;
  color: ${theme.colors.black1};
  ${(props) => (props.margin ? `margin: ${props.margin};` : 'margin: 0 0 1em 0')};

  .sub-title {
    margin-top: 10px;
    ${theme.Body1};
  }
`;

export const TextareaWrap = styled.div`
  display: flex;
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

export const FooterWrap = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 957px;
`;
