import styled from 'styled-components';
import theme from '../theme';

export const GlobalHeaderBack = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 56px;
  background-color: ${({ bgColor }) => bgColor ?? 'white'};
  z-index: 100000;

  .header-back {
    position: absolute;
    top: 10px;
    left: 18px;
    padding: 10px;
  }

  @media ${({ theme }) => theme.device.desktop} {
    display: none;
  }
`;
