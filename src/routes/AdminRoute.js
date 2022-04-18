/*  
  관리자페이지 Routes 
*/
import React from "react";
import { 
  Routes, 
  Route 
} from "react-router-dom";
// 개발자
import { 
  AdminHome, // 관리자 홈
  AdminInfo  // 관리자정보
} from "../pages/admin";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path=":adminInfo" element={<AdminInfo />} />    
    </Routes>
  );
}

export default AdminRoute;