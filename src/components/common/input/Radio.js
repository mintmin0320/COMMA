{
  /* 
  ex)
    <Radio
      name="useYn"
      value={state.useYn}
      option={state.useOptions}

      // { code: '옵션1', name: 'name' } 형식외에, 
      // { value: '옵션1', label: 'name'} 일때
      nameKind="label"
      valueKind="value"

      onChange={_handleInputChange}
      valueMargin="0 30px 0 0"
      borderColor={`${theme.colors.royalblue}`}
      /> 
*/
}

import React from 'react';
import styled from 'styled-components';
// css
import theme from '../../../styles/theme';

const Radio = ({
  name,
  value,
  option, // ex) { code: '옵션1', name: 'name' }

  nameKind,
  valueKind,
  onChange,

  kind,
  flex,
  margin,
  wrapMargin,
  borderColor,
}) => {
  return (
    <StyledRadio
      className={kind ? kind : 'radio-ver2-01'}
      flex={flex}
      margin={margin}
      wrapMargin={wrapMargin}
      borderColor={borderColor}
    >
      {option?.map((list, index) => {
        const radioName = list[`${nameKind}`] || list.name || '';
        const radioValue = list[`${valueKind}`] || list.code || '';

        return (
          <div key={index} className="input-wrap">
            <label>
              <input
                type="radio"
                name={name}
                defaultValue={radioValue}
                checked={value === radioValue ? true : false}
                onChange={(e) => {
                  onChange && onChange(e);
                }}
              />
              <p className="radio-item">{radioName}</p>
            </label>
          </div>
        );
      })}
    </StyledRadio>
  );
};

const StyledRadio = styled.div`
  display: ${(props) => (props.flex ? props.flex : 'flex')};
  margin: ${(props) => props.margin};
  color: ${theme.colors.black1};

  .input-wrap {
    margin: ${(props) => props.wrapMargin};
  }

  label {
    display: flex;
    align-items: center;
    width: auto;
    margin-left: 1em;
    ${theme.Body1};
    cursor: pointer;
  }

  input[type='radio'] {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    margin-right: 8px;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.grey3};
    border-radius: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  input[type='radio']:checked {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    background-color: ${theme.colors.white};
    border: ${(props) =>
      props.borderColor
        ? `5.5px solid ${props.borderColor}`
        : `5.5px solid ${theme.colors.navyBox}`};
    border-radius: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`;

export default Radio;
