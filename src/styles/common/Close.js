import styled from 'styled-components';
import theme from '../theme';
import { flexbox } from '../utils/flexbox';

export const GlobalHeaderClose = styled.div`
  position: fixed;
  top: 0;
  right: ${({ right }) => right ?? '0'};
  width: 100%;
  height: 56px;
  background-color: ${({ bgColor }) => bgColor ?? 'white'};
  z-index: 100000;

  .header-close {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px;
  }

  @media ${({ theme }) => theme.device.desktop} {
    display: none;
  }
`;
