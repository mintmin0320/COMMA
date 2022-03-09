import React, { forwardRef } from 'react';
// 개발자 라이브러리
import theme from '../../../styles/theme';
// css
import { GlobalSelect } from '../../../styles/common/select';
// images
import { ReactComponent as BottomArrow } from '../../../images/common/assets/btn-arrow-bottom-02.svg';
import { ReactComponent as FillBottomArrow } from '../../../images/common/assets/btn-arrow-bottom-03.svg';

const Select = forwardRef(
  (
    {
      kind,

      onClick,

      title,
      selectMessage,
      helpMessage,
      errorMessage,
      bottomArrow,
      fillBottomArrow,

      width,
      height,
      margin,
      padding,

      border,
      borderRadius,
    },
    ref,
  ) => {
    return (
      <GlobalSelect
        className={kind ? kind : 'global-select-01'}
        margin={margin}
        width={width}
        height={height}
        padding={padding}
        border={border}
      >
        <label className="global-select-title">{title}</label>
        <div className="global-select-wrap">
          <div className="global-select-place" onClick={onClick}>
            <span className="global-select-message">{selectMessage}</span>
          </div>

          {bottomArrow && (
            <div className="global-select-icon">
              <BottomArrow fill="#828282" />
            </div>
          )}
          {fillBottomArrow && (
            <div className="global-select-icon">
              <FillBottomArrow />
            </div>
          )}
        </div>

        {helpMessage && <span className="help-message message">{helpMessage}</span>}
        {errorMessage && <span className="error-message message">{errorMessage}</span>}
      </GlobalSelect>
    );
  },
);

export default Select;
