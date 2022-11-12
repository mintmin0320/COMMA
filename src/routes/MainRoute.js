/*  
  메인 Routes 
*/
import React from "react";
import { 
  Routes, 
  Route 
} from "react-router-dom";
// 개발자
import HomeRoute from "./HomeRoute";     // 홈 Route
import MypageRoute from "./MypageRoute"; // 마이페이지 Route
import AdminRoute from "./AdminRoute"; // 관리자페이지 Route
import RentalRoute from './RentalRoute';  // 대여페이지 Route
import BasketRoute from './BasketRoute';  // 장바구니페이지 Route
import CommunityRoute from './CommunityRoute';  // 커뮤니티 Route
import FeedbackRoute from './FeedbackRoute';  // 피드백 게시판 Route
import PatchNotesRoute from './PatchNotesRoute';  // 개발자 노트 Route
import GuideRoute from './GuideRoute';  // 가이드 Route
import JobRoute from './JobRoute'; // 구인구직 route
import AskRoute from './AskRoute'; // 관리자 문의 route

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomeRoute />} />
      <Route path="/mypage/*" element={<MypageRoute />} />
      <Route path="/admin/*" element={<AdminRoute />} />
      <Route path="/rental/*" element={<RentalRoute />} />
      <Route path="/basket/*" element={<BasketRoute />} />
      <Route path="/community/*" element={<CommunityRoute />} />
      <Route path="/feedback/*" element={<FeedbackRoute />} />
      <Route path="/patchNotes/*" element={<PatchNotesRoute />} />
      <Route path="/guide/*" element={<GuideRoute />} />
      <Route path="/jobs/*" element={<JobRoute />} />
      <Route path="/ask/*" element={<AskRoute />} />
    </Routes>
  );
}

export default MainRoutes;