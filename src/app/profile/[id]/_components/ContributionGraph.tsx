"use client"; // CSR 환경에서만 렌더링

import { useEffect, useState } from "react";

type ActivityDay = {
  date: string; // YYYY-MM-DD
  count: number;
};

type Props = {
  year: number;
};

export default function ContributionGraph({ year }: Props) {
  const [data, setData] = useState<ActivityDay[]>([]);

  useEffect(() => {
    const start = new Date(`${year}-01-01`);
    const dummyData: ActivityDay[] = Array.from({ length: 365 }, (_, i) => {
      const date = new Date(start);
      date.setDate(date.getDate() + i);
      return {
        date: date.toISOString().split("T")[0],
        count: Math.floor(Math.random() * 40), // CSR에서만 랜덤 생성
      };
    });
    setData(dummyData);
  }, [year]);

  if (data.length === 0) return null;

  const startDate = new Date(`${year}-01-01`);
  const endDate = new Date(`${year}-12-31`);
  const weeks = getWeeksInYear(startDate, endDate, data);

  return (
    <div className="flex rounded-2xl border bg-white p-6 justify-between">
      <div className="flex flex-col justify-between items-center gap-4">
        <select className="border rounded px-2 py-3 text-sm w-full">
          <option>{year}년</option>
        </select>
        <div className="flex justify-center items-center gap-2 w-[230px] bg-gray-100 p-2 rounded-[7px]">
          <img src="/icon/crumb.png" className="w-17 h-17" alt="icon" />
          <div>
            <div className="text-[17px] font-semibold">누적 부스러기</div>
            <div className="text-[15px] font-medium text-gray-600">
              519,210,248 자
            </div>
          </div>
        </div>
      </div>

      {/* 요일 + 월 레이블 */}
      <div className="flex">
        <div className="flex flex-col justify-between mr-1 text-[10px] text-gray-400 h-full">
          <span>M</span>
          <span>W</span>
          <span>F</span>
        </div>
        <div className="overflow-x-auto flex">
          <div className="flex flex-col">
            <div className="flex justify-between text-[10px] text-gray-400 mb-1 pl-1">
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((m, i) => (
                <span key={i} className="w-[52px]">
                  {m}
                </span>
              ))}
            </div>
            <div className="flex">
              {weeks.map((week, i) => (
                <div key={i} className="flex flex-col gap-[2px] mr-[2px]">
                  {week.map((day, j) => (
                    <div
                      key={j}
                      className={`w-[12px] h-[12px] rounded-sm ${getHeatColor(
                        day.count
                      )}`}
                      title={`${day.date}: ${day.count} 자`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 활동량에 따라 색상 설정
function getHeatColor(count: number): string {
  if (count === 0) return "bg-gray-100";
  if (count < 5) return "bg-amber-100";
  if (count < 15) return "bg-amber-300";
  if (count < 30) return "bg-amber-500";
  return "bg-amber-700";
}

// 연도 내 주차 단위로 데이터를 그룹화
function getWeeksInYear(
  start: Date,
  end: Date,
  data: ActivityDay[]
): ActivityDay[][] {
  const dayMap = new Map<string, number>();
  data.forEach((d) => dayMap.set(d.date, d.count));

  const weeks: ActivityDay[][] = [];
  const current = new Date(start);

  // GitHub 스타일: 주 시작일을 일요일로 맞춤
  const dayOfWeek = current.getDay();
  current.setDate(current.getDate() - dayOfWeek);

  while (current <= end) {
    const week: ActivityDay[] = [];

    for (let i = 0; i < 7; i++) {
      const dateStr = current.toISOString().split("T")[0];
      week.push({
        date: dateStr,
        count: dayMap.get(dateStr) || 0,
      });
      current.setDate(current.getDate() + 1);
    }

    weeks.push(week);
  }

  return weeks;
}
