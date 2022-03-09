import * as types from '../actions/footerType';

const initialState = {
  isFooter: true,
  isNavi: true,
};

export default function footer(state = initialState, action) {
  switch (action.type) {
    /* 헤더설정 */
    case types.SET_FOOTER:
      return {
        ...state,
        isFooter: action.isFooter,
      };

    case types.SET_NAVI:
      return {
        ...state,
        isNavi: action.isNavi,
      };

    default:
      return state;
  }
}
