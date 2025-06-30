type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function ProfileHeader({ activeTab, setActiveTab }: Props) {
  const tabs = ["대표 포스팅", "블로그", "히스토리", "경험"];

  return (
    <div className="fixed top-15 pt-[70px] left-0 right-0 z-50 flex flex-col items-center bg-white justify-center px-4">
      {/* <div className="flex space-x-6 mt-2 text-sm font-semibold border-b border-gray-200 w-[1590px]"> */}
      <div className="w-[1590px] text-[#3e2e20] font-bold flex items-center h-[20px] pb-4">
        <h1 className="text-[25px]">홍길동님의 토스팅</h1>
      </div>

      <div className="flex space-x-6 mt-2 text-sm font-semibold border-b border-gray-200 w-[1590px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-2 transition-colors ${
              tab === activeTab
                ? "text-[#3e2e20] after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#3e2e20]"
                : "text-gray-300 hover:text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
