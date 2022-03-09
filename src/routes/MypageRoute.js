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
} from "../screens/mypage";

const MypageRoute = () => {
  return (
    <Routes>
      <Route path="/mypage" element={<MypageHome />} exact />
    </Routes>
  );
}

export default MypageRoute;