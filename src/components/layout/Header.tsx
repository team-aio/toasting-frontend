import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4">
      {/* 왼쪽 요소들 */}
      <div className="flex-1">{/* 왼쪽에 들어갈 내용 */}</div>

      {/* 오른쪽 요소들 */}
      <div className="flex space-x-4 text-[#76787F] gap-8">
        <div className="flex flex-col items-center">
          <Image
            src={"/layout/feed.svg"}
            className="mb-1"
            width={24}
            height={24}
            alt={""}
          />
          <span>피드</span>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/layout/message.svg"}
            className="mb-1"
            width={24}
            height={24}
            alt={""}
          />{" "}
          <span>메시지</span>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/layout/notice.svg"}
            className="mb-1"
            width={24}
            height={24}
            alt={""}
          />{" "}
          <span>알림</span>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/layout/profile.svg"}
            className="mb-1"
            width={24}
            height={24}
            alt={""}
          />{" "}
          <span>프로필</span>
        </div>
      </div>
    </header>
  );
}
