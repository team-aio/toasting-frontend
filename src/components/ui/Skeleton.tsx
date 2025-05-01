export default function Skeleton() {
  return (
    <div className="p-4 rounded-lg space-y-4 w-full bg-[#f9fafb] animate-pulse">
      {/* 프로필과 시간 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="w-20 h-4 bg-gray-300 rounded"></div>
          <div className="w-32 h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="w-4 h-4 bg-gray-300 rounded"></div>
      </div>

      {/* 본문 */}
      <div className="flex justify-between h-fit">
        <div className="flex flex-col mr-2 space-y-2 flex-1 min-w-0">
          <div className="w-full max-w-[200px] h-6 bg-gray-300 rounded"></div>{" "}
          {/* 제목 */}
          <div className="w-full h-4 bg-gray-300 rounded"></div> {/* 내용 */}
          <div className="w-3/4 h-4 bg-gray-300 rounded"></div> {/* 내용 */}
        </div>
        <div className="flex-shrink-0 w-[110px] h-[110px] ml-2 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
}
