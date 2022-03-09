import styled, { css } from 'styled-components';
import theme from '../../theme';
import { flexbox } from '../../utils/flexbox';
// images

export const CardContainer = styled.div`
  padding: 15px 20px 30px;
  background: linear-gradient(76.52deg, #538CFF 0%, #003CCC 71.08%);
  border-radius: 10px;
  color: ${theme.colors.white};

  .card-head {
    ${flexbox('between','start')};
    margin-bottom: 10px;

    &-point {
      p {
        font-size: 7px;
      }

      strong {
        ${theme.H3};
      }
    }
  }

  .card-body {
    margin-bottom: 20px;
    padding: 0;
  }

  .card-foot {
    ${flexbox('between','end')};
    
    &-user-info {
      ${flexbox()};
      
      p {
        margin-bottom: 3px;
        font-size: 7px;
      }

      strong {
        font-size: 10px;
      }

      .id {
        margin-right: 5px;
      }
    }

    &-desc {
      text-align: right;
      ${theme.Body2};
    }
  }
`;