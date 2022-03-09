import React from 'react';
import styled from 'styled-components';
// css
import theme from '../../../styles/theme';

const RadioRepeat = ({
  // 반복되는 Radio
  options, // 라디오 옵션 [{name:"옵션1" , code :'1'}] 형식
  name, // 이벤트로 변경할 파라미터이름
  value, // 체크확인용 value
  arrayIndex, // 배열 index
  onChange, // 이벤트
  // css
  kind, // 스타일
}) => {
  return (
    <StyledRadio>
      {options?.map((option, index) => (
        <div key={index} className="input-wrap">
          <label>
            <input
              className={kind}
              type="radio"
              value={option.code || ''}
              checked={value === option.code ? true : false}
              onChange={(e) => {
                onChange(e, arrayIndex, name);
              }}
            />
            {option.name}
          </label>
        </div>
      ))}
    </StyledRadio>
  );
};

const StyledRadio = styled.div`
  display: flex;
  margin: ${(props) => props.margin};
  color: ${theme.colors.black1};

  /* .input-wrap:last-child {
    input[type='radio'],
    input[type='radio']:checked {
      margin-left: 1em;
    }
  } */

  label {
    width: 60px;
    display: flex;
    align-items: center;
    ${theme.Body1};
    margin-left: 1em;
  }

  input[type='radio'] {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    border: 1px solid ${theme.colors.grey3};
    border-radius: 100%;
    background-color: ${theme.colors.white};
    -webkit-appearance: none;
    -moz-appearance: none;
    flex-shrink: 0;
  }
  input[type='radio']:checked {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    border: 5.5px solid ${theme.colors.turquoise};
    border-radius: 100%;
    background-color: ${theme.colors.white};
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .red[type='radio']:checked {
    border: 5.5px solid ${theme.colors.red};
  }

  .royalblue[type='radio']:checked {
    border: 5.5px solid ${theme.colors.royalblue};
  }

  /* 휴대폰 신청 > 팝업 */
  &.popup {
    .input-wrap:last-child {
      input[type='radio'],
      input[type='radio']:checked {
        margin-left: 0em !important;
      }
    }
  }
`;

export default RadioRepeat;
