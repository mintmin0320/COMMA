import styled from 'styled-components';
import theme from './theme';
import { flexbox } from './utils/flexbox';
// import prev from '../images/auto/prev.png ';
import prev from '../images/auto/prev.png';
import next from '../images/auto/next.png';
import uncheckbox from '../images/insu/uncheckbox.svg';
import checkbox from '../images/auto/Selected.svg';

const { fontSizes, colors } = theme;

export const Container = styled.section`
  @media ${({ theme }) => theme.device.desktop} {
    margin-top: 80px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    .no-margin {
      margin: 0 !important;
    }
  }

  .footer__form-box-success {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    ${flexbox()}
    .footer__form-box-success-box {
      width: 300px;
      height: 200px;
      ${flexbox()}
      flex-direction:column;
      box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background: white;
      img {
        margin-bottom: 20px;
      }
      p {
        ${flexbox()}
        font-family: NoToM;
        font-size: 18px;
        line-height: 26px;
      }
    }
  }
`;
export const Wrap = styled.section``;
export const TopSection = styled.section`
  width: 100%;
  height: 628px;
  background-color: black;
  box-shadow: inset 0px 0px 15px 2px #fff;
  background-image: url(${(props) => [props.backImg]});

  background-position-y: center;
  .section__wrap {
    ${flexbox()};
    height: 100%;
  }
  .item__wrap {
    padding-top: 64px;
    width: 400px;
    height: 100%;
    border-left: 10px solid rgba(255, 255, 255, 0.5);
  }
  .item__list {
    cursor: pointer;
    display: flex;
    padding-left: 50px;
    margin-left: -10px;
    margin-bottom: 26px;
    border-left: 10px solid rgba(255, 255, 255, 0);
    mix-blend-mode: luminosity;
    &.on {
      margin-left: -10px;
      border-left: 10px solid rgba(255, 255, 255, 0.9);
      mix-blend-mode: unset;
    }
    .item__name {
      ${theme.Title};
      color: ${colors.white};
      margin-bottom: 10px;
    }

    .item__logo {
      width: 82.91px;
    }
  }
  .item__thumbnail {
    width: 80px;
    margin-right: 1rem;
  }

  .img__wrap {
    width: 1070px;
    height: 628px;
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    background-image: url(${(props) => [props.frontImg]});
  }

  .description__box {
    width: 548px;
    padding: 30px 40px;
    background: rgba(0, 0, 0, 0.3);
    color: ${colors.white};
    white-space: nowrap;
    h3 {
      ${theme.H2};
      margin-bottom: 10px;
    }
    .description__span {
      ${theme.Title};
      line-height: 23px;
    }
  }
  .info__btn__wrap {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
  }
  .info__btn {
    cursor: pointer;
    ${flexbox()};
    white-space: nowrap;
    width: 156px;
    padding: 10px 50px;
    border: 1px solid #ffffff;
    color: ${colors.white};
    ${theme.Title}
  }
`;

