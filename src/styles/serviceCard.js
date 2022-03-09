import styled from 'styled-components';
import theme from '../styles/theme';
import head from '../images/service/service-view-01.svg';

export const Container = styled.section`
  padding: ${(props) => (props.padding ? props.padding : '')};
  height: ${(props) => (props.height ? props.height : '')};
  background-image: ${(props) => (props.bg ? `url(${props.bg})` : '')};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 30%;
  background-color: ${(props) => (props.bgc ? props.bgc : 'white')};
  word-break: keep-all;

  @media ${({ theme }) => theme.device.desktop} {
    height: 100vh;
    width: 375px;
    margin: 0 auto;
    overflow: hidden;
  }

  .service-closebtn-view7 {
    position: absolute;
    top: 50px;
    right: 32px;

    img {
      padding: 10px;
    }
  }
`;

export const Wrap = styled.div`
  padding: ${(props) => (props.padding ? props.padding : '')};
  background-color: ${(props) => (props.bgc ? props.bgc : '')};
  border-radius: ${(props) => (props.bdrs ? props.bdrs : '')};

  &.service-home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
  .service-txt {
    line-height: 28px;
    margin-left: 37px;
    margin-bottom: 30px;
    font-family: 'ElandB';
    font-size: 18px;
    color: rgba(67, 161, 255, 1);
  }
  .service-title {
    margin-bottom: 70px;
    padding: 13px 0 10px;
    line-height: 50px;
    font-family: 'GmB';
    font-size: 40px;
    text-align: center;
    color: rgba(0, 128, 255, 1);
    background-color: white;
  }
  .service-btn {
    width: 100%;
    text-align: center;
    button {
      width: 160px;
      height: 46px;
      line-height: 1;
      font-family: 'ElandB';
      font-size: 20px;
      color: ${theme.colors.white};
      background-color: transparent;
      border: 2px solid ${theme.colors.white};
      border-radius: 3px;
      outline: none;
    }
  }
  /*  btnRef animation */
  .service-btn {
    opacity: 0;
    transition: opacity 700ms;
  }

  .btn-focused {
    opacity: 1;
  }
  /* serviceCard end */
  .view1-title {
    margin-bottom: 40px;
    text-align: center;
    h1 {
      position: relative;
      display: inline-block;
      line-height: 1;
      padding: 20px 10px 14px;
      font-family: 'GmM';
      font-size: 20px;
      color: ${theme.colors.white};
      background-color: ${theme.colors.lapis};
      border-radius: 3px;
      &:before,
      &:after {
        position: absolute;
        display: block;
        content: '';
        top: -50px;
        width: 3px;
        height: 60px;
        background-image: url(${head});
        background-repeat: no-repeat;
        background-size: contain;
      }
      &:before {
        left: 20px;
      }
      &:after {
        right: 20px;
      }
    }
  }
  .view1-wrap {
    padding: 20px 25px;
    background-color: ${theme.colors.white};
  }
  .view1-group {
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
    &-title {
      text-align: center;
      margin-bottom: 15px;
      h3 {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 55px;
        height: 55px;
        padding-top: 3px;
        font-family: 'GmL';
        font-size: 13px;
        color: ${theme.colors.white};
        border-radius: 100%;

        &.first {
          background-color: rgba(119, 216, 254, 1);
        }
        &.second {
          background-color: rgba(3, 166, 255, 1);
        }
        &.third {
          background-color: rgba(0, 128, 255, 1);
        }
      }
    }
    h2 {
      line-height: 28px;
      margin: 0 -10px 10px;
      font-family: 'GmM';
      font-size: 18px;
      text-align: center;
      color: ${theme.colors.black1};
    }
    p {
      position: relative;
      left: 13px;
      margin-bottom: 5px;
      line-height: 20px;
      font-family: 'GmM';
      font-size: 14px;
      color: ${theme.colors.grey2};
      &::before {
        content: '•';
        position: absolute;
        left: -14px;
      }
    }
  }
  /* lottie animation */
  .swiper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
    p {
      position: absolute;
      top: 43%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: NotoM;
      font-size: 20px;
      color: ${theme.colors.white};
    }
  }
  /* serviceView1 end */

  .view2-title h1 {
    line-height: 30px;
    margin-bottom: 20px;
    font-family: 'GmB';
    font-size: 25px;
    text-align: center;
    color: rgba(27, 87, 206, 1);
  }
  .view2-wrap {
    position: relative;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    text-align: center;
    &::before {
      position: absolute;
      content: '';
      display: block;
      top: 24px;
      width: 100%;
      height: 2px;
      background-color: rgba(255, 214, 98, 1);
    }
    img {
      position: relative;
      margin-bottom: 10px;
      z-index: 1;
    }
    p {
      line-height: 16px;
      font-family: 'GmM';
      font-size: 12px;
      color: rgba(64, 63, 63, 1);
    }
  }
  .view2-image {
    text-align: center;
    margin-bottom: 15px;
    img {
      width: 100%;
      object-fit: contain;
      // 이미지 선명하게
      image-rendering: -webkit-optimize-contrast;
      transform: translateZ(0);
      backface-visibility: hidden;
    }
    }
  }
  .view2-tip {
    h2 {
      margin-bottom: 10px;
    }
    p {
      position: relative;
      left: 13px;
      font-family: 'ElandM';
      font-size: 14px;
      line-height: 20px;
      color: #403f3f;
      &::before {
        content: '•';
        position: absolute;
        left: -15px;
      }
      &.first {
        margin-bottom: 6px;
      }
      img {
        position: absolute;
        margin-left: 5px;
      }
    }
    strong {
      color: rgba(27, 87, 206, 1);
      font-family: 'ElandB';
    }
  }

  @media (max-width: 370px) {
    .view2-wrap {
      p {
        font-size: 11px;
      }
    }
  }
  /* serviceView2 end */
  .view3-title {
    line-height: 30px;
    margin-bottom: 20px;
    font-family: 'GmB';
    font-size: 25px;
    text-align: center;
    color: ${theme.colors.lapis};
  }
  .view3-puppy,
  .view3-spider {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  .view3-puppy {
    .view3-image {
      flex: 3;
    }

    &-txt {
      flex: 7;
      position: relative;
      display: block;
      width: 205px;
      padding: 12px 0 12px 12px;
      background-color: ${theme.colors.white};
      border-radius: 10px;

      &:before {
        position: absolute;
        display: block;
        content: '';
        left: -17px;
        width: 0;
        height: 0;
        border-top: 7px solid transparent;
        border-right: 10px solid ${theme.colors.white};
        border-bottom: 7px solid transparent;
        border-left: 10px solid transparent;
      }
      span {
        ${theme.Body1};
        color: ${theme.colors.black1};
        font-family: NotoM;
      }
    }
  }

  .view3-spider {
    .view3-image {
      flex: 3;
      text-align: right;
    }

    &-txt {
      flex: 7;
      position: relative;
      width: 205px;
      padding: 12px;
      background-color: #03a6ff;
      border-radius: 10px;
      ${theme.Body1};
      color: ${theme.colors.white};
      &:before {
        position: absolute;
        display: block;
        content: '';
        right: -17px;
        width: 0;
        height: 0;
        border-top: 7px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 7px solid transparent;
        border-left: 10px solid #03a6ff;
      }
    }
    .mobile {
      text-decoration: underline;
    }
    strong {
      color: ${theme.colors.black1};
    }

    .mb {
      margin-bottom: 20px;
    }
  }
  /* serviceView3 end */
  .view4-title h1 {
    color: #4d39c5;
  }
  .view4-desc {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 20px;
    margin-bottom: 20px;
    font-family: 'GmM';
    font-size: 15px;
    color: ${theme.colors.grey2};
  }
  .view4-wrap {
    &::before {
      background-color: #9fd639;
    }
  }
  .view4-tip {
    .view4-tip-inner {
      padding-left: 25px;
      strong {
        color: rgba(77, 57, 197, 1);
      }
    }
    &-first {
      left: -8px !important;
      &::before {
        left: -10px !important;
      }
    }
    &-second {
      margin-bottom: 5px;
      &::before {
        content: '• 예)' !important;
        left: -30px !important;
      }
    }
    &-third {
      margin-left: -20px;
      left: -3px !important;
      &::before {
        content: '' !important;
      }
    }
  }
  /* serviceView4 end */
  .view5-title h1 {
    color: #f68657;
  }
  .view5-wrap {
    &::before {
      background-color: #383a3f;
    }
  }
  .view5-image {
    width: 200px;
    margin: 0 auto 0;
  }
  .view5-tip {
    strong {
      color: #f68657;
    }
  }
  /* serviceView5 end */
  .view6-title h1 {
    margin-bottom: 10px;
    color: #1f3a93;
  }
  .view6-join-wrap {
    margin-bottom: 30px;
    text-align: center;
  }
  .view6-join-inner {
    display: inline-block;
    padding: 10px 15px;
    font-family: 'GmM';
    text-align: center;
    background-color: ${theme.colors.white};
    border-radius: 10px;

    dt {
      line-height: 20px;
      margin-bottom: 5px;
      font-size: 14px;
      color: #22a7f0;
    }
    dd {
      line-height: 16px;
      font-family: 'GmM';
      font-size: 12px;
      color: #22313f;
    }
  }

  .view6-table {
    width: 100%;
    margin-bottom: 30px;
    font-family: 'NotoM';
    opacity: 0.9;

    caption {
      height: 32px;
      padding: 6px 0;
      ${theme.Body1};
      font-family: 'NotoM';
      text-align: center;
      color: ${theme.colors.black1};
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.grey3};
      border-bottom: 0;
    }

    thead {
      height: 32px;
      text-align: center;
      background-color: #f1f2f2;
      border-top: 2px solid ${theme.colors.grey3};

      th {
        padding: 10px 0;
        font-size: 12px;
        color: #22313f;
        border: 1px solid ${theme.colors.grey3};
        &:last-child {
          border-top: 2px solid ${theme.colors.red};
          border-left: 2px solid ${theme.colors.red};
          border-right: 2px solid ${theme.colors.red};
        }
      }
    }
    tbody {
      font-size: 12px;
      text-align: center;
      background: rgba(255, 255, 255, 0.9);
      th,
      td {
        border: 1px solid ${theme.colors.grey3};
      }
      th {
        padding: 10px 15px;
      }
      tr {
        height: 32px;
      }
      td {
        color: #3a539b;
      }
      .first-row {
        td:last-child {
          border-left: 2px solid ${theme.colors.red};
          border-right: 2px solid ${theme.colors.red};
        }
      }
      .second-row {
        td:last-child {
          border-left: 2px solid ${theme.colors.red};
          border-right: 2px solid ${theme.colors.red};
          border-bottom: 2px solid ${theme.colors.red};
        }
      }
    }
    tfoot {
      height: 32px;
      line-height: 17px;
      font-size: 12px;
      background: rgba(203, 203, 203, 0.9);
      td {
        padding: 7px 0 6px 10px;
      }
    }
  }
  .view6-point-wrap {
    background-color: #c7e2fd;
    padding: 20px 10px;

    p {
      position: relative;
      line-height: 20px;
      padding: 12px 0 10px 27px;
      font-family: 'GmM';
      font-size: 16px;
      color: #22313f;
      background-color: ${theme.colors.white};
      border-radius: 3px;
      &::before {
        position: absolute;
        content: '▶';
        left: 7px;
      }
    }

    span {
      ${theme.Caption};
      color: ${theme.colors.black1};
    }
  }
  .view6-point-inner {
    dt {
      margin-bottom: 16px;
      font-family: 'GmB';
      font-size: 20px;
      color: #354e90;
    }
    dd {
      position: relative;
      margin-bottom: 3px;
      padding-left: 20px;
      line-height: 20px;
      font-family: 'GmM';
      font-size: 14px;
      color: #22313f;
      &::before {
        position: absolute;
        left: 0px;
      }
      &.first::before {
        content: '1. ';
      }
      &.second::before {
        content: '2. ';
      }
      &.third {
        margin-bottom: 16px;
        &::before {
          content: '3. ';
        }
      }
    }
  }
  /* serviceView6 end */
  .view6_1-bg {
    img {
      width: 100%;
    }
  }

  .view6_1-point-wrap {
    background-color: #c7e2fd;
    padding: 20px 10px 80px;

    p {
      position: relative;
      line-height: 20px;
      margin-bottom: 20px;
      padding: 12px 0 10px 27px;
      font-family: 'GmM';
      font-size: 16px;
      color: #22313f;
      background-color: ${theme.colors.white};
      border-radius: 3px;

      &::before {
        position: absolute;
        content: '▶';
        left: 7px;
      }
    }

    .view6_1-point-bottom-txt {
      position: relative;
      margin-bottom: 3px;
      padding-left: 10px;
      ${theme.Caption};
      color: #22313f;

      &::before {
        content: '*';
        position: absolute;
        left: 0px;
      }
    }
  }

  .view6_1-point-inner {
    dt {
      margin-bottom: 16px;
      font-family: 'GmB';
      font-size: 20px;
      color: #354e90;
    }

    dd {
      position: relative;
      margin-bottom: 3px;
      padding-left: 15px;
      line-height: 20px;
      font-family: 'GmM';
      font-size: 14px;
      color: #22313f;

      &:not(.third) {
        margin-bottom: 5px;
      }

      &::before {
        content: '•';
        position: absolute;
        left: 0px;
      }

      &.third {
        margin-bottom: 16px;
        color: #e36d16;
      }
    }
  }

  /* serviceView6_1 end */

  .service-view7-txt {
    margin-bottom: 60px;
    font-family: NotoB;
    font-size: 25px;
    line-height: 35px;
    text-align: center;
  }

  .service-view7-title {
    margin-right: 17px;
    padding: 36px 10px 31px 0;
    color: ${theme.colors.lapis};
    border-radius: 0px 100px 100px 0px;
    white-space: nowrap;
  }

  .service-view7-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'GmM';

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 265px;
      margin-bottom: 20px;
      padding: 2px 0;
      background-color: rgba(3, 166, 255, 1);
      border-radius: 50px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      &.md,
      &.cms {
        background-color: #1b4aa8;
      }
    }

    .view7-image {
      margin-right: 10px;
      width: 30px;
      height: 30px;
      transform: translateY(-2px);

      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }

  /* txtRef, btnRef animation */
  .service-view7-title {
    transition: transform 700ms;
    transform: translateX(-81%);
  }
  .txt-focused {
    transform: translateX(0);
  }
  /* service-view7 end */
`;
