import React, { forwardRef } from 'react';
// 개발자 라이브러리
import theme from '../../../styles/theme';
// css
import { GlobalInput } from '../../../styles/common/input02';
// images
import { ReactComponent as Error } from '../../../images/common/check-error-02.svg';
import { ReactComponent as Success } from '../../../images/common/assets/ic-success.svg';
import { ReactComponent as Search } from '../../../images/common/btn-search.svg';
import { ReactComponent as SearchRemove } from '../../../images/common/icon/closeblack.svg';

const Input02 = forwardRef(
  (
    {
      type,
      pattern,
      name,
      value,
      searchValue, // 검색어
      kind,
      disabled,
      state,
      setState,

      onClick,
      onSearchClick, // 검색 아이콘 클릭이벤트
      onChange,
      onKeyPress,
      readOnly,
      required,
      maxLength,
      minLength,

      title,
      placeholder,
      helpMessage,
      errorMessage,
      successIcon,
      errorIcon,
      searchIcon,
      titleDelete,

      width,
      height,
      margin,
      padding,
      cursorColor,
      fontSize,

      focusBorder,
      border,
      borderRadius,
    },
    ref,
  ) => {
    // 검색어 삭제
    const onSearchRemoveClick = () => {
      setState({
        ...state,
        isLoading: true,
        searchAble: {
          searchValue: '',
        },
      });
    };

    return (
      <GlobalInput
        className={kind ? kind : 'global-input-01'}
        margin={margin}
        width={width}
        height={height}
        padding={padding}
        cursorColor={cursorColor}
        focusBorder={focusBorder}
        errorIcon={errorIcon}
        border={border}
        fontSize={fontSize}
      >
        {titleDelete ? (
          title && <label className="global-input-title">{title}</label>
        ) : (
          <label className="global-input-title">{title}</label>
        )}

        <div className="global-input-wrap">
          <input
            className="global-input-place"
            type={type ? type : 'text'}
            name={name}
            value={value}
            pattern={pattern}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onClick={onClick}
            autoComplete="off"
            ref={ref}
            readOnly={readOnly ? readOnly : false}
            required={required ? required : true}
            disabled={disabled}
            placeholder={placeholder}
            maxLength={maxLength}
            minLength={minLength}
            width={width}
            height={height}
            margin={margin}
            padding={padding}
            border={border}
            radious={borderRadius}
          />

          {successIcon && (
            <div className="global-input-icon">
              <i>
                <Success fill={`${theme.colors.newblue}`} />
              </i>
            </div>
          )}
          {errorIcon && (
            <div className="global-input-icon">
              <i>
                <Error fill={`${theme.colors.red}`} />
              </i>
            </div>
          )}
          {searchIcon && (
            <div className="global-input-icon search">
              {searchValue && (
                <i className="search-remove" onClick={onSearchRemoveClick}>
                  <SearchRemove />
                </i>
              )}
              <i className="search-submit" onClick={onSearchClick}>
                <Search fill={`${theme.colors.grey3}`} width="18px" height="18px" />
              </i>
            </div>
          )}
        </div>

        {helpMessage && <span className="help-message message">{helpMessage}</span>}
        {errorMessage && <span className="error-message message">{errorMessage}</span>}
      </GlobalInput>
    );
  },
);

export default Input02;
