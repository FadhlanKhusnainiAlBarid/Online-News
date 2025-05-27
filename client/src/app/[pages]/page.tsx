"use client";
import { useEffect } from "react";
import { HR } from "flowbite-react";
import { useAppSelector, useAppDispatch, useAppStore } from "@/lib/hooks";
import { fetchNews } from "@/lib/features/action/newsAction";
import { usePathname } from "next/navigation";

export default function Pages() {
  const dispatch = useAppDispatch();
  const { news } = useAppSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  useEffect(() => {
    console.log(news);
  }, [news]);

  return (
    <div className="container max-w-7xl mx-auto px-5 py-2 space-y-3 md:space-y-4">
      <div>
        <h1 className="text-lg lg:text-2xl font-semibold leading-4 text-black">
          Your briefing
        </h1>
        <span className="text-xs lg:text-sm text-gray-500">
          Tuesday, 27 May
        </span>
      </div>
      <div>
        <div className="p-2 bg-white rounded-lg">
          <div className="cursor-pointer group space-y-px">
            <p className="text-xs line-clamp-1 text-gray-600">
              China’s Soft Spot in Trade War With Trump: Risk of Huge Job Loss
            </p>
            <div className="flex justify-between gap-2">
              <h2 className="group-hover:underline group-hover:underline-offset-1 text-base lg:text-lg text-black leading-6">
                A chronic housing slowdown and high youth unemployment rate have
                made China more vulnerable than it was in President Trump’s
                first term.
              </h2>
              <img
                className="w-24 h-24 rounded-lg"
                src="https://static01.nyt.com/images/2025/05/27/multimedia/27Biz-China-Jobs-video-cover-vbmk/27Biz-China-Jobs-video-cover-vbmk-thumbLarge.jpg"
                alt=""
              />
            </div>
            <span className="text-xs text-gray-600">12 min ago</span>
            <HR className="mt-2.5 mb-2 py-px rounded dark:bg-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
