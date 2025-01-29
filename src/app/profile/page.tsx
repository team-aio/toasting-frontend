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
      <div className="bg-white h-[calc(100vh-304px)]">배경</div>
    </main>
  );
}
