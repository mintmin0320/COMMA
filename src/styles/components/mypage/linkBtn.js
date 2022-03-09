import styled, { css } from 'styled-components';
import theme from '../../theme';
import { flexbox } from '../../utils/flexbox';

export const LinkBtnSection = styled.div`
  margin-top: 30px;

  h2 {
    ${theme.Caption};
    color: ${theme.colors.grey1};
    margin-bottom: 5px;
  }
`;