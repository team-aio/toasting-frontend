"use client";

import { truncateText } from "@/utils/truncateText";
import MDEditor from "@uiw/react-md-editor";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "@/styles/previewMarkdownStyles.css";

interface Post {
  id: number;
  profile: string;
  time: string;
  title: string;
  content: string;
}

export default function Page() {
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [bookmarkedPosts, setBookmarkedPosts] = useState<Map<number, boolean>>(
    new Map()
  );

  const handleBookmarkClick = async (postId: number) => {
    // try {
    //   const response = await fetch(`/api/bookmark/${postId}`, {
    //     method: "POST",
    //   });

    // if (response.ok) {
    setBookmarkedPosts((prev) => {
      const newMap = new Map(prev);
      newMap.set(postId, !prev.get(postId)); // 북마크 토글
      return newMap;
    });
    // }
    // } catch (error) {
    //   console.error("Bookmark API 요청 실패", error);
    // }
  };

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    setSelectedPostId(post.id);

    setOpen(true);
  };

  const posts: Post[] = [
    {
      id: 1,
      profile: "닉네임1",
      time: "30분 전",
      title: "첫 번째 게시글",
      content:
        "ArgoCD는 Kubernetes 환경에서 애플리케이션을 지속적으로 배포(CD, Continuous Delivery)하기 위한 GitOps 기반의 오픈 소스 도구입니다. Git 리포지토리를 단일 소스로 삼아 Kubernetes 클러스터의 상태를 선언적 방식으로 관리하며, 안정적이고 일관된 배포 환경을 제공합니다. 이번 가이드에서는 ArgoCD를 설치하고 Keycloak과 연동하여 SSO(Single Sign-On) 테스트를 수행해보겠습니다. 이를 통해 안전하고 효율적인 접근 관리 및 인증 환경을 구축할 수 있습니다.",
    },
    {
      id: 2,
      profile: "닉네임2",
      time: "1시간 전",
      title: "두 번째 게시글",
      content:
        "ArgoCD는 Kubernetes 환경에서 애플리케이션을 지속적으로 배포(CD, Continuous Delivery)하기 위한 GitOps 기반의 오픈 소스 도구입니다. Git 리포지토리를 단일 소스로 삼아 Kubernetes 클러스터의 상태를 선언적 방식으로 관리하며, 안정적이고 일관된 배포 환경을 제공합니다. 이번 가이드에서는 ArgoCD를 설치하고 Keycloak과 연동하여 SSO(Single Sign-On) 테스트를 수행해보겠습니다. 이를 통해 안전하고 효율적인 접근 관리 및 인증 환경을 구축할 수 있습니다.",
    },
    {
      id: 3,
      profile: "닉네임3",
      time: "2시간 전",
      title: "세 번째 게시글",
      content:
        "ArgoCD는 Kubernetes 환경에서 애플리케이션을 지속적으로 배포(CD, Continuous Delivery)하기 위한 GitOps 기반의 오픈 소스 도구입니다. Git 리포지토리를 단일 소스로 삼아 Kubernetes 클러스터의 상태를 선언적 방식으로 관리하며, 안정적이고 일관된 배포 환경을 제공합니다. 이번 가이드에서는 ArgoCD를 설치하고 Keycloak과 연동하여 SSO(Single Sign-On) 테스트를 수행해보겠습니다. 이를 통해 안전하고 효율적인 접근 관리 및 인증 환경을 구축할 수 있습니다.",
    },
    {
      id: 4,
      profile: "닉네임4",
      time: "3시간 전",
      title: "네 번째 게시글",
      content:
        "ArgoCD는 Kubernetes 환경에서 애플리케이션을 지속적으로 배포(CD, Continuous Delivery)하기 위한 GitOps 기반의 오픈 소스 도구입니다. Git 리포지토리를 단일 소스로 삼아 Kubernetes 클러스터의 상태를 선언적 방식으로 관리하며, 안정적이고 일관된 배포 환경을 제공합니다. 이번 가이드에서는 ArgoCD를 설치하고 Keycloak과 연동하여 SSO(Single Sign-On) 테스트를 수행해보겠습니다. 이를 통해 안전하고 효율적인 접근 관리 및 인증 환경을 구축할 수 있습니다.",
    },
    {
      id: 5,
      profile: "닉네임5",
      time: "4시간 전",
      title: "다섯 번째 게시글",
      content:
        "ArgoCD는 Kubernetes 환경에서 애플리케이션을 지속적으로 배포(CD, Continuous Delivery)하기 위한 GitOps 기반의 오픈 소스 도구입니다. Git 리포지토리를 단일 소스로 삼아 Kubernetes 클러스터의 상태를 선언적 방식으로 관리하며, 안정적이고 일관된 배포 환경을 제공합니다. 이번 가이드에서는 ArgoCD를 설치하고 Keycloak과 연동하여 SSO(Single Sign-On) 테스트를 수행해보겠습니다. 이를 통해 안전하고 효율적인 접근 관리 및 인증 환경을 구축할 수 있습니다.",
    },
    {
      id: 6,
      profile: "닉네임6",
      time: "5시간 전",
      title: "여섯 번째 게시글",
      content:
        "ArgoCD는 Kubernetes 환경에서 애플리케이션을 지속적으로 배포(CD, Continuous Delivery)하기 위한 GitOps 기반의 오픈 소스 도구입니다. Git 리포지토리를 단일 소스로 삼아 Kubernetes 클러스터의 상태를 선언적 방식으로 관리하며, 안정적이고 일관된 배포 환경을 제공합니다. 이번 가이드에서는 ArgoCD를 설치하고 Keycloak과 연동하여 SSO(Single Sign-On) 테스트를 수행해보겠습니다. 이를 통해 안전하고 효율적인 접근 관리 및 인증 환경을 구축할 수 있습니다.",
    },
    {
      id: 7,
      profile: "닉네임7",
      time: "6시간 전",
      title: "일곱 번째 게시글",
      content:
        "ArgoCD는 Kubernetes 환경에서 애플리케이션을 지속적으로 배포(CD, Continuous Delivery)하기 위한 GitOps 기반의 오픈 소스 도구입니다. Git 리포지토리를 단일 소스로 삼아 Kubernetes 클러스터의 상태를 선언적 방식으로 관리하며, 안정적이고 일관된 배포 환경을 제공합니다. 이번 가이드에서는 ArgoCD를 설치하고 Keycloak과 연동하여 SSO(Single Sign-On) 테스트를 수행해보겠습니다. 이를 통해 안전하고 효율적인 접근 관리 및 인증 환경을 구축할 수 있습니다.",
    },
    {
      id: 8,
      profile: "닉네임8",
      time: "7시간 전",
      title: "여덟 번째 게시글",
      content:
        "ArgoCD는 Kubernetes 환경에서 애플리케이션을 지속적으로 배포(CD, Continuous Delivery)하기 위한 GitOps 기반의 오픈 소스 도구입니다. Git 리포지토리를 단일 소스로 삼아 Kubernetes 클러스터의 상태를 선언적 방식으로 관리하며, 안정적이고 일관된 배포 환경을 제공합니다. 이번 가이드에서는 ArgoCD를 설치하고 Keycloak과 연동하여 SSO(Single Sign-On) 테스트를 수행해보겠습니다. 이를 통해 안전하고 효율적인 접근 관리 및 인증 환경을 구축할 수 있습니다.",
    },
    {
      id: 9,
      profile: "닉네임9",
      time: "8시간 전",
      title: "아홉 번째 게시글",
      content:
        "ArgoCD는 Kubernetes 환경에서 애플리케이션을 지속적으로 배포(CD, Continuous Delivery)하기 위한 GitOps 기반의 오픈 소스 도구입니다. Git 리포지토리를 단일 소스로 삼아 Kubernetes 클러스터의 상태를 선언적 방식으로 관리하며, 안정적이고 일관된 배포 환경을 제공합니다. 이번 가이드에서는 ArgoCD를 설치하고 Keycloak과 연동하여 SSO(Single Sign-On) 테스트를 수행해보겠습니다. 이를 통해 안전하고 효율적인 접근 관리 및 인증 환경을 구축할 수 있습니다.",
    },
    {
      id: 10,
      profile: "닉네임10",
      time: "9시간 전",
      title: "열 번째 게시글",
      content:
        "ArgoCD는 Kubernetes 환경에서 애플리케이션을 지속적으로 배포(CD, Continuous Delivery)하기 위한 GitOps 기반의 오픈 소스 도구입니다. Git 리포지토리를 단일 소스로 삼아 Kubernetes 클러스터의 상태를 선언적 방식으로 관리하며, 안정적이고 일관된 배포 환경을 제공합니다. 이번 가이드에서는 ArgoCD를 설치하고 Keycloak과 연동하여 SSO(Single Sign-On) 테스트를 수행해보겠습니다. 이를 통해 안전하고 효율적인 접근 관리 및 인증 환경을 구축할 수 있습니다.",
    },
  ];

  return (
    <main className="flex w-full h-fit overflow-auto">
      {/* 왼쪽 영역 */}
      <section className="w-1/2 p-4">
        <div className="space-y-4 ml-[130px]">
          {posts.map((post) => (
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
                  <div className="text-[#9D9FA4] text-sm">{post.profile}</div>
                  <span className="text-[#9D9FA4] text-sm">{post.time}</span>
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
                  onClick={() => handleBookmarkClick(post.id)}
                />
              </div>
              <div className="flex justify-between h-fit">
                <div className="flex flex-col mr-2">
                  {/* 제목 */}
                  <h2 className="text-[20px] font-semibold text-gray-800">
                    {post.title}
                  </h2>
                  {/* 내용 */}
                  <p className="text-[#9D9FA4] text-sm">
                    {truncateText(post.content, 150)}
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
        <section className="fixed right-0 top-0 h-full w-1/2 pl-4 pt-[96px]">
          <div className="mr-[130px] h-full bg-[#ffffff] rounded-tl-2xl rounded-tr-2xl shadow-xl border border-[#f0f0f0]">
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
                  {selectedPost.profile}
                </div>
                <button className="bg-[#44361D] rounded-full w-[80px] h-[100%] flex justify-center items-center text-white ml-4">
                  팔로우
                </button>
                {/* <div className="bg-white border border-[#e3e3e3] rounded-full w-[160px] h-[100%] flex justify-center items-center text-black ml-2">
                  <Image
                    src={"/icon/arrow.svg"}
                    width={20}
                    height={20}
                    alt="화살표"
                  />
                  <span className="mr-2 text-[#76787F]">메시지 보내기</span>
                </div> */}
              </div>
              {/* 두번째 요소 */}
              <div className="flex items-center w-[80px] justify-between">
                <Link href={"/post/1"} target="_blank">
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
            <div className="h-[calc(100%-70px)] overflow-auto">
              <div className="w-full aspect-w-1 aspect-h-1">
                <img
                  src="/dummy/thumbnail.png"
                  alt="thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-black p-4 pb-[50px]">
                <MDEditor.Markdown
                  className="w-[100%] markdown-container"
                  source={`
# Keycloak 활용한 SSO 구현: #5 SSO 연동 테스트

![Keycloak 설정 화면](https://s3-alpha-sig.figma.com/img/4557/3994/127406535db6c97cbf9534b0999f74b2?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=meq94w~b8upU7Ay7CusOoNu9eQOJQXUiRfDLmhib8tuxaQ~8Ue3XOAO8lqJ--PyNeDAtQNcMeJXdqrBsBN06jaW1jAyt3-LFpFofzw0Evef8yBAbXD~vyNZMm48q46QMS4NSiKP-tz3IwTt96Ppla9au90rIINzd8SHhUjZ3WHgBAURkYLMzXAgNaFXvVZJndNxWL4Ov9C3xd5GaYEStE6Rfrox2XkkKwoURsXObVpMIqwPhwudQWbtPe~VngqJ1rrgkIeJHJR8xg60O~hpqZxWrHsrJ9CsorIK-UMKbIh-TwtLOU8zWQYCU87CEKCT4BnA1XnYlX1pboAajYvVHXg__)


## 1. 개요
이 문서는 **Keycloak**을 활용한 **SSO(Single Sign-On) 연동 테스트**에 대한 가이드를 제공합니다.

## 2. Keycloak 설정
- Keycloak 관리 콘솔 접속
- 새로운 **Realm** 생성
- 클라이언트 추가 및 설정
- 사용자 생성 및 역할(Role) 설정

## 3. 애플리케이션 연동
\`\`\`javascript
const keycloak = new Keycloak({
  url: "https://keycloak.example.com",
  realm: "myrealm",
  clientId: "myapp",
});

keycloak.init({ onLoad: "login-required" }).then((auth) => {
  if (auth) {
    console.log("Authenticated!");
  }
});
\`\`\`

## 4. 테스트 및 검증
- 로그인 후 사용자 정보 확인
- SSO 로그아웃 테스트
- 다른 애플리케이션과 통합 확인

---

> 🚀 **Keycloak을 활용하면 안전하고 확장 가능한 SSO 시스템을 구축할 수 있습니다!**

  `}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
