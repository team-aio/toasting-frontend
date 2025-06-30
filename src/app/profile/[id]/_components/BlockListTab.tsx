const dummyPosts = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  title: "닉네임",
  isBlocked: i % 3 === 0,
}));

export default function BlockListTab() {
  return (
    <div className="relative w-full h-full flex flex-col items-center bg-white text-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex justify-center mt-16">
        <div className="w-full max-w-[1590px] lg:pr-80">
          {/* sticky 필터/검색 영역 */}
          <div className="hidden lg:block sticky top-[124px] h-fit bg-white z-10 py-4">
            <h2 className="text-xl font-semibold">차단 유저 관리</h2>
            <div className="mt-4 text-sm text-gray-800">
              차단한 유저의 글과 메시지를 더 이상 확인 할 수 없어요
            </div>
          </div>

          {/* 게시글 목록 */}
          <main className="mt-4 space-y-4">
            {dummyPosts.map((post) => (
              <div
                key={post.id}
                className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white border-b border-[#f1f1f1] rounded-xl sm:py-4 sm:h-[80px]"
              >
                {/* 유저 정보 */}
                <div className="flex items-center gap-3 w-full sm:max-w-[80%]">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded overflow-hidden shrink-0">
                    <img
                      src="/profile/profileImage.png"
                      alt="썸네일"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-gray-800 text-[16px] sm:text-[17px] font-medium line-clamp-2">
                    {post.title}
                  </div>
                </div>

                {/* 버튼 */}
                <div className="flex sm:items-end mt-2 sm:mt-0 gap-2 shrink-0">
                  {post.isBlocked ? (
                    <button className="w-[90px] text-center flex justify-center items-center py-2 text-sm rounded-md bg-white text-gray-600 border">
                      차단 해제
                    </button>
                  ) : (
                    <button className="w-[60px] text-center flex justify-center items-center py-2 text-sm rounded-md bg-[#3e2e20] text-white">
                      차단
                    </button>
                  )}
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
