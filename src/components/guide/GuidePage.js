import React, { useState } from 'react';

import titleTab from '../../utils/TitleTab';

const GuidePage = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("가이드"), 100); 

  return(
    <div>
      가이드 게시판
    </div>
  )       
}

export default GuidePage;