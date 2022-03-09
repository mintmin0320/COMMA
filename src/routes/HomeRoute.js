import React from "react";
import { 
  Routes, 
  Route 
} from "react-router-dom";
// 개발자
import { 
  Home,  // 홈
  Join,  // 회원가입
  FindId // 아이디찾기
} from "../screens/home";

const HomeRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/join" element={<Join />} />
      <Route path="/findId" element={<FindId />} />
    </Routes>
  );
}

export default HomeRoute;