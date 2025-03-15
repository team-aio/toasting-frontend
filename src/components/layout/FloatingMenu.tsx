"use client";

import { useState, useEffect, useRef } from "react";
import Input from "../ui/Input";
import Image from "next/image";
import "@/styles/customScrollbar.css";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(600);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const [, setIsScrolled] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [messageRoom, setMessageRoom] = useState(false);

  const listRef = useRef<HTMLUListElement>(null);

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
      name: "이영희",
      time: "오후 9:00",
      messageCount: 3,
      lastMessage: "곧 도착해!",
    },
    {
      name: "박철수",
      time: "오후 10:00",
      messageCount: 1,
      lastMessage: "고마워!",
    },
  ];

  const selectedChat = {
    messages: [
      {
        sender: "홍길동",
        content: "안녕하세요! 잘 지내세요?",
        date: "2025-03-15 10:00",
      },
      {
        sender: "김철수",
        content:
          "네, 잘지내고 있습니다. 제가 연락 드려야하는데 ㅋㅋ 감사합니다!",
        date: "2025-03-15 10:02",
      },
      {
        sender: "홍길동",
        content: "그럼 오늘은 뭐 하세요?",
        date: "2025-03-15 10:05",
      },
      {
        sender: "김철수",
        content: "오늘은 친구들과 영화 보러 가요!",
        date: "2025-03-15 10:07",
      },
      {
        sender: "홍길동",
        content: "좋네요! 어떤 영화 보러 가요?",
        date: "2025-03-15 10:10",
      },
      {
        sender: "김철수",
        content: "미키 17요",
        date: "2025-03-15 10:10",
      },
      {
        sender: "김철수",
        content: "보셨나요 ㅋ?",
        date: "2025-03-15 10:10",
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (open && windowHeight) {
      const maxHeight = windowHeight - 100;
      setMenuHeight(menuHeight > maxHeight ? maxHeight : 600);
    }
  }, [open, windowHeight]);

  useEffect(() => {
    const checkScroll = () => {
      if (listRef.current) {
        setIsScrollable(
          listRef.current.scrollHeight > listRef.current.clientHeight
        );
      }
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);

    return () => window.removeEventListener("resize", checkScroll);
  }, [chatList]);

  const handleScroll = () => {
    if (listRef.current) {
      setIsScrolled(listRef.current.scrollTop > 0);

      // 현재 스크롤 위치와 최대 스크롤 값 비교 (오차 보정)
      const isBottom =
        Math.abs(
          listRef.current.scrollHeight -
            listRef.current.scrollTop -
            listRef.current.clientHeight
        ) < 5; // 5px 이하 차이면 바닥으로 간주

      setIsAtBottom(isBottom);
    }
  };

  const scrollToBottom = () => {
    if (listRef.current) {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const handleMessageRoomOpen = () => {
    setMessageRoom(!messageRoom);
  };

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
      {open && !messageRoom && (
        <section
          className="fixed bottom-28 right-7 w-96 bg-[#ffffff] z-50 shadow-lg rounded-[32px] p-6"
          style={{ height: `${menuHeight}px` }}
          aria-labelledby="message-section-title"
        >
          <header
            className="text-[#000000] pb-2 text-[20px] font-bold"
            id="message-section-title"
          >
            메시지
          </header>

          <Input
            height="h-[48px]"
            width="w-full"
            placeholder="메시지를 검색해보세요"
          />

          {/* 채팅 리스트 */}
          <ul
            ref={listRef}
            className="custom-scrollbar mt-4 space-y-3 overflow-auto"
            style={{ maxHeight: `${menuHeight - 140}px` }}
            onScroll={handleScroll}
          >
            {chatList.map((chat, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-3 w-full hover:bg-[#f1f1f1] rounded-lg cursor-pointer"
                onClick={handleMessageRoomOpen}
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
                      <span className="font-bold text-[#000000]">
                        {chat.name}
                      </span>
                      <span className="text-sm text-gray-400 ml-2">
                        {chat.time}
                      </span>
                    </div>

                    {chat.messageCount > 0 && (
                      <span className="bg-[#44361D] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {chat.messageCount}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-500">{chat.lastMessage}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* 스크롤 가능할 때만 표시 (맨 아래에 도달하면 숨김) */}
          {isScrollable && !isAtBottom && (
            <button
              onClick={scrollToBottom}
              className="absolute bottom-4 ml-[133px] transform -translate-x-1/2 bg-[#44361D] text-white px-4 py-2 rounded-full shadow-lg text-sm animate-bounce"
            >
              ↓ Scroll
            </button>
          )}
        </section>
      )}

      {open && messageRoom && (
        <section
          className="fixed bottom-28 right-7 w-96 bg-[#ffffff] z-50 shadow-lg rounded-[32px] p-6"
          style={{ height: `${menuHeight}px` }}
          aria-labelledby="message-section-title"
        >
          {/* 헤더: 뒤로가기 버튼 + 이름 */}
          <header
            className="items-center pb-2 text-[#000000] "
            id="message-section-title"
          >
            <div className="flex">
              <Image
                src={"/button/message-back.svg"}
                width={24}
                height={24}
                alt="뒤로가기"
                onClick={() => setMessageRoom(!messageRoom)}
                className="cursor-pointer"
              />

              <span className="ml-2 text-[18px] font-bold">홍길동</span>
            </div>
            <div className="flex mt-4">
              <Image
                src={"/layout/profile.svg"}
                width={70}
                height={70}
                alt="뒤로가기"
              />
              <div className="flex flex-col justify-center">
                <div className="ml-2 text-[14px] font-medium text-[#4F5055]">
                  홍길동
                </div>
                <div className="ml-2 text-[12px] font-medium text-[#76787F]">
                  SeedN / HR Team Lead
                </div>
              </div>
            </div>
          </header>

          {/* 채팅 영역 */}
          <div
            className="space-y-3 overflow-hidden h-[300px]"
            style={{ maxHeight: `${menuHeight - 140}px` }}
          >
            {selectedChat?.messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-end space-x-1 ${
                  message.sender === "김철수" ? "justify-end" : "justify-start"
                }`}
              >
                {/* 메시지 및 날짜 */}

                {message.sender === "김철수" && (
                  <div className="justify-end items-end">
                    <span className={`text-xs text-[#B9BABD]`}>
                      {/* {message.date} */}1 분전
                    </span>
                  </div>
                )}

                <div
                  className={`flex flex-col ${
                    message.sender === "김철수"
                      ? "bg-[#ECEBE8]"
                      : "bg-[#FAFAFA]"
                  } py-2 px-3 rounded-xl max-w-[70%] break-words`}
                >
                  <p className="text-sm text-[#4F5055]">{message.content}</p>
                </div>
                {message.sender !== "김철수" && (
                  <span className={`text-xs text-[#B9BABD]`}>
                    {/* {message.date} */}1 분전
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* 메시지 입력창 */}
          <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between">
            <textarea
              className="w-[85%] p-2 border border-[#EAEAEB] rounded-xl text-[14px] resize-none max-h-[82px] text-black bg-[#FAFAFA]"
              placeholder="메시지를 입력하세요..."
              rows={1}
              style={{ overflow: "hidden", resize: "none", outline: "none" }}
              onInput={(e) => {
                const textarea = e.target as HTMLTextAreaElement;
                textarea.style.height = "auto";
                textarea.style.height = `${textarea.scrollHeight}px`;
              }}
            />
            <div className="flex justify-end items-end">
              <button className="bottom-0 w-[40px] h-[40px] p-2 bg-[#44361D] text-white rounded-xl flex justify-center items-center cursor-pointer">
                <Image
                  src={"/button/message-send.svg"}
                  width={20}
                  height={20}
                  alt="보내기"
                />
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
