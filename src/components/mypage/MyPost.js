import React from 'react';
import titleTab from '../../utils/TitleTab';

const MyPost = () => {
  const titleUpdator = titleTab("Loading...");
  setTimeout(() => titleUpdator("내가  쓴  글 - COMMA"), 100);
  return(
    <div>hi</div>
  )
}

export default MyPost;