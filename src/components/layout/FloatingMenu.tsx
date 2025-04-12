"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "@/styles/customScrollbar.css";
import { useSession } from "next-auth/react";
import ChatList from "../ui/ChatList";
import { hasAccessToken } from "@/utils/hasAccessToken";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);
  const [hasTokenAndMemberId, setHasTokenAndMemberId] = useState(false);

  const { status } = useSession();

  const handleSession = async () => {
    const data = await hasAccessToken();
    // console.log("🍏🍏", data);
    setHasTokenAndMemberId(data);
  };

  useEffect(() => {
    handleSession();
  }, []);
  console.log(status);
  if (status === "unauthenticated" || !hasTokenAndMemberId) {
    return <></>;
  }

  return (
    <>
      <button
        className="z-50 fixed bottom-7 right-9 w-16 h-16 bg-white text-center text-black rounded-full flex items-center justify-center shadow-lg cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-label="메시지 열기"
      >
        {/* {open ? "X" : "메세지"} */}
        {open && (
          <Image
            src={"/button/message-close.svg"}
            width={18}
            height={18}
            alt="프로필"
          />
        )}
        {!open && (
          <Image
            src={"/button/message.svg"}
            width={60}
            height={60}
            alt="프로필"
          />
        )}
      </button>
      {open && <ChatList />}
    </>
  );
}
