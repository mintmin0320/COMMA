import styled from 'styled-components';
import theme from '../../theme';

export const MyInfoHomeContainer = styled.section`
  position: relative;
  top: -56px;
  z-index: 99999;

  .myinfo-profile {
    padding-top: 30px;
    background-color: #f6f9ff;
  }

  @media ${({ theme }) => theme.device.desktop} {
    padding-top: 50px;
  }
`;

export const MyInfoHomeInner = styled.div`
  padding: 20px;

  .myinfo-title {
    ${theme.H5};
    color: #373838;
  }

  .myinfo-foot-logout {
    width: 100%;
    margin-top: 40px;
    text-align: center;

    button {
      ${theme.Body1};
      outline: 0;
      border: 0;
      color: ${theme.colors.black1};
      background: transparent;
      text-decoration: underline;
    }
  }
`;
