import React from "react";
import { 
  Routes, 
  Route 
} from "react-router-dom";
// 개발자
import PrivateRoute from './PrivateRoute '; // 로그인 체크
import { 
  Home,   // 홈
  Login,  // 로그인
  Join,   // 회원가입
  // FindId, // 아이디찾기
  FindPw  // 비밀번호찾기
} from "../pages/home";

import  FindId from "../components/account/FindId";
const AccountRoute = () => {
  return (
    <Routes>
      {
            <Route 
            path="/" 
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
      }
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/findId" element={<FindId />} />
      <Route path="/findPw" element={<FindPw />} />
    </Routes>
  );
}

export default AccountRoute;