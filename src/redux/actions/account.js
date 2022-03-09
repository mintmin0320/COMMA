import {
  ACCOUNT_RECOMMENDID,
  ACCOUNT_MEMASSORT,
  ACCOUNT_INFO,
  ACCOUNT_CMS_STATUS,
  ACCOUNT_CERTIFY,
  ACCOUNT_USER_INFO,
  SET_RECOMMEND_IDX,
} from './AccountTypes';

/* *************************** 추천인 아이디 ************************************* */
export function setRecommendId(recommendIdInfo) {
  return {
    type: ACCOUNT_RECOMMENDID,
    recommendId: recommendIdInfo.recommendId,
  };
}

/* *************************** 가입유형 ************************************* */
export function setMemAssort(memAssortInfo) {
  return {
    type: ACCOUNT_MEMASSORT,
    memAssort: memAssortInfo,
  };
}

/* ****************** 기본정보 설정 ***************************** */
export function setInfo(accountInfo) {
  return {
    type: ACCOUNT_INFO,
    memName: accountInfo.memName,
    hpNo: accountInfo.hpNo,
    paymentCompany: accountInfo.paymentCompany,
    paymentNumber: accountInfo.paymentNumber,
    payerName: accountInfo.payerName,
    payerNumber: accountInfo.payerNumber,
    valid: accountInfo.valid,
    cardPasswd: accountInfo.cardPasswd,
  };
}

/* *************************** cms 신청 상태 ************************************* */
export function accountCmsStatus(setCmsStatus) {
  return {
    type: ACCOUNT_CMS_STATUS,
    setCmsStatus: setCmsStatus,
  };
}

/* *************************** 기기 인증 ************************************* */
export function accountCertify(certify) {
  return {
    type: ACCOUNT_CERTIFY,
    certify: certify,
  };
}

/* *************************** 로그인 시, 사용자 정보 ************************************* */
export function accountUserInfo(name, hpNo, device, ip) {
  return {
    type: ACCOUNT_USER_INFO,
    name,
    hpNo,
    device,
    ip,
  };
}

/* *************************** 로그인 시, 사용자 정보 ************************************* */
export function setRecommendIdx(recommendIdx) {
  return {
    type: SET_RECOMMEND_IDX,
    recommendIdx,
  };
}
