import Header from "@/components/layout/Header";
import Input from "@/components/ui/Input";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center h-[calc(100vh-84px)]">
        {/* 여기서 높이 84니 검색어 기준으로 가운데 필요해서 mb 수정이 일어남 */}
        <div className="h-[139px] w-[893px] flex flex-col justify-between items-center mb-[158px]">
          <div className="flex justify-center">
            <Image
              src={"/logo/logo.svg"}
              className="mb-1"
              width={150}
              height={48}
              alt={""}
            />
            <div className="text-[#b9babd] flex justify-center items-center text-center">
              : {"{ 코드 밖의 세상을 여는 발견 }"}
            </div>
          </div>
          <Input
            height="h-[48px]"
            width="w-full"
            placeholder="검색어를 입력해주세요"
            isMainSearch
          />
        </div>
      </main>
    </>
  );
}
