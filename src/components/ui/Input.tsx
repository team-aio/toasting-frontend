"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";

// Input 컴포넌트에 사용할 Props 타입 정의
interface InputProps {
  height?: string; // 입력창 높이
  width?: string; // 입력창 너비
  placeholder?: string; // placeholder 텍스트
  isMainSearch?: boolean; // 메인 검색 여부 (기본값: false)
}

// Input 컴포넌트
export default function Input({
  height,
  width,
  placeholder,
  isMainSearch = false,
}: InputProps) {
  const params = useParams().id as string; // URL 파라미터(id) 가져오기
  const decoded = decodeURIComponent(params); // 디코딩 (ex: 한글 등)

  const [searchTerm, setSearchTerm] = useState(
    decoded !== "undefined" ? decoded : ""
  );
  const [isTyping, setIsTyping] = useState(false); // 타이핑 중 여부
  const [isHovering, setIsHovering] = useState(false); // hover 상태

  const router = useRouter(); // next/navigation 훅

  // 메인 검색창에서 Enter 키로 검색 요청
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(searchTerm);
    if (!searchTerm) {
      return;
    }
    if (e.key === "Enter" && isMainSearch) {
      router.push(`/search/${searchTerm}`);
    }
  };

  // 메인 검색창에서 검색 아이콘 클릭 시 검색 요청
  const handleClickSearch = () => {
    if (!searchTerm) {
      return;
    }
    router.push(`/search/${searchTerm}`);
  };

  // 입력값 변경 처리 (글자수 225자 제한)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 225) {
      setSearchTerm(value);
      setIsTyping(true); // 입력 중
      // 짧은 시간 뒤 타이핑 false로 (scale 효과를 끊기 위해)
      setTimeout(() => setIsTyping(false), 150);
    }
  };

  return (
    <div
      className={`${height} ${width} max-w-[calc(50vw-105px)] flex justify-between items-center text-[#76787F] bg-[#f4f5f5] border-[1px] border-[#eaeaeb] rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#d3d3d3] relative`}
    >
      {/* 검색 아이콘 */}
      <div
        className={`transition-transform duration-150 cursor-pointer ${
          isTyping ? "scale-110" : "scale-100"
        }`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={handleClickSearch} // 클릭 시 검색
      >
        <Image
          src={isHovering ? "/icon/search-hover.svg" : "/icon/search.svg"}
          width={24}
          height={24}
          alt="검색 아이콘"
        />
      </div>

      {/* 입력창 */}
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-[85%] h-full bg-transparent border-none outline-none px-3"
      />

      {/* 남은 글자 수 표시 */}
      {isMainSearch && (
        <div className="text-xs text-gray-400 mt-1 ml-2">
          {250 - searchTerm.length} / 250
        </div>
      )}
    </div>
  );
}
