// import { sessionValid } from "@/utils/sessionValid";
import Image from "next/image";
import Link from "next/link";
// import MDEditor from "@uiw/react-md-editor";
import "@/styles/previewMarkdownStyles.css";
import { useEffect, useRef, useState } from "react";
import { sessionValid } from "@/utils/sessionValid";
// import DOMPurify from "dompurify";

type PreviewModalProps = {
  selectedPostId: number | null;
  setOpen: (value: boolean) => void;
};

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

export default function PreviewModal({
  selectedPostId,
  setOpen,
}: PreviewModalProps) {
  const [postInfo, setPostInfo] = useState<PostInfo | null>(null); // 객체로 변경

  const getPreviewPostData = async () => {
    const data = await sessionValid();
    if (!data) return;

    const { authorization } = data;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/v1/posts/${selectedPostId}`,
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
    if (selectedPostId) {
      getPreviewPostData();
    }
  }, [selectedPostId]);

  const hoverRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const element = scrollRef.current;
    if (!element) return;

    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const clientHeight = element.clientHeight;

    const isBottom = scrollHeight <= scrollTop + clientHeight + 1;

    if (isBottom) {
      // 스크롤 위치를 바로 위로 되돌리기
      element.scrollTop = scrollHeight - clientHeight - 1;
    }
  };

  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);
      return () => {
        element.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  // selectedPostId가 바뀔 때 스크롤 제일 위로 이동
  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      element.scrollTop = 0;
    }
  }, [selectedPostId]);
  return (
    <section className="fixed right-0 top-0 h-full w-1/2 pl-4 pt-[96px] overflow-x-hidden">
      <div
        className="mr-[130px] h-full bg-[#ffffff] rounded-tl-2xl rounded-tr-2xl shadow-xl border border-[#f0f0f0]"
        ref={hoverRef}
      >
        {/* 미리보기의 헤더 */}
        <header className="flex items-center justify-between h-[70px] p-[15px]">
          {/* 첫번째 요소 */}
          <div className="flex items-center h-full">
            <Image
              src={"/layout/profile.svg"}
              width={40}
              height={40}
              alt="프로필"
            />
            <div className="text-[#44361D] text-[17px] ml-2">
              {/* {selectedPost.profilePicture} */}
            </div>
            <button className="bg-[#44361D] rounded-full w-[80px] h-[100%] flex justify-center items-center text-white ml-4">
              팔로우
            </button>
          </div>
          {/* 두번째 요소 */}
          <div className="flex items-center w-[80px] justify-between">
            <Link href={`/post/${selectedPostId}`} target="_blank">
              <Image
                src={"/icon/expand-btn.svg"}
                width={30}
                height={30}
                alt="화살표"
              />
            </Link>
            <button onClick={() => setOpen(false)} aria-label="닫기">
              <Image
                src={"/icon/close-btn.svg"}
                width={30}
                height={30}
                alt="닫기 버튼"
              />
            </button>
          </div>
        </header>
        {/* 이쪽에 이제 썸네일 적용하자 */}
        <div className="h-[calc(100%-70px)] overflow-auto" ref={scrollRef}>
          <div className="w-full aspect-w-1 aspect-h-1">
            <img
              src="/dummy/thumbnail.png"
              alt="thumbnail"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            id="tag-content"
            className="text-black p-4 pb-[50px]"
            dangerouslySetInnerHTML={{ __html: postInfo?.content || "" }}
          >
            {/* <MDEditor.Markdown
              className="w-[100%] markdown-container"
              source={postInfo?.content} // 옵셔널 체이닝 적용
            /> */}
            {/* {postInfo?.content} */}
          </div>
        </div>
      </div>
    </section>
  );
}
