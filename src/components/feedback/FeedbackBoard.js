import React, { useState } from 'react';

import titleTab from '../../utils/TitleTab';

const FeedbackBoard = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("피드백 게시판"), 100); 

  return(
    <div>
      피드백 게시판
    </div>
  )       
}

export default FeedbackBoard;