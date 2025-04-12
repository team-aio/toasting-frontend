"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";

interface InputProps {
  height?: string; // 높이
  width?: string; // 넓이
  placeholder?: string; // placeholder 텍스트
  isMainSearch?: boolean; // 추가된 prop, 기본값은 true
}

export default function Input({
  height,
  width,
  placeholder,
  isMainSearch = false,
}: InputProps) {
  const params = useParams().id as string;
  const decoded = decodeURIComponent(params);
  console.log(decoded); // "한글"
  const [searchTerm, setSearchTerm] = useState(
    decoded !== "undefined" ? decoded : ""
  );

  const router = useRouter();

  // 메인 search의 경우
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isMainSearch) {
      router.push(`/search/${searchTerm}`);
    }
  };

  return (
    <div
      className={`${height} ${width} max-w-[calc(50vw-105px)] flex text-[#76787F] bg-[#f4f5f5] border-[1px] border-[#eaeaeb] rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#d3d3d3] relative`}
    >
      <Image src={"/icon/search.svg"} width={24} height={24} alt="프로필" />
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full h-full bg-transparent border-none outline-none px-3"
      />
    </div>
  );
}
