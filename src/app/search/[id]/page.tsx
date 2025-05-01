"use client";

import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import { useEffect, useState } from "react";
import { sessionValid } from "@/utils/sessionValid";
import { useParams } from "next/navigation";
import PreviewModal from "@/components/ui/PreviewModal";
import Skeleton from "@/components/ui/Skeleton"; // 추가된 부분

interface Post {
  id: number;
  sourceType: string;
  postedAt: string;
  shortContent: string;
  title: string;
  likeCount: number;
  memberId: number;
  nickname: string;
  profilePicture: string;
}

export default function Page() {
  const [open, setOpen] = useState(false);
  const [postList, setPostList] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [bookmarkedPosts] = useState<Map<number, boolean>>(new Map());
  const [loading, setLoading] = useState(false);

  const keyword = useParams().id;
  console.log(keyword);

  const getSearchPostList = async () => {
    setLoading(true);
    const data = await sessionValid();
    if (!data) return;

    const { authorization } = data;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/v1/posts/search?page=0&size=100&sort=postedAt&keyword=${keyword}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authorization}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setPostList(data.data.content);
      setLoading(false);
    } catch (error) {
      console.error("메시지 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    getSearchPostList();
  }, []);

  const handleBookmarkClick = async (memberId: number) => {
    try {
      const response = await fetch(`/v1/follow/${memberId}`, {
        method: "POST",
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Bookmark API 요청 실패", error);
    }
  };

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    setSelectedPostId(post.id);
    setOpen(true);
  };

  return (
    <main className="flex w-full h-fit overflow-auto">
      {/* 왼쪽 영역 */}
      <section className="w-1/2 p-4">
        <div className="space-y-4 ml-[130px]">
          {loading
            ? // 로딩 중일 때 Skeleton 컴포넌트를 표시
              [...Array(5)].map((_, index) => <Skeleton key={index} />)
            : postList
                .slice(0)
                .reverse()
                .map((post) => (
                  <article
                    key={post.id}
                    className={`p-4 rounded-lg space-y-4 w-full cursor-pointer ${
                      selectedPostId === post.id
                        ? "bg-white shadow-md border border-[#f0f0f0] box-border"
                        : "bg-[#f9fafb] hover:bg-[#f1f1f1]"
                    }`}
                    onClick={() => handlePostClick(post)}
                  >
                    {/* 프로필과 시간 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Image
                          src={"/layout/profile.svg"}
                          width={24}
                          height={24}
                          alt="프로필"
                        />
                        <div className="text-[#9D9FA4]">{post.nickname} • </div>
                        <span className="text-[#9D9FA4] text-sm">
                          {new Date(post.postedAt).toLocaleString("ko-KR", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                            timeZone: "Asia/Seoul",
                          })}
                        </span>
                      </div>
                      <Image
                        src={
                          bookmarkedPosts.get(post.id)
                            ? "/button/bookmark-valid.svg"
                            : "/button/bookmark.svg"
                        }
                        width={16}
                        height={16}
                        alt="북마크"
                        className="cursor-pointer"
                        onClick={() => handleBookmarkClick(post.memberId)}
                      />
                    </div>
                    <div className="flex justify-between h-fit">
                      <div className="flex flex-col mr-2 max-w-[calc(100%-120px)]">
                        {/* 제목 */}
                        <h2 className="text-[20px] font-semibold text-gray-800 break-words">
                          {post.title}
                        </h2>
                        {/* 내용 */}
                        <p className="text-[#9D9FA4] text-sm break-words">
                          {truncateText(post.shortContent, 150)}
                        </p>
                      </div>
                      <div className="flex-shrink-0 w-[110px] h-[110px] ml-2">
                        <img
                          src="/dummy/thumbnail.png"
                          alt="thumbnail"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </article>
                ))}
        </div>
      </section>

      {/* 오른쪽 영역 */}
      {open && selectedPost && (
        <PreviewModal selectedPostId={selectedPostId} setOpen={setOpen} />
      )}
    </main>
  );
}
