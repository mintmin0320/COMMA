import React from 'react';
import { CheckboxWrap } from './styles';

const CheckboxRepeat2 = ({
  name, // checkbox 이름
  value, // 체크확인용 value
  arrayIndex, // 배열 index
  options, // [{code : '' , name :''}] 형식
  onChange, // onChange 이벤트
  param, // 배열중 객체 정보변경시 파라미터이름
  // css
  width, // width 조절
  labelWidth, // label쪽 고정적인 width를 줄때 사용
  margin, // margin 조절
}) => {
  return (
    <React.Fragment>
      <CheckboxWrap width={width} labelWidth={labelWidth} margin={margin}>
        <div className="checkbox-inner">
          {options.map((option, index) => (
            <label
              key={index}
              className={value.includes(option.code) ? 'checkbox-on' : 'checkbox-off'}
            >
              <input
                type="checkbox"
                name={option.name}
                value={option.code || ''}
                checked={value.includes(option.code) ? true : false}
                onChange={(e) => {
                  const oldArray = value === '' ? new Array() : value.split(',');
                  const newArray =
                    oldArray.indexOf(e.target.value) === -1
                      ? oldArray.concat(e.target.value)
                      : oldArray.filter((value) => value !== e.target.value);
                  const newValue = newArray.length > -1 ? newArray.join(',') : '';
                  onChange(arrayIndex, param, name, newValue);
                }}
              />
              <p> {option.name}</p>
            </label>
          ))}
        </div>
      </CheckboxWrap>
    </React.Fragment>
  );
};

export default CheckboxRepeat2;
