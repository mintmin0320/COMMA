import React from "react";
import { 
  Routes, 
  Route 
} from "react-router-dom";
// 개발자
import PrivateRoute from './PrivateRoute ';// 로그인 체크
import { 
  Jobs
} from "../pages/jobs";

const JobRoute = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <PrivateRoute>
            <Jobs/>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default JobRoute;