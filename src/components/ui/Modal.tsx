"use client";

import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  isType: "velog" | "tistory";
}

export default function Modal({ isOpen, onClose, isType }: ModalProps) {
  const [inputValue, setInputValue] = useState("");

  if (!isOpen) return null;

  const title = isType === "velog" ? "벨로그 연동" : "티스토리 연동";
  const description =
    isType === "velog"
      ? "* 벨로그 아이디를 입력해주세요"
      : "* 티스토리 아이디를 입력해주세요";

  const url = isType === "velog" ? "velog" : "tistory";

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[999]"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-[32px] shadow-lg w-[500px]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-[17px] text-black font-bold mb-2">{title}</h2>
        <p className="text-black">{description}</p>
        <div className="flex justify-between items-center text-black py-4">
          <p>https://</p>
          <input
            className="outline-none px-2 py-2 rounded-md border border-gray-300 w-full mx-2"
            placeholder="ID를 입력해주세요"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // ✅ 입력값 업데이트
          />
          <p>.{url}.com/rss</p>
        </div>

        <div className="flex justify-between mt-4 space-x-2">
          <button
            className="px-4 py-2 bg-[#e3e3e3] text-black rounded-[7px] w-[48%]"
            onClick={onClose}
          >
            취소
          </button>
          <button
            className={`px-4 py-2 text-black rounded-[7px] w-[48%]  ${
              inputValue ? "bg-[#44361D] text-white" : "bg-[#e3e3e3]"
            }`}
            disabled={!inputValue} // ✅ 입력 없으면 비활성화
          >
            연동하기
          </button>
        </div>
      </div>
    </div>
  );
}
