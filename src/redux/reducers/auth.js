import * as types from '../actions/AuthTypes';

const initialState = {
  login: {
    status: 'INIT',
  },
  saveUrlState: false,
  saveUrl: '',
  device: '',
  authStatus: {
    isLogIn: false,
    saveId: '',
    userId: '',
    userAuth: '',
    cmsState: 0,
    userInfo: [{ data: { token: null } }],
  },
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    /* 아이디 저장 */
    case types.ID_SAVE:
      return {
        ...state,
        authStatus: {
          ...state.authStatus,
          saveId: action.saveId,
        },
      };
    /* 로그인 */
    case types.AUTH_LOGIN:
      return {
        ...state,
        login: {
          status: 'WAITING',
        },
      };

    case types.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          status: 'SUCCESS',
          userId: action.userId,
          userAuth: action.userAuth,
          userInfo: action.userInfo,
          idSave: action.userId,
        },
        authStatus: {
          ...state.status,
          isLogIn: true,
          userId: action.userId,
          userAuth: action.userAuth,
          userInfo: action.userInfo,
          cmsState: 0,
        },
      };

    case types.AUTH_LOGIN_FAILURE:
      return {
        ...state,
        login: {
          status: 'FAILURE',
        },
        authStatus: {
          ...state.authStatus,
          isLogIn: false,
          userInfo: action.userInfo,
        },
      };
    /* LOGOUT */
    case types.AUTH_LOGOUT:
      return {
        ...state,
        login: {
          status: 'INIT',
        },
        authStatus: {
          ...state.authStatus,
          isLogIn: false,
          userId: '',
          userAuth: '',
          userInfo: [{ data: { token: null } }],
        },
      };

    // Session login
    case types.AUTH_GET_STATUS_SUCCESS:
      return {
        ...state,
        login: {
          status: 'SUCCESS',
          userId: action.userId,
          userAuth: action.userAuth,
          userInfo: action.userInfo,
        },
        authStatus: {
          ...state.authStatus,
          isLogIn: true,
          userId: action.userId,
          userAuth: action.userAuth,
          userInfo: action.userInfo,
        },
      };

    // CMS 얼럿 상태
    case types.SET_CMS_STATE:
      return {
        ...state,
        authStatus: {
          ...state.authStatus,
          cmsState: action.cmsState,
        },
      };
    /* 로그인전 페이지 확인 */
    case types.AUTH_SAVE_URL:
      return {
        ...state,
        saveUrl: action.saveUrl,
      };
    case types.AUTH_SAVE_URL_STATE:
      return {
        ...state,
        saveUrlState: action.saveUrlState,
      };

    // 로그인전 디바이스 종류 확인
    case types.AUTH_SAVE_DEVICE_ASSORT:
      return {
        ...state,
        device: action.device,
      };
    /* DEFAULT */
    default:
      return state;
  }
}
