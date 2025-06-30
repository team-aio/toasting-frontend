import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ContributionGraph from "./ContributionGraph";

export default function ProfileTab() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const categories = [
    "전체",
    "Category1",
    "Category2",
    "Category3",
    "Category4",
    "Category5",
    "Category6",
    "Category7",
    "Category8",
    "Category9",
    "Category10",
    "Category11",
    "Category12",
    "Category13",
    "Category14",
  ];

  // 카테고리 스크롤 관련 로직
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    updateScrollButtons();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-full flex justify-center bg-[#ffffff] text-gray-800 pt-[127px]">
      <div className="flex w-full px-4 gap-[125px] justify-center">
        {/* 가운데 영역 - 길어지면 전체 페이지가 스크롤됨 */}
        <main className="w-[1150px] h-[1000px] bg-[#ffffff]">
          {/* 뱃지 */}
          <div className="top-[227px] sticky flex flex-col gap-3">
            <div className="h-fit shrink-0 bg-[#ffffff] z-50">
              {/* 스크롤 버튼: 왼쪽 */}

              {/* 뱃지 리스트 */}
              <div
                ref={scrollRef}
                className="flex gap-2 overflow-x-auto scrollbar-hide w-full px-2 sm:px-0"
              >
                {canScrollLeft && (
                  <button
                    onClick={scrollLeft}
                    className="absolute border left-0 mt-[18px] -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
                  >
                    <FaChevronLeft size={16} />
                  </button>
                )}
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(cat)}
                    className={`flex-shrink-0 px-3 py-2 text-sm rounded-full border whitespace-nowrap transition-colors duration-200 flex items-center ${
                      selectedCategory === cat
                        ? "bg-[#ebf1ff] text-black border-[#b2c4f0]"
                        : "bg-[#f5f5f5] text-gray-500 border-transparent"
                    }`}
                  >
                    <img
                      src={
                        selectedCategory === cat
                          ? "/button/badge.png"
                          : "/button/badgeInvaild.png"
                      }
                      className="w-4 h-4 mr-1"
                      alt="badge"
                    />
                    {cat}
                  </button>
                ))}
                {/* 스크롤 버튼: 오른쪽 */}
                {canScrollRight && (
                  <button
                    onClick={scrollRight}
                    className="absolute border right-0 mt-[18px] -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
                  >
                    <FaChevronRight size={16} />
                  </button>
                )}
              </div>
            </div>
            {/* 잔디 */}
            <ContributionGraph year={2025} />
            {/* 카테고리 */}
            <div className="h-fit shrink-0 bg-[#ffffff] z-50">
              {/* 뱃지 리스트 */}
              <div
                ref={scrollRef}
                className="flex gap-2 overflow-x-auto scrollbar-hide w-full px-2 sm:px-0"
              >
                {/* 스크롤 버튼: 왼쪽 */}
                {canScrollLeft && (
                  <button
                    onClick={scrollLeft}
                    className="absolute border left-0 mt-[17px] -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
                  >
                    <FaChevronLeft size={16} />
                  </button>
                )}
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(cat)}
                    className={`flex-shrink-0 px-3 py-2 text-sm rounded-[7px] border whitespace-nowrap transition-colors duration-200 flex items-center ${
                      selectedCategory === cat
                        ? "bg-gray-50 text-black border-gray-600"
                        : "bg-white text-gray-500"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
                {/* 스크롤 버튼: 오른쪽 */}
                {canScrollRight && (
                  <button
                    onClick={scrollRight}
                    className="absolute border mt-[17px] right-0 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
                  >
                    <FaChevronRight size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>

        {/* 오른쪽 고정 영역 */}
        {/* 왼쪽 고정 영역 */}
        <aside className="hidden lg:block w-[320px] top-[220px] sticky h-fit shrink-0">
          <div className="bg-white rounded-[14px] shadow space-y-4">
            <PreviewCard />
          </div>
        </aside>
      </div>
    </div>
  );
}

function PreviewCard() {
  return (
    <div>
      <div className="relative">
        {/* 배경 이미지 */}
        <img
          src="/profile/profileBackground.png"
          alt="배경 이미지"
          className="w-full h-42 object-cover rounded-t-[14px]"
        />
        <div className="p-4">
          {/* 프로필 이미지 */}
          <div className="absolute">
            <img
              src="/profile/profileImage.png"
              alt="프로필"
              className="w-16 h-16 rounded-[5px] mt-[-55px]"
            />
          </div>
          <div className="pt-10">
            <h2 className="text-lg font-semibold text-black">홍길동</h2>
            <p className="text-sm text-gray-500 mt-3">
              👥 10.5만명과 함께하고 있어요
            </p>
            <p className="text-[12px] text-black line-clamp-3 mt-3">
              나를 소개하는 한마디 나를 소개하는 한마디 나를 소개하는 한마디...
            </p>
          </div>

          <div className="w-full gap-2 rounded-xl border border-gray-200 p-2 mt-3">
            {/* element */}
            <div className="flex border-b border-gray-100 rounded-sm w-full p-2 mt-1">
              {/* 왼쪽: 회사 로고 */}
              <div className="flex-shrink-0">
                <img
                  src="/profile/naver.png"
                  alt="회사 로고"
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* 오른쪽: 텍스트 영역 */}
              <div className="flex flex-col justify-between ml-2 flex-grow">
                <div>
                  <p className="text-[12px] text-black">
                    NAVER | Software engineer
                  </p>
                  {/* 필요 시 추가 설명 문장 넣어도 됩니다 */}
                </div>
                <div className="text-sm text-gray-500">
                  2023.01.01 ~ 2025.05.25
                </div>
              </div>
            </div>
            {/* element */}
            <div className="flex border-b border-gray-100 rounded-sm w-full p-2  mt-1">
              {/* 왼쪽: 회사 로고 */}
              <div className="flex-shrink-0">
                <img
                  src="/profile/toss.png"
                  alt="회사 로고"
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* 오른쪽: 텍스트 영역 */}
              <div className="flex flex-col justify-between ml-2 flex-grow">
                <div>
                  <p className="text-[12px] text-black">
                    Toss | Software engineer
                  </p>
                  {/* 필요 시 추가 설명 문장 넣어도 됩니다 */}
                </div>
                <div className="text-sm text-gray-500">
                  2023.01.01 ~ 2025.05.25
                </div>
              </div>
            </div>
          </div>

          {/* 연동 element */}
          <div className="flex justify-between items-center bg-[#f7f7f7] border border-gray-100 rounded-[12px] w-full py-1 px-3 mt-3">
            {/* 왼쪽: 회사 로고 */}
            <div className="flex justify-between items-center">
              <img
                src="/profile/blogImg.png"
                alt="회사 로고"
                className="w-10 h-10 object-contain"
              />
              <p className="text-gray-300 text-[13px] ml-4">벨로그 외 1개</p>
            </div>

            {/* 오른쪽: 텍스트 영역 */}
            <div className="flex justify-between items-center">
              <img
                src="/profile/link.png"
                alt="회사 로고"
                className="w-6 h-6 object-contain"
              />
              <div className="text-sm text-gray-300">연동</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
