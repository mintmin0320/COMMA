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
} from "../screens/admin";

const AdminRoute = () => {
  return (
      <Routes>
        <Route path="/admin" element={<AdminHome />} exact />
      </Routes>
  );
}

export default AdminRoute;