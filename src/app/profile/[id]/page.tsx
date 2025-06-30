"use client";

import { useState } from "react";
import ProfileHeader from "./_components/ProfileHeader";
import ProfileTab from "./_components/ProfileTab";
import BlogTab from "./_components/BlogTab";
// import PostListTab from "./_components/PostListTab";
// import BlockListTab from "./_components/BlockListTab";
// import ExperienceTab from "./_components/ExperienceTab";

export default function Page() {
  const [activeTab, setActiveTab] = useState("대표 포스팅");

  const renderContent = () => {
    switch (activeTab) {
      case "대표 포스팅":
        return <ProfileTab />;
      case "블로그":
        return <BlogTab />;
      case "히스토리":
        return <div>히스토리</div>;
      case "경험":
        return <div>경험</div>;
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
