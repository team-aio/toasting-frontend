// import { useState } from "react";

import { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Calendar } from "./Calendar";

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

  // 경험 수정 관련 상태
  const [isEditing, setIsEditing] = useState(false);
  const [company, setCompany] = useState("Toasting");
  // const [period, setPeriod] = useState("2020.04 - 2021.02");
  const [role, setRole] = useState("Software Engineer");
  const [activities, setActivities] =
    useState(`1. Flask + uWSGI로 서비스 배포 – HTTPS 적용 및 서브도메인 환경 구성
2. PostgreSQL 테이블 12개 설계 – 트랜잭션 처리 및 로거 자동화 기능 구현
3. JWT 기반 로그인/토큰 검증 구현 – 액세스/리프레시 토큰 관리 분리
4. FastAPI 기반 REST API 개발 – Swagger 문서 자동 생성 및 미들웨어 적용
5. GitHub Actions를 활용한 CI/CD 파이프라인 구축 – main 브랜치 push 시 자동 배포
6. Docker Compose로 환경 통합 – Nginx, DB, 백엔드 컨테이너 구성
7. S3 + CloudFront를 통한 정적 파일 분리 – 스테이징 릴리즈 자동화 포함
8. Celery + Redis로 비동기 작업 처리 – 이메일 인증, 백그라운드 작업 구성`);

  // 달력
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("2021.01");
  const calendarRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLDivElement>(null);
  const handleToggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };

  const handleSelect = (month: string) => {
    setSelectedMonth(month);
    setShowCalendar(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="relative w-full h-full flex flex-col items-center bg-white text-gray-800">
        <div className="w-full flex justify-center mt-[64px] sm:px-4">
          {!isEditing && (
            <div className="w-full max-w-[1590px] pr-80">
              <>
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
                            <p className="text-sm text-gray-500">
                              {career.period}
                            </p>
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
                          <button
                            className="bg-white p-2 px-4 rounded-[7px] text-[#5e5e5e] border hover:underline"
                            onClick={() => setIsEditing(true)}
                          >
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
              </>
            </div>
          )}
          {isEditing && (
            <div className="w-full max-w-[1590px] flex justify-between px-2 sm:px-0">
              <div className="flex justify-between w-[60%]">
                <div className=" items-start gap-4 w-full">
                  {/* 왼쪽: 썸네일 */}
                  <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0 bg-[#f7f7f7] flex items-center justify-center">
                    <img
                      src="/profile/toasting.png"
                      alt="toast logo"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* 오른쪽: 입력 폼 */}
                  <div className="flex-1 space-y-4 mt-4">
                    {/* 회사명 */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        회사명
                      </label>
                      <div className="flex gap-2 h-[35px]">
                        <div className="flex justify-between items-center w-[60%] border rounded-md px-4 text-sm bg-[#f7f7f7]">
                          <input
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="w-[90%] outline-none bg-[#f7f7f7]"
                          />
                          <IoSearchOutline />
                        </div>
                        <button className="px-6 py-2 bg-[#ffffff] rounded-md text-sm border border-[#e3e3e3] hover:bg-gray-100">
                          직접 추가
                        </button>
                      </div>
                    </div>

                    {/* 기간 */}
                    <div>
                      <label className="block text-sm font-medium mb-1 ">
                        기간
                      </label>
                      <div
                        className="flex gap-2 h-[35px]"
                        onClick={handleToggleCalendar}
                        ref={toggleButtonRef}
                      >
                        <div className="flex justify-between items-center w-[60%] border rounded-md px-4 text-sm bg-[#f7f7f7]">
                          <span>{selectedMonth}</span>
                          <img
                            src="/icon/calender.png"
                            className="w-[16px] h-[16px]"
                          />
                        </div>
                      </div>

                      {/* 달력 */}
                      {showCalendar && (
                        <div
                          ref={calendarRef}
                          className="absolute ml-[271px] top-[280px] z-50 w-[300px] p-4 bg-white border rounded-lg shadow"
                        >
                          <Calendar
                            onSelect={handleSelect}
                            selected={selectedMonth}
                          />
                        </div>
                      )}
                    </div>

                    {/* 팀내 역할 */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        팀내 역할
                      </label>
                      <input
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full border rounded-md px-4 py-2 text-sm"
                      />
                    </div>

                    {/* 활동 내역 */}
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        활동 내역
                      </label>
                      <textarea
                        rows={8}
                        value={activities}
                        onChange={(e) => setActivities(e.target.value)}
                        className="w-full border rounded-md px-4 py-2 text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* 버튼 */}
              <div className="flex justify-end items-end gap-2 sticky bottom-0 bg-white h-full w-[260px]">
                <div className="flex justify-between h-[40px] w-[260px]">
                  <button
                    className="rounded-md border text-sm text-gray-600 hover:underline w-[120px]"
                    onClick={() => setIsEditing(false)}
                  >
                    취소
                  </button>
                  <button className="rounded-md bg-[#3e2e20] text-white text-sm w-[120px]">
                    저장
                  </button>
                </div>
              </div>
            </div>
          )}
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
