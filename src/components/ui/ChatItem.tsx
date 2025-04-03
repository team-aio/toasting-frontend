import { sessionValid } from '@/utils/sessionValid';
import Image from "next/image";
import { useEffect, useState } from 'react';

type ChatItemProps = {
  messageRoom: boolean;
  setMessageRoom: (value: boolean) => void;
  menuHeight: number;
  chatRoomNumber:string;
  messageReceiver:string;
};

interface MessageList {
  id: number;
  chatRoomId:number;
  senderId: number;
  content:string;
  createdAt: string;
}


export default function ChatItem({
  messageRoom,
  setMessageRoom,
  menuHeight,
  chatRoomNumber,
  messageReceiver,
}: ChatItemProps) {
 
  

  const [messageList, setMessageList] = useState<MessageList[]>([])

  const [memberId, setMemberId] = useState<any>()

  const handleGetMessageList = async () => {
    const data = await sessionValid();

    if (data) {
      const { authorization, memberId } = data;
      console.log(authorization);
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
        ); // API 호출 예제
        const data = await response.json();
        console.log(data); 
        setMessageList(data.data.content)
        setMemberId(memberId)

      } catch (error) {
        console.error("메시지 가져오기 실패:", error);
      }
    }
  };

  useEffect(() => {
    handleGetMessageList();
  }, []);
  
console.log(memberId)
  return (
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

          <span className="ml-2 text-[18px] font-bold">{messageReceiver}</span>
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
              {messageReceiver}
            </div>
            <div className="ml-2 text-[12px] font-medium text-[#76787F]">
              Toasting / Developer
            </div>
          </div>
        </div>
      </header>

      {/* 채팅 영역 */}
      <div
        className="space-y-3 overflow-hidden h-[300px]"
        style={{ maxHeight: `${menuHeight - 140}px` }}
      >
        {messageList?.map((message, index) => (
          <div
            key={index}
            className={`flex items-end space-x-1 ${
              Number(memberId) === message.senderId ? "justify-end" : "justify-start"
            }`}
          >
            {/* 메시지 및 날짜 */}
            {Number(memberId) === message.senderId && (
              <div className="justify-end items-end">
                <span className={`text-xs text-[#B9BABD]`}>
                  {/* {message.date} */}
                </span>
              </div>
            )}
            <div
              className={`flex flex-col ${
                Number(memberId) === message.senderId ? "bg-[#ECEBE8]" : "bg-[#FAFAFA]"
              } py-2 px-3 rounded-xl max-w-[70%] break-words`}
            >
              <p className="text-sm text-[#4F5055]">{message.content}</p>
            </div>
            {Number(memberId) !== message.senderId && (
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
  );
}
