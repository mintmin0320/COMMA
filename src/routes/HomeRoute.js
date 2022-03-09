import React from "react";
import { 
  Routes, 
  Route 
} from "react-router-dom";
// 개발자
import { 
  Home, // 홈
  Join  // 회원가입
} from "../screens/home";

const HomeRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/join" element={<Join />} />
    </Routes>
  );
}

export default HomeRoute;