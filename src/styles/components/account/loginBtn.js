import styled from 'styled-components';
import theme from '../../theme';
import { flexbox } from '../../utils/flexbox';

export const KaKaoBtn = styled.a`
  ${flexbox()};
  width: 100%;
  height: 44px;
  line-height: 42px;
  margin: 20px 0;
  ${theme.H5};
  background-color: #ffe812;
  border-radius: 25px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15), 0px 1px 2px 1px rgba(0, 0, 0, 0.3);

  .kakao-txt {
    color: ${theme.colors.black1};
  }

  .kakao-img {
    width: 25px;
    margin-right: 10px;

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
`;
