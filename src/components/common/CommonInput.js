import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

const CommonInput = ({
  width,
  inputWidth,
  height,
  margin,
  inputtype,
  idName,
  kind,
  children,
  onClickHandler,
  onClickHandler2,
  disabled,
  placeholder,
  titlename,
  value,
  validityStyles,
  src,
  autoComplete,
  onChange,
  onFocus,
  onBlur,
  onkeyPress,
  required,
  name,
  maxLength,
  mask,
  error,
  icon,
  error2,
  borderBottom,
  RefInput,
  readOnly,
  padding,
  border,
  borderRadius,
  srcmargin,
  srcc,
  onKeyPress,
  translateX,
  imgTop,
}) => {
  return (
    <StyledInpuWrap width={width} imgTop={imgTop}>
      <p className={kind}>{titlename}</p>
      <StyledInput
        ref={RefInput}
        id={idName}
        className={kind}
        type={inputtype}
        name={name}
        value={value}
        width={inputWidth ? inputWidth : width}
        translateX={translateX}
        height={height}
        margin={margin}
        readOnly={readOnly}
        onChange={onChange}
        disabled={disabled}
        onkeyPress={onkeyPress}
        required={required}
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete={autoComplete}
        validityStyles={validityStyles}
        mask={mask}
        borderBottom={borderBottom}
        onClick={onClickHandler}
        padding={padding}
        border={border}
        borderRadius={borderRadius}
        onKeyPress={onKeyPress}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {children}
      </StyledInput>
      {icon === false ? (
        ''
      ) : (
        <a id="eyesOn" className="inputIcon" onClick={onClickHandler2}>
          <img src={src}></img>
          <img src={srcc} className="srcc"></img>
        </a>
      )}

      <h1>{error}</h1>
      <h2>{error2}</h2>
    </StyledInpuWrap>
  );
};

const StyledInpuWrap = styled.div`
  position: relative;
  width: ${(props) => props.width};
  p {
    position: absolute;
    top: 35%;
    left: 20px;
    ${theme.Body2};
    color: ${theme.colors.grey2};
    border: none !important;
    cursor: default;
  }
  .inputIcon {
    display: ${(props) => (props.type === 'text' ? 'none' : 'block')};
    position: absolute;
    top: ${(props) => (props.imgTop ? props.imgTop : '19px')};
    right: 15px;
    border: none;
    background: none;
    cursor: pointer;
  }
  .srcc {
    margin-top: ${(props) => (props.height === '42px' ? '-20px !important' : '-10px !important')};
  }
  .is-active {
    color: ${theme.colors.red};
    font-weight: 500;
    font-family: NotoM;
    border: 1px solid ${theme.colors.red};
  }
  .is-active-middle {
    color: ${theme.colors.red};
    font-family: NotoM;
    border-left: 1px solid ${theme.colors.red};
    border-right: 1px solid ${theme.colors.red};
    &.bottom {
      border-bottom: 1px solid ${theme.colors.red};
    }
  }
  h1 {
    position: absolute;
    bottom: -30px;
    right: 0;
    color: ${theme.colors.red};
    font-size: 12px;
    font-family: 'NotoR';
  }
  h2 {
    position: absolute;
    /* bottom: -30px; */
    right: 66px;
    color: ${theme.colors.red};
    font-size: 12px;
    font-family: 'NotoR';
  }
`;

const StyledInput = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : '60px')};
  margin: ${(props) => props.margin};
  padding: ${(props) => (props.padding ? props.padding : '0 8% 0 38%')};
  color: ${theme.colors.black1};
  cursor: default;
  font-size: ${(props) => (props.type === 'password' ? '14px' : '14px')};
  letter-spacing: ${(props) => (props.type === 'password' ? '3px' : 'normal')};
  font-family: NotoR;
  border: ${(props) => (props.border ? props.border : '1px solid #A9A9A9')};
  border-bottom: ${(props) => props.borderBottom};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '0')};
  z-index: 1;
  ${(props) => props.translateX && `transform : translateX(${props.translateX})`};
  &:focus {
    box-shadow: none;
    outline: none;
    /* border: 1px solid #f1f2f2; */
  }
  ::placeholder {
    color: ${theme.colors.grey3};
    font-size: ${(props) => (props.type === 'password' ? '14px' : '14px')};
    font-family: NotoR;
    /* transform: ${(props) => (props.type === 'password' ? 'translateY(-12px)' : '')}; */
    letter-spacing: ${(props) => (props.type === 'password' ? 'normal' : 'normal')};
  }
  img {
    margin-right: 5px;
  }
  :disabled {
    color: #9b9b9b;
    border: none;
  }
  /* kind */
  &.address {
    ::placeholder {
      color: ${theme.colors.grey1};
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
  }
`;

export default CommonInput;
