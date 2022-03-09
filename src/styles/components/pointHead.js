import styled from 'styled-components';
import { animations, flexbox } from '../utils';
import theme from '../theme';

export const PointHeadContainer = styled.div`
  color: #373837;

  hr {
    border: 0.5px solid ${theme.colors.grey4};
  }

  h1 {
    margin-bottom: 20px;
    ${theme.H5};
  }

  .point {
    ${theme.Body1};
  }
`;
