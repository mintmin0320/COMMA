import { useEffect, useState } from 'react';

const TitleTab = initiaTitle => {
  const [title, setTitle] = useState(initiaTitle);
  
  const updateTitle = () => {
    const htmTitle = document.querySelector("title");
    htmTitle.innerHTML = title;  
  };
  useEffect(updateTitle, [title]);

  return setTitle;
};

export default TitleTab;
