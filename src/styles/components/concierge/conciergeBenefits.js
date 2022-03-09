import styled, { css } from 'styled-components';
import theme from '../../theme';
import { flexbox } from '../../utils/flexbox';
// images

export const BenefitsContainer = styled.div`
  padding: 20px;

  .benefit-title {
    margin-bottom: 30px;
    ${theme.H5};
    color: #373838;
  }

  .benefit-kind-wrap {
    color: ${theme.colors.black1};

    h2 {
      margin-bottom: 5px;
      ${theme.Body1};
    }

    p {
      ${theme.Body2};
    }
  }

  .benefit-img {
    margin-top: 10px;
    margin-bottom: 50px;

    img {
      width: 100%;
    }
  }
`;
