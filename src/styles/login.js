import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  @media ${({ theme }) => theme.device.mobile} {
    background-color: #fafafa;
    padding-top: 100px;
    padding-bottom: 38px;
  }

  @media ${({ theme }) => theme.device.desktop} {
    height: 800px;
    align-items: center;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px;
  margin-top: 10px;
  color: #666666;
  font-size: 0.8em;

  @media ${({ theme }) => theme.device.mobile} {
    width: 80%;
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: 350px;
  }
`;

export const Paper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px rgba(50, 50, 93, 0.11), 0 1px 2px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;

  @media ${({ theme }) => theme.device.mobile} {
    width: 85%;
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: 350px;
  }
`;

export const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1.2em;
  font-weight: 600;
  color: #e76108;
  margin-bottom: 5px;
`;

export const Cell = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 5px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

export const FindButton = styled(Link)`
  color: #222;
`;
