import * as types from '../actions/CommunityType';

const initialState = {
  searchAble: {
    searchKey: '',
    searchValue: '',
  },
  selected: '',
};

export default function community(state = initialState, action) {
  switch (action.type) {
    case types.COMMUNITY_SEARCH:
      return {
        ...state,
        searchAble: {
          ...state.searchAble,
          searchValue: action.searchValue,
        },
      };
    case types.COMMUNITY_SEARCHKEY:
      return {
        ...state,
        searchAble: {
          ...state.searchAble,
          searchKey: action.searchKey,
        },
      };
    case types.COMMUNITY_TAB:
      return {
        ...state,
        selected: action.selected,
      };
    default:
      return state;
  }
}
