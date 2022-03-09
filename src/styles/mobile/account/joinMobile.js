import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.section`
  padding: 30px 20px;

  .join-title {
    ${theme.H5};
    margin-bottom: 20px;
  }

  .join-recommend-none-btn {
    position: absolute;
    bottom: 100px;
    width: calc(100% - 40px);
  }
`;