import {
  AUTH_GET_STATUS,
  AUTH_GET_STATUS_FAILURE,
  AUTH_GET_STATUS_SUCCESS,
  AUTH_LOGIN,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  ID_SAVE,
} from './AuthTypes';
import _axios from '../../utils/axios';

/* *************************** 로그인 ************************************* */
// export function idSave(userId) {
//   // Storage 저장
//   sessionStorage.setItem('userId', userId);

//   return {
//     type: ID_SAVE,
//     saveId: userId,
//   };
// }

export function init() {
  return {
    type: AUTH_LOGIN,
  };
}

export function loginRequest(userId, userPw) {
  return (dispatch) => {
    dispatch(login());
    // const CryptoJS = require("crypto-js");
    // const secretKey = 'secret key';
    // let encrypted = CryptoJS.AES.encrypt((userPw), secretKey).toString();
    const url = '/signIn';
    const params = {
      user_id: userId,
      user_password: userPw,
    };
    // encrypt

    // API REQUEST
    return _axios(url, params)
      .then((response) => {
        // SUCCEED
        dispatch(loginSuccess(response, params));
      })
      .catch((error) => {
        console.log(error)

        // FAILED
        dispatch(loginFailure());
      });
  };
}

export function login() {
  return {
    type: AUTH_LOGIN,
  };
}

export function loginSuccess(response, params) {
    if (response.result) {
    // 로컬에 저장
    let storageData = {
      isLogIn: true,
      userId: params.user_id,
      // userName: encodeURIComponent(response.data.userName), //한글 암호화
      // userAuth: response.data.userAuth,
    };
    console.log(response.result);
    console.log(storageData);
    console.log(storageData.userId);
    sessionStorage.setItem('user', btoa(JSON.stringify(storageData)));

    return {
      type: AUTH_LOGIN_SUCCESS,
      result: response.result,
      // message: response.message,
      userId: storageData.userId,
      // userName: response.data.userName,
      // userAuth: response.data.userAuth,
    };
  } else {
    return {
      type: AUTH_LOGIN_FAILURE,
      // result: response.result,
      // message: response.message,
    };
  }
}

export function loginFailure() {
  return {
    type: AUTH_LOGIN_FAILURE,
  };
}

/* *************************** GET STATUS ************************************* */
export function getStatus() {
  return {
    type: AUTH_GET_STATUS,
  };
}

export function getStatusRequest() {
  return (dispatch) => {
    dispatch(getStatus());

    let storageData = sessionStorage.getItem('user');

    if (storageData === null) {
      dispatch(getStatusFailure());
    } else {
      storageData = JSON.parse(atob(storageData));
      dispatch(getStatusSuccess(storageData.userId, decodeURIComponent(storageData.userName), storageData.userAuth));
    }
  };
}

export function getStatusSuccess(userId, userName, userAuth) {
  return {
    type: AUTH_GET_STATUS_SUCCESS,
    userId,
    userName,
    userAuth,
  };
}

export function getStatusFailure() {
  return {
    type: AUTH_GET_STATUS_FAILURE,
  };
}

/* *************************** 로그아웃 ************************************* */
export function logoutRequest() {
  console.log('1');
  return (dispatch) => {
    return dispatch(logout());
  };
}

export const logout = () => async (dispatch) => {
  // session 삭제
  sessionStorage.removeItem('user');
  dispatch({
    type: AUTH_LOGOUT,
  });

  
  // 새로고침
  // window.location.reload();
};

