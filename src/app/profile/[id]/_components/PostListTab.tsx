// import { useState } from "react";
import { useState } from "react";
import { FaThumbtack } from "react-icons/fa";

const dummyPosts = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  title: "게시글 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목 제목",
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

  return (
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
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-sm rounded-[8px] border ${
                    selectedCategory === cat
                      ? "bg-gray-50 text-black border-gray-600"
                      : "bg-white text-gray-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
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
                  className="w-full flex justify-between items-center bg-white shadow rounded-xl px-6 py-4"
                >
                  {/* 텍스트영역 */}
                  <div className="flex-1 pr-4">
                    <div className="text-gray-800 text-sm font-medium line-clamp-2">
                      {post.title}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mt-2">
                      <span>{post.date}</span>
                      <span>👁 {post.views.toLocaleString()}</span>
                      <span>❤️ {post.likes}</span>
                      <span>💬 {post.comments}</span>
                    </div>
                  </div>

                  {/* 이미지 */}
                  <div className="w-14 h-14 rounded overflow-hidden shrink-0">
                    <img
                      src="/profile/profileImage.png"
                      alt="썸네일"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* 버튼들 */}
                  <div className="flex flex-col items-end ml-4 gap-2 shrink-0">
                    <button className="px-3 py-1 text-sm rounded-md bg-gray-100 text-gray-700">
                      수정
                    </button>
                    <button
                      className={`px-3 py-1 text-sm rounded-md flex items-center gap-1 ${
                        post.isFixed
                          ? "bg-gray-200 text-gray-600"
                          : "bg-[#3e2e20] text-white"
                      }`}
                    >
                      {post.isFixed && <FaThumbtack />}
                      {post.isFixed ? "고정글 해제" : "고정글"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
