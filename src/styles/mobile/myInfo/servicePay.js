import styled from 'styled-components';
import theme from '../../theme';
import { flexbox, inlineFlexbox } from '../../utils';

export const ServicePayContainer = styled.section`
  padding: 20px;
  color: #373838;

  .service-title {
    ${theme.H5};
    margin-bottom: 20px;
  }
`

export const Inner = styled.section`
  padding: 20px;
  ${theme.Body1}
  color: ${theme.colors.grey1};
`