"use client";

import MDEditor from "@uiw/react-md-editor";
import Image from "next/image";
import "@/styles/postMarkdownStyles.css";

export default function Page() {
  return (
    <main className="w-[90%] xl:w-[750px] mx-[20px] flex flex-col justify-center items-center h-fit pb-[100px]">
      <article className="w-full max-w-[100%] pt-10">
        <h1 className="text-[32px] font-bold mt-2 xl:mt-4 text-[#4F5055]">
          Keycloak 활용한 SSO 구현 : #5 SSO 연동 테스트: Keycloak과
          애플리케이션의 완벽한 통합
        </h1>
        <div className="flex items-center h-full">
          <div className="flex items-center py-10">
            <Image
              src={"/layout/profile.svg"}
              width={24}
              height={24}
              alt="프로필"
            />
            <div className="text-[#9D9FA4] text-sm">프로필</div>
            <span className="text-[#9D9FA4] text-sm">시간</span>
          </div>
        </div>
      </article>
      <div className="w-[100%] flex justify-center" data-color-mode="light">
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
    </main>
  );
}
