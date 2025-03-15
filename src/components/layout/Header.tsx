"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Input from "../ui/Input";
import { signIn } from "next-auth/react";
import LoginModal from "../ui/LoginModal";

interface HeaderProps {
  isPostHeader?: boolean;
  isProfileHeader?: boolean;
  withSearch?: boolean;
}

const Header = ({
  isPostHeader = false,
  isProfileHeader = false,
  withSearch = false,
}: HeaderProps) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 현재 창 닫기
  const handleClose = () => {
    window.close();
  };

  const handleOpenLogInModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const onClickGoogleSignIn = async () => {
    await signIn("google", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  // const onClickSignOut = async () => {
  //   await signOut();
  // };

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-gray-50">
      {/* 왼쪽 요소: 로고와 input */}
      <div className="flex items-center gap-4 flex-1 basis-1/2 pr-4">
        {(withSearch || isPostHeader || isProfileHeader) && (
          <Link href={"/"}>
            <Image src={"/logo/logo.svg"} width={105} height={48} alt="로고" />
          </Link>
        )}
        {/* 검색 input이 있을 경우 */}
        {withSearch && (
          <Input
            height="h-[48px]"
            width="w-[700px]"
            placeholder="검색어를 입력해주세요"
          />
        )}
      </div>

      {/* 오른쪽 요소 */}
      <div className="flex justify-end items-center flex-1 basis-1/2 space-x-8 text-[#76787F] relative">
        {/* 피드, 메시지, 알림 */}
        {!isPostHeader && (
          <>
            {/* 로그인 이후 */}
            <div className="flex flex-col items-center">
              <Image
                src={"/button/feed.svg"}
                width={24}
                height={24}
                alt="피드"
              />
              <span>피드</span>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={"/layout/notice.svg"}
                width={24}
                height={24}
                alt="알림"
              />
              <span>알림</span>
            </div>

            {/* 프로필 드롭다운 */}
            <div className="relative">
              <button
                className="flex flex-col items-center"
                onClick={() => setIsProfileMenuOpen((prev) => !prev)}
              >
                <Image
                  src={"/layout/profile.svg"}
                  width={24}
                  height={24}
                  alt="프로필"
                />
                <span>프로필</span>
              </button>

              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-[12px] p-2 border border-gray-200">
                  <div className="flex hover:bg-gray-100 px-2 rounded-[7px]">
                    <Image
                      src={"/icon/my-profile.svg"}
                      width={22}
                      height={22}
                      alt="프로필"
                    />
                    <Link href={"/profile"} className="block pl-2 pr-4 py-2 ">
                      내 프로필
                    </Link>
                  </div>
                  <div className="flex hover:bg-gray-100 px-2 rounded-[7px]">
                    <Image
                      src={"/icon/write.svg"}
                      width={22}
                      height={22}
                      alt="프로필"
                    />
                    <Link href={"/profile"} className="block pl-2 pr-4 py-2 ">
                      글쓰기
                    </Link>
                  </div>
                  {/* ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅ */}
                  <div>
                    {/* {isSession && (
                      <button onClick={onClickSignOut}>로그아웃</button>
                    )}

                    {!isSession && ( */}
                    <div className="flex hover:bg-gray-100 px-2 rounded-[7px]">
                      <Image
                        src={"/icon/logout.svg"}
                        width={22}
                        height={22}
                        alt="프로필"
                      />
                      <Link href={"/profile"} className="block pl-2 pr-4 py-2 ">
                        로그아웃
                      </Link>
                    </div>
                    {/* )} */}
                  </div>
                  {/* ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅ */}
                </div>
              )}
            </div>
            {/* 로그인 이전 */}
            <div
              className="bg-[#44361D] rounded-full w-[90px] h-[40px] flex justify-center items-center text-white ml-4 cursor-pointer"
              onClick={handleOpenLogInModal}
            >
              로그인
            </div>
          </>
        )}

        {/* PostHeader일 때 닫기 버튼 추가 */}
        {isPostHeader && (
          <Image
            src={"/icon/close-btn.svg"}
            width={30}
            height={30}
            alt="닫기"
            className="cursor-pointer"
            onClick={handleClose}
          />
        )}
      </div>
      {/* Modal */}
      <LoginModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onClickGoogleSignIn={onClickGoogleSignIn}
      />
    </header>
  );
};

export default Header;
