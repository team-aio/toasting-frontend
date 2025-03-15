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
              className={`p-4 rounded-lg space-y-2 w-full max-w-[700px] ${
                selectedPostId === post.id
                  ? "bg-white shadow-md"
                  : "bg-[#f9fafb] hover:bg-gray-200"
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
                  src={"/button/bookmark.svg"}
                  width={16}
                  height={16}
                  alt="프로필"
                />
              </div>
              {/* 제목 */}
              <h2 className="text-lg font-semibold text-gray-800">
                {post.title}
              </h2>
              {/* 내용 */}
              <p className="text-[#9D9FA4] text-sm">
                {truncateText(post.content, 150)}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 오른쪽 영역 */}
      {open && selectedPost && (
        <section
          className={`fixed top-0 right-0 h-full w-1/2 bg-[#ffffff] shadow-lg transform transition-transform duration-300 z-50 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
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
                {selectedPost.profile}
              </div>
              <button className="bg-[#44361D] rounded-full w-[80px] h-[100%] flex justify-center items-center text-white ml-4">
                팔로우
              </button>
              <div className="bg-white border border-[#e3e3e3] rounded-full w-[160px] h-[100%] flex justify-center items-center text-black ml-2">
                <Image
                  src={"/icon/arrow.svg"}
                  width={20}
                  height={20}
                  alt="화살표"
                />
                <span className="mr-2 text-[#76787F]">메시지 보내기</span>
              </div>
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
          <div className="h-[calc(100%-70px)] overflow-auto text-black px-4 pb-[50px]">
            <MDEditor.Markdown
              className="w-[100%] markdown-container"
              source={`
# Keycloak 활용한 SSO 구현: #5 SSO 연동 테스트

![Keycloak 설정 화면](https://s3-alpha-sig.figma.com/img/5fee/538f/b02f21338a77d35f2262addac2dee187?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KhyJTykokLj4t-LIm2XRxzPQMW4z4PNydrVS06cM6SXmoYyVEXDNkL4hZ4IKnV7sj-TnKKrcIY8PMpfF7TynQFSxlaWET2NQXCUestjGQ8~mTjoHcH37Vb-sU2H1UQ7HZBgT6Rgtf6KSq-COH6P7V6~UsB2xVwmzgQEh2WQ0QBkLuMeZIrcVDwzmopoOEIpzf03-P3Sj4rwqOkTGTZ2f7IbMFx23f-hkFwupZxt3dbNfB0uHBk10XnlT9Nk0qBeqP6LBvCxBt0BoygWc0N9792a9NpkEqUTGXIfafua57mWcsyGQ1TROunbeJDvcmCaC7WEQMcNJrOOS7YqGU3kxQg__)


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
        </section>
      )}
    </main>
  );
}
