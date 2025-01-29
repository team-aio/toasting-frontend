import Image from "next/image";

export default function Page() {
  return (
    <main className="w-full">
      <div className="w-full h-[200px] flex items-center mt-[20px]">
        <div className="w-full h-[150px]  ml-[130px]">
          <div className="flex items-center">
            <Image
              src={"/layout/profile.svg"}
              width={150}
              height={150}
              alt="프로필"
            />
            <div className="h-[150px] flex flex-col justify-center ml-[25px]">
              <div className="text-[22px] text-black font-bold py-4">Topy</div>
              <div className="flex justify-end items-center space-x-8 py-4">
                <div className="flex flex-col items-center">
                  <div className="text-black text-[13px]">게시물</div>
                  <span className="text-black text-[20px] font-bold">204</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-black text-[13px]">팔로워</div>
                  <span className="text-black text-[20px] font-bold">
                    831.2만
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-black text-[13px]">팔로잉</div>
                  <span className="text-black text-[20px] font-bold">142</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[calc(100vh-304px)] flex flex-wrap justify-start space-x-4 pt-[30px]">
        {/* 밸로그 */}
        <div className="w-[220px] h-16 flex items-center justify-between ml-[130px] rounded-[12px] border border-[#e3e3e3]">
          <div className="flex items-center justify-center px-4">
            <Image
              src={"/icon/velog.svg"}
              width={25}
              height={25}
              alt="프로필"
            />
            <div className="text-black ml-2 text-[13px]">벨로그</div>
          </div>
          <div className="flex items-center justify-center px-4">
            <Image src={"/icon/link.svg"} width={25} height={25} alt="프로필" />
            <div className="text-black ml-2 text-[13px]">연동</div>
          </div>
        </div>
        {/* 티스토리 */}
        <div className="w-[220px] h-16 flex items-center justify-between ml-[130px] rounded-[12px] border border-[#e3e3e3]">
          <div className="flex items-center justify-center px-4">
            <Image
              src={"/icon/tistory.svg"}
              width={25}
              height={25}
              alt="프로필"
            />
            <div className="text-black ml-2 text-[13px]">티스토리</div>
          </div>
          <div className="flex items-center justify-center px-4">
            <Image src={"/icon/link.svg"} width={25} height={25} alt="프로필" />
            <div className="text-black ml-2 text-[13px]">연동</div>
          </div>
        </div>
      </div>
    </main>
  );
}
