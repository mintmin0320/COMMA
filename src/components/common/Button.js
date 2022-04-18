import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

const CommonButton = ({
  width,
  height,
  margin,
  padding,
  fontSize,
  type,
  kind,
  children,
  onClickHandler,
  disabled,
  RefButton,
  imgSrc,
  imgMargin,
  border,
  borderRadious,
  backgroundColor,
  color,
  translateX,
  frontText,
}) => {
  return (
    <StyledButton
      ref={RefButton}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      onClick={onClickHandler}
      type={type}
      fontSize={fontSize}
      border={border}
      borderRadious={borderRadious}
      className={kind}
      color={color}
      backgroundColor={backgroundColor}
      translateX={translateX}
      disabled={disabled}
    >
      {frontText && frontText}
      {imgSrc && <img style={{ margin: imgMargin }} src={imgSrc} />}
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  ${(props) => (props.display ? `display: ${props.display};` : 'display: flex;')}
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => (props.padding ? props.padding : '0 1.5em')};
  ${theme.Body1};
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
  border-radius: ${(props) => (props.borderRadious ? props.borderRadious : '3px')};
  border: none;
  outline: none !important;
  white-space: nowrap;
  transition: all 100ms ease-in-out;
  ${(props) => props.translateX && `transform : translateX(${props.translateX})`};

  &:focus {
    box-shadow: none;
  }
  img {
    margin-right: 5px;
  }
  :disabled {
    opacity: 0.6;
    cursor: default;
  }

  /* kind */
  &.btn_01 {
    background-color: ${({ theme }) => theme.colors.navyBox};
    color: ${({ theme }) => theme.colors.white};
  }
  &.btn_02 {
    background-color: ${(props) => (props.backgroundColor === 'white' ? '#fff' : 'transparent')};
    color: ${({ theme }) => theme.colors.navyBox};
    border: 1px solid ${({ theme }) => theme.colors.navyBox};
    &:hover {
      color: ${theme.colors.white};
    }
  }
  &.custom {
    color: ${(props) => (props.color ? props.color : '')};
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : '')};
    font-size: ${(props) => (props.fontSize ? props.fontSize : '')};
    border: ${(props) => (props.border ? props.border : '')};
  }
  &.btn_03 {
    background-color: ${({ theme }) => theme.colors.turquoise};
    color: ${({ theme }) => theme.colors.white};
  }
  //배경 투명
  &.btn_04 {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.grey1};
    border: 1px solid ${({ theme }) => theme.colors.grey3};
  }
  // 배경 화이트
  &.btn_04_1 {
    background-color: ${theme.colors.white};
    color: ${({ theme }) => theme.colors.grey1};
    border: 1px solid ${({ theme }) => theme.colors.grey3};
  }
  // 배경 화이트
  &.btn_04_2 {
    background-color: ${theme.colors.white};
    color: ${({ theme }) => theme.colors.grey1};
    /* border: 1px solid ${({ theme }) => theme.colors.grey3}; */
    font-family: NoToM;
  }
  // 배경 화이트
  &.btn_04_2_12px {
    background-color: ${theme.colors.white};
    color: ${({ theme }) => theme.colors.grey1};
    /* border: 1px solid ${({ theme }) => theme.colors.grey3}; */
    font-family: NoToM;
    font-size: 12px;
  }
  &.btn_05 {
    background-color: ${({ theme }) => theme.colors.grey1};
    color: ${({ theme }) => theme.colors.white};
  }
  &.btn_05_1 {
    background-color: ${({ theme }) => theme.colors.grey1};
    color: ${({ theme }) => theme.colors.white};
    font-family: NoToM;
    font-size: 18px;
  }
  &.btn_05_2 {
    background-color: ${({ theme }) => theme.colors.grey1};
    color: ${({ theme }) => theme.colors.white};
    font-family: NoToM;
    font-size: 15px;
  }
  &.btn_06 {
    background-color: ${({ theme }) => theme.colors.grey3};
    color: ${({ theme }) => theme.colors.white};
  }

  &.btn_06_1 {
    background-color: ${({ theme }) => theme.colors.grey3};
    color: ${({ theme }) => theme.colors.black};
  }

  &.btn_07 {
    background-color: ${({ theme }) => theme.colors.grey4};
    color: ${({ theme }) => theme.colors.grey3};
  }

  &.btn_07_focus {
    background-color: ${({ theme }) => theme.colors.turquoise};
    color: ${({ theme }) => theme.colors.white};
  }

  &.btn_08 {
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.turquoise};
    color: ${({ theme }) => theme.colors.turquoise};
  }
  &.btn_09 {
    background-color: ${({ theme }) => theme.colors.white};
    border: ${(props) => props.border} solid ${({ theme }) => theme.colors.boxGray};
    color: ${({ theme }) => theme.colors.turquoise};
  }
  &.btn_10 {
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.red};
  }
  &.btn_11 {
    background-color: ${({ theme }) => theme.colors.grey4};
    color: ${({ theme }) => theme.colors.grey3};
    &:hover:enabled,
    &:active:enabled {
      background-color: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  &.btn_11_focus {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
  }
  //lapis & white
  &.btn_12 {
    background-color: ${({ theme }) => theme.colors.lapis};
    color: ${({ theme }) => theme.colors.white};
  }
  //grey2 & white
  &.btn_13 {
    background-color: ${({ theme }) => theme.colors.grey2};
    color: ${({ theme }) => theme.colors.white};
  }

  //grey2 & white
  &.btn_13_2 {
    background-color: ${({ theme }) => theme.colors.grey2};
    color: ${({ theme }) => theme.colors.white};
    font-size: 12px;
  }

  &.wideBtn_01 {
    background-color: ${({ theme }) => theme.colors.navyBox};
    color: ${({ theme }) => theme.colors.white};
    width: 335px;
    height: 44px;
  }
  &.wideBtn_02 {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.navyBox};
    border: 1px solid ${({ theme }) => theme.colors.navyBox};
    width: 335px;
    height: 44px;
  }
  //border-radius
  &.br_btn_01 {
    background-color: ${({ theme }) => theme.colors.grey4};
    color: ${({ theme }) => theme.colors.grey3};
    border-radius: 50px;
  }

  &.br_btn_01_focus {
    background-color: ${({ theme }) => theme.colors.turquoise};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 50px;
  }

  &.btn_14 {
    background-color: ${({ theme }) => theme.colors.murstard};
    color: ${({ theme }) => theme.colors.white};
  }
  &.btn_15 {
    background-color: ${({ theme }) => theme.colors.lavender};
    color: ${({ theme }) => theme.colors.white};
  }
  &.btn_16 {
    background-color: ${({ theme }) => theme.colors.royalblue};
    color: ${({ theme }) => theme.colors.white};
  }
  &.btn_16_opacity {
    background-color: ${({ theme }) => theme.colors.royalblue};
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.5;
  }
  &.btn_17 {
    border: 2px solid ${theme.colors.lavender};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.lavender};
  }
  &.btn_17_1 {
    border: 1px solid ${theme.colors.lavender};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.lavender};
  }
  &.btn_18 {
    background-color: ${({ theme }) => theme.colors.boxGray};
    color: ${({ theme }) => theme.colors.black};
  }
  &.btn_18_1 {
    background-color: ${({ theme }) => theme.colors.boxGray};
    color: ${({ theme }) => theme.colors.grey1};
    font-size: ${(props) => (props.fontSize ? props.fontSize : '')};
    font-family: NoToM;
  }
  &.btn_19 {
    background-color: ${({ theme }) => theme.colors.murstard};
    color: ${({ theme }) => theme.colors.white};
  }
  &.btn_20 {
    background-color: #3c3530;
    color: ${({ theme }) => theme.colors.white};
  }
  &.btn_21 {
    background-color: #f2784b;
    color: ${({ theme }) => theme.colors.white};
  }
  &.btn_22 {
    background-color: #fcd670;
    color: ${({ theme }) => theme.colors.white};
  }
  &.btn_23 {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.lapis};
    border: 1px solid ${({ theme }) => theme.colors.lapis};
  }

  &.btn_24 {
    background-color: #a0736c;
    color: ${({ theme }) => theme.colors.white};
  }

  &.btn_25 {
    background-color: #4d4d4e;
    color: white;
  }

  &.btn_26 {
    background-color: ${({ theme }) => theme.colors.navyBox};
    font-size: 20px;
    font-weight: 500;
    font-family: NoToM;
    color: ${({ theme }) => theme.colors.white};
  }

  &.btn_27 {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  &.btn_28 {
    background-color: ${({ theme }) => theme.colors.brick};
    color: ${({ theme }) => theme.colors.white};
  }

  &.btn_29 {
    background-color: #4b4737;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${(props) => (props.fontSize ? props.fontSize : '')};
    font-family: NoToM;
  }

  &.btn_30 {
    background-color: #fae100;
    color: #3c1e1e;
    font-size: ${(props) => (props.fontSize ? props.fontSize : '')};
    font-family: NoToM;
  }

  &.btn_31 {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    color: ${({ theme }) => theme.colors.grey1};
    border: 1px solid #a9a9a9;
    font-family: NoToM;
    font-size: ${(props) => (props.fontSize ? props.fontSize : '')};
  }

  &.btn_32 {
    font-family: NoToM;
    background-color: #ff7d68;
    color: white;
    font-size: 12px;
    line-height: 17px;
  }

  &.btn_33 {
    font-family: NoToM;
    background-color: ${({ theme }) => theme.colors.newblue};
    color: white;
    font-size: 15px;
    line-height: 15px;
  }

  &.homebt_1 {
    font-family: NoToM;
    background-color: white;
    color: ${({ theme }) => theme.colors.grey1};
    border: 1px solid ${({ theme }) => theme.colors.grey1};
    font-size: 15px;
    line-height: 20px;
  }
  &.homebt_2 {
    font-family: NoToM;
    background-color: ${({ theme }) => theme.colors.grey1};
    color: white;
    font-size: 15px;
    line-height: 20px;
  }

  &.btn_disable_blue {
    background-color: #8594b0;
    color: ${({ theme }) => theme.colors.white};
  }

  &.textBtn_01 {
    background-color: transparent;
    border: none !important;
    color: ${theme.colors.navyBox};
  }

  /* TODO: 병합 시, kind 변경 */
  &.newblue {
    background-color: ${({ theme }) => theme.colors.newblue};
    border-radius: 25px;
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15), 0px 1px 2px 1px rgba(0, 0, 0, 0.3);
  }

  &.yellow {
    background-color: #ffe812;
    color: ${({ theme }) => theme.colors.black1};
    font-family: 'NoToM';
  }

  /* status */
  ${(kind) =>
    kind &&
    css`
      &.btn_01:hover:enabled,
      &.btn_02:hover:enabled,
      &.wideBtn_01:hover:enabled {
        background-color: ${theme.colors.lapis};
      }
      &.wideBtn_02:hover:enabled {
        background-color: ${theme.colors.lapis};
        border: ${theme.colors.royalblue};
        color: ${theme.colors.white};
      }
      &.btn_04:hover:enabled {
        border: 2px solid ${theme.colors.turquoise};
      }

      &.btn_01:active:enabled,
      &.btn_02:active:enabled,
      &.wideBtn_01:active:enabled {
        background-color: ${theme.colors.royalblue};
      }
      &.wideBtn_02:active:enabled {
        background-color: ${theme.colors.royalblue};
        border: ${theme.colors.royalblue};
        color: ${theme.colors.white};
      }
      &.btn_06:active:enabled {
        background-color: ${theme.colors.grey2};
      }

      &.btn_01:disabled,
      &.btn_02:disabled,
      &.btn_03:disabled,
      &.btn_07_focus:disabled,
      &.btn_20:disabled,
      &.wideBtn_01:disabled,
      &.wideBtn_02:disabled,
      &.iphoneFinish:disabled {
        opacity: 0.3;
      }
    `};

  @media ${({ theme }) => theme.device.mobile} {
  }
`;

export default React.memo(CommonButton);
