import React from 'react';
import { CheckboxWrap } from './styles';

const Checkbox = ({
  onChange, // onChange 이벤트
  option, // [{code : '' , name :''}] 형식
  params, // 검색기능을 수행하는 체크박스일때 기본셋팅 파라미터명
  name, // 변경할 파라미터 이름

  // css
  width, // width 조절
  labelWidth, // label쪽 고정적인 width를 줄때 사용
  margin, // margin 조절
  checkMargin,
  checkLabelMarginBottom,
  column, // flex-dircetion column
}) => {
  return (
    <>
      <CheckboxWrap
        column={column}
        width={width}
        labelWidth={labelWidth}
        margin={margin}
        checkLabelMarginBottom={checkLabelMarginBottom}
      >
        <div className="checkbox-inner">
          {option.map((option, index) => (
            <label
              key={index}
              style={checkMargin ? { margin: checkMargin } : {}}
              className={params && params[index]?.checked ? 'checkbox-on' : 'checkbox-off'}
            >
              <input
                type="checkbox"
                name={option.name}
                value={option.code}
                checked={params && params[index]?.checked}
                onChange={onChange}

              />
              <p>{option.name}</p>
            </label>
          ))}
        </div>
      </CheckboxWrap>
    </>
  );
};

export default Checkbox;
