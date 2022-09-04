import React from "react";
import { 
  Routes, 
  Route 
} from "react-router-dom";
// 개발자
import PrivateRoute from './PrivateRoute '; // 로그인 체크
import { 
  PatchNotesPage
} from "../pages/patchNotes";

const PatchNotesRoute = () => {
  return (
    <Routes>
      {
        <Route 
          path="/" 
          element={
          // <PrivateRoute>
            <PatchNotesPage />
          // </PrivateRoute>
          }
        />
      }
    </Routes>
  );
}

export default PatchNotesRoute;