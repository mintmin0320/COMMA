import styled from 'styled-components';
import theme from '../../theme';
import { flexbox, inlineFlexbox } from '../../utils/flexbox';

export const PhoneSimpleContainer = styled.section`
  padding: 20px;

  .phone-title {
    margin-bottom: 20px;
    ${theme.H5};
    color: #373838;
  }

  .agreeModal {
    width: 100%;
    height: 100vh;
    /* overflow: auto; */
    position: absolute;
    z-index: 99;
    padding-top: 100px;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;

    .agree-box {
      width: 90%;

      .agree-info {
        font-family: NoToR;
        font-size: 15px;
        line-height: 22px;

        .agree-info-div {
          display: flex;
          height: 84px;
          .agree-info-div-1 {
            width: 40%;
            background: #f2f2f2;
            padding: 20px 0 0 10px;
          }
          .agree-info-div-2 {
            width: 60%;
            padding: 20px 0 0 10px;
          }
        }
      }

      .close {
        text-align: right;
        margin-top: 20px;
      }

      h1 {
        font-family: NoToM;
        font-size: 15px;
        line-height: 22px;
        margin: 40px 0;
      }
    }
  }
`;
