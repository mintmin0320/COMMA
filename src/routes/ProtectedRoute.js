/*
  설명: 관리자 체크
*/
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const userId = useSelector((store) => store.auth.authStatus.userId);

  if (userId !== 'admin') {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

