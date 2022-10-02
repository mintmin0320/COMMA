import React from "react";
import { 
  Routes, 
  Route 
} from "react-router-dom";
// 개발자
import PrivateRoute from './PrivateRoute '; // 로그인 체크
import { 
  AdminHome, // 관리자페이지 홈
  AdminOrder,
  AdminFeed,
} from "../pages/admin";

const AdminRoute = () => {
  return (
    <Routes>
      <Route 
        path="memberlist" 
        element={
          // <PrivateRoute>
            <AdminHome />
          // </PrivateRoute>
        }
      />
      <Route 
        path="feedback" 
        element={
          // <PrivateRoute>
            <AdminFeed />
          // </PrivateRoute>
        }
      />   
      <Route 
        path="orderlist" 
        element={
          // <PrivateRoute>
            <AdminOrder />
          // </PrivateRoute>
        }
      />   
    </Routes>
  );
}

export default AdminRoute;