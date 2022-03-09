import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.section`
  padding: 30px 20px;

  .join-title {
    ${theme.H5};
    margin-bottom: 20px;
  }

  .certifyNo__box {
    margin-bottom: 110px;

    .count {
      .count__start {
      }
      .count__end {
        margin-top: 8px;
        text-align: center;
        ${theme.Body2};
        text-decoration: underline;
        color: ${theme.colors.newblue};
      }
    }
  }
`;
