/*
  설명: 로그인전 home 페이지 styled-component
  - 2021.05.20. 양민석,  디자인 리뉴얼
*/
// 라이브러리
import styled, { css } from 'styled-components';
// css 가이드
import theme from '../theme';
//이미지
import image1mobile from '../../images/newImage/mainBeforeLogin/image1mobile.jpg';
import image1pc from '../../images/newImage/mainBeforeLogin/image1pc.jpg';
import { settingDevice } from '../styledFunction';

export const StyledContents = styled.div`
  //sec02
  ${(props) => {
    return css`
      .section2 {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0;
        margin-bottom: 100px;
        /* margin: 0 auto; */
      }
      @media ${({ theme }) => theme.device.desktop} {
        .sec02-box {
          h3 {
            margin: 20px 0;
            ${theme.H3}
          }
          p {
            color: ${theme.colors.grey2};
            ${theme.H5};
          }

          button {
            margin: 40px 0 0 0;
          }
        }

        .sec02-box:nth-child(2) {
          margin: 0 95px;
        }
      }
      @media ${({ theme }) => theme.device.mobile} {
        .section2 {
          flex-direction: column;
          padding: 0 5%;
          margin-bottom: 0px;
        }
        .sec02-box {
          width: 100%;
          margin-bottom: 50px;

          h3 {
            margin: 20px 0;
            ${theme.H4}
          }
          p {
            color: ${theme.colors.grey2};
            ${theme.Title};
          }

          img {
            width: 100%;
          }

          button {
            margin: 20px 0 0 0;
          }
        }
      }

      // 켄도 마스크텍스트

      .k-maskedtextbox.k-state-invalid .k-textbox,
      .k-maskedtextbox.ng-invalid.ng-touched .k-textbox,
      .k-maskedtextbox.ng-invalid.ng-dirty .k-textbox {
        ::placeholder {
          font-family: NoToR;
          font-size: 14px;
          color: ${theme.colors.grey3} !important;
        }
        border: 1px solid ${theme.colors.boxGray};
        height: 42px;
        width: 100%;
      }
      .k-maskedtextbox .k-textbox {
        border: 1px solid ${theme.colors.boxGray};
        height: 42px;
        width: 100%;
      }

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.lightGrey};
      button {
        outline: none;
      }
      @media ${({ theme }) => theme.device.desktop} {
        background-color: ${theme.colors.white};
        /* margin-top: 100px; */
      }

      // 모바일 공지사항 섹션
      .mobileBoard {
        width: 90%;
        height: 246px;
        padding: 30px 10px 10px 10px;
        display: flex;
        border-radius: 3px;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        margin-bottom: 5em;
        background-color: ${theme.colors.white};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
        // 공지사항, 전체보기 섹션
        .div1 {
          width: 90%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5em;
          h4 {
            ${theme.H4};
          }
          .div1-button {
            font-size: ${theme.fontSizes.Button};
            font-family: NotoM;
            color: ${theme.colors.royalblue};
            display: flex;
            align-items: center;
            button {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 1em;
              height: 1em;
              border: none;
              border-radius: 50%;
              background-color: ${theme.colors.royalblue};
              color: ${theme.colors.white};
              margin-left: 0.3em;
              outline: none;
            }
          }
          border-bottom: 0.5px solid ${theme.colors.grey3};
        }
      }
      // 공지사항 게시물 섹선
      .div2 {
        width: 90%;
        overflow: hidden;
        font-size: ${theme.fontSizes.Body1};
        font-family: NoToR;
        div {
          display: flex;
          justify-content: space-between;
          padding-right: 10px;
        }
      }

      // 드림컨시어지 섹션

      .concierge-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 100px;
        background-color: #e3e3e3;
        padding: 40px 89px 80px 103px;
        border-radius: 10px;
        h2 {
          position: relative;
          ${theme.H2};
          display: flex;
          span {
            position: absolute;
            top: -10px;
            left: -30px;
            display: block;
            ${theme.H5};
            color: ${theme.colors.red};
          }
        }
        p {
          margin-top: 10px;
          /* ${theme.Body1}; */
          font-size: 14px;
          font-family: NoToR;
          line-height: 24px;
        }
      }
      .concierge-wrap {
        margin-top: 35px;
        width: 960px;
        display: flex;
        flex-wrap: wrap;

        .viewService {
          cursor: pointer;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 0px 0px 20px 20px;
          p {
            margin-top: 0;
            font-size: 18px;
            font-family: NoToM;
            height: 44px;
            line-height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
          }

          img {
            width: 20px;
            height: 20px;
            margin-right: 10px;
          }
        }
      }

      .item-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: ${settingDevice('138px', '300px')};
        height: ${settingDevice('138px', '300px')};
        background-color: ${theme.colors.white};
        border-radius: 20px;
        margin: ${settingDevice('0', '15px 0')};

        &.margin {
          margin: 15px 30px;
        }

        h6 {
          margin-top: 20px;
          font-size: 24px;
          font-family: NoToM;
          line-height: 36px;
          p {
            ${theme.Body1};
          }
        }

        p {
          font-size: 20px;
          font-family: NoToM;
          line-height: 18px;
          color: ${theme.colors.grey2};
        }
      }

      .container {
        width: ${settingDevice('138px', '300px')};
        height: ${settingDevice('138px', '300px')};
        perspective: ${settingDevice('138px', '300px')};
        &.common {
          padding-left: 0;
        }

        &.margin {
          margin: 0 30px;
        }
      }

      .container .item {
        width: ${settingDevice('138px', '300px')};
        height: ${settingDevice('138px', '300px')};
        font-size: 35px;
        backface-visibility: hidden;
        transition: 1s;
      }

      .container .item.front {
        position: absolute;
        transform: rotateY(0deg);
      }

      .container:hover .item.front {
        transform: rotateY(180deg);
      }

      .container .item.back {
        transform: rotateY(-180deg);
      }

      .container:hover .item.back {
        transform: rotateY(0deg);
      }

      .concierge-box {
        margin: 15px 0;
        width: ${settingDevice('138px', '300px')};
        height: ${settingDevice('138px', '300px')};
        border-radius: 20px;
        background-color: #597b6d;
        color: ${theme.colors.white};
        display: flex;
        flex-direction: column;
        justify-content: center;
        h5 {
          display: flex;
          justify-content: center;
          white-space: nowrap;
          font-family: OTWelcomeBA;
          font-size: 40px;
          line-height: 46px;
          margin-top: ${settingDevice('2px', '10px')};
        }

        p {
          margin-left: 45px;
          font-size: 16px;
          font-family: NoToR;
        }
      }

      @media ${({ theme }) => theme.device.mobile} {
        .container {
          padding: 0;
          margin: 0;
        }
        .concierge-container {
          padding: 20px 10px 30px 10px;
          margin-bottom: 60px;
          h2 {
            font-size: 20px;
            padding-top: 15px;
            line-height: 35px;
          }
          p {
            margin-top: 0;
            text-align: center;
            font-size: 12px;
            line-height: 15px;
          }
          span {
            top: -5px !important;
            left: -10px !important;
            font-size: 14px !important;
          }
        }
        .item-box {
          h6 {
            margin-top: 5px;
            margin-bottom: 3px;
            font-size: 14px;
            font-family: NoToM;

            line-height: 24px;
          }
        }

        .concierge-box {
          p {
            margin-left: 0px;
          }
        }
        .concierge-wrap {
          width: 100%;

          display: flex;
          justify-content: space-around;
          > div {
            /* flex-basis: 48%;
            flex-shrink: 1; */
            margin: 0;
            width: 138px;
            height: unset;
            padding: 20px 21px 20px 21px;
            margin-bottom: 10px;
            h5 {
              white-space: none;
              font-size: 18px;
              line-height: 21px;
              display: flex;
              justify-content: flex-start;
            }

            h6 {
              font-size: 16px;
            }
            img {
              width: 50px;
              height: 50px;
            }
            p {
              text-align: left;
              font-size: 11px;
              margin-bottom: 10px;
            }
          }

          .margin {
            margin: 0;
            margin-bottom: 10px;
          }
        }
      }
    `;
  }}
`;

