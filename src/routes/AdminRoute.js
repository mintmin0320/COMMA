import React from "react";
import { 
  Routes, 
  Route 
} from "react-router-dom";
// 개발자
import PrivateRoute from './PrivateRoute '; // 로그인 체크
import { 
  AdminHome, // 관리자페이지 홈
} from "../pages/admin";

const AdminRoute = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          // <PrivateRoute>
            <AdminHome />
          // </PrivateRoute>
        }
      />
      {/* <Route 
        path=":myInfo" 
        element={
          // <PrivateRoute>
            <MyInfo />
          // </PrivateRoute>
        }
      />    */}
    </Routes>
  );
}

export default AdminRoute;