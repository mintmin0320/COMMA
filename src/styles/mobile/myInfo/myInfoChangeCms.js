import styled from 'styled-components';
import theme from '../../theme';
import { flexbox, inlineFlexbox } from '../../utils';
import { Container, Col, Row } from 'react-bootstrap';

export const ChangeCmsContainer = styled.section`
  padding: 20px;
  color: #373838;

  .change-cms-title {
    ${theme.H5};
    margin-bottom: 37px;
  }

  .los-floating-btn {
    position: fixed;
    bottom: 25px;
    width: 100%;
    text-align: center;

    button {
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
    }
  }
`

export const CmsInner = styled.div`
  padding: 20px;

`

export const StyledContainer = styled(Container)`
  .col-xl-12 {
    margin-top: 2em;
  }

  .cms-status {
    margin-top: 50px;
    margin-bottom: 30px;
    ${theme.Title};
    color: ${theme.colors.black1};
    text-align: center;
    text-decoration: underline;
  }

  .serviceCMS-wrap {
    padding: 30px;
    border: 1px solid ${theme.colors.grey4};
    border-radius: 25px;
  }

  @media (min-width: 576px) {
    max-width: 500px;
    padding: 4em 0 10em;
  }
  @media (min-width: 1200px) {
    max-width: 500px !important;
    padding: 4em 0 10em;

    .cms-status {
      font-size: 20px;
    }
  }
`;
