import styled from 'styled-components';
import { flexbox } from '../utils';

export const Container = styled.div`
  /* html,
  body {
    width: 100%;
    height: 100%;
  } */
  /* height: 100vh; */
  /* .swiper-slide {
    height: 100vh !important;
  } */

  .swiper-container {
    height: 100vh;
  }

  .button_up {
    position: fixed;
    z-index: 999;
    right: 14px;
    bottom: 60px;
    img {
      width: 42px;
      height: 42px;
    }
  }

  .login_alert {
    position: fixed;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    top: 0;
    ${flexbox()}

    div {
      background: white;
      width: 272px;
      height: 122px;
      box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.3);
      border-radius: 3px;
      ${flexbox()}
      p {
        font-family: NoToM;
        font-size: 15px;
        line-height: 22px;
      }
    }
  }
`;
