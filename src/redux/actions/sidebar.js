import { SIDEBAR_TAB } from './SidebarTypes';

/* *************************** 검색값 아이디 ************************************* */
export function setSideTab(tab, paddingTop) {
  return {
    type: SIDEBAR_TAB,
    tab,
    paddingTop,
  };
}
