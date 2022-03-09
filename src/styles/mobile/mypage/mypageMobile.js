import styled from 'styled-components';
import theme from '../../theme';
import { flexbox } from '../../utils/flexbox';

export const MypageContainer = styled.section`
  padding-bottom: 40px;
`;

export const MainSection = styled.section`
  padding: 20px;
  
  .mypage-user {
    ${flexbox('start')};
    ${theme.H5};
    color: #373838;

    .user-name {
      margin-right: 4px;
    }
  }

  .mypage-not-payment-cms {
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

  .mypage-footer {
    margin-bottom: 20px;
    padding: 20px;
    background: ${theme.colors.boxGray}; 
    border-radius: 4px;
    color: ${theme.colors.black1};

    .mypage-txt-wrap {
      .title {
        ${theme.Title};
      }

      .sub {
        margin-top: 4px;
        margin-bottom: 3px;
        ${theme.Button2};
        font-family: 'NotoM';
        color: ${theme.colors.black1};
      }
    }

    .mypage-img-wrap {
      ${flexbox('between')};
      margin-top: 20px;

      .img {
        width: 40px;
        height: 40px;

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;

          // 이미지 선명하게
          image-rendering: -webkit-optimize-contrast;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      }
    }

    .mypage-btn {
      ${theme.Caption};

      span {
        margin-right: 6px;
      }
    }

    &.spider {
      ${flexbox('between')};
    }
  }
`;


// 알림뱃지
export const NoticeBell = styled.div`
  position: relative;

  img {
    width: 30px;
    height: 30px;
  }

  strong {
    position: absolute;
    top: 0;
    right: 5.8px;
    color: ${theme.colors.white};
    font-size: 10px;
    font-family: NotoM;
  }
`;