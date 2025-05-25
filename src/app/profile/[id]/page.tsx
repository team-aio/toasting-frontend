import ProfileHeader from "./_components/ProfileHeader";

export default function ProfileEditPage() {
  return (
    <>
      <ProfileHeader />

      {/* ✅ 전체 페이지 */}
      <div className="relative w-full h-full flex justify-center bg-[#ffffff] text-gray-800">
        <div className="flex w-full px-4 gap-6 justify-center">
          {/* 왼쪽 고정 영역 */}
          <aside className="hidden lg:block w-[320px] sticky top-[150px] h-fit shrink-0">
            <div className="bg-white rounded-[14px] shadow space-y-4">
              <PreviewCard />
            </div>
          </aside>

          {/* 가운데 영역 - 길어지면 전체 페이지가 스크롤됨 */}
          <main className="w-[900px] px-6 py-8 space-y-8 mt-[60px]">
            {/* 대표 사진 변경 */}
            <section>
              <h2 className="text-xl font-bold mb-4">대표 사진 변경</h2>
              <div className="flex gap-4">
                <div className="w-24 h-24 rounded overflow-hidden ">
                  <img
                    src="/profile/profileImage.png"
                    alt="대표 이미지1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-34 h-24 rounded overflow-hidden">
                  <img
                    src="/profile/profileBackground.png"
                    alt="대표 이미지2"
                    className="w-full h-full object-cover rounded-[7px]"
                  />
                </div>
              </div>
            </section>

            {/* 이름 / 닉네임 */}
            <section>
              <label className="block font-semibold mb-1">이름 / 닉네임</label>
              <input
                type="text"
                defaultValue="홍길동"
                className="w-full p-2 border bg-white max-w-[300px] text-[#222222] rounded-[7px]  outline-none"
              />
            </section>

            {/* 소개글 */}
            <section>
              <label className="block font-semibold mb-1">소개글</label>
              <textarea
                rows={4}
                defaultValue="나를 소개하는 한마디 나를 소개하는 한마디 나를 소개하는 한마디..."
                className="w-full p-2 border bg-white max-w-[700px] text-[#222222]  rounded-[7px]  outline-none"
              />
            </section>

            {/* 경력 / 프로젝트 */}
            <section>
              <h2 className="text-xl font-bold mb-3">경력 / 프로젝트</h2>
              <input
                type="text"
                defaultValue="추가할 회사 / 프로젝트명을 검색"
                className="w-full p-3 border bg-white text-[#a0a0a0] rounded-[7px] outline-none"
              />
              <div className="space mt-4">
                {/* 경력 리스트 */}
                <h3 className="text-l font-bold mt-6">경력</h3>
                {/* 경력1 */}
                <div className="flex items-center justify-between border-b rounded-md mt-2">
                  <div className="flex items-center gap-3 py-3">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img
                        src="/profile/naver.png"
                        alt="Naver"
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">NAVER | Software Engineer</p>
                      <p className="text-sm text-gray-500">2025.04 ~</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center justify-center">
                      <div className="w-7 h-7 flex items-center justify-center">
                        <img
                          src="/profile/show.png"
                          alt="Naver"
                          className="w-full h-full"
                        />
                      </div>
                      <span className="text-gray-400">공개</span>
                    </div>
                    <button className="bg-[#eeeeee] p-2 px-4 rounded-[7px] text-[#5e5e5e] hover:underline">
                      삭제
                    </button>
                    <button className="bg-[#ffffff] p-2 px-4 rounded-[7px] text-[#5e5e5e] border hover:underline">
                      수정
                    </button>
                  </div>
                </div>
                {/* 경력2 */}
                <div className="flex items-center justify-between border-b rounded-md mt-2">
                  <div className="flex items-center gap-3 py-3">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img
                        src="/profile/toss.png"
                        alt="Naver"
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Toss | Software Engineer</p>
                      <p className="text-sm text-gray-500">2024.01 ~ 2025.04</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex items-center justify-center">
                      <div className="w-7 h-7 flex items-center justify-center">
                        <img
                          src="/profile/show.png"
                          alt="Naver"
                          className="w-full h-full"
                        />
                      </div>
                      <span className="text-gray-400">공개</span>
                    </div>
                    <button className="bg-[#eeeeee] p-2 px-4 rounded-[7px] text-[#5e5e5e] hover:underline">
                      삭제
                    </button>
                    <button className="bg-[#ffffff] p-2 px-4 rounded-[7px] text-[#5e5e5e] border hover:underline">
                      수정
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 프로젝트 리스트 */}
            <section>
              <h3 className="text-l font-bold mb-3">프로젝트</h3>
              <div className="flex items-center justify-between border-b rounded-md mt-2">
                <div className="flex items-center gap-3 py-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img
                      src="/profile/toasting.png"
                      alt="Naver"
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      Toasting | Software Engineer
                    </p>
                    <p className="text-sm text-gray-500">2025.01 ~ </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center justify-center">
                    <div className="w-7 h-7 flex items-center justify-center">
                      <img
                        src="/profile/show.png"
                        alt="Naver"
                        className="w-full h-full"
                      />
                    </div>
                    <span className="text-gray-400">공개</span>
                  </div>
                  <button className="bg-[#eeeeee] p-2 px-4 rounded-[7px] text-[#5e5e5e] hover:underline">
                    삭제
                  </button>
                  <button className="bg-[#ffffff] p-2 px-4 rounded-[7px] text-[#5e5e5e] border hover:underline">
                    수정
                  </button>
                </div>
              </div>
            </section>

            {/* 블로그 연결 관리 */}
            <section>
              <h3 className="text-lg font-bold mb-3">블로그 연결 관리</h3>
              <div className="flex items-center justify-between border-b rounded-md mt-2">
                <div className="flex items-center gap-3 py-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img
                      src="/profile/velog.png"
                      alt="Naver"
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">벨로그</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="bg-[#44361D] p-2 px-4 rounded-[7px] text-[#ffffff] hover:underline">
                    연결
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between border-b rounded-md mt-2">
                <div className="flex items-center gap-3 py-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img
                      src="/profile/tistory.png"
                      alt="Naver"
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">티스토리</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="bg-[#44361D] p-2 px-4 rounded-[7px] text-[#ffffff] hover:underline">
                    연결
                  </button>
                </div>
              </div>
            </section>
          </main>

          {/* 오른쪽 고정 영역 */}
          <aside className="hidden lg:block w-[320px] sticky top-[150px] h-fit shrink-0">
            <div className="bg-whiterounded-2xl space-y-4">
              {/* <h3 className="text-lg font-bold mb-4">수정 중인 항목</h3>
              <p className="text-sm">
                현재 수정 중: <strong>소개글</strong>
              </p> */}
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-white border rounded-[7px]">
                  취소
                </button>
                <button className="flex-1 py-2 rounded-[7px] bg-[#3e2e20] text-white">
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
