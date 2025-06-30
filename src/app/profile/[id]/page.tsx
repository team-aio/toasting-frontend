"use client";

import { useState } from "react";
import ProfileHeader from "./_components/ProfileHeader";
import ProfileTab from "./_components/ProfileTab";
// import PostListTab from "./_components/PostListTab";
// import BlockListTab from "./_components/BlockListTab";
// import ExperienceTab from "./_components/ExperienceTab";

export default function Page() {
  const [activeTab, setActiveTab] = useState("대표 포스팅");

  // const renderContent = () => {
  //   switch (activeTab) {
  //     case "프로필":
  //       return <ProfileTab />;
  //     case "게시글":
  //       return <PostListTab />;
  //     case "댓글":
  //       return <div>댓글 컴포넌트</div>;
  //     case "대시보드":
  //       return <div>대시보드 컴포넌트</div>;
  //     case "경험":
  //       return <ExperienceTab />;
  //     case "차단":
  //       return <BlockListTab />;
  //     default:
  //       return null;
  //   }
  // };
  return (
    <>
      <ProfileHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProfileTab />
    </>
  );
}
