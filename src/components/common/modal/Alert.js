import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useSelector } from 'react-redux';
// css
import styled from 'styled-components';
import theme from '../../../styles/theme';
const Alert = ({
  title,
  sub1,
  sub2,
  sub3,
  btnTxt, // 첫 번째 버튼 txt
  agreeTxt1, // 두 번째 버튼 txt
  onClick1,
  onClick2,
  img,

  // css
  kind,
  width,
  height,
  padding,
  titleColor,
  subColor,
  btnColor,
  btnBackColor,
}) => {
  const copyurl = useSelector((store) => store.header.copyurl);
  
  return (
    <StyledModal
      className={kind}
      titleColor={titleColor}
      btnColor={btnColor}
      btnBackColor={btnBackColor}
      subColor={subColor}
      width={width}
      height={height}
      padding={padding}

      agreeTxt1={agreeTxt1}
    >
      <div className={'shadow-modal'}>
        <div className="text">
          {img && (
            <div className="img">
              <img src={img} />
            </div>
          )}

          {title && <h2 className="alert-title">{title}</h2>}

          <p>
            {sub1} <br />
            {sub2}
          </p>

          {sub3 && <p className="sub3">{sub3}</p>}
        </div>

        <div className="button">
          {(kind === 'alert-1' || kind === 'alert-3') && (
            <React.Fragment>
              <button type="button" onClick={onClick1}>
                {btnTxt ?? '취소'}
              </button>
              <button type="button" onClick={onClick2}>
                {agreeTxt1 ?? '확인'}
              </button>
            </React.Fragment>
          )}
          {(kind === 'alert-2' || kind === 'alert-4') && (
            <button type="button" onClick={onClick1}>
              {agreeTxt1 ? agreeTxt1 : '확인'}
            </button>
          )}

          {kind === 'copy' && (
            <React.Fragment>
              <button type="button" onClick={onClick1}>
                취소
              </button>
              <CopyToClipboard text={copyurl}>
                <button type="button" onClick={onClick2}>
                  {agreeTxt1 ? agreeTxt1 : '확인'}
                </button>
              </CopyToClipboard>
            </React.Fragment>
          )}
        </div>
      </div>
    </StyledModal>
  );
};

export default Alert;

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100000;

  .shadow-modal {
    background-color: white;
    width: ${(props) => (props.width ? props.width : `292px`)};
    border-radius: 3px;
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  .img {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .text {
    background-color: ${theme.colors.white};
    padding: ${(props) => (props.padding ? props.padding : '')};
  }

  h2 {
    ${theme.H5};
    color: ${theme.colors.black1};
    font-size: 17px;

    &.alert-title {
      margin-bottom: 20px;
    }
  }

  p {
    ${theme.Title};
    color: ${theme.colors.grey2};
    word-break: keep-all; // 단어 단위로 줄바꿈

    &.sub3 {
      padding-top: 20px;
    }
  }

  .button {
    width: 100%;
    height: 100%;

    button {
      height: 40px;
      padding: ${(props) => (props.agreeTxt1 ? '0 22px 0 0' : 'auto')};
      ${theme.Title};
      color: ${(props) => (props.btnColor ? props.btnColor : `${theme.colors.white}`)};
      background: ${(props) =>
        props.btnBackColor ? props.btnBackColor : `${theme.colors.lavender}`};
      border: none;
      outline: none;
    }
  }

  @media (max-width: 1020px) {
    .button {
      background: ${theme.colors.white};
    }
  }

  @media (min-width: 1020px) {
    .button {
      button {
        padding: ${(props) => (props.agreeTxt1 ? '0' : 'auto')};
      }
    }
  }
`;
