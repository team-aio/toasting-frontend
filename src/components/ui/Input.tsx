import React from "react";
import Image from "next/image";

interface InputProps {
  height?: string; // 높이
  width?: string; // 넓이
  placeholder?: string; // placeholder 텍스트
}

export default function Input({ height, width, placeholder }: InputProps) {
  return (
    <div
      className={`${height} ${width} flex text-[#76787F] bg-[#f4f5f5] border-[1px] border-[#eaeaeb] rounded-full px-4 py-2  focus:outline-none focus:ring-1 focus:ring-[#d3d3d3] relative`}
    >
      <Image src={"/icon/search.svg"} width={24} height={24} alt="프로필" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-full bg-transparent border-none outline-none px-3"
      />
    </div>
  );
}
