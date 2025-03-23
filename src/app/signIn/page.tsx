"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [nickname, setNickname] = useState("");
  const [nicknameValid, setNicknameValid] = useState(false);
  const [nicknameError, setNicknameError] = useState(false);
  const [tistoryId, setTistoryId] = useState("");
  const [velogId, setVelogId] = useState("");

  const router = useRouter();

  const { data: session } = useSession();

  const handleIsOurUser = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/v1/member/login/google`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: session?.user?.email,
            username: session?.user?.name,
            snsType: session?.user?.type,
            snsId: session?.user?.id,
          }),
        }
      );

      // 여기 계속 바꿔야함
      const data = await res.json(); // JSON 파싱 // COMMON200 //MEMBER_CREATED
      console.log(data.status);
      if (data.status === "COMMON200") {
        router.push("/");
      } else if (data.status === "MEMBER_CREATED") {
        // 회원가입이 필요한 사람
        return;
      } else {
        throw new Error("로그인 실패");
      }
    } catch (error) {
      console.error("로그인 오류:", error);
      return false; // 실패 시 false 반환
    }
  };

  useEffect(() => {
    if (session) {
      handleIsOurUser();
    }
  }, [session]);

  // 닉네임 중복 확인
  const handleCheckNickname = async () => {
    console.log("중복 체크", nickname);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/v1/member/exist?nickname=${nickname}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // 여기 계속 바꿔야함
    const data = await res.json(); // JSON 파싱 // COMMON200 //MEMBER_CREATED
    console.log(data);
    if (data.isSuccess) {
      setNicknameValid(true); // 사실상 이거만 된다면, signIn 가능
      setNicknameError(false);
    } else {
      setNicknameValid(false);
      setNicknameError(true);
    }
  };

  // 모든 값이 입력되었는지 확인
  // test
  const handleJoin = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/v1/member/signup?snsType=${session?.user?.type}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: session?.user?.email,
            username: session?.user?.name,
            snsType: session?.user?.type,
            snsId: session?.user?.id,
            nickname: nickname,
            tistoryId: tistoryId,
            velogId: velogId,
          }),
        }
      );

      // 여기 계속 바꿔야함
      const data = await res.json(); // JSON 파싱 // COMMON200 //MEMBER_CREATED
      console.log(data);
      if (res.status === 200) {
        router.push("/");
      }
    } catch (error) {
      console.error("회원가입 오류 오류:", error);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-gray-50">
        <div className="flex items-center gap-4 flex-1 basis-1/2 pr-4">
          <Image src={"/logo/logo.svg"} width={105} height={48} alt="로고" />
        </div>
        <div className="flex justify-end items-center flex-1 basis-1/2 space-x-8 text-[#76787F] relative">
          <div className="rounded-full w-[90px] h-[40px] flex justify-center items-center font-medium text-[#44361D] ml-4 cursor-pointer border border-[#44361D]">
            로그인
          </div>
        </div>
      </header>

      <div className="max-w-lg mx-auto p-6 mt-16">
        <h2 className="text-[30px] font-bold text-[#44361D]">
          Toasting 가입이 코 앞이에요!
        </h2>
        <p className="text-gray-600 mt-4">
          가입을 위해 아래 정보를 입력해주세요
        </p>

        {/* 닉네임 입력 */}
        <div className="mt-8">
          <label className="block text-sm font-semibold text-[#44361D]">
            * 닉네임을 입력해주세요.
          </label>
          <div className="flex mt-4">
            <input
              type="text"
              placeholder="닉네임을 입력해주세요"
              className={`w-[65%] p-2 border rounded-xl text-black text-[14px] ${
                nickname && !nicknameValid
                  ? "border-[#FF474F]"
                  : "border-gray-300"
              }`}
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
                setNicknameValid(false); // 중복 확인 전까지 유효하지 않음
              }}
              style={{ outline: "none" }}
            />
            <button
              onClick={handleCheckNickname}
              className={`w-[20%] ml-2 py-2 rounded-xl text-[14px] ${
                nickname && !nicknameValid
                  ? "bg-[#FF474F] text-white"
                  : "bg-[#44361D] text-white"
              }`}
            >
              중복 확인
            </button>
          </div>
          {nicknameValid && (
            <p className="text-[#44C852] text-sm mt-2">
              ✔ 사용 가능한 닉네임입니다.
            </p>
          )}
          {nicknameError && (
            <p className="text-[#FF474F] text-sm mt-2">
              ❌ 이미 사용 중인 닉네임입니다.
            </p>
          )}
        </div>

        <hr className="mt-8" />

        {/* Tistory & Velog ID 입력 (선택 사항) */}
        <div className="mt-8">
          <div className="flex">
            <p className="text-[#c2c2c2] text-sm font-medium">(선택)</p>
            <p className="text-[#44361D] text-sm font-medium ml-1">
              기존 글 연동을 위한 Tistory, Velog 아이디를 입력해주세요
            </p>
          </div>

          {/* Tistory ID */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-600">
              • Tistory ID가 있다면 입력해주세요
            </label>
            <div className="flex items-center mt-4">
              <span className="text-[#9D9FA4]">https://</span>
              <input
                type="text"
                placeholder="ID를 입력해주세요"
                className="flex-1 outline-none ml-1 border rounded-xl p-2 text-[#44361D] border-gray-300"
                value={tistoryId}
                onChange={(e) => setTistoryId(e.target.value)}
              />
              <span className="text-[#9D9FA4]">.tistory.com/rss</span>
            </div>
          </div>

          {/* Velog ID */}
          <div className="mt-8">
            <label className="block text-sm font-medium text-gray-600">
              • Velog ID가 있다면 입력해주세요
            </label>
            <div className="flex items-center mt-4">
              <span className="text-[#9D9FA4]">https://v2.velog.io/rss/</span>
              <input
                type="text"
                placeholder="ID를 입력해주세요"
                className="flex-1 outline-none ml-1 border rounded-xl p-2 text-[#44361D] border-gray-300"
                value={velogId}
                onChange={(e) => setVelogId(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* 버튼 그룹 */}
        <div className="flex justify-between mt-8">
          <button className="bg-white px-6 py-2 border rounded-xl text-[#44361D] w-[48%]">
            취소
          </button>
          <button
            className={`px-6 py-2 text-white rounded-xl w-[48%] ${
              nicknameValid ? "bg-[#44361D]" : "bg-[#ECEBE8] cursor-not-allowed"
            }`}
            disabled={!nicknameValid}
            onClick={handleJoin}
          >
            완료
          </button>
        </div>
      </div>
    </>
  );
}
