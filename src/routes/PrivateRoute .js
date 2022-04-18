/*
  설명: 로그인이 필요한지 체크
*/
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const isLogIn = useSelector((store) => store.auth.authStatus.isLogIn);

  if (!isLogIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

