/*  
  메인 Routes 
*/
import React from "react";
import { 
  Routes, 
  Route 
} from "react-router-dom";
// 개발자
import HomeRoute from "./HomeRoute";     // 홈 Route
import MypageRoute from "./MypageRoute"; // 마이페이지 Route
import AdminRoute from "./AdminRoute";   // 관리자 Route

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomeRoute />} />
      <Route path="/mypage/*" element={<MypageRoute />} />
      <Route path="/admin/*" element={<AdminRoute />} />
    </Routes>
  );
}

export default MainRoutes;