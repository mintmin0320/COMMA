import styled from 'styled-components';
import theme from '../../theme';
import { flexbox, inlineFlexbox } from '../../utils/flexbox';
// images
import mainBg from '../../../images/mobile/home/insu-main-bg.jpg';
import { positionCenterY } from '../../utils/position';

export const CarHomeContainer = styled.section`
  position: absolute;
  top: -20px;

  .insu-head {
    position: relative;
    margin: 0 -20px 25px;
    z-index: 99999;

    &-bg {
      img {
        display: block;
        width: calc(100% + 20px);
        height: 100%;
        margin-left: -10px;
        object-fit: cover;
      }
    }

    &-txt {
      ${positionCenterY()};
      padding: 0 20px;

      p {
        ${theme.Button2};
      }

      h2 {
        ${theme.Title};
        font-family: 'NotoB';
      }
    }
  }

  padding: 20px;

  .car-title {
    ${theme.H5};
    color: #373838;
  }
`;
