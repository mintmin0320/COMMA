import React from "react";
import { 
  Routes, 
  Route 
} from "react-router-dom";
// 개발자
import PrivateRoute from './PrivateRoute '; // 로그인 체크
import {
  BasketList
} from "../pages/basket"

const BasketRoute = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <PrivateRoute>
            <BasketList />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default BasketRoute;