export const BottomSection = styled.section`
  /* ${flexbox()}; */
  display: flex;
  flex-direction: column;
  width: 87%;
  margin: 0 auto 150px;
  .section__title {
    text-align: center;
    margin: 120px 0 60px;
    ${theme.H1};
    font-size: 30px;
    color: #2c2c2c;
  }
  .item__list {
    ${flexbox()};
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .item__box {
    ${flexbox()}
    flex-direction: column;
    width: 300px;
    margin-right: 30px;
    margin-bottom: 30px;
    padding: 30px 30px 50px;
    background-color: #f6f3f2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    &:nth-child(5) {
      margin-right: 0;
    }

    img {
      width: 220px;
    }
  }

  .item__name {
    ${flexbox()};
    width: 100%;
    ${theme.H5};
    border-radius: 20px 0px;
    justify-content: flex-start;
    span {
      margin-right: 10px;
      padding: 5px 10px;
      ${theme.Body2};
      color: #fff;
      background: #4d4d4e;
      border-radius: 20px;
    }
  }

  .description__wrap {
    width: 100%;
    margin: 30px 0 40px;
  }

  .description__line {
    ${flexbox('space-between')};
    width: 100%;

    p {
      ${theme.Body1};
      font-size: 1rem;
      margin-bottom: 10px;
      color: ${colors.grey1};
    }
  }
  .description__btn {
    cursor: pointer;
    ${flexbox()}
    width: 240px;
    padding: 0.5rem 0;
    color: ${theme.colors.white};
    background: #185adb;
    border-radius: 3px;
    ${theme.Body1};
    font-size: 1rem;
  }

  // 모바일 반응형
  /* @media ${({ theme }) => theme.device.mobile} {
    .section__title {
      margin-bottom: 30px;
      ${theme.Title20}
    }
    .item__list {
      flex-direction: column;
    }

    .item__box {
      margin-right: unset;
      margin-bottom: 10px;
      flex-direction: row;
      justify-content: space-between;
      padding: 20px;
      img {
        width: 80px;
      }
    }

    .item__name {
      width: 100px;
      ${theme.SubTitle2}
      white-space: nowrap;
      padding: 5px 0;
    }

    .description__wrap {
      margin: 0 0 20px;
    }

    .description__btn {
      ${flexbox()}
      width: 96px;
      padding: 5px 0;
    }

    .description__line {
      p {
        ${theme.Body2};
        margin-bottom: 5px;
      }
    }

 
  } //모바일 끝 */
  .item__box-mobile {
    display: flex;
    flex-direction: column;
    width: 100%;

    &.flex-end {
      align-items: flex-end;
    }
  }
`;

export const MobileTopSection = styled.section`
  width: 100%;

  color: #000;

  .item_imgBox {
    width: 100%;
    ${flexbox()};
    flex-direction: column;
    .item__img {
      width: 100%;
      padding: 0;
    }

    .item__name_m {
      width: 100%;
      height: 46px;
      margin-top: -46px;
      color: #fff;
      background: rgba(0, 0, 0, 0.5);
      text-align: center;
      ${theme.H5};
      ${flexbox()};
    }
  }
  .item__title {
    margin: 20px 0 10px;
    ${theme.Title20}
  }

  .item__desBox {
    padding: 0 20px;
  }
  .item__description {
    ${theme.Body1};
    text-align: left;
  }

  .item__btn {
    width: 100%;
    padding: 10px 0;
    margin-top: 20px;
    ${flexbox()};
    background-color: ${colors.white};
    color: ${colors.black1};
    ${theme.Title};
    border: 1px solid #000;
    border-radius: 3px;
  }
  .swiper-button-next,
  .swiper-button-prev {
    width: 45px;
    padding: 10px 15px;
    color: transparent;

    top: 34%;
  }

  .swiper-button-next {
    right: 0;
    background: url(${next});
  }

  .swiper-button-prev {
    left: 0;
    background: url(${prev});
  }

  // mobile bottom section

  .mobile__bottom {
    margin-top: 60px;
    padding: 0 5%;
  }
  .item__tab__list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    ${theme.H5};
    flex: 1;
    margin-bottom: 30px;
  }

  .item__tab {
    ${flexbox()};
    flex: 1;
    padding-bottom: 10px;
    color: ${colors.grey3};
    border-bottom: 1px solid ${colors.grey3};
    &.active {
      color: #185adb;
      border-bottom: 3px solid #185adb;
    }
  }

  .item__list {
    ${flexbox()};
    flex-direction: column;
  }
  .item__box {
    ${flexbox()}
    flex-direction: column;
    width: 100%;
    margin-bottom: 30px;
    padding: 20px 30px 40px;
    background-color: #f6f3f2;
    border-radius: 10px;

    &:nth-child(5) {
      margin-right: 0;
    }
    img {
      width: 180px;
    }
  }

  .item__name {
    ${flexbox()};
    width: 100%;
    ${theme.H5};
    border-radius: 20px 0px;
  }

  .description__wrap {
    width: 100%;
    margin: 20px 0 30px;
    padding: 0 5%;
  }

  .description__line {
    ${flexbox('space-between')};
    width: 100%;

    p {
      ${theme.Body1};
      font-size: 14px;
      margin-bottom: 5px;
      color: ${colors.grey1};
    }
  }
  .description__btn {
    cursor: pointer;
    ${flexbox()}
    width: 100%;
    padding: 10px 0;
    color: ${theme.colors.white};
    background: #185adb;
    border-radius: 3px;
    ${theme.Body1};
    font-size: 16px;
  }

  .item__box-mobile {
    width: 100%;
    ${flexbox()};
    flex-direction: column;
  }
`;

