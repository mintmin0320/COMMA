import React from "react";
import { 
  Routes, 
  Route 
} from "react-router-dom";
// 개발자
import PrivateRoute from './PrivateRoute '; // 로그인 체크
import {
  AskPage
} from "../pages/ask"

const AskRoute = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <PrivateRoute>
            <AskPage/>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AskRoute;