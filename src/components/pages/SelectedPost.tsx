"use client";

import { useEffect, useState } from "react";

type CategoryType = {
  _id: string;
  name: string;
  postIds: string[];
};

export default function TagBar() {
  const [category, setCategory] = useState("All");
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/api/category`,
          {
            cache: "no-store",
          }
        );
        const data: CategoryType[] = await res.json();
        setCategoryList(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <aside className="w-[100%] xl:w-[300px] sticky top-[100px] h-fit xl:p-[20px] xl:border-l xl:border-[#e3e3e3] flex-col gap-[5px] dark:xl:border-[#1D1D1D]">
      {/** xl 사이즈가 아닐 때 */}
      <div className="flex flex-wrap overflow-x-auto xl:hidden">
        {categoryList.map((cat) => (
          <div
            key={cat._id}
            className={`text-[16px] cursor-pointer m-1  border  border-gray-300 rounded-[10px] p-2 ${
              category === cat.name
                ? "font-bold text-[#00DF9C] dark:text-[#00DF9C]"
                : "dark:text-[#ffffff]"
            }`}
            onClick={() => setCategory(cat.name)}
          >
            {cat.name === "All" ? "전체" : cat.name} {`(${cat.postIds.length})`}
          </div>
        ))}
      </div>

      {/** xl 사이즈일 때  */}
      <div className="hidden xl:flex flex-col gap-[5px]">
        {categoryList.map((cat) => (
          <div
            key={cat._id}
            className={`text-[16px] cursor-pointer ${
              category === cat.name
                ? "font-bold text-[#00DF9C] dark:text-[#00DF9C]"
                : "dark:text-[#ffffff]"
            }`}
            onClick={() => setCategory(cat.name)}
          >
            {cat.name === "All" ? "전체" : cat.name} {`(${cat.postIds.length})`}
          </div>
        ))}
      </div>
    </aside>
  );
}
