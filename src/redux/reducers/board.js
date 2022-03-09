import * as types from '../actions/BoardTypes';

const initialState = {
  searchAble: {
    searchKey: '',
    searchValue: '',
  },
  selected: '',

  boardStatus: {
    searchAble: {},
  },
};

export default function board(state = initialState, action) {
  switch (action.type) {
    case types.SET_BOARD:
      return {
        ...state,
        boardStatus: {
          isLoading: false,
          searchAble: {
            ...action.searchAble,
          },
        },
      };
    case types.REMOVE_BOARD:
      return {
        ...state,
        boardStatus: {
          searchAble: {},
        },
      };
    case types.BBS_SEARCH:
      return {
        ...state,
        searchAble: {
          ...state.searchAble,
          searchValue: action.searchValue,
        },
      };
    case types.BBS_SEARCHKEY:
      return {
        ...state,
        searchAble: {
          ...state.searchAble,
          searchKey: action.searchKey,
        },
      };
    case types.BBS_TAB:
      return {
        ...state,
        selected: action.selected,
      };

    default:
      return state;
  }
}
