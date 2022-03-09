/*

----------기본 import 셋팅---------

import styled, { css } from 'styled-components';

----------styledcomponent 구조-----

export const Styled = styled.div`
  ${(props)=>{
    return css `
    `
  }}
`

*/
import _isMobile from '../utils/isMobile';

// props 조건문 함수 ( styled component props , 변경할파라미터명 , 기본값 )
export const propStyled = (props, param, defaultValue) => {
  const result = props[param] ? props[param] : defaultValue;
  return result;
};
//ex ) max-height: ${propStyled(props, 'maxHeight', '325px')};

// pc,모바일 css 셋팅 (  mobile일때 , pc일때  )
// jsx ex ) {styledDevice(isMobile, '모바일입니다', 'pc입니다')}
// 스타일드컴포넌트 ex ) margin-left: ${styledDevice(isMobile, '0', '45px')};
export const settingDevice = (mobile, pc) => {
  const isMobile = _isMobile();
  const result = isMobile ? mobile : pc;
  return result;
};
