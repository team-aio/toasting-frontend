"use client";

import MDEditor from "@uiw/react-md-editor";
import Image from "next/image";
import "@/styles/postMarkdownStyles.css";
import { useEffect, useState } from "react";
import { sessionValid } from "@/utils/sessionValid";
import { useParams } from "next/navigation";

interface PostInfo {
  id: number;
  sourceType: string;
  postedAt: string;
  content: string;
  url: string;
  title: string;
  likeCount: number;
  memberId: number;
  nickname: string;
  profilePicture: string;
}

export default function Page() {
  const postId = useParams().id;
  const [postInfo, setPostInfo] = useState<PostInfo | null>(null); // 객체로 변경

  const getPreviewPostData = async () => {
    const data = await sessionValid();
    if (!data) return;

    const { authorization } = data;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/v1/posts/${postId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authorization}`,
          },
        }
      );
      const result = await response.json();
      setPostInfo(result.data); // 단일 객체로 저장
    } catch (error) {
      console.error("상세페이지 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    getPreviewPostData();
  }, []);

  return (
    <main className="w-[90%] xl:w-[750px] mx-[20px] flex flex-col justify-center items-center h-fit pb-[100px]">
      <article className="w-full max-w-[100%] pt-10">
        <h1 className="text-[32px] font-bold mt-2 xl:mt-4 text-[#4F5055]">
          {postInfo?.title}
        </h1>
        <div className="flex items-center h-full">
          <div className="flex items-center py-10">
            <Image
              src={"/layout/profile.svg"}
              width={24}
              height={24}
              alt="프로필"
            />
            <div className="text-[#9D9FA4] text-sm">
              {postInfo?.profilePicture}
            </div>
            <span className="text-[#9D9FA4] text-sm">
              {postInfo?.postedAt
                ? new Date(postInfo.postedAt).toLocaleString("ko-KR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    timeZone: "Asia/Seoul",
                  })
                : "날짜 없음"}
            </span>
          </div>
        </div>
      </article>
      <div className="w-[100%] flex justify-center" data-color-mode="light">
        <MDEditor.Markdown
          className="w-[100%] markdown-container"
          source={postInfo?.content}
        />
      </div>
    </main>
  );
}
