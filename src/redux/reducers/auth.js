import * as types from '../actions/AuthTypes';

const initialState = {
  login: {
    status: 'INIT',
    result: '',
    message: '',
  },
  authStatus: {
    isLogIn: false,
    saveId: '',
    userId: '',
    userName: '',
    userAuth: '',
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
      console.log('성공');
      return {
        ...state,
        login: {
          status: 'SUCCESS',
          result: action.result,
          message: action.message,
        },
        authStatus: {
          ...state.status,
          isLogIn: true,
          userId: action.userId,
          userName: action.userName,
          userAuth: action.userAuth,
        },
      };

    case types.AUTH_LOGIN_FAILURE:
      console.log('성공d');
      return {
        ...state,
        login: {
          status: 'FAILURE',
          result: action.result,
          message: action.message,
        },
        authStatus: {
          ...state.authStatus,
          isLogIn: false,
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
          userName: action.userName,
          userAuth: action.userAuth,
        },
        authStatus: {
          ...state.authStatus,
          isLogIn: true,
          userId: action.userId,
          userName: action.userName,
          userAuth: action.userAuth,
        },
      };
    /* DEFAULT */
    default:
      return state;
  }
}

