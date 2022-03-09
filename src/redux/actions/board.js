import {
  SET_BOARD,
  REMOVE_BOARD,
  GET_LOADING,
  GET_SUCCESS,
  GET_FAILED,
  BBS_SEARCH,
  BBS_SEARCHKEY,
  BBS_TAB,

  // SET_INIT,
} from './BoardTypes';
import _axios from '../../utils/axios';

/* *************************** 게시판 정보 ************************************* */
export function setBoard(searchAble) {
  return (dispatch) => {
    dispatch({
      type: SET_BOARD,
      searchAble,
    });
  };
}

export function removeBoard() {
  return (dispatch) => {
    dispatch({
      type: REMOVE_BOARD,
    });
  };
}

/* *************************** 게시판 리스트 ************************************* */
export function getDataList(state, url, params) {
  return (dispatch) => {
    dispatch({
      type: GET_LOADING,
    });

    // API REQUEST
    return _axios(url, params)
      .then((response) => {
        return dispatch(loadSuccess(state, response));
      })
      .catch((error) => {
        return {
          type: GET_FAILED,
        };
      });
  };
}

export function loadSuccess(state, response) {
  if (response.result === '0') {
    return {
      type: GET_SUCCESS,
      state,
      response,
    };
  } else {
    return {
      type: GET_FAILED,
      response,
    };
  }
}

/* *************************** 게시판 삭제 ************************************* */
export function setBoardDelete(url, params) {
  return () => {
    // API REQUEST
    return _axios(url, params).then((response) => {
      return response;
    });
  };
}

/* *************************** 게시판 삭제 ************************************* */

/* *************************** 검색값 아이디 ************************************* */
export function setSearchValue(search) {
  return {
    type: BBS_SEARCH,
    searchValue: search,
  };
}

/* *************************** 검색값 키 ************************************* */
export function setSearchKey(key) {
  return {
    type: BBS_SEARCHKEY,
    searchKey: key,
  };
}

/* *************************** 탭 state ************************************* */
export function setTab(tab) {
  return {
    type: BBS_TAB,
    selected: tab,
  };
}
