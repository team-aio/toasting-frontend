import Link from "next/link";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-50">
      {/* 왼쪽 요소: 로고와 input */}
      <div className="flex items-center gap-4 flex-1 basis-1/2"></div>

      {/* 오른쪽 요소 */}
      <div className="flex justify-end items-center flex-1 basis-1/2 space-x-8 text-[#76787F]">
        <div className="flex flex-col items-center">
          <Image
            src={"/layout/feed.svg"}
            className="mb-1"
            width={24}
            height={24}
            alt="피드"
          />
          <span>피드</span>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/layout/message.svg"}
            className="mb-1"
            width={24}
            height={24}
            alt="메시지"
          />
          <span>메시지</span>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={"/layout/notice.svg"}
            className="mb-1"
            width={24}
            height={24}
            alt="알림"
          />
          <span>알림</span>
        </div>
        <Link href={"/profile"} className="flex flex-col items-center">
          <Image
            src={"/layout/profile.svg"}
            className="mb-1"
            width={24}
            height={24}
            alt="프로필"
          />
          <span>프로필</span>
        </Link>
      </div>
    </header>
  );
}
