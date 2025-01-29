"use client";

import Image from "next/image";

export default function PostHeader() {
  const handleClose = () => {
    window.close();
  };

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-gray-50">
      {/* 왼쪽 요소: 로고와 input */}
      <div className="flex items-center gap-4 flex-1 basis-1/2 pr-4">
        {/* 로고 */}
        <Image src={"/logo/logo.svg"} width={105} height={48} alt={""} />{" "}
      </div>

      {/* 닫기 버튼 */}
      <Image
        src={"/icon/close-btn.svg"}
        width={30}
        height={30}
        alt="닫기"
        className="cursor-pointer"
        onClick={handleClose}
      />
    </header>
  );
}
