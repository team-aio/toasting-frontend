// import { useState } from "react";

const dummyPosts = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  title: "닉네임",
  isBlocked: i % 3 === 0,
}));

export default function BlockListTab() {
  return (
    <>
      <div className="relative w-full h-full flex flex-col items-center bg-white text-gray-800">
        <div className="w-full flex justify-center mt-[64px]">
          <div className="w-full max-w-[1590px] pr-80">
            {/* sticky 필터/검색 영역 */}
            <div className="hidden lg:block sticky top-[124px] h-fit bg-white z-10 py-4">
              <h2 className="text-xl font-semibold">차단 유저 관리</h2>

              {/* 검색창 */}
              <div className="mt-4 text-[14px] text-gray-800">
                차단한 유저의 글과 메시지를 더 이상 확인 할 수 없어요
              </div>
            </div>

            {/* 게시글 목록 */}
            <main className="mt-[10px] space-y-6">
              {/* 게시글 리스트 */}
              <div className="space-y-1">
                {dummyPosts.map((post) => (
                  <div
                    key={post.id}
                    className="w-full flex justify-between items-center bg-white border-b border-[#f1f1f1] rounded-xl py-4 h-[80px]"
                  >
                    <div className="w-full flex justify-between items-center bg-white border-b border-[#f1f1f1] rounded-xl py-4 h-[80px]">
                      {/* 이미지 */}
                      <div className="flex items-center gap-2 w-full max-w-[80%]">
                        {/* 이미지 */}
                        <div className="w-14 h-14 rounded overflow-hidden shrink-0">
                          <img
                            src="/profile/profileImage.png"
                            alt="썸네일"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* 텍스트 영역 */}
                        <div className="text-gray-800 text-[17px] font-medium line-clamp-2">
                          {post.title}
                        </div>
                      </div>

                      {/* 버튼 영역 */}
                      <div className="flex items-end gap-2 shrink-0">
                        {post.isBlocked ? (
                          <button className="w-[100px] text-center flex justify-center items-center py-2 text-sm rounded-md bg-white text-gray-600 border">
                            차단 해제
                          </button>
                        ) : (
                          <button className="w-[60px] text-center flex justify-center items-center py-2 text-sm rounded-md bg-[#3e2e20] text-white">
                            차단
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
