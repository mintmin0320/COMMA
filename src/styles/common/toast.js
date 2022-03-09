import styled from "styled-components";
import { animations, flexbox } from "../utils";
import theme from "../theme";

export const GlobalToast = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;

  .global-toast-inner {
    position: absolute;
    bottom: 0;
    width: 100%;
    max-height: 375px;
    padding: 30px 20px;
    color: ${theme.colors.black1};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${theme.colors.white};
    animation: ${animations.slideFromBottom} 300ms ease-in-out;
    z-index: 9999;
    overflow: auto;

    .toast-body {
      &::before {
        position: fixed;
        left: 0;
        bottom: 0;
        display: block;
        content: '';
        width: 100%;
        height: 150px;
        background-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 0, hsla(0, 0%, 100%, .3) 30%, #fff);
        pointer-events: none;
      }
    }

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }

  } 
`;