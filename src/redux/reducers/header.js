import * as types from '../actions/HeaderTypes';

const initialState = {
  headerStatus: {
    isBackground: false,
    isBugger: false,
    isLogo: false,
    isHomeButton: false,
    isBackButton: false,
    titleName: '',
    header_pc: true,
    header_mobile: true,
  },
  floating: true,
  copyurl: '',
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    /* 헤더설정 */
    case types.SET_HEADER:
      return {
        ...state,
        headerStatus: {
          ...state.headerStatus,
          isBackground: action.isBackground,
          isBugger: action.isBugger,
          isLogo: action.isLogo,
          isHomeButton: action.isHomeButton,
          isBackButton: action.isBackButton,
          titleName: action.titleName,
        },
      };
    case types.SET_HEADER_PC:
      return {
        ...state,
        headerStatus: {
          ...state.headerStatus,
          header_pc: action.header_pc,
        },
      };

    case types.SET_HEADER_MOBILE:
      return {
        ...state,
        headerStatus: {
          ...state.headerStatus,
          header_mobile: action.header_mobile,
        },
      };

    /* 헤더설정 */
    case types.SET_FLOATING:
      return {
        ...state,
        floating: action.floating,
      };

    /* 링크복사url */
    case types.SET_COPY_URL:
      return {
        ...state,
        copyurl: action.copyurl,
      };
    default:
      return state;
  }
}