//info 페이지
export const AutoInfoSection = styled.section`
  ${flexbox()};
  flex-direction: column;
  width: 84%;
  margin: 0 auto;

  h2 {
    ${theme.H2};
    color: #222;
  }

  h1 {
    ${theme.H1};
    color: #222;
  }
  .top__section {
    ${flexbox()};
    width: 100%;
    margin: 60px auto 100px;
    border-bottom: 1px solid #222222;
    padding-bottom: 60px;

    .img__container {
      img {
        width: 500px;
        margin-right: 200px;
      }
    }

    .color__container {
      position: relative;
      width: 380px;
    }
    .subsidy__modal {
      position: absolute;
      left: 0;
      top: 8%;
      width: 270px;
      height: 124px;
      padding: 15px 30px;
      background: #f8f8f8;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      border-radius: 6px;
      h5 {
        ${theme.H5};
        border-bottom: 1px solid #4d4d4e;
        margin: 12px 0;
        padding-bottom: 6px;
      }

      p {
        ${theme.Body1};
        font-size: 14px !important;
      }

      img {
        cursor: pointer;
        float: right;
        margin-right: -10px;
      }
    }

    .description__wrap {
      width: 100%;
      margin: 10px 0 40px;
      padding: 20px 0;
      border-top: 3px solid #222222;
      border-bottom: 1px solid #666666;
    }

    .color__wrap {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 1rem;
      margin: 10px 0;
      background: #f1f1f1;
      border-radius: 6px;

      ul {
        display: flex;
        align-items: center;
      }

      li {
        width: 16px;
        height: 16px;
        border-radius: 100%;
        margin-right: 10px;
        border: 0.5px solid #aaa;
        padding: 1px;
        cursor: pointer;
      }

      p {
        margin-right: 2rem;
        ${theme.Body1};
        font-size: 1rem;
        color: #000;
      }
    }

    .description__line {
      ${flexbox('space-between')};
      width: 100%;

      p {
        ${flexbox()};
        ${theme.Body1};
        font-size: 1.3rem;
        margin-bottom: 10px;
        color: #444;
      }

      .description__question {
        margin-left: 10px;
        cursor: pointer;
      }
    }
    .description__btn {
      cursor: pointer;
      ${flexbox()}
      width: 100%;
      padding: 0.8rem 0;
      color: ${theme.colors.white};
      background: #000;
      ${theme.Body1};
      font-size: 1rem;
    }
  }
  .bottom__section {
    width: 100%;
    ${flexbox()};
    flex-direction: column;
    margin-bottom: 100px;
  }

  /* 모바일 */
  @media ${({ theme }) => theme.device.mobile} {
    margin: 0 auto 60px;
    h1,
    h2 {
      ${theme.Title20};
    }
    .top__section {
      flex-direction: column;
      margin: 0px auto 30px;
    }
    .img__container {
      img {
        width: unset !important;
        margin-right: 0px !important;
      }
    }
    .color__container {
      position: relative;
      width: 100% !important;
    }

    .description__line {
      ${flexbox('space-between')};
      width: 100%;

      p {
        ${flexbox()};
        ${theme.Body1};
        font-size: 1.6rem !important;
        margin-bottom: 10px;
      }
    }

    .color__wrap {
      p {
        font-size: 1.6rem !important;
      }
    }

    .description__btn {
      font-size: 18px !important;
      padding: 1rem 0 !important;
    }

    .bottom__section {
      img {
        width: 100%;
      }
    }
  } //모바일 끝
`;