// 렌탈 섹션
export const StyledImgSlider = styled.section`
  /* @media ${({ theme }) => theme.device.desktop} {
    border: 10px solid ${theme.colors.boxGray};
  } */
  .name {
    font-size: ${theme.fontSizes.Body1};
    font-family: NotoM;
    color: ${theme.colors.grey2};
  }
  width: 90%;
  @media ${({ theme }) => theme.device.desktop} {
    width: 100%;
  }
  .mobile {
    // 소개이미지 슬라이더
    @media ${({ theme }) => theme.device.desktop} {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 675px;
      border: 10px solid ${theme.colors.boxGray};
      margin-bottom: 100px;
    }
    .mobile-image {
      width: 100%;
      height: 100%;
      color: ${theme.colors.boxGray};
      overflow: hidden;
      position: relative;
      .mobile-image-leftbtn {
        position: absolute;
        left: 0;
        top: 11%;
        font-size: 3em;
        z-index: 99;
        cursor: pointer;
        @media ${({ theme }) => theme.device.desktop} {
          top: 45%;
        }
      }
      .mobile-image-rightbtn {
        position: absolute;
        right: 0;
        top: 11%;
        font-size: 3em;
        z-index: 99;
        cursor: pointer;
        @media ${({ theme }) => theme.device.desktop} {
          top: 45%;
        }
      }
      .mobile-image-div {
        width: 200%;
        height: 100%;
        display: flex;
        align-items: center;
        &.web-slide {
          width: 300%;
        }
        .mobile-image-box {
          display: flex;
          height: 100%;
          width: 100%;
          div {
            width: 100%;
            @media ${({ theme }) => theme.device.desktop} {
              display: flex;
              align-items: center;
            }
            transition: all 1s;
            img {
              object-fit: contain;
              width: 100%;
              @media ${({ theme }) => theme.device.desktop} {
                height: 57%;
                margin-right: 9.14px;
              }
              height: 17em;
            }
            .name {
              font-size: ${theme.fontSizes.Body1};
              font-family: NotoM;
              color: ${theme.colors.grey2};
            }
          }
        }
      }
    }

    // 소개 글
    .mobile-intro {
      @media ${({ theme }) => theme.device.desktop} {
        display: flex;
        flex-direction: column;
      }
      h4 {
        width: 100%;
        font-size: ${theme.fontSizes.H4};
        font-family: NotoM;
        color: ${theme.colors.black1};
        display: flex;
        margin-top: 5em;
        margin-bottom: 1.5em;
        border-bottom: 0.5px solid ${theme.colors.grey3};
        @media ${({ theme }) => theme.device.desktop} {
          border-bottom: none;
          margin-top: 0;
          margin-bottom: 1em;
          font-size: ${theme.fontSizes.H1};
          font-family: NotoB;
          color: ${theme.colors.grey1};
        }
        padding-bottom: 0.2em;
      }
      h5 {
        width: 100%;
        height: 60px;
        ${theme.Title};
        color: rgba(115, 123, 125, 1);
        @media ${({ theme }) => theme.device.desktop} {
          margin-bottom: 3em;
          ${theme.H5};
          height: auto;
        }
      }
    }
    // 서비스 신청 버튼
    .mobile-button {
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        @media ${({ theme }) => theme.device.desktop} {
          justify-content: flex-start;
          height: auto;
        }
        button {
          font-size: ${theme.fontSizes.Title};
          font-family: NotoM;
          color: ${theme.colors.white};
          background-color: ${theme.colors.royalblue};
          border: none;
          outline: none;
        }
      }
    }
  }

  .swiper-wrap {
    width: 100%;
    padding: 0 5%;
    margin: 100px 0;
  }

  .pc {
    width: 100%;
    height: 30em;
    border: 10px solid ${theme.colors.boxGray};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.boxGray};
    margin-bottom: 6em;
    .pc-div {
      width: 85%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 50%;
        height: 80%;
        margin-right: 2em;
      }
      .pc-intro {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        height: 80%;
        color: ${theme.colors.black1};
        .name {
          font-size: ${theme.fontSizes.Body1};
          font-family: NotoM;
          color: ${theme.colors.black1};
        }
        h3 {
          font-size: ${theme.fontSizes.H3};
          font-family: NotoM;
          color: ${theme.colors.black1};
          margin-bottom: 1em;
        }
        .pc-vector {
          margin-bottom: '1em';
          display: flex;
          img {
            width: 10%;
          }
        }
        h1 {
          font-size: ${theme.fontSizes.H1};
          font-family: NotoB;
          color: ${theme.colors.black1};
        }
        h5 {
          font-size: ${theme.fontSizes.H5};
          font-family: NotoM;
          color: ${theme.colors.grey3};
        }
      }
    }
    .mobile-image-leftbtn {
      position: absolute;
      left: 0;
      font-size: 3em;
    }
    .mobile-image-rightbtn {
      position: absolute;
      right: 0;
      font-size: 3em;
    }
  }
  .pc2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5em;
    h1 {
      font-size: ${theme.fontSizes.H1};
      font-family: NotoB;
      color: ${theme.colors.black1};
      margin-bottom: 1em;
    }
    p {
      ${theme.H5};
    }
  }

  .mobile-image-box-div {
    display: flex;
    padding: 0 10%;
  }

  .slide-img {
    width: 540px;
    margin-right: 30px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${theme.colors.grey4};
  }
`;

