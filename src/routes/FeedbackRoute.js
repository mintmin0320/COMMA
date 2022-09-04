import React from "react";
import { 
  Routes, 
  Route 
} from "react-router-dom";
// 개발자
import PrivateRoute from './PrivateRoute '; // 로그인 체크
import { 
  FeedbackPage
} from "../pages/feedback";

const FeedbackRoute = () => {
  return (
    <Routes>
      {
        <Route 
          path="/" 
          element={
          // <PrivateRoute>
            <FeedbackPage />
          // </PrivateRoute>
          }
        />
      }
    </Routes>
  );
}

export default FeedbackRoute;