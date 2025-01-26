import React from "react";
import { FaSearch } from "react-icons/fa"; // 돋보기 아이콘 임포트

interface InputProps {
  height?: string; // 높이
  width?: string; // 넓이
  placeholder?: string; // placeholder 텍스트
}

export default function Input({ height, width, placeholder }: InputProps) {
  return (
    <div
      className={`${height} ${width} text-[#76787F] bg-[#f4f5f5] border-[1px] border-[#eaeaeb] rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-1 focus:ring-[#d3d3d3] relative`}
    >
      <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-[#B9BABD]" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-full bg-transparent border-none outline-none px-3"
      />
    </div>
  );
}
