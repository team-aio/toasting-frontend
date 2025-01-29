"use client";

import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
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
      <div className="w-1/2 p-4">
        <div className="space-y-4 ml-[130px]">
          {posts.map((post) => (
            <div
              key={post.id}
              className="py-4 rounded-lg space-y-2 w-full max-w-[700px]" // 부모 너비를 따르고, 최대 700px
              onClick={() => handlePostClick(post)} // 클릭 시 해당 게시글 설정
            >
              {/* 프로필과 시간 */}
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
              {/* 제목 */}
              <h2 className="text-lg font-semibold text-gray-800">
                {post.title}
              </h2>
              {/* 내용 */}
              <p className="text-[#9D9FA4] text-sm">
                {truncateText(post.content, 150)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 오른쪽 영역 */}
      <div className="fixed top-0 right-0 w-1/2 h-[calc(100vh-84px)] flex mt-[84px] p-4 z-50">
        {open && selectedPost && (
          <div
            className={`fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg transform transition-transform duration-300 p-4 ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {" "}
            {/* 미리보기의 헤더 */}
            <div className="flex items-center justify-between h-[40px]">
              {/* 첫번재 요소 */}
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
                <div className="bg-[#44361D] rounded-full w-[80px] h-[100%] flex justify-center items-center text-white ml-4">
                  팔로우
                </div>
                <div className="border border-[#e3e3e3] rounded-full w-[160px] h-[100%] flex justify-center items-center text-black ml-2">
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
              <div className="flex items-center w-[80px] justify-between ">
                <Link href={"/post/1"} target="_blank">
                  <Image
                    src={"/icon/expand-btn.svg"}
                    width={30}
                    height={30}
                    alt="화살표"
                  />
                </Link>
                <Image
                  src={"/icon/close-btn.svg"}
                  width={30}
                  height={30}
                  alt="화살표"
                  onClick={() => setOpen(false)}
                />
              </div>
            </div>
            <div className="h-[calc(100%-48px)] rounded-bl-[32px] rounded-br-[32px] overflow-auto text-black mt-4">
              {selectedPost.content}
              {selectedPost.content}
              {selectedPost.content}
              {selectedPost.content}
              {selectedPost.content}
              {selectedPost.content}
              {selectedPost.content}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
