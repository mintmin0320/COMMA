import styled from 'styled-components';
import theme from './theme';

export const Container = styled.div`
  .k-dialog {
    border-radius: 3px;
  }
  .k-dialog-titlebar {
    background-color: #fff;
    border-bottom: none;
    display: none;
  }

  .k-window-content {
    padding: 0;
    text-align: left;

    p {
      ${theme.Title}
      color:${theme.colors.black1};
      text-align: left !important;
    }
  }

  .k-dialog-buttongroup {
    width: 200px;
    flex: none;
    border-top: none;
    display: flex;
    justify-content: flex-end;
    margin-left: 40%;
    margin-bottom: 20px;
  }

  .k-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px !important;
    width: 74px !important;
    height: 32px !important;
  }

  .k-button:nth-child(1) {
    background-color: ${theme.colors.lapis} !important;
    color: ${theme.colors.white} !important;
    margin-right: 10px;
  }
  .k-button:nth-child(2) {
    background-color: ${theme.colors.white} !important;
    color: ${theme.colors.lapis} !important;
    border: 1px solid ${theme.colors.grey3} !important;
  }
`;

export const Wrap = styled.div`
  .title {
    margin-bottom: 30px;
    ${theme.H3};
    color: ${theme.colors.black1};
  }
`;

export const Title = styled.div`
  margin-bottom: 30px;
  ${theme.H3};
  color: ${theme.colors.black1};
`;

export const Table = styled.div`
  width: 100%;
  height: 100%;
`;

export const Tr = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 1px;
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.desktop} {
    flex-direction: row;
  }
`;

export const Td = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  font-size: 0.9em;
  color: #666666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 50%;
  }
`;

export const Label = styled.div`
  width: 25%;
  font-size: 1em;
  color: rgb(13, 34, 75);
  padding-left: 3px;
  margin-right: 2px;
  margin-top: 5px;
`;

export const Table2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const Tr2 = styled.div`
  width: 100%;
  padding: 1px;
`;

export const Td2 = styled.div`
  float: left;
  font-size: 0.9em;
  color: #666666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 50%;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 10px;
`;

export const SmallButton = styled.button`
  width: 100%;
  height: 30px;
  border: 1px solid #dcdcdc;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  background: #fff;
`;
