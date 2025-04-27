import { useEffect, useRef, useState } from "react";
import Input from "./Input";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { sessionValid } from "@/utils/sessionValid";
import ChatItem from "./ChatItem";

interface ChatList {
  chatRoomId: string;
  profilePicture?: string;
  memberId: string;
  recentSendAt: string;
  unreadMessageCount: number;
  recentMessageContent: string;
  nickname: string;
}

export default function ChatList() {
  const [open] = useState(true);
  const [menuHeight, setMenuHeight] = useState(600);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const [, setIsScrolled] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [messageRoom, setMessageRoom] = useState(false);

  const listRef = useRef<HTMLUListElement>(null);
  const [chatList, setChatList] = useState<ChatList[]>([]);

  const [chatRoomNumber, setChatRoomNumber] = useState("");
  const [messageReceiver, setMessageReceiver] = useState("");

  const handleGetMessageRoomList = async () => {
    console.log("🦖🦖🦖🦖");

    const data = await sessionValid();

    if (data) {
      const { authorization } = data;
      console.log(authorization);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/v1/chat-rooms/messages?page=0&size=10&sort=id`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authorization}`,
            },
          }
        ); // API 호출 예제
        const data = await response.json();
        console.log(data.data.content); // 메시지 리스트 확인
        setChatList(data.data.content);
      } catch (error) {
        console.error("메시지 가져오기 실패:", error);
      }
    }
  };

  useEffect(() => {
    if (messageRoom) return; // ✅ 채팅창 열려있으면 polling 중단

    handleGetMessageRoomList(); // 첫 호출

    const intervalId = setInterval(handleGetMessageRoomList, 5000); // polling 시작
    return () => clearInterval(intervalId); // cleanup
  }, [messageRoom]);

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

  const handleMessageRoomOpen = (ChatRoomNumber: string, name: string) => {
    setMessageRoom(!messageRoom);
    setChatRoomNumber(ChatRoomNumber);
    setMessageReceiver(name);
  };

  const { status } = useSession();

  if (status === "unauthenticated") {
    return <></>;
  }

  return (
    <>
      <section
        className="fixed bottom-28 right-7 w-96 bg-[#ffffff] z-48 shadow-lg rounded-[32px] p-6"
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
          {chatList.map((chat) => (
            <li
              key={chat.chatRoomId}
              className="flex justify-between items-center p-3 w-full hover:bg-[#f1f1f1] rounded-lg cursor-pointer"
              onClick={() =>
                handleMessageRoomOpen(chat.chatRoomId, chat.nickname)
              }
            >
              <Image
                src={chat.profilePicture || "/layout/profile.svg"}
                width={70}
                height={70}
                alt="프로필"
                className="rounded-full"
              />
              <div className="w-[100%] items-center ml-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="font-bold text-[#000000]">
                      {chat.nickname}
                    </span>
                    <span className="text-sm text-gray-400 ml-2">
                      {new Date(chat.recentSendAt).toLocaleTimeString("ko-KR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>

                  {chat.unreadMessageCount > 0 && (
                    <span className="bg-[#44361D] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {chat.unreadMessageCount}
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-500">
                  {chat.recentMessageContent}
                </p>
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
      {/* ✅✅✅✅✅✅✅ */}
      {open && messageRoom && (
        <ChatItem
          messageRoom={messageRoom}
          setMessageRoom={setMessageRoom}
          menuHeight={menuHeight}
          chatRoomNumber={chatRoomNumber}
          messageReceiver={messageReceiver}
        />
      )}
    </>
  );
}
