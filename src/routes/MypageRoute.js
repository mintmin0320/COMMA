/*  
  마이페이지 Routes 
*/
import React from "react";
import { 
  Routes, 
  Route 
} from "react-router-dom";
// 개발자
import PrivateRoute from './PrivateRoute '; // 로그인 체크
import { 
  MypageHome, // 마이페이지 홈
  MyPost,
} from "../pages/mypage";

const MypageRoute = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <PrivateRoute>
            <MypageHome />
          </PrivateRoute>
        }
      />
    <Route 
      path="mypost" 
      element={
        // <PrivateRoute>
            <MyPost />
        // </PrivateRoute>
      }
    />
    </Routes>
  );
}

export default MypageRoute;