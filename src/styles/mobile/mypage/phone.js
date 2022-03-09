import styled from 'styled-components';
import theme from '../../theme';
import { flexbox, inlineFlexbox } from '../../utils/flexbox';

export const PhoneContainer = styled.section`
  .phone-title {
    ${theme.H5};
    color: #373838;
  }
`;

export const PhoneInner = styled.section`
  padding: 20px;
`;


export const PhoneHeadSection = styled.div`
  margin-top: 70px;
  padding: 10px 30px;
  background-color: ${theme.colors.boxGray};

  .phone {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid ${theme.colors.boxGray};

    &-section-01 {
      flex: 1;
      margin: auto;

      .phone-kind {
        margin-right: 5px;
        white-space: nowrap;
        ${theme.Title};
      }
    }

    &-section-02 {
      position: relative;
      ${flexbox()};

      .phone-max-point {
        position: absolute;
        bottom: 0;
        right: 50px;
        min-width: 130px;
        padding: 5px 10px;
        ${theme.SubTitle1};
        text-align: center;
        color: ${theme.colors.white};
        background: #787878;
        border-radius: 19px;
      }
    }
  }
`;
