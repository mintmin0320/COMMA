import styled from 'styled-components';
import theme from '../../theme';
import { flexbox } from '../../utils';

export const ApplyListContainer = styled.section`
  padding: 0 20px;

  .concierge-floating-btn {
    position: fixed;
    bottom: 25px;
    width: 100%;
    text-align: center;

    button {
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;
