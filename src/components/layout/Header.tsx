"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Input from "../ui/Input";
import { signIn, useSession } from "next-auth/react";
import LoginModal from "../ui/LoginModal";
// import { serverSignOut } from "@/utils/deleteCookie";
import { hasAccessToken } from "@/utils/hasAccessToken";
import { useRouter } from "next/navigation";
import ProfileDropdown from "../ui/ProfileDropdown";
// import { sessionValid } from "@/utils/sessionValid";

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
  const router = useRouter();

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasTokenAndMemberId, setHasTokenAndMemberId] = useState(false);

  console.log(isProfileMenuOpen);

  const handleSession = async () => {
    const data = await hasAccessToken();
    // console.log("🍏🍏", data);
    setHasTokenAndMemberId(data);
  };

  useEffect(() => {
    handleSession();
  }, []);

  const { data: session, status } = useSession(); // useSession()추가
  console.log(session, status); // console.log 추가
  // 현재 창 닫기
  const handleClose = () => {
    window.close();
  };

  //🍏🍏🍏🍏🍏🍏🍏🍏 나중에는 pathName에 따라서 바로 모달을 오픈하는 동작도 필요함 또는 정말 인터셉트, 페러렐 필요할 수도 있음
  const handleOpenLogInModal = () => {
    // setIsModalOpen(true);
    router.push("/?needLogin=true");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const onClickGoogleSignIn = async () => {
    await signIn("google", {
      redirect: true,
      callbackUrl: "/signIn",
    });
  };

  // const onClickSignOut = async () => {
  //   await serverSignOut();
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
            isMainSearch
          />
        )}
      </div>

      {/* 오른쪽 요소 */}
      <div className="flex justify-end items-center flex-1 basis-1/2 space-x-8 text-[#76787F] relative">
        {/* 피드, 메시지, 알림 */}
        {!isPostHeader && (
          <>
            {/* 로그인 이후 */}
            {status === "authenticated" && hasTokenAndMemberId && (
              <>
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
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
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
                    <ProfileDropdown
                      setIsProfileMenuOpen={setIsProfileMenuOpen}
                      isProfileMenuOpen={isProfileMenuOpen}
                    />
                  )}
                </div>
              </>
            )}
            {/* 로그인 이전 */}
            {/* {(status === "unauthenticated" || !hasTokenAndMemberId) && ( */}

            {status === "unauthenticated" && (
              <div
                className="bg-[#44361D] rounded-full w-[90px] h-[40px] flex justify-center items-center text-white ml-4 cursor-pointer"
                onClick={handleOpenLogInModal}
              >
                로그인
              </div>
            )}
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
