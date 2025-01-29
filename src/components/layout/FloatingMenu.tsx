"use client";

import { useState, useEffect } from "react";
import Input from "../ui/Input";
import Image from "next/image";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(600); // 초기 메뉴 높이 설정
  const [windowHeight, setWindowHeight] = useState<number>(0); // 화면 높이 상태

  const chatList = [
    {
      name: "홍길동",
      time: "오후 3:30",
      messageCount: 2,
      lastMessage: "안녕하세요!",
    },
    {
      name: "김영희",
      time: "오전 10:15",
      messageCount: 5,
      lastMessage: "오늘 약속 어때?",
    },
    {
      name: "이철수",
      time: "오후 8:00",
      messageCount: 1,
      lastMessage: "사진 보냈어요.",
    },
    {
      name: "김민수",
      time: "오후 8:00",
      messageCount: 1,
      lastMessage: "사진 보냈어요.",
    },
    {
      name: "황익욱",
      time: "오후 8:00",
      messageCount: 1,
      lastMessage: "사진 보냈어요.",
    },
    {
      name: "김민수",
      time: "오후 8:00",
      messageCount: 1,
      lastMessage: "사진 보냈어요.",
    },
    {
      name: "황익욱",
      time: "오후 8:00",
      messageCount: 1,
      lastMessage: "사진 보냈어요.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (open && windowHeight) {
      const maxHeight = windowHeight - 100;
      if (menuHeight > maxHeight) {
        setMenuHeight(maxHeight);
      } else {
        setMenuHeight(600);
      }
    }
  }, [open, windowHeight]);

  return (
    <>
      {/* 플로팅 버튼 */}
      <button
        className="z-50 fixed bottom-7 right-7 w-16 h-16 bg-white text-center text-black rounded-full flex items-center justify-center shadow-lg cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-label="메시지 열기"
      >
        메시지
      </button>

      {open && (
        <section
          className="fixed bottom-28 right-7 w-96 bg-[#ffffff] z-50 shadow-lg rounded-[32px] p-6"
          style={{ height: `${menuHeight}px` }} // 동적으로 높이 적용
          aria-labelledby="message-section-title"
        >
          <header
            className="text-[#000000] pb-2 text-[20px] font-bold"
            id="message-section-title"
          >
            메세지
          </header>

          <Input
            height="h-[48px]"
            width="w-full"
            placeholder="메시지를 검색해보세요"
          />

          {/* 채팅 리스트 */}
          <ul
            className="mt-4 space-y-3 overflow-auto"
            style={{ maxHeight: `${menuHeight - 140}px` }}
          >
            {chatList.map((chat, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-3 border-b w-full"
              >
                <Image
                  src={"/layout/profile.svg"}
                  width={70}
                  height={70}
                  alt="프로필"
                  className="rounded-full"
                />
                <div className="w-[100%] items-center ml-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="font-bold items-center text-black">
                        {chat.name}
                      </span>
                      <span className="text-sm text-gray-400 ml-2">
                        {chat.time}
                      </span>
                    </div>

                    {chat.messageCount > 0 && (
                      <span className="bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {chat.messageCount}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-500">{chat.lastMessage}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
