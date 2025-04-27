"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginAlertWrapper() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("loginAlertShown");
    const needLogin = searchParams.get("needLogin") === "true";

    if (needLogin && !shown) {
      sessionStorage.setItem("needLogin", "true");
      setShowOverlay(true);
    }
  }, [searchParams]);

  if (!showOverlay) return null;

  const onClickGoogleSignIn = async () => {
    await signIn("google", {
      redirect: true,
      callbackUrl: "/signIn",
    });
  };

  const handleCloseModal = () => {
    setShowOverlay(false);
    router.push("/");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999]">
      <div className="bg-white p-6 rounded-3xl w-[600px]">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-[#44361D]">로그인</h2>
          <Image
            src={"/button/message-close.svg"}
            width={18}
            height={18}
            alt="프로필"
            onClick={handleCloseModal}
            className="cursor-pointer"
          />
        </div>
        <div className="mt-4 justify-center items-center">
          <div className="text-[26px] font-bold mt-10 text-[#44361D] flex justify-center items-center">
            Toasting , 코드 밖의 세상을 여는 발견
          </div>
          <div className="text-[18px] font-medium mt-4 text-[#9D9FA4] flex justify-center items-center">
            회원 서비스를 이용을 위해 로그인 해주세요
          </div>
          <div
            className="mt-10 flex justify-center items-center border border-[#DFE0E2] rounded-2xl py-3 cursor-pointer hover:bg-[#f8f8f8]"
            onClick={onClickGoogleSignIn}
          >
            <Image
              src={"/icon/google.svg"}
              width={26}
              height={26}
              alt="구글로고"
              className="cursor-pointer mr-1"
            />
            <div className="ml-1 text-[#76787F] font-semibold">
              구글 계정으로 로그인
            </div>
          </div>
          <div className="mt-4 flex justify-center items-center">
            <Image
              src={"/button/back.svg"}
              width={20}
              height={20}
              alt="나가기"
              className="cursor-pointer mr-1"
            />
            <div className="text-[14px] ml-1 text-[#76787F] font-semibold cursor-pointer">
              이메일로 회원가입
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
