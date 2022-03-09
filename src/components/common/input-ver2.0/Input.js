import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const Input = ({
  type,
  name,
  value,
  kind,

  onClickHandler,
  onChange,
  RefInput,
  readOnly,
  required,
  maxLength,
  minLength,
  patten,
  pattenMessage,

  error,
  placeholderIcon,
  placeholderImg,
  titleName,
  titleRequired,
  placeholder,

  width,
  height,
  margin,
  wrapMargin,
  padding,
  borderBottom,
  borderRedBottom,
  wrapBorder,
  border,
  borderRadius,
}) => {
  return (
    <GlobalInput className={kind ? kind : 'input-ver2-01'}>
      <StyledInputWrap
        wrapMargin={wrapMargin}
        wrapBorder={wrapBorder}
        borderBottom={borderBottom}
        borderRedBottom={borderRedBottom}
        className={error ? 'error input-ver2-wrap' : 'input-ver2-wrap'}
      >
        {titleName && (
          <p className="input-ver2-title">
            {titleName}
            {titleRequired && <strong>*</strong>}
          </p>
        )}

        <StyledInput
          className="input-ver2-place"
          type={type ? type : 'text'}
          name={name}
          value={value}
          onChange={onChange}
          onClick={onClickHandler}
          ref={RefInput}
          readOnly={readOnly}
          required={required ? required : true}
          placeholder={placeholder}
          autoComplete="off"
          maxLength={maxLength}
          minLength={minLength}
          patten={patten}
          title={pattenMessage}
          width={width}
          height={height}
          margin={margin}
          padding={padding}
          border={border}
          borderRadius={borderRadius}
        ></StyledInput>

        {placeholderIcon && (
          <a id="eyesOn" className="input-ver2-icon">
            <img src={placeholderImg} />
          </a>
        )}
      </StyledInputWrap>
    </GlobalInput>
  );
};

const GlobalInput = styled.div`
  .input-ver2-wrap {
    position: relative;
  }

  .input-ver2-icon {
    display: ${(props) => (props.type === 'text' ? 'none' : 'block')};
    position: absolute;
    top: 25px;
    right: 15px;
    z-index: 1;
  }

  .error {
    font-weight: 500;
    font-family: NotoM;
    border: 1px solid ${theme.colors.red};

    p,
    .input-ver2-place {
      color: ${theme.colors.red};
      font-weight: 500;
      font-family: NotoM;
    }

    .input-ver2-icon {
      top: 16px;
      right: 10px;
      width: 26px;
    }
  }
`;

const StyledInputWrap = styled.div`
  display: flex;
  align-items: center;
  margin: ${(props) => (props.wrapMargin ? props.wrapMargin : '')};
  border: ${(props) => (props.wrapBorder ? props.wrapBorder : `1px solid ${theme.colors.grey3}`)};
  border-bottom: ${(props) => props.borderBottom};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 'none')};

  &.error {
    border-bottom: ${(props) => props.borderRedBottom} !important;
  }

  .input-ver2-title {
    flex: 4;
    padding-left: 20px;
    ${theme.Body2};
    white-space: nowrap;
    color: ${theme.colors.grey2};
    border: none !important;

    strong {
      color: ${theme.colors.red};
    }
  }

  .input-ver2-place {
    flex: 6;
  }
`;

const StyledInput = styled.input`
  display: flex;

  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '60px')};
  margin: ${(props) => (props.margin ? props.margin : '')};
  padding: ${(props) => (props.padding ? props.padding : '0 0 0 10px')};
  border: ${(props) => (props.border ? props.border : '')};

  font-size: 14px;
  font-family: NotoR;
  color: ${theme.colors.black1};

  z-index: 1;

  ::placeholder {
    color: ${theme.colors.grey3};
    font-size: 14px;
    font-family: NotoR;
  }

  img {
    margin-right: 5px;
  }
`;

export default Input;
