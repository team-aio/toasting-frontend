import Image from "next/image";

export default function Page() {
  return (
    <main className="w-full">
      <header className="w-full h-[200px] flex items-center mt-[20px]">
        <section className="w-full h-[150px] ml-[130px]">
          <div className="flex items-center">
            <Image
              src={"/layout/profile.svg"}
              width={150}
              height={150}
              alt="프로필"
            />
            <div className="h-[150px] flex flex-col justify-center ml-[15px]">
              <h1 className="text-[30px] text-black font-bold py-1">NAME</h1>
              <nav className="flex justify-end items-center space-x-8 py-1">
                <div className="flex flex-col items-center">
                  <span className="text-black text-[13px]">게시물</span>
                  <strong className="text-black text-[20px] font-bold">
                    204
                  </strong>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-black text-[13px]">팔로워</span>
                  <strong className="text-black text-[20px] font-bold">
                    831.2만
                  </strong>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-black text-[13px]">팔로잉</span>
                  <strong className="text-black text-[20px] font-bold">
                    142
                  </strong>
                </div>
              </nav>
            </div>
          </div>
        </section>
      </header>

      <section className="bg-white h-[calc(100vh-304px)] flex flex-wrap justify-start space-x-4 pt-[30px]">
        <article className="w-[220px] h-16 flex items-center justify-between ml-[130px] rounded-[12px] border border-[#e3e3e3]">
          <div className="flex items-center justify-center px-4">
            <Image
              src={"/icon/velog.svg"}
              width={25}
              height={25}
              alt="벨로그"
            />
            <span className="text-black ml-2 text-[13px]">벨로그</span>
          </div>
          <div className="flex items-center justify-center px-4">
            <Image src={"/icon/link.svg"} width={25} height={25} alt="연동" />
            <span className="text-black ml-2 text-[13px]">연동</span>
          </div>
        </article>

        <article className="w-[220px] h-16 flex items-center justify-between ml-[130px] rounded-[12px] border border-[#e3e3e3]">
          <div className="flex items-center justify-center px-4">
            <Image
              src={"/icon/tistory.svg"}
              width={25}
              height={25}
              alt="티스토리"
            />
            <span className="text-black ml-2 text-[13px]">티스토리</span>
          </div>
          <div className="flex items-center justify-center px-4">
            <Image src={"/icon/link.svg"} width={25} height={25} alt="연동" />
            <span className="text-black ml-2 text-[13px]">연동</span>
          </div>
        </article>
      </section>
    </main>
  );
}
