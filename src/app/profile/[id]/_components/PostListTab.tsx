// import { useState } from "react";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const dummyPosts = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  title:
    "게시글 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목게시글 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목게시글 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목",
  date: "2025. 04. 18 14:01",
  views: 23042,
  likes: 99,
  comments: 17,
  isFixed: i % 3 === 0,
}));

export default function PostListTab() {
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

  // 모달 관련 상태
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div className="relative w-full h-full flex flex-col items-center bg-white text-gray-800">
        <div className="w-full flex justify-center mt-[64px]">
          <div className="w-full max-w-[1590px] pr-80">
            {/* sticky 필터/검색 영역 */}
            <div className="hidden lg:block sticky top-[124px] h-fit bg-white z-10 py-4">
              <h2 className="text-xl font-semibold">작성한 게시글</h2>

              {/* 검색창 */}
              <input
                type="text"
                placeholder="내가 작성한 게시글 검색"
                className="w-full border px-4 py-3 rounded-md text-sm text-gray-600 bg-gray-50 mt-4 outline-none"
              />

              {/* 카테고리 필터 */}
              <div className="relative mt-4">
                {/* 스크롤 버튼: 왼쪽 */}
                {canScrollLeft && (
                  <button
                    onClick={scrollLeft}
                    className="absolute border left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
                  >
                    <FaChevronLeft size={16} />
                  </button>
                )}

                {/* 카테고리 버튼 리스트 */}
                <div
                  ref={scrollRef}
                  className="flex gap-2 overflow-x-auto scrollbar-hide w-[1230px]"
                >
                  {categories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedCategory(cat)}
                      className={`flex-shrink-0 px-4 py-2 text-sm rounded-[8px] border whitespace-nowrap ${
                        selectedCategory === cat
                          ? "bg-gray-50 text-black border-gray-600"
                          : "bg-white text-gray-500"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* 스크롤 버튼: 오른쪽 */}
                {canScrollRight && (
                  <button
                    onClick={scrollRight}
                    className="absolute border right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
                  >
                    <FaChevronRight size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* 게시글 목록 */}
            <main className="mt-[10px] space-y-6">
              {/* 게시글 수 */}
              <div className="text-sm text-gray-500">
                총 {dummyPosts.length}개
              </div>

              {/* 게시글 리스트 */}
              <div className="space-y-4">
                {dummyPosts.map((post) => (
                  <div
                    key={post.id}
                    className="w-full flex justify-between items-center bg-white border-b border-[#f1f1f1] rounded-xl py-6 h-[120px]"
                  >
                    <div className="w-full flex justify-between items-center bg-white border-b border-[#f1f1f1] rounded-xl py-6 h-[120px]">
                      {/* 텍스트 + 이미지 영역 (같이 붙어 있도록) */}
                      <div className="flex items-center gap-4 max-w-[80%]">
                        {/* 텍스트영역 */}
                        <div className="max-w-[calc(100%-4rem)]">
                          <div className="text-gray-800 text-[17px] font-medium line-clamp-2">
                            {post.title}
                          </div>
                          <div className="flex items-center gap-4 text-xs text-gray-400 mt-6">
                            <span>{post.date}</span>
                            <span>👁 {post.views.toLocaleString()}</span>
                            <span>❤️ {post.likes}</span>
                            <span>💬 {post.comments}</span>
                          </div>
                        </div>

                        {/* 이미지 */}
                        <div className="w-24 h-24 rounded overflow-hidden shrink-0">
                          <img
                            src="/profile/profileImage.png"
                            alt="썸네일"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* 버튼 영역 */}
                      <div className="flex items-end gap-2 shrink-0">
                        <button
                          className="px-3 py-2 text-sm rounded-md bg-gray-100 text-gray-700"
                          onClick={() => setIsOpenModal(true)}
                        >
                          삭제
                        </button>
                        <button
                          className={`w-[100px] text-center flex justify-center items-center py-2 text-sm rounded-md  gap-1 ${
                            post.isFixed
                              ? "bg-white text-gray-600 border"
                              : "bg-[#3e2e20] text-white"
                          }`}
                        >
                          {!post.isFixed && <img src="/button/pin.png" />}
                          {post.isFixed ? "고정글 해제" : "고정글"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
      {isOpenModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-lg w-[320px] p-6 text-center">
            {/* 모달 제목 */}
            <h3 className="text-sm text-left font-semibold mb-2 text-black">
              삭제
            </h3>

            {/* 이미지 */}
            <div className="flex justify-center mb-4">
              <img
                src="/icon/alert.png"
                alt="삭제 이미지"
                className="w-25 h-25 object-contain"
              />
            </div>

            {/* 내용 */}
            <h4 className="text-lg font-semibold mb-1 text-black">
              정말 삭제 하시겠어요?
            </h4>
            <p className="text-sm text-gray-500 mb-6">
              삭제한 내역은 다시 복구할 수 없어요
            </p>

            {/* 버튼 영역 */}
            <div className="flex justify-between gap-2 mt-6">
              <button
                onClick={() => setIsOpenModal(false)}
                className="w-full py-2 rounded-lg bg-gray-100 text-gray-700 font-semibold"
              >
                취소
              </button>
              <button className="w-full py-2 rounded-lg bg-[#ec4b4b] text-white font-semibold">
                삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
