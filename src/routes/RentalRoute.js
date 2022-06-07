import React from "react";
import { 
  Routes, 
  Route 
} from "react-router-dom";
// 개발자
import PrivateRoute from './PrivateRoute '; // 로그인 체크
import { 
  Rental // 마이페이지 홈
} from "../pages/ rental";

const AdminRoute = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          // <PrivateRoute>
            <Rental />
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