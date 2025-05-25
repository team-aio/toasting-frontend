export default function ProfileHeader() {
  {
    /* <header className="fixed top-16 left-0 right-0 h-16 bg-white dark:bg-gray-800 shadow z-50 flex items-center px-6">
        <h1 className="text-xl font-bold">프로필 편집</h1>
      </header> */
  }
  const tabs = ["프로필", "게시글", "댓글", "대시보드", "차단"];
  const activeTab = "프로필";

  return (
    <div className="fixed top-15 left-0 right-0 h-16 z-50 flex items-center bg-gray-50 justify-center">
      {/* 탭 메뉴 */}
      <div className="flex space-x-6 mt-2 text-sm font-semibold border-b border-gray-200 w-[1590px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`relative pb-2 ${
              tab === activeTab
                ? "text-[#3e2e20] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#3e2e20]"
                : "text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
