import React from "react";
import { 
  Routes, 
  Route 
} from "react-router-dom";
// 개발자
import PrivateRoute from './PrivateRoute '; // 로그인 체크
import { 
  Guide
} from "../pages/guide";

const GuideRoute = () => {
  return (
    <Routes>
      {
        <Route 
          path="/" 
          element={
          // <PrivateRoute>
              <Guide />
          // </PrivateRoute>
          }
        />
      }
    </Routes>
  );
}

export default GuideRoute;