import React from "react";
import { 
  Routes, 
  Route 
} from "react-router-dom";
// 개발자
import PrivateRoute from './PrivateRoute '; // 로그인 체크
import { 
  Rental, // 렌탈페이지 홈
} from '../pages/rental';

const RentalRoute = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <PrivateRoute>
            <Rental />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default RentalRoute;