// 전기 자전거/ 스쿠터 신청 폼
export const RequestForm = styled.section`
  // 신청 기능
  .footer {
    ${flexbox()}
    flex-direction: column;
    width: 100%;
    margin: 150px 0 100px;
    position: relative;

    .close__btn {
      cursor: pointer;
      position: absolute;
      top: 5%;
      right: 10%;
    }

    .footer__title {
      font-family: NoToB;
      font-size: ${fontSizes.H1};
      line-height: 60px;
      color: ${colors.black2};
      margin-bottom: 30px;
    }

    .footer__form {
      width: 1070px;
      background-color: white;
      ${flexbox()}
      flex-direction: column; // 신청 성공 영역
      
      .footer__form-box {
        width: 520px;
        /* ${(props) => props.success && flexbox()} */
        p {
          font-family: NoToM;
          font-size: 16px;
          line-height: 23px;
          color: ${colors.grey1};
          margin-bottom: 10px;
        }

        // 폼쪽 모델 이름 영역
        .footer__form-box-name {
          margin-bottom: 30px;
          h1 {
            padding: 10px;
            height: 54px;
            font-family: NoToM;
            font-size: 18px;
            line-height: 24px;
            color: ${colors.black1};
            margin-bottom: 10px;
            border-bottom: 1px solid ${colors.black1};
          }
        }

        // 폼쪽 인풋 영역
        .footer__form-box-child {
          margin-bottom: 16px;
          .k-maskedtextbox {
            width: 100%;
          }
          input {
            width: 100%;
            padding: 10px;
            height: 40px;
            border: 1px solid ${colors.grey3};
            border-radius: 3px;
            ${theme.Body1};
          }
          input::placeholder {
            font-size: 15px;
            line-height: 20px;
            ${colors.grey3};
          }

          textarea {
            height: 200px;
            margin: 0;
            border: 1px solid ${colors.grey3};
          }
        }
        // 개인정보 방침 동의
        .footer__form-box-agree {
          div {
            ${flexbox('flex-start')}
            height:46px;

            .toggle-check {
              width: 15px;
              height: 15px;
              margin-right: 10px;
              display: none;
            }
            input[id='agree'] + label {
              display: inline-block;
              width: 15px;
              height: 15px;
              margin-right: 10px;
              cursor: pointer;
              background: url(${uncheckbox}) center;
            }

            input[id='agree']:checked + label {
              background: url(${checkbox}) center;
              border: none;
              width: 15px;
              height: 15px;
            }

            .m[id='agree']:checked + label {
              background: url(${checkbox}) center;
              border: none;
              width: 15px;
              height: 15px;
            }

            /* input {
              margin: 0 16px 0 10px;
              width: 20px;
              height: 20px;
            } */

            span {
              font-family: NoToM;
              font-size: 16px;
              line-height: 24px;
            }
          }
          // 개인정보 모달
          .footer__form-box-agree-modal {
            ${flexbox()}
            flex-direction: column;
            width: 500px;
            height: 380px;
            background-color: #ececec;

            section {
              &:nth-child(1) {
                font-family: NoToB;
                font-size: 14px;
                line-height: 20px;
                margin-bottom: 20px;
              }

              &:nth-child(2) {
                P {
                  font-family: NoToM;
                  font-size: 12px;
                  line-height: 18px;
                  margin-bottom: 20px;
                }
              }
              &:nth-child(3) {
                font-family: NoToM;
                font-size: 12px;
                line-height: 18px;
                border: 1px solid #6f6f6f;
                margin-bottom: 20px;
                div {
                  height: 56px;

                  .left {
                    padding: 10px;
                    background-color: #b3ccff;
                    width: 106px;
                  }
                  .right {
                    padding-left: 10px;
                    background-color: white;
                    width: 175px;
                  }
                }
              }
              &:nth-child(4) {
                P {
                  font-family: NoToM;
                  font-size: 12px;
                  line-height: 18px;
                }
              }
            }
          }
        }
      }
    }

    @media ${({ theme }) => theme.device.mobile} {
      margin: 20px 0 30px;
      .k-maskedtextbox,
      .k-textbox {
        width: 100%;
      }

      height: auto;
      .footer__title {
        font-size: 20px;
        line-height: 28px;
        margin-top: 20px;
        margin-bottom: 30px;
      }
      .footer__form {
        width: 90%;
        margin-bottom: 40px;
        height: auto;
        .footer__form-box {
          width: 100%;
          padding: 20px;
          height: auto;
          // 신청 성공 영역
          .footer__form-box-success {
            ${flexbox()}
            margin-bottom: 80px;
            margin-top: 10px;
            flex-direction: column;
            .lottie__car {
              width: 100px;
              height: 100px;
              margin-bottom: 30px;
            }

            p {
              ${flexbox()}
              font-family: NoToM;
              font-size: 18px;
              line-height: 24px;
            }
          }

          .footer__form-box-name {
            p {
              font-size: 15px;
              line-height: 20px;
            }
            h1 {
              font-size: 15px;
              line-height: 20px;
              display: flex;
              align-items: center;
            }
          }

          .footer__form-box-child {
            input {
              font-size: 14px;
            }
            p {
              font-size: 15px;
              line-height: 20px;
            }
          }

          .footer__form-box-agree {
            p {
              font-size: 15px;
            }
            div {
              input {
                margin: 0 6px 0 0px;
                width: 16px;
                height: 15.5px;
              }

              span {
                font-size: 12px;
                line-height: 18px;
              }

              button {
                width: 65px;
              }
            }
            .footer__form-box-agree-modal {
              width: 100%;
              padding: 0 16px;
              section {
                &:nth-child(1) {
                  margin-top: 30px;
                }

                &:nth-child(2) {
                  P {
                  }
                }
                &:nth-child(3) {
                  div {
                    .left {
                      width: 40%;
                    }
                    .right {
                      width: 60%;
                    }
                  }
                }
                &:nth-child(4) {
                  P {
                    padding-bottom: 20px;
                  }
                }
              }
            }
          }
        }
      }
      .btn__wrap {
        display: flex;
        width: 90%;
        margin: 10px auto;
      }
    }

    .btn__wrap {
      display: flex;
    }
  }
`;
export const StyledApp = styled.section`
  ${flexbox()}
  flex-direction: column;

  .k-maskedtextbox,
  .k-textbox {
    width: 520px;
    border: none;
    height: 38px;
    background-color: white;
    outline: none;
    font-size: 14px;
    font-family: NoToR;
    padding-left: 0;
    color: ${theme.colors.black1};
    ::placeholder {
      font-size: 14px;
      font-family: NoToR;
      color: #a9a9a9 !important;
    }
  }

  .k-textbox {
    padding-left: 10px;
    border: 1px solid ${theme.colors.grey4};
  }

  // 헤더
  .header {
    width: 100%;
    background-color: #3c3c3c;
    height: 230px;
    ${flexbox()}
    .header__list {
      display: flex;

      .header__list-box {
        cursor: pointer;
        position: relative;
        background: #ffffff;
        ${flexbox()}
        flex-direction: column;
        width: 316px;
        height: 170px;
        margin-right: 10px;
        img {
          width: 150px;
          height: 150px;
          margin: -20px 0 -10px -0;
        }
        p {
          font-family: NoToM;
          font-size: 14px;
          line-height: 20px;
        }

        .header__list-box-check {
          ${flexbox()};
          width: 100%;
          height: 100%;
          position: absolute;
          background-color: rgba(0, 0, 0, 0.5);

          img {
            width: 80px;
          }
        }
      }
    }

    @media ${({ theme }) => theme.device.mobile} {
      overflow: auto;
      height: 100px;
      ${flexbox('flex-start')}
      &::-webkit-scrollbar {
        display: none;
      }
      .header__list {
        padding: 0 20px;
        width: 680px;
        ${flexbox()}
        div {
          &:nth-child(5) {
            margin-right: 0;
          }
        }
        .header__list-box {
          /* margin-top: 10px; */
          width: 120px;
          height: 80px;
          img {
            width: 50px;
            height: unset;
            margin: unset;
          }
          p {
            ${theme.Body2}
          }

          .header__list-box-check {
            img {
              width: 30px;
            }
          }
        }
      }
    }
  }

  // 메인 (비교하기)
  .main {
    margin-top: 60px;
    margin-bottom: 60px;
    width: 1405px;
    .main__header {
      height: 48px;
      color: ${colors.black2};
      margin-bottom: 0px;
      ${flexbox()}
      p {
        font-family: NoToB;
        font-size: ${fontSizes.H2};
        line-height: 28px;
      }
    }
    .main__img {
      height: 324px;
      ${flexbox('space-between')}
      .line {
        width: 1px;
        height: 70%;
        margin-top: -1%;
        background-color: #000;
      }

      .main__img-box {
        position: relative;
        width: 582px;
        ${flexbox()}
        flex-direction: column;
        .main__img-box-null {
          ${flexbox()}
          flex-direction:column;
          h1 {
            font-family: NoToB;
            font-size: 20px;
          }
          p {
            font-size: 15px;
            line-height: 50px;
          }
        }
        .main__img-box-delete {
          cursor: pointer;
          position: absolute;
          width: 26.25px;
          top: 0;
          right: 100px;
        }
        p {
          font-family: NoToM;
          font-size: ${fontSizes.H5};
          line-height: 28px;
        }
        img {
          width: 150px;
        }
      }
    }
    .main__info {
      .main__info-box {
        display: flex;
        height: 40px;
        border-bottom: 1px solid #000000;
        div {
          width: 582px;
          ${flexbox()}
          font-family: NoToM;
          font-size: 14px;
          line-height: 26px;

          &:nth-child(2) {
            width: 242px;
            font-size: 14px;
            font-size: 15px;
            line-height: 28px;
            background: #f2f2f2;
          }
        }
      }
    }
    @media ${({ theme }) => theme.device.mobile} {
      width: 100%;
      ${flexbox()}
      border: 1px solid ${colors.grey3};

      flex-direction: column;
      .main__header {
        width: 90%;

        p {
          ${theme.Title20};
        }
      }

      .main__img {
        width: 100%;
        height: 140px;
        margin-bottom: 18px;
        .main__img-box {
          width: 50%;
          :nth-child(2) {
            border-left: 1px solid #ccc;
          }

          button {
            width: 120px;
            height: 30px;
          }
          p {
            font-size: 14px;
            line-height: 20px;
          }
          img {
            width: 50px;
            height: 50px;
            margin: 10px 0;
          }
        }
      }

      .main__info__mobile {
        width: 90%;
        .main__info-box {
          display: flex;
          div {
            width: 50%;
            display: flex;
            font-size: 14px;
            line-height: 20px;

            &:nth-child(2) {
              border-left: 1px solid ${colors.grey3};
              font-size: 14px;
              line-height: 20px;
            }
          }
        }
      }
    }
    //
  }

  .mobile {
    margin-bottom: 30px;
    button {
      font-size: 12px;
    }

    .main__img-box-null {
      ${flexbox()}
      flex-direction:column;
      h1 {
        text-align: center;
        font-family: NoToB;
        font-size: 15px;
        line-height: 25px;
      }
      p {
        color: ${colors.grey2}!important;
        font-size: 12px !important;
      }
    }
    width: 90%;
    .mobile__wrap {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      width: 100%;

      .mobile__info__img {
        .main__img-box-thumbnaili {
          width: 50px;
          margin: 10px 0;
        }
      }

      .main__info-box {
        width: 100%;
        ${theme.Body2};
        color: ${colors.grey1};
        > div {
          display: flex;
          justify-content: space-between;

          > p:nth-child(1) {
            ${theme.Caption};
            color: #000;
          }
        }
      }
      .mobile__info__wrap {
        height: 290px;
        padding: 30px 10px;
        flex: 1;
        ${flexbox()};
        flex-direction: column;

        &.first {
          border-right: 1px solid ${colors.grey3};
        }
      }
    }

    .main__img-box {
      ${flexbox()};
      flex-direction: column;
      position: relative;
      margin-bottom: 20px;
      p {
        margin-top: 15px;
        ${theme.Title};
        text-align: center;
      }
      img {
        width: 150px;
        height: unset !important;
      }
      .main__img-box-delete {
        cursor: pointer;
        position: absolute;
        width: 14px !important;
        top: -10%;
        right: -10%;
      }
    }
  } //

  /* lottie  */
  .lottie-arrow {
    width: 200px;
    height: 200px;
  }

  // 신청 기능
  .footer {
    ${flexbox()}
    flex-direction: column;
    /* background: ${colors.grey4}; */
    width: 100%;

    .footer__title {
      font-family: NoToB;
      font-size: ${fontSizes.H2};
      line-height: 60px;
      color: ${colors.black2};
      margin-bottom: 20px;
    }

    .footer__form {
      position: relative;
      width: 1070px;
      background-color: white;
      ${flexbox()}
      flex-direction: column; // 신청 성공 영역
      .footer__form-box-success {
        position: absolute;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 10;
        ${flexbox()}
        .footer__form-box-success-box {
          width: 300px;
          height: 200px;
          ${flexbox()}
          flex-direction:column;
          box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.3);
          border-radius: 10px;
          background: white;
          img {
            margin-bottom: 20px;
          }
          p {
            ${flexbox()}
            font-family: NoToM;
            font-size: 18px;
            line-height: 26px;
          }
        }
      }
      .footer__form-box {
        width: 520px;

        /* ${(props) => props.success && flexbox()} */
        p {
          font-family: NoToM;
          font-size: 16px;
          line-height: 23px;
          color: ${colors.grey1};
          margin-bottom: 10px;
        }

        // 폼쪽 모델 이름 영역
        .footer__form-box-name {
          margin-bottom: 30px;
          h1 {
            padding: 10px;
            height: 54px;
            font-family: NoToM;
            font-size: 18px;
            line-height: 24px;
            color: ${colors.black1};
            margin-bottom: 10px;
            border-bottom: 1px solid ${colors.black1};
          }
        }

        // 폼쪽 인풋 영역
        .footer__form-box-child {
          margin-bottom: 16px;

          input {
            padding: 10px;
            height: 40px;
            border: 1px solid ${colors.grey3};
            border-radius: 3px;
          }
          input::placeholder {
            font-size: 15px;
            line-height: 20px;
          }

          textarea {
            height: 200px;
            margin: 0;
            border: 1px solid ${colors.grey3};
          }
        }
        // 개인정보 방침 동의
        .footer__form-box-agree {
          .toggle-agree-txt {
            white-space: nowrap;
          }
          div {
            ${flexbox('flex-start')}
            height:46px;
            .toggle-check {
              width: 15px;
              height: 15px;
              margin-right: 10px;
              display: none;
            }
            input[id='agree'] + label {
              display: inline-block;
              width: 15px;
              height: 15px;
              margin-right: 10px;
              cursor: pointer;
              background: url(${uncheckbox}) center;
            }

            input[id='agree']:checked + label {
              background: url(${checkbox}) center;
              border: none;
              width: 15px;
              height: 15px;
            }

            .m[id='agree']:checked + label {
              background: url(${checkbox}) center;
              border: none;
              width: 15px;
              height: 15px;
            }

            span {
              font-family: NoToM;
              font-size: 16px;
              line-height: 24px;
            }
          }
          // 개인정보 모달
          .footer__form-box-agree-modal {
            ${flexbox()}
            flex-direction: column;
            width: 500px;
            height: auto;
            background-color: #ececec;

            section {
              &:nth-child(1) {
                font-family: NoToB;
                font-size: 14px;
                line-height: 20px;
                margin-bottom: 20px;
              }

              &:nth-child(2) {
                P {
                  font-family: NoToM;
                  font-size: 12px;
                  line-height: 18px;
                  margin-bottom: 20px;
                }
              }
              &:nth-child(3) {
                font-family: NoToM;
                font-size: 12px;
                line-height: 18px;
                border: 1px solid #6f6f6f;
                margin-bottom: 20px;
                div {
                  height: 56px;

                  .left {
                    padding: 10px;
                    background-color: #b3ccff;
                    width: 106px;
                  }
                  .right {
                    padding-left: 10px;
                    background-color: white;
                    width: 175px;
                  }
                }
              }
              &:nth-child(4) {
                P {
                  font-family: NoToM;
                  font-size: 12px;
                  line-height: 18px;
                }
              }
            }
          }
        }
      }
      .btn__wrap {
        display: flex;
        width: 90%;
        margin-bottom: 0px;
      }
    }

    .btn__wrap {
      ${flexbox()};
      margin-bottom: 130px;
    }

    @media ${({ theme }) => theme.device.mobile} {
      .k-maskedtextbox,
      .k-textbox {
        width: 100%;
      }

      height: auto;
      .footer__title {
        font-size: 20px;
        line-height: 28px;
        margin-top: 20px;
        margin-bottom: 30px;
      }
      .footer__form {
        width: 90%;
        margin-bottom: 40px;
        height: auto;
        .footer__form-box {
          width: 100%;
          padding: 20px;
          height: auto;
          // 신청 성공 영역
          .footer__form-box-success {
            width: 213px;
            height: 154px;
            ${flexbox()}
            margin-bottom: 80px;
            margin-top: 10px;
            flex-direction: column;
            .lottie__car {
              width: 100px;
              height: 100px;
              margin-bottom: 30px;
            }

            p {
              ${flexbox()}
              font-family: NoToM;
              font-size: 18px;
              line-height: 24px;
            }
          }

          .footer__form-box-name {
            p {
              font-size: 15px;
              line-height: 20px;
            }
            h1 {
              font-size: 15px;
              line-height: 20px;
              display: flex;
              align-items: center;
            }
          }

          .footer__form-box-child {
            input {
              font-size: 14px;
            }
            p {
              font-size: 15px;
              line-height: 20px;
            }
          }

          .footer__form-box-agree {
            p {
              font-size: 15px;
            }
            div {
              input {
                margin: 0 6px 0 0px;
                width: 16px;
                height: 15.5px;
              }

              span {
                font-size: 12px;
                line-height: 18px;
              }

              button {
                width: 65px;
              }
            }
            .footer__form-box-agree-modal {
              width: 100%;
              padding: 26px 16px 16px;
              section {

                &:nth-child(2) {
                  P {
                  }
                }
                &:nth-child(3) {
                  div {
                    .left {
                      width: 40%;
                    }
                    .right {
                      width: 60%;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // 정보 모달
  .info {
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    ${flexbox()};

    .info__box {
      width: 1337px;
      height: 100%;
      background-color: white;
      overflow: auto;
      flex-direction: column;
      position: relative;
      h1 {
        font-family: NoToB;
        font-size: 40px;
        line-height: 60px;
        margin-top: 91px;
        margin-bottom: 30px;
        ${flexbox()}
      }

      .info__box-close {
        position: absolute;
        right: 50px;
        top: 50px;
        cursor: pointer;
      }

      .info__box-img {
        ${flexbox()}
        flex-direction: column;
      }
    }

    @media ${({ theme }) => theme.device.mobile} {
      position: fixed;
      bottom: 0px;
      top: auto;
      height: 100vh;

      ${flexbox()}
      .info__box {
        width: 100%;
        height: 80%;
        position: absolute;
        bottom: 0;
        h1 {
          font-family: NoToB;
          font-size: 20px;
          line-height: 60px;
          margin-top: 40px;
          margin-bottom: 20px;
          ${flexbox()}
        }

        .info__box-close {
          position: absolute;
          right: 15px;
          top: 15px;
          cursor: pointer;
          img {
            width: 24px;
            height: 24px;
          }
        }

        .info__box-img {
          ${flexbox()}
          flex-direction: column;
          img {
            width: 100%;
          }
        }
      }
    }
  }
`;

export const StyledFloating = styled.div`
  position: fixed;
`;
