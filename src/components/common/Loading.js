import React from 'react';
import styled from 'styled-components';
import spinner from '../../images/common/icon/loading.svg';
import theme from '../../styles/theme';
import _isMobile from '../../utils/isMobile';
const Loading = ({ text }) => {
  const isMobile = _isMobile();
  return (
    <StyledLoading isMobile={isMobile}>
      <div className="loadingbar">
        <div className="logo-area">
          <img className="infinite_rotating_logo" src={spinner} alt="loading"></img>
          {text && <p className="loading-txt">{text}</p>}
        </div>
      </div>
    </StyledLoading>
  );
};
const StyledLoading = styled.div`
  z-index: 3;
  .loadingbar {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.6);
  }
  img.infinite_rotating_logo {
    width: ${(props) => (props.isMobile ? '50px' : '100px')};
    margin-bottom: 15px;
    transform-origin: 50% 50%;
    animation: rotate_image 1s linear infinite;
  }

  .logo-area {
    text-align: center;
  }

  .loading-txt {
    ${theme.Title};
    color: ${theme.colors.white};
  }

  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
