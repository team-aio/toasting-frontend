import ProfileHeader from "./_components/ProfileHeader";

export default function ProfileEditPage() {
  return (
    <>
      <ProfileHeader />

      {/* ✅ 전체 페이지 */}
      <div className="relative w-full h-full flex justify-center bg-[#00ffaa] text-gray-800">
        <div className="flex w-full px-4 gap-6 justify-center">
          {/* 왼쪽 고정 영역 */}
          <aside className="hidden lg:block w-[320px] sticky top-[150px] h-fit shrink-0">
            <div className="bg-white rounded-[14px] shadow space-y-4">
              <PreviewCard />
            </div>
          </aside>

          {/* 가운데 영역 - 길어지면 전체 페이지가 스크롤됨 */}
          <main className="w-[900px] px-4 py-6 bg-[#1a83da] space-y-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">프로필 수정</h2>

            <section>
              <label className="block font-semibold mb-1">이름 / 닉네임</label>
              <input
                type="text"
                defaultValue="홍길동"
                className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700"
              />
            </section>

            <section>
              <label className="block font-semibold mb-1">소개글</label>
              <textarea
                rows={3}
                defaultValue="안녕하세요. 프론트엔드 개발자입니다."
                className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700"
              />
            </section>

            {Array.from({ length: 20 }).map((_, i) => (
              <section key={i}>
                <label className="block font-semibold mb-1">필드 {i + 1}</label>
                <input className="w-full p-2 border rounded bg-gray-50 dark:bg-gray-700" />
              </section>
            ))}
          </main>

          {/* 오른쪽 고정 영역 */}
          <aside className="hidden lg:block w-[320px] sticky top-[150px] h-fit bg-[#5f2af1] shrink-0">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-4 space-y-4">
              <h3 className="text-lg font-bold mb-4">수정 중인 항목</h3>
              <p className="text-sm">
                현재 수정 중: <strong>소개글</strong>
              </p>
              <div className="mt-6 flex gap-2">
                <button className="flex-1 py-2 rounded bg-gray-300 dark:bg-gray-600">
                  취소
                </button>
                <button className="flex-1 py-2 rounded bg-[#3e2e20] text-white">
                  저장
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
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
