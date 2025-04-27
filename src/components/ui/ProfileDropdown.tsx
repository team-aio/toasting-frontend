"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { serverSignOut } from "@/utils/deleteCookie";
import { signOut } from "next-auth/react";

interface ProfileDropdownProps {
  setIsProfileMenuOpen: (open: boolean) => void;
  isProfileMenuOpen?: boolean;
}

export default function ProfileDropdown({
  setIsProfileMenuOpen,
  isProfileMenuOpen,
}: ProfileDropdownProps) {
  console.log(isProfileMenuOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const onClickSignOut = async () => {
    await serverSignOut();
    await signOut();
  };

  return (
    <div
      className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-[12px] p-2 border border-gray-200"
      ref={dropdownRef}
    >
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
        <Image src={"/icon/write.svg"} width={22} height={22} alt="프로필" />
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
          <Image src={"/icon/logout.svg"} width={22} height={22} alt="프로필" />
          <div
            className="block pl-2 pr-4 py-2 cursor-pointer"
            onClick={onClickSignOut}
          >
            로그아웃
          </div>
        </div>
        {/* )} */}
      </div>
      {/* ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅ */}
    </div>
  );
}