// 서비스 문의 섹션
export const StyledService = styled.section`
  background-image: ${(props) => (props.isMobile ? '' : 'url(' + props.backgroundImage + ')')};
  background-position: center;
  background-size: cover;
  width: 90%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 879px;
  @media ${({ theme }) => theme.device.desktop} {
    width: 100%;
  }
  .section {
    width: 100%;
    @media ${({ theme }) => theme.device.desktop} {
      width: 627px;
    }
  }
  .intro {
    margin-top: 2em;
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4 {
      font-size: ${theme.fontSizes.H4};
      font-family: NotoM;
      color: ${theme.colors.navy};
      margin-bottom: 1.5em;
    }
    div {
      font-size: ${theme.fontSizes.Body1};
      font-family: NotoR;
      color: ${theme.colors.black1};
    }
    @media ${({ theme }) => theme.device.desktop} {
      h4 {
        font-size: ${theme.fontSizes.H1};
        font-family: NotoB;
        color: ${theme.colors.navy};
        margin-bottom: 1.5em;
      }
      div {
        font-size: ${theme.fontSizes.H5};
        font-family: NotoM;
        color: ${theme.colors.black1};
      }
    }
  }
  .serviceform {
    width: 100%;
    span {
      display: block;
      ${theme.H5};
      color: ${theme.colors.black1};
      margin-bottom: 1em;
    }

    input,
    textarea {
      padding: 12px;
      ${theme.Body1};
      color: ${theme.colors.black1};
    }

    .input1 {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.7em;
    }
    .input2 {
      display: flex;
      flex-direction: column;
      margin-bottom: 0.7em;
    }
  }
`;
