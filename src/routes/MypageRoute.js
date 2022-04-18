/*  
  마이페이지 Routes 
*/
import React from "react";
import { 
  Routes, 
  Route 
} from "react-router-dom";
// 개발자
import { 
  MypageHome, // 마이페이지 홈
  MyInfo      // 내정보
} from "../pages/mypage";

const MypageRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MypageHome />} />
      <Route path=":myInfo" element={<MyInfo />} />      
    </Routes>
  );
}

export default MypageRoute;