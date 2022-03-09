import styled from 'styled-components';
import theme from '../../theme';
import { flexbox } from '../../utils/flexbox';
// images

export const SwiperContainer = styled.div`
  background-color: ${theme.colors.boxGray};
  transform: translateY(${({ translateY }) => translateY ?? translateY});

  .swiper-container {
    height: 135px;
  }

  .phone {
    display: flex;
    height: 135px;
    border-bottom: 1px solid ${theme.colors.boxGray};

    &-section-01 {
      flex: 1;
      margin: auto;
      padding-left: 20px;

      .phone-title {
        ${theme.Button2};
        margin-bottom: 10px;
        font-family: 'NotoM';
      }

      .phone-kind {
        margin-right: 5px;
        white-space: nowrap;
        ${theme.Title};
      }

      .phone-telecom {
        font-size: 8px;
      }

      .phone-point {
        display: flex;
        ${theme.Caption};

        span {
          margin-right: 5px;
        }

        strong {
          color: ${theme.colors.black1};
        }
      }

      .common {
        padding: 0 10px;
        ${theme.Body2};
        color: ${theme.colors.white};
        border-radius: 10px;
      }

      .phone-agency {
        background-color: #fe6f5b;
        margin-right: 5px;
      }

      .phone-num {
        background-color: ${theme.colors.grey2};
      }
    }

    &-section-02 {
      position: relative;
      ${flexbox()};

      .phone-max-point {
        position: absolute;
        bottom: 20px;
        right: 50px;
        width: 100%;
        padding: 5px 20px;
        ${theme.SubTitle1};
        text-align: center;
        color: ${theme.colors.white};
        background: #787878;
        border-radius: 19px;
      }

      img {
        width: 100px;
        height: 100px;
      }
    }
  }
`;

export const MypageServiceBanner = styled.div`  
  .mypage-service-banner-img {
    height: 135px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      image-rendering: -webkit-optimize-contrast;
    }
  }
`;