import { useState } from "react";

export const Calendar = ({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (month: string) => void;
}) => {
  const [year, setYear] = useState(2025);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div>
      {/* 연도 변경 */}
      <div className="flex justify-between items-center text-sm font-medium mb-2">
        <button onClick={() => setYear(year - 1)}>&lt;</button>
        <span>{year}년</span>
        <button onClick={() => setYear(year + 1)}>&gt;</button>
      </div>

      {/* 월 리스트 */}
      <div className="grid grid-cols-4 gap-2 text-sm">
        {months.map((m) => {
          const monthStr = `${year}.${String(m).padStart(2, "0")}`;
          const isSelected = selected === monthStr;
          return (
            <button
              key={monthStr}
              onClick={() => onSelect(monthStr)}
              className={`rounded-md px-3 py-2 ${
                isSelected
                  ? "bg-[#f2ede7] text-[#3e2e20] font-bold border"
                  : "hover:bg-gray-100"
              }`}
            >
              {m}
            </button>
          );
        })}
      </div>
    </div>
  );
};
