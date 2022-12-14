import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
//css, icon
import banner from '../../images/white_bg.svg';

const MyPageImg = () => {
  const userId = useSelector((store) => store.auth.authStatus.userId);
  const [imgBase64, setImgBase64] = useState(banner);

  useEffect(() => {
    const _getProfileData = async () => {
      const url = `${process.env.REACT_APP_SERVER_DOMAIN}/user/profileImg/${userId}`;
      const response = await axios.get(url, { responseType: 'blob' });
      // console.log(response);
      if (response.status === 200) {
        // console.log(response.data);
        const reader = new FileReader();
        // console.log(reader);
        reader.readAsDataURL(response.data);
        reader.onloadend = () => {
          const base64 = reader.result;
          if (base64) {
            // console.log(base64);
            setImgBase64(base64); // 파일 base64 상태 업데이트
          }
        }
        console.log('프로필사진 조회성공');
      } else {
        console.log('프로필사진 조회실패');
      }
      return () => _getProfileData();
    }
    _getProfileData()
  }
    , []);

  return (
    <img src={imgBase64} alt="logo" className='img' style={{ objectFit: "cover" }} />
  );
}

export default MyPageImg;