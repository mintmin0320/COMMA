import React, { useState } from 'react';

import titleTab from '../../utils/TitleTab';

const FatchNotes = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("개발자 노트"), 100); 

  return(
    <div>
      개발자 노트
    </div>
  )       
}

export default FatchNotes;