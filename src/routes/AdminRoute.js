import React from "react";
import { 
  Routes, 
  Route 
} from "react-router-dom";
// 개발자
import ProtectedRoute from './ProtectedRoute'; // 관리자 체크
import PrivateRoute from './PrivateRoute ';// 로그인 체크
import { 
  AdminHome, // 관리자페이지 홈
  AdminOrder,
  AdminFeed,
  AdminAsk,
} from "../pages/admin";

const AdminRoute = () => {
  return (
    <Routes>
      <Route 
        path="memberlist" 
        element={
          <PrivateRoute>
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          </PrivateRoute>
        }
      />
      <Route 
        path="feedback" 
        element={
          <PrivateRoute>
            <ProtectedRoute>
              <AdminFeed />
            </ProtectedRoute>
          </PrivateRoute>
        }
      />   
      <Route 
        path="orderlist" 
        element={
          <PrivateRoute>
            <ProtectedRoute>
              <AdminOrder />
            </ProtectedRoute>
          </PrivateRoute>
        }
      />  
      <Route 
        path="ask" 
        element={
          <PrivateRoute>
            <ProtectedRoute>
              <AdminAsk />
            </ProtectedRoute>
          </PrivateRoute>
        }
      />    
    </Routes>
  );
}

export default AdminRoute;