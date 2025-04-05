import { sessionValid } from "@/utils/sessionValid";
import Image from "next/image";
import React from "react";
import { useEffect, useRef, useState } from "react";

type ChatItemProps = {
  messageRoom: boolean;
  setMessageRoom: (value: boolean) => void;
  menuHeight: number;
  chatRoomNumber: string;
  messageReceiver: string;
};

interface MessageList {
  id: number;
  chatRoomId: number;
  senderId: number;
  content: string;
  createdAt: string;
}

export default React.memo(function ChatItem({
  messageRoom,
  setMessageRoom,
  menuHeight,
  chatRoomNumber,
  messageReceiver,
}: ChatItemProps) {
  const [firstMount, setFirstMount] = useState(true);
  const [messageSendTrigger, setMessageSendTrigger] = useState(false);
  const prevMessageListRef = useRef<MessageList[]>([]);

  const [messageList, setMessageList] = useState<MessageList[]>([]);
  const [memberId, setMemberId] = useState<number | string | null>(null);
  const [messageInput, setMessageInput] = useState<string>("");

  const [isSending, setIsSending] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prevList = prevMessageListRef.current;
    const newList = messageList;

    // 길이가 다르거나 마지막 메시지 ID가 다르면 새 메시지가 온 것이라고 판단
    const isNewMessage =
      prevList.length !== newList.length ||
      (prevList.length > 0 &&
        newList.length > 0 &&
        prevList[prevList.length - 1].id !== newList[newList.length - 1].id);

    if (isNewMessage) {
      messagesEndRef.current?.scrollIntoView({
        behavior: firstMount ? "auto" : "smooth",
      });
      // 채팅방 리스트에서 읽음 표시 되도록
      initReadTrigger();

      if (firstMount) {
        setTimeout(() => {
          setFirstMount(false);
        }, 2000);
      }
    }

    // 항상 최신 메시지 리스트 저장
    prevMessageListRef.current = newList;
  }, [messageList]);

  const initReadTrigger = async () => {
    const data = await sessionValid();
    if (!data) return;

    const { authorization, memberId } = data;
    if (memberId) {
      setMemberId(memberId);
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/v1/chat-rooms/${chatRoomNumber}/messages`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authorization}`,
          },
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("메시지 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    initReadTrigger();
  }, []);

  const fetchMessages = async () => {
    const data = await sessionValid();
    if (!data) return;

    const { authorization, memberId } = data;
    if (memberId) {
      setMemberId(memberId);
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/v1/chat-rooms/${chatRoomNumber}/messages?page=0&size=1000000&sort=id`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authorization}`,
          },
        }
      );
      const result = await response.json();
      setMessageList(result.data.content);
    } catch (error) {
      console.error("메시지 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    fetchMessages();

    const intervalId = setInterval(fetchMessages, 5000);
    return () => clearInterval(intervalId);
  }, [chatRoomNumber, messageSendTrigger]);

  const handleSendMessage = async () => {
    if (isSending || !messageInput.trim() || !memberId) return;

    setIsSending(true); // 전송 중으로 설정

    const data = await sessionValid();
    if (!data) {
      setIsSending(false);
      return;
    }

    const { authorization } = data;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/v1/chat-rooms/${chatRoomNumber}/messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authorization}`,
          },
          body: JSON.stringify({
            senderId: memberId,
            content: messageInput,
          }),
        }
      );

      if (response.ok) {
        setMessageInput("");
        fetchMessages();
        setMessageSendTrigger(!messageSendTrigger);
      }
    } catch (error) {
      console.error("메시지 전송 실패:", error);
    } finally {
      setIsSending(false); // 전송 끝나면 다시 false
    }
  };

  return (
    <section
      className="fixed bottom-28 right-7 w-96 bg-white z-50 shadow-lg rounded-[32px] p-6"
      style={{ height: `${menuHeight}px` }}
      aria-labelledby="message-section-title"
    >
      {/* 헤더 */}
      <header className="pb-2 text-black" id="message-section-title">
        <div className="flex">
          <Image
            src="/button/message-back.svg"
            width={24}
            height={24}
            alt="뒤로가기"
            onClick={() => setMessageRoom(!messageRoom)}
            className="cursor-pointer"
          />
          <span className="ml-2 text-[18px] font-bold">{messageReceiver}</span>
        </div>
        <div className="flex mt-4">
          <Image
            src="/layout/profile.svg"
            width={70}
            height={70}
            alt="프로필"
          />
          <div className="flex flex-col justify-center">
            <div className="ml-2 text-[14px] font-medium text-[#4F5055]">
              {messageReceiver}
            </div>
            <div className="ml-2 text-[12px] font-medium text-[#76787F]">
              Toasting / User
            </div>
          </div>
        </div>
      </header>
      {/* 채팅 메시지 */}
      <div
        className="space-y-3 overflow-y-scroll h-[346px] scrollbar-hide border-b border-[#eeeeee]"
        style={{ maxHeight: `${menuHeight - 140}px` }}
      >
        {messageList.map((message) => (
          <div
            key={message.id}
            className={`flex items-end space-x-1 ${
              Number(memberId) === message.senderId
                ? "justify-end"
                : "justify-start"
            }`}
          >
            {Number(memberId) === message.senderId && (
              <div className="justify-end items-end">
                <span className="text-xs text-[#B9BABD]">
                  {" "}
                  {/* {message.createdAt} */}{" "}
                </span>
              </div>
            )}
            <div
              className={`flex flex-col ${
                Number(memberId) === message.senderId
                  ? "bg-[#ECEBE8]"
                  : "bg-[#FAFAFA]"
              } py-2 px-3 rounded-xl max-w-[70%] break-words`}
            >
              <p className="text-sm text-[#4F5055]">{message.content}</p>
            </div>
            {Number(memberId) !== message.senderId && (
              <span className="text-xs text-[#B9BABD]">
                {" "}
                {/* {message.createdAt} */}
              </span>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* 메시지 입력창 */}
      <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between">
        <textarea
          className="w-[85%] p-2 border border-[#EAEAEB] rounded-xl text-[14px] resize-none max-h-[82px] text-black bg-[#FAFAFA]"
          placeholder="메시지를 입력하세요..."
          rows={1}
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          onInput={(e) => {
            const textarea = e.target as HTMLTextAreaElement;
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
          }}
          style={{ overflow: "hidden", resize: "none", outline: "none" }}
        />
        <button
          className="w-[40px] h-[40px] p-2 bg-[#44361D] text-white rounded-xl flex justify-center items-center cursor-pointer"
          onClick={handleSendMessage}
        >
          <Image
            src={"/button/message-send.svg"}
            width={20}
            height={20}
            alt="보내기"
          />
        </button>
      </div>
    </section>
  );
});
