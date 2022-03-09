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
`;

export const Wrap = styled.div`
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
`;

export const Table = styled.div`
  background: #fff;

  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.background ? `background: ${props.background};` : '')}
`;

export const Tr = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 2px;
  border-bottom: 1px solid ${theme.colors.boxGray};
  z-index: 3;
  ${(props) => (props.direction ? `flex-direction: ${props.direction};` : '')}
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.color ? `color: ${props.color};` : '')}
  ${(props) => (props.background ? `background: ${props.background};` : '')}
  ${(props) => (props.align ? `justify-content: ${props.align};` : '')}
  ${(props) => (props.checkedBg ? 'background-color: rgba(104, 140, 211, 0.1);' : '')}
  ${(props) => (props.urlIsChanged ? 'background-color: rgba(104, 140, 211, 0.1);' : '')}
`;

export const Th = styled.div`
  display: flex;
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
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}

  &.non-payment {
    color: ${theme.colors.brick};
  }

  .not-allowed {
    cursor: not-allowed;
  }

  &.text-ellipsis {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
  justify-content: flex-end;
  width: 100%;
  margin-top: 10px;
  padding-right: 5px;
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
  width: 100%;
  font-size: 0.9em;
  font-weight: 600;
  color: #666666;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
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
