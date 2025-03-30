import Image from "next/image";

type ChatItemProps = {
  messageRoom: boolean;
  setMessageRoom: (value: boolean) => void;
  menuHeight: number;
};

export default function ChatItem({
  messageRoom,
  setMessageRoom,
  menuHeight,
}: ChatItemProps) {
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
                message.sender === "김철수" ? "bg-[#ECEBE8]" : "bg-[#FAFAFA]"
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
  );
}
