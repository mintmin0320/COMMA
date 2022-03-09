import * as types from '../actions/SidebarTypes';

const initialState = {
  tab: '',
  paddingTop: '',
};

export default function sidebar(state = initialState, action) {
  switch (action.type) {
    case types.SIDEBAR_TAB:
      return {
        ...state,
        tab: action.tab,
        paddingTop: action.paddingTop,
      };

    default:
      return state;
  }
}
