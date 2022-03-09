import {
  AUTH_GET_STATUS,
  AUTH_GET_STATUS_FAILURE,
  AUTH_GET_STATUS_SUCCESS,
  AUTH_LOGIN,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_SUCCESS,
  AUTH_SAVE_URL,
  AUTH_SAVE_URL_STATE,
  AUTH_SAVE_DEVICE_ASSORT,
  // AUTH_LOGOUT,
  ID_SAVE,
  SET_CMS_STATE,
} from './AuthTypes';

import _axios from '../../utils/axios';
import { accountCertify, accountUserInfo } from './account';

/* *************************** 로그인 ************************************* */
export function idSave(userId) {
  // Storage 저장
  localStorage.setItem('userId', userId);

  return {
    type: ID_SAVE,
    saveId: userId,
  };
}

export function init() {
  return {
    type: AUTH_LOGIN,
  };
}

export function saveUrl(saveUrl) {
  return {
    type: AUTH_SAVE_URL,
    saveUrl: saveUrl,
  };
}

export function saveUrlState(saveUrlState) {
  return {
    type: AUTH_SAVE_URL_STATE,
    saveUrlState: saveUrlState,
  };
}

export function saveDeviceAssort(device) {
  return {
    type: AUTH_SAVE_DEVICE_ASSORT,
    device: device,
  };
}

export function loginRequest(userName, userHpNo, device, ip, kakao) {
  return (dispatch) => {
    dispatch(login());

    const url = '/api/account/get_login.php';
    const params = {
      userName: userName,
      userHpNo: userHpNo,
      device: device,
      connectIP: ip,
    };

    // API REQUEST
    return _axios(url, params)
      .then((response) => {
        dispatch(accountUserInfo(userName, userHpNo, device, ip));

        if (response.certifyStatus === 'N' && !kakao) {
          // 새로운 기기 인증 && 카카오로그인 x
          dispatch(accountCertify(response));
          dispatch(loginFailure());
        } else {
          // SUCCEED
          dispatch(loginSuccess(response));
        }
      })
      .catch((error) => {
        // FAILED
        dispatch(loginFailure());
      });
  };
}

export function adminLoginRequest(userId, userPw) {
  return (dispatch) => {
    dispatch(login());

    const url = '/api/admin/get_login.php';
    const params = {
      userId: userId,
      userPw: userPw,
    };

    // API REQUEST
    return _axios(url, params)
      .then((response) => {
        // SUCCEED
        dispatch(loginSuccess(response));
      })
      .catch((error) => {
        // console.log(error)

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

export function setCmsState() {
  return {
    type: SET_CMS_STATE,
    cmsState: 1,
  };
}

export function loginSuccess(userInfo) {
  if (userInfo.result === '0') {
    // 로컬에 저장
    let storageData = {
      isLogIn: true,
      userId: userInfo.userId,
      userAuth: userInfo.userAuth,
      userInfo: {
        userId: userInfo.userId,
        userName: encodeURIComponent(userInfo.userName),
        userAuth: userInfo.userAuth,
        token: userInfo.token,

        groupCode: userInfo.groupCode,
        infoStatus: userInfo.infoStatus,
        mdName: encodeURIComponent(userInfo.mdName),
        organizeName: encodeURIComponent(userInfo.organizeName),
        payType: userInfo.payType,
        cmsStatus: userInfo.cmsStatus,
      },
    };

    localStorage.setItem('user', btoa(JSON.stringify(storageData)));

    return {
      type: AUTH_LOGIN_SUCCESS,
      userId: userInfo.userId,
      userAuth: userInfo.userAuth,
      userInfo: userInfo,
    };
  } else {
    return {
      type: AUTH_LOGIN_FAILURE,
      userInfo: userInfo,
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

    let storageData = localStorage.getItem('user');

    if (storageData === null) {
      dispatch(getStatusFailure());
    } else {
      storageData = JSON.parse(atob(storageData));

      const userInfo = {
        userId: storageData.userInfo.userId,
        userName: decodeURIComponent(storageData.userInfo.userName),
        userAuth: storageData.userInfo.userAuth,
        token: storageData.userInfo.token,

        groupCode: storageData.userInfo.groupCode,
        infoStatus: storageData.userInfo.infoStatus,
        mdName: decodeURIComponent(storageData.userInfo.mdName),
        organizeName: decodeURIComponent(storageData.userInfo.organizeName),
        payType: storageData.userInfo.payType,
        cmsStatus: storageData.userInfo.cmsStatus,
      };

      dispatch(getStatusSuccess(storageData.userId, storageData.userAuth, userInfo));
    }
  };
}

export function getStatusSuccess(userId, userAuth, userInfo) {
  return {
    type: AUTH_GET_STATUS_SUCCESS,
    userId,
    userAuth,
    userInfo,
  };
}

export function getStatusFailure() {
  return {
    type: AUTH_GET_STATUS_FAILURE,
  };
}

/* *************************** 로그아웃 ************************************* */
export function logoutRequest() {
  return (dispatch) => {
    return dispatch(logout());
  };
}

export const logout = () => async (dispatch) => {
  //dispatch({
  //  type: AUTH_LOGOUT,
  //});

  // local 삭제
  localStorage.removeItem('user');
  // 새로고침
  window.location.reload();
};
