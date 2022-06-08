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
  MyInfo      // 내정보
} from "../pages/mypage";
// css

// icon or images

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

export default MypageRoute;