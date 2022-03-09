import {
  SET_HEADER,
  SET_FLOATING,
  SET_HEADER_PC,
  SET_HEADER_MOBILE,
  SET_COPY_URL,
} from './HeaderTypes';

/* ****************** 헤더 설정 ***************************** */
export function setHeader(headerInfo) {
  return {
    type: SET_HEADER,
    isBackground: headerInfo.isBackground,
    isBugger: headerInfo.isBugger,
    isLogo: headerInfo.isLogo,
    isHomeButton: headerInfo.isHomeButton,
    isBackButton: headerInfo.isBackButton,
    titleName: headerInfo.titleName,
  };
}

export function setFloating(floating) {
  return {
    type: SET_FLOATING,
    floating: floating,
  };
}

export function setHeaderPC(header_pc) {
  return {
    type: SET_HEADER_PC,
    header_pc: header_pc,
  };
}

export function setHeaderMobile(header_mobile) {
  return {
    type: SET_HEADER_MOBILE,
    header_mobile: header_mobile,
  };
}

export function setCopyUrl(copyurl) {
  return {
    type: SET_COPY_URL,
    copyurl: copyurl,
  };
}
