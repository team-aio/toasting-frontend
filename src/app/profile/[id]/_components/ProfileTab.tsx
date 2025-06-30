export default function ProfileTab() {
  return (
    <div className="relative w-full h-full flex justify-center bg-[#ffffff] text-gray-800 pt-[160px]">
      <div className="flex w-full px-4 gap-6 justify-center">
        {/* 가운데 영역 - 길어지면 전체 페이지가 스크롤됨 */}
        <main className="w-[1250px] h-[2000px] px-6 py-8 space-y-8 bg-[#00ffaa]">
          {/* 대표 사진 변경 */}
          <section>{/* 프로젝트 리스트 */}</section>
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
