// import { useState } from "react";

import { useState } from "react";

const careerList = [
  {
    id: 1,
    company: "NAVER",
    title: "Software Engineer",
    logo: "/profile/naver.png",
    period: "2025.04 ~",
    isPublic: true,
  },
  {
    id: 2,
    company: "Toss",
    title: "Software Engineer",
    logo: "/profile/toss.png",
    period: "2024.01 ~ 2025.04",
    isPublic: true,
  },
];

export default function ExperienceTab() {
  // 모달 관련 상태
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState("");
  return (
    <>
      <div className="relative w-full h-full flex flex-col items-center bg-white text-gray-800">
        <div className="w-full flex justify-center mt-[64px]">
          <div className="w-full max-w-[1590px] pr-80">
            {/* sticky 필터/검색 영역 */}
            <div className="hidden lg:block sticky top-[124px] h-fit bg-white z-10 py-4">
              <h2 className="text-xl font-bold mb-3">경력 / 프로젝트</h2>
              <input
                type="text"
                placeholder="추가할 회사 / 프로젝트명을 검색"
                className="w-full p-3 border text-gray-600 bg-gray-50 rounded-[7px] outline-none"
              />
            </div>

            {/* 게시글 목록 */}
            <main className="mt-[10px] space-y-6">
              {/* 경력 / 프로젝트 */}
              <div className="space mt-4">
                {/* 경력 리스트 */}
                <h3 className="text-l font-bold mt-6">경력</h3>
                {/* 경력1 */}
                {careerList.map((career) => (
                  <div
                    key={career.id}
                    className="flex items-center justify-between border-b rounded-md mt-2"
                  >
                    {/* 왼쪽: 로고 + 텍스트 */}
                    <div className="flex items-center gap-3 py-3">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <img
                          src={career.logo}
                          alt={career.company}
                          className="w-full h-full"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">
                          {career.company} | {career.title}
                        </p>
                        <p className="text-sm text-gray-500">{career.period}</p>
                      </div>
                    </div>

                    {/* 오른쪽: 공개 여부 + 버튼들 */}
                    <div className="flex gap-2 items-center">
                      <div className="flex items-center justify-center">
                        <div className="w-7 h-7 flex items-center justify-center">
                          <img
                            src="/profile/show.png"
                            alt="공개"
                            className="w-full h-full"
                          />
                        </div>
                        <span className="text-gray-400 ml-1">공개</span>
                      </div>

                      <button
                        className="bg-[#eeeeee] p-2 px-4 rounded-[7px] text-[#5e5e5e] hover:underline"
                        onClick={() => {
                          setIsOpenModal(true);
                          setSelectedCareer(career.company);
                        }}
                      >
                        삭제
                      </button>
                      <button className="bg-white p-2 px-4 rounded-[7px] text-[#5e5e5e] border hover:underline">
                        수정
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/* 프로젝트 리스트 */}
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
              [{selectedCareer}]
            </h4>
            <h4 className="text-lg font-semibold mb-1 text-black">
              이 경험을 정말 삭제 하시겠어요?
            </h4>
            <p className="text-sm text-gray-500 mb-6">
              삭제한 내역은 다시 복구할 수 없어요
            </p>

            {/* 버튼 영역 */}
            <div className="flex justify-between gap-2 mt-6">
              <button
                onClick={() => {
                  setIsOpenModal(false);
                  setSelectedCareer("");
                }}
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
