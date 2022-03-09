import * as types from '../actions/AccountTypes';

const initialState = {
  joinStatus: {
    recommendId: '',
    memAssort: 'M',
    memName: '',
    hpNo: '',
    paymentCompany: '',
    paymentNumber: '',
    payerName: '',
    payerNumber: '',
    valid: '',
    cardPasswd: '',
  },
  setCmsStatus: [],

  certify: '',

  name: '',
  hpNo: '',
  device: '',
  ip: '',

  recommendIdx: '', // 추천인 IDX
};

export default function account(state = initialState, action) {
  switch (action.type) {
    case types.ACCOUNT_RECOMMENDID:
      return {
        ...state,
        joinStatus: {
          ...state.joinStatus,
          recommendId: action.recommendId,
        },
      };
    case types.ACCOUNT_MEMASSORT:
      return {
        ...state,
        joinStatus: {
          ...state.joinStatus,
          memAssort: action.memAssort,
        },
      };
    case types.ACCOUNT_INFO:
      return {
        ...state,
        joinStatus: {
          ...state.joinStatus,
          memName: action.memName,
          hpNo: action.hpNo,
          paymentCompany: action.paymentCompany,
          paymentNumber: action.paymentNumber,
          payerName: action.payerName,
          payerNumber: action.payerNumber,
          valid: action.valid,
          cardPasswd: action.cardPasswd,
        },
      };
    case types.ACCOUNT_CMS_STATUS:
      return {
        ...state,
        setCmsStatus: action.setCmsStatus,
      };
    case types.ACCOUNT_CERTIFY:
      return {
        ...state,
        certify: action.certify,
      };
    case types.ACCOUNT_USER_INFO:
      return {
        ...state,
        name: action.name,
        hpNo: action.hpNo,
        device: action.device,
        ip: action.ip,
      };

    // 추천인 IDX
    case types.SET_RECOMMEND_IDX:
      return {
        ...state,
        recommendIdx: action.recommendIdx,
      };

    default:
      return state;
  }
}
