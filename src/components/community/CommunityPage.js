import React, { useState } from 'react';

import titleTab from '../../utils/TitleTab';

const CommunityPage = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("커뮤니티"), 100); //페이지탭 이름 설정입니다 냅두시면 돼여
  return(
      <div>커뮤니티 페이지 (정아님 제작) 실질적인 페이지는 여기서 제작합니다. 비주얼스튜디오에 CommunityPage.js 검색하면 쉽게 찾을 수 있어요 
        여기서 공지사항 만드신 거 처럼 자유롭게 제작하시고 컴포넌트들 모아서 Community.js에서 헤더랑 메뉴바 등 거기서는 조립만 합니다 제가 다 해놔서 여기서만 제작하시고 필요한 거 있으면
        더 만드시고 궁금하신 거 물어봐주세요
      </div>
  )       
}

export default CommunityPage;