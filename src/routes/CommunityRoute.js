import React from "react";
import { 
  Routes, 
  Route 
} from "react-router-dom";
// 개발자
import PrivateRoute from './PrivateRoute '; // 로그인 체크
import { 
  Community
} from "../pages/communuty";

const CommunityRoute = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <PrivateRoute>
            <Community />
          </PrivateRoute>
        }
      />
      <Route 
        path="employment" 
        element={
          <PrivateRoute>
            <Community />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default CommunityRoute;