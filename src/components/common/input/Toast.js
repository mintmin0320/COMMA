import React from 'react';
// components
import Button from '../Button';
// css
import { GlobalToast } from '../../../styles/common/toast';


const Toast = ({ 
  className, 
  title,
  btnKind,
  btnTxt,
  btnImgSrc,
  
  children,

  bgClick,

}) => {

  const handleClick = (e) => {
    if (e.target !== e.currentTarget) return;

    bgClick();
  };

  return (
    <GlobalToast className={className} onClick={handleClick}>
      <div className='global-toast-inner'>
        <div className='toast-body'>
          {children}
        </div>
      </div>
    </GlobalToast>
  );
};

export default Toast;