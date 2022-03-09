import styled, { css } from 'styled-components';
import theme from '../../theme';
import { flexbox } from '../../utils/flexbox';
// images

export const StatusContainer = styled.div`
  .phone-status {
    margin-top: 20px;
    padding: 5px 0;
    ${theme.Button2};
    text-align: center;
    color: ${theme.colors.black1};
    background: ${theme.colors.grey4}; 
    border-radius: 10px;

    span {
      ${theme.Button2};
      font-family: 'NotoM';
      margin-right: 10px;
    }
  }

  dl {
    ${flexbox()};
    
    div {
      position: relative;
      ${flexbox()};
      flex: 1 0 0;
      max-width: 60px;
      text-align: center;

      &:after {
        content: '';
        position: absolute;
        display: block;
        top: 4%;
        right: 0;
        width: 1px;
        height: 12px;
        background-color: ${theme.colors.black1};
      }

      &:last-child {
        &:after {
          width: 0;
        }
      }
    }
  }

  dt {
    strong {
      margin-right: 3px;
    }
  }

  dd, dt {
    ${theme.Button2};
    font-family: 'NotoM';
  }
`;