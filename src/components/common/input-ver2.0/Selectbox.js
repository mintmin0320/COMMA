import React from 'react';
import styled from 'styled-components';

const Selectbox = ({
  kind,
  valueKind,
  name,
  defaultValue,
  onChange,
  option,

  width,
  height,
  margin,
  padding,
  disabled,
}) => {
  return (
    <StyledSelectBox
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      className={kind ? kind : 'selectBox-1'}
    >
      <select defaultValue={defaultValue} name={name} onChange={onChange} disabled={disabled}>
        {option?.map((data, index) => (
          <option
            key={index}
            value={
              valueKind === 'object'
                ? JSON.stringify({ code: data.code, name: data.name })
                : data.code
            }
          >
            {/* {console.log(defaultValue)} */}
            {data.name}
          </option>
        ))}
      </select>
    </StyledSelectBox>
  );
};

export default Selectbox;

const StyledSelectBox = styled.div`
  width: ${(props) => (props.width ? ` ${props.width};` : '148px')};
  height: ${(props) => (props.height ? `${props.height};` : '32px')};
  margin: ${(props) => (props.margin ? `${props.margin};` : '0 0 0 10px')};

  select {
    padding: ${(props) => (props.padding ? `${props.padding};` : '5px 10px')};
  }
`;
