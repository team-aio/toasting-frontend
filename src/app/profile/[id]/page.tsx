"use client";

import { useState } from "react";
import ProfileHeader from "./_components/ProfileHeader";
import ProfileTab from "./_components/ProfileTab";

export default function Page() {
  const [activeTab, setActiveTab] = useState("프로필");

  const renderContent = () => {
    switch (activeTab) {
      case "프로필":
        return <ProfileTab />;
      case "게시글":
        return <div>게시글 컴포넌트</div>;
      case "댓글":
        return <div>댓글 컴포넌트</div>;
      case "대시보드":
        return <div>대시보드 컴포넌트</div>;
      case "차단":
        return <div>차단 목록 컴포넌트</div>;
      default:
        return null;
    }
  };
  return (
    <>
      <ProfileHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
    </>
  );
}
